'use client'
import React from 'react'
import { Button, Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, menuItem } from "@nextui-org/react";
import Link from "next/link";

const NavigationBar = () => {

  const menuItems = [
    "About",
    "Services",
    "Portofolio",
    "Teams",
    "Contact"
  ]

  return (
    <Navbar isBordered shouldHideOnScroll className='shadow-lg z-50'>
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarContent justify="start">
        <NavbarBrand className="">
          <Link href='/'>Logo</Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {menuItems.map(item => <NavbarItem key={item}><Link href={`/${item.toLowerCase()}`}>{item}</Link></NavbarItem>)}
      </NavbarContent>

      {/* Sign up or Login */}

      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex"><Link href='#'>Login</Link></NavbarItem>
        <NavbarItem className=""><Button as={Link} color="primary" href="#" variant="flat">SignUp</Button></NavbarItem>
      </NavbarContent>

      {/* Navbar Menu */}
      <NavbarMenu className="bg-black">
        <NavbarMenuItem>
          <Link href='/'>About</Link>
        </NavbarMenuItem>
      </NavbarMenu>


    </Navbar >
  )
}

export default NavigationBar