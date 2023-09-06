import Image from "next/image";
import Link from "next/link";
import Socials from "../components/Socials"

const Header = () => {
  return (
    <header className="absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px]">
      <div className='container mx-auto'>
        <div className="flex flex-col md:flex-row justify-between items-center gap-y-6 py-8 -top-5">
          {/* Logo */}
          <Link
            href={'/'}>
            <Image src={'/logo.svg'} width={180} height={18} alt="" priority={true} />
          </Link>

          {/* Socials */}
          <Socials />
        </div>
      </div>
    </header>
  )
};

export default Header;
