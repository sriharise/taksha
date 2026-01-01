import './globals.css';
import React from 'react';
import type {Metadata} from 'next';

export const metadata: Metadata = {
  title: 'Taksha Engineering Pte Ltd',
  description: 'Reliable Civil & Engineering Works You Can Trust — Repairs, Waterproofing, Façade, Rope Access and Safety-Certified Construction in Singapore.',
  authors: [{name: 'Taksha Engineering Pte Ltd'}],
};

export default function RootLayout({children}:{children:React.ReactNode}){
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
