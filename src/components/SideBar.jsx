"use client";
import { ActiveContext } from "@/context/ActiveProvider";
import { BookCheck, ListChecks } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext } from "react";
import { FaBook } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { PiStudentFill } from "react-icons/pi";

const SideBar = () => {
  const pathname = usePathname();
  const { isActive } = useContext(ActiveContext);
  return (
    <aside className="lg:w-[240px]  relative">
      <ul
        className={`text-black bg-white w-full md:w-[250px]  left-0  fixed top-24 h-full pt-4  shadow-lg lg:translate-x-0 ${
          isActive
            ? "translate-x-0 duration-300"
            : "translate-x-[-100%] duration-300"
        }`}
      >
        <Link href="/">
          <li
            className={`link ${
              pathname === "/" ? "active" : ""
            } flex gap-4 text-[#7e7e7e] text-xl  px-8 py-5 hover:text-primary duration-300`}
          >
            <MdDashboard size={25} />
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
            <ListChecks size={25} />
            Attendence
          </li>
        </Link>
        <Link href="/results">
          <li
            className={`link ${
              pathname === "/results" ? "active" : ""
            } flex items-center gap-4 text-[#7e7e7e] text-xl  px-8 py-5 hover:text-primary duration-300`}
          >
            <BookCheck size={25} />
            Results
          </li>
        </Link>
        <Link href="/subjects">
          <li
            className={`link ${
              pathname === "/subjects" ? "active" : ""
            } flex items-center gap-4 text-[#7e7e7e] text-xl  px-8 py-5 hover:text-primary duration-300`}
          >
            <FaBook size={25} />
            Subjects
          </li>
        </Link>
      </ul>
    </aside>
  );
};

export default SideBar;
