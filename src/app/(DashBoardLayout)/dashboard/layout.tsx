
import { AppSidebar } from "@/components/layout/app-sidebar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { ReactNode } from "react"

export default function DashboardLayout({children, user, admin}: 
  {
    children: ReactNode,
    user: ReactNode, 
    admin: ReactNode

  }) {
  
  const userInfo = {
    role: "User"
  }
  return (
    <SidebarProvider>
      <AppSidebar userInfo={userInfo}/>
      <SidebarInset>
        <div className="flex flex-1 flex-col gap-4 p-4">
          {children}
          
          {
            userInfo.role === "Admin" ? admin : user
          }
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
