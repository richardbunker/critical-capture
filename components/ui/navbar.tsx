import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-2 bg-white shadow-sm fixed top-0 left-0 w-full h-10">
      <section>
        <Link href={"/"} title="Home" className="font-brand text-purple-600 text-lg">
          CC
        </Link>
      </section>
      <section className="flex items-center justify-between space-x-4">
        <Link href={"/login"} title="Login" className="font-sans text-sm text-gray-400">
          Login
        </Link>
        <Link href={"/join"} title="Join" className="font-sans text-sm text-purple-400">
          Join
        </Link>
      </section>
    </nav>
  );
}
