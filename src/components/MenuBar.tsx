import Image from "../../node_modules/next/image";
import Link from "../../node_modules/next/link";

export default function MenuBar() {
  return (
    <div className="flex flex-row justify-end items-center w-full h-16 border-4 border-gray-800 ">
      <Link
        href="/booking"
        className="bg-gray-500 h-full w-32 opacity-25 hover:opacity-75 transition-all"
      >
        <Image
          src="/icons/booking.png"
          alt="booking"
          width={64}
          height={64}
          className="object-cover m-auto"
        />
      </Link>

      <Link
        href="/"
        className="bg-teal-500 h-full w-32 overflow-hidden opacity-25 hover:opacity-75 transition-all"
      >
        <Image
          src="/logo.png"
          alt="logo"
          width={64}
          height={64}
          className="object-cover object-top m-auto -scale-x-100"
        />
      </Link>
    </div>
  );
}
