import Header from "@/components/Header";
import SideBar from "@/components/SideBar";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Student Management",
  description: "A Website for maintaining information about students.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <div className="lg:flex gap-10">
          <SideBar />
          <main className="flex-1 mt-4 p-4 md:p-8">
          {children}
          </main>
        </div>
      </body>
    </html>
  );
}
