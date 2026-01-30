import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      {/* <div 
      className="p-2 w-20 bg-amber-500 flex items-center justify-center"> */}
      <Image
        src="/elberry star logo.png"
        width={60}
        height={60}
        alt={"Elberry star"}
      />
      {/* </div> */}
    </Link>
  );
};

export default Logo;
