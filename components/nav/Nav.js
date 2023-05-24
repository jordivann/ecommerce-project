import Link from 'next/link';
const Nav = () => {
  return (
    <nav className="flex h-12 px-4 justify-between shadow-md">
      <Link href="/" className="text-lg font-bold">
        E-commerce
      </Link>
      <div>
        <Link href="/cart" className="p-2">
          Cart
        </Link>
        <Link href="/login" className="p-2">
          Login
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
