import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import Image from "../../node_modules/next/image";
import Link from "../../node_modules/next/link";

export default async function MenuBar() {
  const session = await getServerSession(authOptions);

  return (
    <div className="flex flex-row justify-end items-center w-full h-16 border-4 border-gray-800 ">
      {!session?.user ? (
        <Link
          href="/api/auth/signin"
          className="flex flex-grow h-full opacity-25 hover:opacity-75 transition-all bg-emerald-500 place-items-center justify-center"
        >
          <h3 className="m-0 text-center font-bold text-2xl">Sign in</h3>
        </Link>
      ) : (
        <Link
          href="/api/auth/signout"
          className="flex-grow h-full opacity-25 hover:opacity-75 transition-all bg-slate-400"
        >
          <h3 className="m-auto text-center">Sign out</h3>
        </Link>
      )}

      <Link
        href="/mybooking"
        className="flex h-full opacity-25 hover:opacity-75 transition-all bg-emerald-500 place-items-center justify-center"
      >
        <h3 className="m-0 text-center font-bold">My Booking</h3>
      </Link>
      <div className="flex-grow"></div>

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
