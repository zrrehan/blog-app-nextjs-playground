import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {                   
  return (
    <div suppressHydrationWarning>
      <div className="flex gap-10">
      <Button asChild>
        <Link href = "/dashboard/analytics/weekly">Weekly</Link>
      </Button>
      <Button asChild>
        <Link href = "/dashboard/analytics/monthly">Monthly</Link>
      </Button>
    </div>
    
    <p>{children}</p>
    </div>
  )
}