export type BreadcrumbItem = {
  label: string;
  href: string;
};
export function generateBreadcrumbs(pathName: string): BreadcrumbItem[] {
    // split url path into individual text
  const segments = pathName.split("/").filter(Boolean);

  const breadcrumbs: BreadcrumbItem[] = [{ label: "Home", href: "/" }];

  let currentPath = "";
    
  // build the path
  for (let i = 0; i < segments.length; i++) {
    currentPath += `/${segments[i]}`;
    const segment = formatSegmentLabel(segments[i]);

    breadcrumbs.push({
      label: segment,
      href: currentPath,
    });
    console.log(breadcrumbs);
  }
  return breadcrumbs;
}

function formatSegmentLabel(segment: string): string {
  return segment
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
