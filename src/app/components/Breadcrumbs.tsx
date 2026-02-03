"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface BreadcrumbItem {
  label: string;
  href: string;
}

const routeLabels: Record<string, string> = {
  about: "About",
  careers: "Careers",
  contact: "Contact",
  privacy: "Privacy Policy",
  terms: "Terms of Service",
};

export default function Breadcrumbs() {
  const pathname = usePathname();
  
  // Don't show breadcrumbs on home page
  if (pathname === "/") return null;

  const segments = pathname.split("/").filter(Boolean);
  
  const breadcrumbs: BreadcrumbItem[] = [
    { label: "Home", href: "/" },
    ...segments.map((segment, index) => ({
      label: routeLabels[segment] || segment.charAt(0).toUpperCase() + segment.slice(1),
      href: "/" + segments.slice(0, index + 1).join("/"),
    })),
  ];

  return (
    <nav 
      aria-label="Breadcrumb" 
      className="px-4 sm:px-6 lg:px-12 pt-24 pb-4"
    >
      <ol 
        className="flex items-center gap-2 text-sm max-w-7xl mx-auto"
        itemScope 
        itemType="https://schema.org/BreadcrumbList"
      >
        {breadcrumbs.map((crumb, index) => (
          <li 
            key={crumb.href}
            className="flex items-center gap-2"
            itemProp="itemListElement"
            itemScope
            itemType="https://schema.org/ListItem"
          >
            {index > 0 && (
              <span className="opacity-40" aria-hidden="true">/</span>
            )}
            {index === breadcrumbs.length - 1 ? (
              <span 
                className="opacity-70" 
                itemProp="name"
                aria-current="page"
              >
                {crumb.label}
              </span>
            ) : (
              <Link
                href={crumb.href}
                className="opacity-60 hover:opacity-100 hover:text-safety-orange transition-colors"
                itemProp="item"
              >
                <span itemProp="name">{crumb.label}</span>
              </Link>
            )}
            <meta itemProp="position" content={String(index + 1)} />
          </li>
        ))}
      </ol>
    </nav>
  );
}
