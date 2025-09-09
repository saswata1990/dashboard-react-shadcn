import React from 'react'
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarSeparator } from './components/ui/sidebar'
import { Calendar, Home, Inbox, Search, Settings } from 'lucide-react'

function AppSidebar() {

    const items = [
  {
    title: "Home",
    url: "#",
    icon: Home,
  },
  {
    title: "Inbox",
    url: "#",
    icon: Inbox,
  },
  {
    title: "Calendar",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Search",
    url: "#",
    icon: Search,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
]



  return (
    <Sidebar collapsible='icon'>
        <SidebarHeader>ABC</SidebarHeader>
        <SidebarContent>
            <SidebarGroup>
                <SidebarGroupLabel>Application</SidebarGroupLabel>
                <SidebarGroupContent>
                    <SidebarMenu>
                        {
                            items.map((data)=>(
                                <SidebarMenuItem key={data.title}>
                                    <SidebarMenuButton asChild>
                                        <a href={data.url}>
                                            <data.icon />
                                            <span>{data.title}</span>
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                        ))}
                    </SidebarMenu>
                </SidebarGroupContent>
            </SidebarGroup>
            <SidebarSeparator />
            <SidebarGroup></SidebarGroup>
        </SidebarContent>
        <SidebarFooter></SidebarFooter>
    </Sidebar>
  )
}

export default AppSidebar