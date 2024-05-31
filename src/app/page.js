import { Button, buttonVariants } from "@/components/ui/button";
import { Link } from "lucide-react";

export default function Home() {
  return (
    <main className="container">
      <h1>Hello World!!</h1>
      <Button>Button</Button>
      <Button variant="outline">Button</Button>
    </main>
  );
}
