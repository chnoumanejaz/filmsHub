'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

function NavItem({ label, path }) {
  const pathname = usePathname();
  return (
    <Link
      href={path}
      className={`hover:text-blue-600 font-medium transition 
       ${
         pathname && path === pathname
           ? 'text-blue-600 underline underline-offset-4 decoration-blue-600 decoration-2'
           : ''
       }`}>
      {label}
    </Link>
  );
}

export default NavItem;
