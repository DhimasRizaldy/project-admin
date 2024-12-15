"use client";

import {
  ChevronDown,
  Home,
  ShoppingBag,
  HelpCircle,
  Calendar,
  BookOpen,
  type LucideIcon,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import { useState, useEffect } from "react";

interface NavItem {
  title: string;
  url: string;
  icon?: LucideIcon;
  badge?: string;
  isActive?: boolean;
  items?: {
    title: string;
    url: string;
    icon?: LucideIcon;
  }[];
}

const mainNavItems: NavItem[] = [
  {
    title: "Home",
    url: "/dashboard",
    icon: Home,
  },
  {
    title: "Paket Pembelian",
    url: "/paket-pembelian",
    icon: ShoppingBag,
    badge: "2",
  },
  {
    title: "Bantuan",
    url: "/bantuan",
    icon: HelpCircle,
  },
  {
    title: "Event",
    url: "/event",
    icon: Calendar,
    badge: "4",
  },
];

const paketSayaItems: NavItem[] = [
  {
    title: "TRYOUT SKD CPNS 2024 Vol. 13",
    url: "#",
    icon: BookOpen,
    items: [
      {
        title: "Tryout",
        url: "/tryout",
      },
    ],
  },
  {
    title: "REKAMAN KELAS FOKUS TIU CPNS 2024",
    url: "#",
    icon: BookOpen,
    items: [
      {
        title: "Materi",
        url: "/materi",
      },
      {
        title: "Bimbel",
        url: "/bimbel",
      },
      {
        title: "Tryout",
        url: "/tryout-bim",
      },
    ],
  },
];

export function NavMain() {
  const location = useLocation();
  const [activeUrl, setActiveUrl] = useState(location.pathname);

  useEffect(() => {
    setActiveUrl(location.pathname);
  }, [location.pathname]);

  return (
    <>
      <SidebarGroup>
        <SidebarGroupLabel className="px-3 text-gray-500 mb-2">
          Home
        </SidebarGroupLabel>
        <SidebarMenu className="space-y-2">
          {mainNavItems.map((item) => (
            <SidebarMenuItem key={item.title} className="max-w-full">
              <Link to={item.url} onClick={() => setActiveUrl(item.url)}>
                <SidebarMenuButton
                  className={`w-full py-6 px-6 ${
                    activeUrl === item.url
                      ? "bg-blue-600 text-white hover:bg-blue-700"
                      : "hover:bg-blue-50"
                  }`}>
                  {/* Ikon dengan margin kanan lebih besar */}
                  {item.icon && <item.icon className="mr-4 h-4 w-4" />}

                  {/* Teks tetap dengan ukuran asli */}
                  <span>{item.title}</span>

                  {/* Badge tetap dengan ukuran yang sama */}
                  {item.badge && (
                    <span className="ml-auto rounded-full bg-blue-500 px-3 py-1 text-xs text-white">
                      {item.badge}
                    </span>
                  )}
                </SidebarMenuButton>
              </Link>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroup>

      <SidebarGroup>
        <SidebarGroupLabel className="px-3 text-gray-500 mb-2">
          Paket Saya
        </SidebarGroupLabel>
        <SidebarMenu className="space-y-10">
          {paketSayaItems.map((item) => (
            <Collapsible key={item.title} asChild className="group/collapsible">
              <SidebarMenuItem>
                <CollapsibleTrigger asChild>
                  <SidebarMenuButton
                    className={`w-full py-6 px-6 ${
                      // Mengurangi padding vertical
                      activeUrl === item.url
                        ? "bg-blue-600 text-white hover:bg-blue-700"
                        : "hover:bg-blue-50"
                    }`}>
                    {item.icon && <item.icon className="mr-3 h-4 w-4" />}
                    <span className="text-xs">{item.title}</span>{" "}
                    {/* Menambahkan text-xs untuk ukuran kecil */}
                    <ChevronDown className="ml-auto h-4 w-4 transition-transform duration-200 group-data-[state=open]/collapsible:rotate-180" />
                  </SidebarMenuButton>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <SidebarMenuSub>
                    {item.items?.map((subItem) => (
                      <SidebarMenuSubItem key={subItem.title}>
                        <Link
                          to={subItem.url}
                          onClick={() => setActiveUrl(subItem.url)}>
                          <SidebarMenuSubButton
                            className={`w-full py-4 px-6 hover:bg-blue-50 ${
                              activeUrl === subItem.url
                                ? "bg-blue-600 text-white"
                                : ""
                            }`}>
                            {subItem.icon && (
                              <subItem.icon className="mr-2 h-4 w-4" />
                            )}
                            <span className="text-xs">{subItem.title}</span>
                            {/* Menambahkan text-xs untuk subItem */}
                          </SidebarMenuSubButton>
                        </Link>
                      </SidebarMenuSubItem>
                    ))}
                  </SidebarMenuSub>
                </CollapsibleContent>
              </SidebarMenuItem>
            </Collapsible>
          ))}
        </SidebarMenu>
      </SidebarGroup>
    </>
  );
}
