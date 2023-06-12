import Link from "next/link";
import Image from "next/image";

import CustomButton from "./CustomButton";

const Navbar = () => {
  return (
    <header className="w-full absolute z-10">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
        <Link href={"/"} className="flex justify-center items-center">
          <Image
            src="/logo.png"
            alt="Logo Redragon"
            width={118}
            height={0}
            className="objet-contain"
          />
        </Link>
        <CustomButton
          title="Tienda"
          btnType="button"
          containerStyles="text-primary-red rounded-full bg-white min-w-[130px]"
        />
      </nav>
    </header>
  );
};
("");
export default Navbar;
