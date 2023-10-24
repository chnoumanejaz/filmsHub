import Logo from './Logo';
import NavItem from './NavItem';
import ThemeButton from './ThemeButton';

const navItems = [
  {
    id: 1,
    label: 'Home',
    path: '/',
  },
  {
    id: 2,
    label: 'Series',
    path: '/series',
  },
  {
    id: 3,
    label: 'Movies',
    path: '/movies',
  },
  { id: 4, label: 'About', path: '/about' },
];

function Header() {
  return (
    <header className="bg-blue-50 border-b dark:border-gray-800 dark:bg-gray-900 dark:text-blue-100 py-4 px-12 flex text-lg justify-between text-gray-800 transition">
      <nav className="space-x-8 ">
        {navItems.map(item => (
          <NavItem
            key={item.id + item.label}
            label={item.label}
            path={item.path}
          />
        ))}
      </nav>
      <div className="flex items-center gap-6">
        <ThemeButton />
        <Logo />
      </div>
    </header>
  );
}

export default Header;
