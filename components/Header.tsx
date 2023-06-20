import Link from 'next/link';

const Header: React.FC = () => {
  return (
<header className="bg-[#212121]  py-6">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <Link href="/">
            <div className='w-[50%] ml-4'>
            <img src='/1.png' className='h-full w-full' />
            </div>
          </Link>
        </div>
        <nav className='font-mono'>
          <ul className="flex space-x-4 mr-8">
            <li>
              <Link href="/hot">
                <h1 className="text-white font-mono hover:text-[#14FFEC]">Hot/Trending</h1>
              </Link>
            </li>
            <li>
              <Link href="/categories">
                <h1 className="text-white hover:text-[#14FFEC]">Categories</h1>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <h1 className="text-white hover:text-[#14FFEC]">About</h1>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
