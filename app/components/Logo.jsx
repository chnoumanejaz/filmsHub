import Link from 'next/link';
import React from 'react';

function Logo() {
  return (
    <Link href="/">
      <div className="font-bold text-2xl tracking-wide font-mono">
        films
        <span className="text-blue-50 tracking-normal text-2xl bg-blue-500 px-2  py-1 rounded-md">
          Hub
        </span>
      </div>
    </Link>
  );
}

export default Logo;
