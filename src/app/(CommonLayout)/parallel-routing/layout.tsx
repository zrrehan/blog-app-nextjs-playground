import { Navbar } from "@/components/layout/navbar"
import Link from "next/link"

export default function DashboardLayout({
  children,
  marketingSlot, 
  developmentSlot
}: {
  children: React.ReactNode;
  marketingSlot: React.ReactNode;
  developmentSlot: React.ReactNode
}) {
  return (
    <div>
        <nav className="space-x-10 w-fit mx-auto border p-4 rounded-2xl">
            <Link href="/parallel-routing/development">Development</Link>
            <Link href="/parallel-routing/testing">Testing</Link>
            <Link href="/parallel-routing/marketing">Marketing</Link>
        </nav>
        
        {marketingSlot}
        {developmentSlot}
        {children}

    </div>
  )
}