'use client'
import { BookMinus, ListChecks, Users } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SideBar = () => {
  const pathname = usePathname();
  return (
    <aside className="bg-white">
      <ul className="text-black mt-4">
        <Link href="/">
          <li className={`link ${pathname === "/" ? "active" : ""} flex gap-4 text-[#7e7e7e] text-xl  px-8 py-3 hover:text-primary duration-300`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 24 24"
              stroke="currentColor"
              fill="#7e7e7e"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <rect width="7" height="9" x="3" y="3" rx="1" />
              <rect width="7" height="5" x="14" y="3" rx="1" />
              <rect width="7" height="9" x="14" y="12" rx="1" />
              <rect width="7" height="5" x="3" y="16" rx="1" />
            </svg>
            Dashboard
          </li>
        </Link>
        <Link  href="/students">
          <li className={`link ${pathname === "/students" ? "active" : ""} flex gap-4 text-[#7e7e7e] text-xl  px-8 py-3 hover:text-primary duration-300`}>
            <Users />
            Students
          </li>
        </Link>
        <Link href="/attendence">
          <li className={`link ${pathname === "/attendence" ? "active" : ""} flex gap-4 text-[#7e7e7e] text-xl  px-8 py-3 hover:text-primary duration-300`}>
            <ListChecks />
            Attendence
          </li>
        </Link>
        <Link  href="/subjects">
          <li className={`link ${pathname === "/subjects" ? "active" : ""} flex gap-4 text-[#7e7e7e] text-xl  px-8 py-3 hover:text-primary duration-300`}>
            <BookMinus />
            Subjects
          </li>
        </Link>
      </ul>
    </aside>
  );
};

export default SideBar;
