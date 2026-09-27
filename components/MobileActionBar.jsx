import Link from "next/link";
import { CalendarCheck, Phone } from "lucide-react";
import { SITE } from "@/lib/site";

// Sticky Call / Book bar on phones — most local-service leads come from mobile.
export default function MobileActionBar() {
  return (
    <>
      <div className="h-20 md:hidden" aria-hidden="true" />
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-ink/10 bg-paper/95 px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 backdrop-blur md:hidden">
        <div className="grid grid-cols-2 gap-3">
          <a
            href={`tel:${SITE.phone}`}
            className="secondary-button px-4 py-3 text-sm"
          >
            <Phone size={16} /> Call now
          </a>
          <Link
            href="/contact"
            className="accent-button px-4 py-3 text-sm"
          >
            <CalendarCheck size={16} /> Book service
          </Link>
        </div>
      </div>
    </>
  );
}
