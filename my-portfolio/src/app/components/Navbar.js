import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-center gap-8 py-6 bg-white shadow-md">
      <Link
        href="/"
        className="text-gray-700 hover:text-blue-600 transition duration-200 font-medium"
      >
        Home
      </Link>
      <Link
        href="/about"
        className="text-gray-700 hover:text-blue-600 hover:underline transition duration-200"
      >
        About
      </Link>
      <Link
        href="/projects"
        className="text-gray-700 hover:text-blue-600 hover:underline transition duration-200"
      >
        Projects
      </Link>
      <Link
        href="/contact"
        className="text-gray-700 hover:text-blue-600 transition duration-200 font-medium"
      >
        Contact
      </Link>
    </nav>
  );
}
