import React from 'react';

export default function ServiceCard({title, items}:{title:string; items:string[]}){
  return (
    <article className="bg-white rounded-lg p-6 shadow-sm border">
      <h3 className="text-lg font-semibold text-[var(--taksha-orange)]">{title}</h3>
      <ul className="mt-3 space-y-2 text-sm text-gray-700">
        {items.map((it, idx)=>(<li key={idx}>• {it}</li>))}
      </ul>
    </article>
  );
}
