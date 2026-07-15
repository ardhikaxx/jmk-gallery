import Link from "next/link";

interface Props {
  items: { label: string; href?: string }[];
}

export default function Breadcrumbs({ items }: Props) {
  return (
    <nav aria-label="Breadcrumb" className="mb-8">
      <ol className="flex items-center gap-2 text-xs text-on-surface-variant">
        <li>
          <Link href="/" className="hover:text-primary transition-colors">
            <span className="material-symbols-outlined text-sm align-middle">home</span>
          </Link>
        </li>
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-2">
            <span className="material-symbols-outlined text-xs text-slate-300">chevron_right</span>
            {item.href ? (
              <Link href={item.href} className="hover:text-primary transition-colors">
                {item.label}
              </Link>
            ) : (
              <span className="text-primary font-medium">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
