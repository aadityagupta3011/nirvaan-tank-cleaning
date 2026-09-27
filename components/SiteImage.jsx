import Image from "next/image";
import manifest from "@/lib/image-manifest.json";

// next/image with the real width/height from `npm run images` (prevents layout shift).
// Lazy-loads by default; pass `priority` for above-the-fold images.
export default function SiteImage({ name, alt, ...props }) {
  const img = manifest[name];
  if (!img) throw new Error(`Unknown image "${name}" — add it to scripts/optimize-images.mjs`);
  return <Image src={img.src} width={img.width} height={img.height} alt={alt} {...props} />;
}
