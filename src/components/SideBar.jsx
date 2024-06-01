"use client";
import { BookCheck, BookMinus, ListChecks } from "lucide-react";
import { MdDashboard } from "react-icons/md";
import { PiStudentFill } from "react-icons/pi";
import { FaBook } from "react-icons/fa";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SideBar = () => {
  const pathname = usePathname();
  return (
    <aside className="lg:w-[240px]  relative">
      <ul className="text-black bg-white w-full md:w-[250px] hidden lg:block  left-0  fixed top-24 h-full pt-4  shadow-lg">
        <Link href="/">
          <li
            className={`link ${
              pathname === "/" ? "active" : ""
            } flex gap-4 text-[#7e7e7e] text-xl  px-8 py-5 hover:text-primary duration-300`}
          >
            <MdDashboard size={25}/>
            Dashboard
          </li>
        </Link>
        <Link href="/students">
          <li
            className={`link ${
              pathname === "/students" ? "active" : ""
            } flex items-center gap-4 text-[#7e7e7e] text-xl  px-8 py-5 hover:text-primary duration-300`}
          >
            <PiStudentFill size={25} />
            Students
          </li>
        </Link>
        <Link href="/attendence">
          <li
            className={`link ${
              pathname === "/attendence" ? "active" : ""
            } flex items-center gap-4 text-[#7e7e7e] text-xl  px-8 py-5 hover:text-primary duration-300`}
          >
            <ListChecks size={25}/>
            Attendence
          </li>
        </Link>
        <Link href="/results">
          <li
            className={`link ${
              pathname === "/results" ? "active" : ""
            } flex items-center gap-4 text-[#7e7e7e] text-xl  px-8 py-5 hover:text-primary duration-300`}
          >
          <BookCheck size={25}/>
            Results
          </li>
        </Link>
        <Link href="/subjects">
          <li
            className={`link ${
              pathname === "/subjects" ? "active" : ""
            } flex items-center gap-4 text-[#7e7e7e] text-xl  px-8 py-5 hover:text-primary duration-300`}
          >
            <FaBook size={25}/>
            Subjects
          </li>
        </Link>
      </ul>
    </aside>
  );
};

export default SideBar;
