"use client"
import React from 'react';
import { Nav } from './ui/nav';
import {
   LayoutDashboard,
   User,
   ShoppingCart,
   Settings,
   Users
  } from "lucide-react"

const SideNavbar = () => {
    return (
     <div> <Nav
     isCollapsed={false}
     links={[
       {
           title: "Dashboard",
           href: '/',
           icon: LayoutDashboard,
           variant: "default",
       },
       {
           title: "Users",
           icon: Users,
           variant: "ghost",
           href: '/users'
       },
       {
           title: "Orders",
           icon: ShoppingCart,
           variant: "ghost",
           href: '/orders'
       },
       {
           title: "Settings",
           icon: Settings,
           variant: "ghost",
           href: '/settings'
       },
      
     ]}
   />   </div>)
};


export default SideNavbar;