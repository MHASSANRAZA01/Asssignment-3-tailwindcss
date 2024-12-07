
import Link from 'next/link';
import Image from 'next/image';
import about from '../About/page';
import contact from '../contact-us/page';
import portfolio from '../portfolio/page'
// import Photo from "../public/Photo.png"

const Header = () => {
  return (
    <header className="flex justify-between items-center px-6 py-4 max-w-full max-h-90		 bg-red-600 text-white">
      <div className="text-xl no-underline text-white hover:text-black">
        <Link href="/">My Website</Link>
      </div>
      <nav>
        <ul className="list-none flex gap-8">
          <li>
            <Link href="/" className='no-underline text-white text-lg hover:text-black'>Home</Link>
          </li>
          <li>
            <Link href="/portfolio" className='no-underline text-white text-lg hover:text-black'>Portfolio</Link>
          </li>
          <li>
            <Link href="/About" className='no-underline text-white text-lg hover:text-black'>About</Link>
          </li>
          <li>
            <Link href="/contact-us" className='no-underline text-white text-lg hover:text-black'>Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;