import { Button } from "@/components/ui/button";
import { FaUserPlus } from "react-icons/fa6";

export default function Home() {
  return (
    <section className="h-[100vh]">
      <div className="flex justify-between">
        <div>
          <h1 className="text-3xl font-semibold">Dashboard</h1>
          <p className="text-sm">Student Management</p>
        </div>
        <Button size='rounded'>
          <FaUserPlus className="mr-2" size={20}/>
          New Admission
          </Button>
      </div>
    </section>
  );
}
