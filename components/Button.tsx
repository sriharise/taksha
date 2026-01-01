import React from 'react';

export default function Button({children, className='', ...props}:{children:React.ReactNode; className?:string}){
  return (
    <button {...props} className={`inline-flex items-center gap-2 px-4 py-2 rounded-md text-white bg-[var(--taksha-blue)] hover:bg-[#073152] ${className}`}>
      {children}
    </button>
  );
}
