import React from 'react';
import Link from 'next/link';
import { SERVICES } from '../config/siteConfig';

function findSlugForItem(item: string) {
  const lower = item.toLowerCase();
  // Try exact label match
  const byLabel = SERVICES.find(s => s.label.toLowerCase() === lower);
  if (byLabel) return byLabel.slug;

  // Try contains label
  const byContains = SERVICES.find(s => lower.includes(s.label.toLowerCase()) || s.label.toLowerCase().includes(lower));
  if (byContains) return byContains.slug;

  // Try match by slug words
  const bySlug = SERVICES.find(s => lower.includes(s.slug.replace('-', ' ')));
  if (bySlug) return bySlug.slug;

  return null;
}

export default function ServiceCard({title, items}:{title:string; items:string[]}){
  return (
    <article className="bg-white rounded-lg p-6 shadow-sm border">
      <h3 className="text-lg font-semibold text-[var(--taksha-orange)]">{title}</h3>
      <ul className="mt-3 space-y-2 text-sm text-gray-700">
        {items.map((it, idx)=>{
          const slug = findSlugForItem(it);
          const href = slug ? `/services/${slug}` : '/services';
          return (
            <li key={idx}>• <Link href={href} className="text-[var(--taksha-blue)] hover:underline">{it}</Link></li>
          );
        })}
      </ul>
    </article>
  );
}
