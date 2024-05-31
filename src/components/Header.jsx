import { BookOpenText, CircleUserRound } from "lucide-react";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <header className=" border-b bg-white text-black">
      <div className="h-24 flex items-center justify-between gap-2 md:mr-8">
      <div className="flex items-center gap-2 ml-4 md:ml-8">
        <BookOpenText className="text-primary size-12" />
        <div>
          <h1 className="text-2xl font-semibold">Dashboard</h1>
          <p className="text-sm">Student Management</p>
        </div>
      </div>
      <div className="w-1/3 hidden md:block">
        <input
          className="w-full py-2 px-4 border outline-none rounded-md"
          type="text"
          placeholder="Search here..."
        />
      </div>
      <Button variant="login" size="md">
        Login
        <CircleUserRound className="ml-2 size-6" />
      </Button>
      </div>
    </header>
  );
};

export default Header;
