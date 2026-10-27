import Link from "next/link";

export default function Breadcrumb({
  items,
}: {
  items: { label: string; href?: string }[];
}) {
  return (
    <nav aria-label="Breadcrumb" className="bg-smoke px-3 py-6 sm:px-12">
      <ol className="flex flex-wrap text-sm sm:text-lg">
        {items.map((item, i) => (
          <li
            key={item.label}
            className={i < items.length - 1 ? "pr-1.5 after:ml-2.5 after:content-['|']" : ""}
          >
            {item.href ? (
              <Link href={item.href}>{item.label}</Link>
            ) : (
              <span aria-current="page">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
