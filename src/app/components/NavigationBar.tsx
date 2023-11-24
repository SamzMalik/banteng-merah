import React from 'react'
import { Button, Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from "@nextui-org/react";
import Link from "next/link";

const NavigationBar = () => {

  const menuItems = [
    "Services",
    "Portofolio",
    "About",
    "Teams",
    "Contact"
  ]

  return (
    <Navbar isBordered shouldHideOnScroll >
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarContent justify="center">
        <NavbarBrand className="sm:hidden">
          <h1>Logo</h1>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarBrand><h1>Logo</h1></NavbarBrand>
        <NavbarItem><Link href='/'>Home</Link></NavbarItem>
        <NavbarItem><Link href='/'>Home</Link></NavbarItem>
        <NavbarItem><Link href='/'>Home</Link></NavbarItem>
        <NavbarItem><Link href='/'>Home</Link></NavbarItem>
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