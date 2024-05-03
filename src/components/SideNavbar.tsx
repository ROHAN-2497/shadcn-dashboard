"use client";
import React, { useState } from "react";
import { Nav } from "./ui/nav";
import {
  LayoutDashboard,
  User,
  ShoppingCart,
  Settings,
  Users,
  ChevronRight,
} from "lucide-react";
import { Button } from "./ui/button";

const SideNavbar = () => {
  const [isCollapsed, setIscollapsed] = useState(false);
  const toggolebar = () => {
    setIscollapsed(!isCollapsed);
  };
  return (
    <div className="relative min-w-[80px] border-r px-3 pb-10 pt-24">
      <div className="absolute right-[-20px] top-7">
        <Button
          onClick={toggolebar}
          className="rounded-full p-2"
          variant="secondary"
        >
          <ChevronRight />
        </Button>
      </div>
      <Nav
        isCollapsed={isCollapsed}
        links={[
          {
            title: "Dashboard",
            href: "/",
            icon: LayoutDashboard,
            variant: "default",
          },
          {
            title: "Users",
            icon: Users,
            variant: "ghost",
            href: "/users",
          },
          {
            title: "Orders",
            icon: ShoppingCart,
            variant: "ghost",
            href: "/orders",
          },
          {
            title: "Settings",
            icon: Settings,
            variant: "ghost",
            href: "/settings",
          },
        ]}
      />{" "}
    </div>
  );
};

export default SideNavbar;
