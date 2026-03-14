"use client";
import { generateBreadcrumbs } from "@/app/_lib/breadcrumb";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Breadcrumb = () => {
  const pathname = usePathname();
  const breadcrumbs = generateBreadcrumbs(pathname);

  return (
    <nav aria-label="Breadcrumb" className="text-sm font-medium text-gray-700">
      <ol className="flex flex-wrap gap-2">
        {breadcrumbs.map((breadcrumb, index) => (
          <li key={breadcrumb.href} className="flex items-center">
            {/* between the text */}
            {index > 0 && (
              <span className="mx-2 text-gray-400 select-none">{"/"}</span>
            )}

            {index === breadcrumbs.length - 1 ? (
              // last item is a span
              <span className="text-gray-900 font-semibold">
                {breadcrumb.label}
              </span>
            ) : (
              <Link
                href={breadcrumb.href}
                className=" hover:underline transition-colors"
              >
                {breadcrumb.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
