'use client'

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
  Megaphone,
} from "lucide-react"
import Link from "next/link"
import { useAuth, useUser } from "@/firebase"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { signOut } from "firebase/auth"

const adminNavItems = [
  { href: "/admin", icon: <LayoutDashboard />, label: "Dashboard" },
  { href: "/admin/services", icon: <Briefcase />, label: "Services" },
  { href: "/admin/projects", icon: <FolderKanban />, label: "Projects" },
  { href: "/admin/academy", icon: <BookOpen />, label: "Academy" },
  { href: "/admin/announcements", icon: <Megaphone />, label: "Announcements" },
  { href: "/admin/testimonials", icon: <MessageSquare />, label: "Testimonials" },
  { href: "/admin/team", icon: <Users />, label: "Team" },
  { href: "/admin/faq", icon: <HelpCircle />, label: "FAQ" },
]

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { user, isUserLoading } = useUser();
  const auth = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isUserLoading && !user) {
      router.push('/login');
    }
  }, [user, isUserLoading, router]);

  const handleLogout = () => {
    signOut(auth);
    router.push('/login');
  };

  if (isUserLoading || !user) {
     return (
      <div className="flex items-center justify-center h-screen">
        <p>Loading...</p>
      </div>
    );
  }

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
                <SidebarMenuButton onClick={handleLogout}>
                    <LogOut />
                    <span>Logout</span>
                </SidebarMenuButton>
             </SidebarMenuItem>
              <SidebarMenuItem>
                 <SidebarMenuButton>
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={user?.photoURL || "https://picsum.photos/seed/admin/100/100"} />
                      <AvatarFallback>{user?.email?.[0].toUpperCase()}</AvatarFallback>
                    </Avatar>
                    <span>{user?.email || 'Admin'}</span>
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
