import Link from 'next/link';
const Nav = () => {
  return (
    <nav className="flex h-12 px-4 items-center justify-between shadow-md hover:shadow-lg">
      <Link href="/" className="text-lg font-bold">
        E-commerce
      </Link>
      <div>
        <Link href="/cart">
          <span className="p-2">Cart</span>
        </Link>
        <Link href="/login">
          <span className="p-2">Login</span>
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
