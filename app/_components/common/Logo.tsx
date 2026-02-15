import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  size?: number;
};

const Logo = ({ size = 60 }: LogoProps) => {
  return (
    <Link className="" href="/">
      <Image
        src="/elberry star logo.png"
        width={size}
        height={size}
        alt={"Elberry star"}
      />
    </Link>
  );
};

export default Logo;
