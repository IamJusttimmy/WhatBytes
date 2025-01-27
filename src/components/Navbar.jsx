import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="p-6 shadow hidden md:block lg:block">
      {/* Navigation link */}
      <nav className="flex flex-col space-y-6">
        <Link
          href="/dashboard"
          className="flex items-center font-semibold text-gray-700 hover:text-blue-400 aria-[current=page]:text-blue-900 aria-[current=page]:text-bold"
        >
          <span className="mr-1">
            <Image src="/dashicon.svg" alt="dashboard" width={25} height={25} />
          </span>
          Dashboard
        </Link>

        <Link
          href="/skilltest"
          className="flex items-center font-semibold text-gray-700 hover:text-blue-400 aria-[current=page]:text-blue-900"
        >
          <span className="mr-1">
            <Image
              src="/skillicon.svg"
              alt="skill icon"
              width={25}
              height={25}
            />
          </span>
          Skill Test
        </Link>

        <Link
          href="/internship"
          className="flex items-center font-semibold text-gray-700 hover:text-blue-400 aria-[current=page]:text-blue-900"
        >
          <span className="mr-1">
            <Image src="/fileicon.svg" alt="file" width={25} height={25} />
          </span>
          Internship
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
