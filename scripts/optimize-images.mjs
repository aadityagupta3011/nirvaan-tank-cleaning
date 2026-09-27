// Converts the source PNGs in assets-src/images into small, SEO-named WebP files in
// public/images, generates icons + the social share image, and writes a size manifest
// (lib/image-manifest.json) so next/image gets width/height and avoids layout shift.
// Run: npm run images
import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const SRC = "assets-src/images";
const OUT = "public/images";

// source file -> [output name, max width]
const IMAGES = {
  "logo.png": ["logo", 256],
  "homepage.png": ["tank-cleaning-before-after", 1200],
  "girl-drink-bad-water.png": ["unsafe-tank-water", 640],
  "girl-get's-ill.png": ["contaminated-water-illness", 640],
  "mother-call-nirvaan.png": ["booking-tank-cleaning", 640],
  "nirvaan-cleans-tank.png": ["nirvaan-cleaning-water-tank", 640],
  "mechanised-dewatering.png": ["mechanised-dewatering", 480],
  "sludge-removal.png": ["sludge-removal", 480],
  "high-pressure.png": ["high-pressure-jet-cleaning", 480],
  "vaccum-cleaning.png": ["vacuum-cleaning", 480],
  "anti-bacterial-spray.png": ["anti-bacterial-spray", 480],
  "uv-rays-cleaning.png": ["uv-tank-disinfection", 480],
  "homephoto.png": ["nirvaan-team-tank-cleaning", 1200],
  "commercial-tank.png": ["commercial-water-tank-cleaning", 900],
  "apartment-photo.png": ["apartment-society-tank-cleaning", 900],
  "contact-form-photo.png": ["book-tank-cleaning", 1000],
  // story carousel
  "nirvaan-deal-final.png": ["nirvaan-tank-cleaning-deal", 640],
  "mother-thank-nirvaan.png": ["happy-customer-clean-tank", 640],
  "girl-drink-safe-water.png": ["safe-clean-water", 640],
  // hero photo wall
  "right-scroll-image-1.png": ["technician-cleaning-overhead-tank", 600],
  "bgImg.png": ["water-storage-tanks", 600],
  "house-photo.png": ["independent-house-tank-service", 1400],
};

await fs.rm(OUT, { recursive: true, force: true });
await fs.mkdir(OUT, { recursive: true });

const manifest = {};
for (const [file, [name, maxWidth]] of Object.entries(IMAGES)) {
  const input = path.join(SRC, file);
  const { data, info } = await sharp(input)
    .rotate()
    .resize({ width: maxWidth, withoutEnlargement: true })
    .webp({ quality: 74, effort: 6 })
    .toBuffer({ resolveWithObject: true });
  await fs.writeFile(path.join(OUT, `${name}.webp`), data);
  manifest[name] = { src: `/images/${name}.webp`, width: info.width, height: info.height };
  const before = (await fs.stat(input)).size;
  console.log(`${file.padEnd(28)} ${(before / 1024).toFixed(0).padStart(6)} KB -> ${name}.webp ${(data.length / 1024).toFixed(0).padStart(4)} KB`);
}

await fs.writeFile("lib/image-manifest.json", JSON.stringify(manifest, null, 2) + "\n");

// Icons (Next.js picks up app/icon.png and app/apple-icon.png automatically)
const logo = path.join(SRC, "logo.png");
const pad = { fit: "contain", background: { r: 255, g: 255, b: 255, alpha: 1 } };
await sharp(logo).resize(512, 512, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } }).png().toFile("app/icon.png");
await sharp(logo).resize(180, 180, pad).flatten({ background: "#ffffff" }).png().toFile("app/apple-icon.png");
await sharp(logo).resize(192, 192, pad).flatten({ background: "#ffffff" }).png().toFile("public/icon-192.png");
await sharp(logo).resize(512, 512, pad).flatten({ background: "#ffffff" }).png().toFile("public/icon-512.png");

// 1200x630 share image for WhatsApp / Facebook / LinkedIn / X link previews
await sharp(path.join(SRC, "homephoto.png"))
  .resize(1200, 630, { fit: "cover", position: "attention" })
  .jpeg({ quality: 80, mozjpeg: true })
  .toFile("public/og-image.jpg");

console.log("Icons, og-image.jpg and lib/image-manifest.json written.");
