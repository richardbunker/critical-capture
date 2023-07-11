import { Session, getServerSession } from "next-auth";
import Link from "next/link";

export default async function Navbar() {
  const session: Session | null = await getServerSession();
  return (
    <nav className="flex items-center justify-between px-2 bg-white shadow-sm fixed top-0 left-0 w-full h-10 z-50">
      <section>
        <a href={"/"} title="Home" className="font-brand text-purple-600 text-lg">
          CC
        </a>
      </section>
      <section className="flex items-center justify-between space-x-4">
        {session ? (
          <Link
            href={"/api/auth/signout"}
            title="Logout"
            className="font-sans text-sm text-gray-400 flex items-center justify-between space-x-1"
          >
            <span>{session?.user?.name}</span>
            <span>
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
                ></path>
              </svg>
            </span>
          </Link>
        ) : (
          <Link
            href={"/api/auth/signin"}
            title="Login"
            className="font-sans text-sm text-purple-400"
          >
            Login
          </Link>
        )}
      </section>
    </nav>
  );
}
