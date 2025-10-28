import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
  SidebarInset,
  SidebarTrigger
} from "@/components/ui/sidebar"
import Logo from "@/components/Logo"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  LayoutDashboard,
  Settings,
  Briefcase,
  PenSquare,
  Users,
  MessageSquare,
  BookOpen,
  FolderKanban,
  LogOut,
  HelpCircle,
} from "lucide-react"
import Link from "next/link"

const adminNavItems = [
  { href: "/admin", icon: <LayoutDashboard />, label: "Dashboard" },
  { href: "/admin/services", icon: <Briefcase />, label: "Services" },
  { href: "/admin/projects", icon: <FolderKanban />, label: "Projects" },
  { href: "/admin/academy", icon: <BookOpen />, label: "Academy" },
  { href: "/admin/testimonials", icon: <MessageSquare />, label: "Testimonials" },
  { href: "/admin/team", icon: <Users />, label: "Team" },
  { href: "/admin/faq", icon: <HelpCircle />, label: "FAQ" },
]

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader>
          <Logo className="h-8 w-auto" />
        </SidebarHeader>
        <SidebarContent>
          <SidebarMenu>
            {adminNavItems.map(item => (
                <SidebarMenuItem key={item.href}>
                    <Link href={item.href} className="w-full">
                        <SidebarMenuButton>
                            {item.icon}
                            <span>{item.label}</span>
                        </SidebarMenuButton>
                    </Link>
                </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarContent>
        <SidebarFooter>
           <SidebarMenu>
             <SidebarMenuItem>
               <Link href="/login" className="w-full">
                <SidebarMenuButton>
                    <LogOut />
                    <span>Logout</span>
                </SidebarMenuButton>
               </Link>
             </SidebarMenuItem>
              <SidebarMenuItem>
                 <SidebarMenuButton>
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="https://picsum.photos/seed/admin/100/100" />
                      <AvatarFallback>AD</AvatarFallback>
                    </Avatar>
                    <span>Admin User</span>
                </SidebarMenuButton>
             </SidebarMenuItem>
           </SidebarMenu>
        </SidebarFooter>
      </Sidebar>
      <SidebarInset>
        <header className="p-4 border-b flex items-center gap-4 bg-background">
          <SidebarTrigger />
          <h1 className="font-headline text-xl font-bold">Admin Dashboard</h1>
        </header>
        <main className="p-4 md:p-6 bg-background/95">
          {children}
        </main>
      </SidebarInset>
    </SidebarProvider>
  )
}
