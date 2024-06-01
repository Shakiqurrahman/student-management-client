import { BookOpenText, CircleUserRound } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <header className="h-24">
      <div className="border-b bg-white text-black fixed top-0 w-full z-50">
        <div className="h-24 flex items-center justify-between gap-2 px-4 md:px-8 ">
          <Link href="/">
            <div className="flex items-center gap-2">
              <BookOpenText className="text-primary size-12" />
              <div>
                <h1 className="text-2xl font-semibold">Dashboard</h1>
                <p className="text-sm">Student Management</p>
              </div>
            </div>
          </Link>
          <div className="w-1/3 hidden md:block">
            <input
              className="w-full py-2 px-4 border outline-none rounded-md bg-transparent"
              type="text"
              placeholder="Search here..."
            />
          </div>
          <Button variant="login" size="md">
            Login
            <CircleUserRound className="ml-2 size-6" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
