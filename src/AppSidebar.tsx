import { Collapsible, CollapsibleContent, CollapsibleTrigger } from './components/ui/collapsible'
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarSeparator } from './components/ui/sidebar'
import { Calendar, ChevronDown, Copy, Home, Inbox, ListCheck, Search, Settings, Target } from 'lucide-react'

function AppSidebar() {

    const items = [
  {
    title: "Home",
    url: "/",
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

const pdoItems = [
  {
    title: "Coil Details",
    url: "#",
    icon: Target,
  },
  {
    title: "Coil List",
    url: "#",
    icon: ListCheck,
  },
  {
    title: "SSL Sheet List",
    url: "#",
    icon: Copy,
  },
]



  return (
    <Sidebar collapsible='icon' variant="inset">
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
            {/* <SidebarSeparator /> */}
            <Collapsible defaultOpen className="group/collapsible">
              <SidebarGroup>
                <SidebarGroupLabel asChild>
                  <CollapsibleTrigger>
                    Coil Information
                    <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
                  </CollapsibleTrigger>
                </SidebarGroupLabel>
                <CollapsibleContent>
                  <SidebarGroupContent>
                          <SidebarMenu>
                            {
                                pdoItems.map((data)=>(
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
                </CollapsibleContent>
              </SidebarGroup>  
            </Collapsible>
        </SidebarContent>
        <SidebarFooter></SidebarFooter>
    </Sidebar>
  )
}

export default AppSidebar