import Link from "next/link";

export default function Footer() {
  return (
    <nav className="flex flex-col items-center justify-center py-8 bg-white">
      <section>
        <Link href={"/"} className="font-brand text-purple-600 text-sm">
          Critical Captures
        </Link>
      </section>
      <section className="flex items-center justify-between space-x-4 text-xs text-gray-300">
        &copy; {new Date().getFullYear()}
      </section>
    </nav>
  );
}
