'use client'
import React from 'react'
import { Button, Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, menuItem } from "@nextui-org/react";
import Link from "next/link";

const NavigationBar = () => {

  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  const menuItems = [
    "About",
    "Services",
    "Portofolio",
    "Teams",
    "Contact"
  ]

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} isMenuOpen={isMenuOpen} isBordered shouldHideOnScroll className='shadow-lg z-50'>
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
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
      <NavbarMenu className="bg-primary-white">
        <NavbarMenuItem onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <Link href='/about'>About</Link>
        </NavbarMenuItem>
        <NavbarMenuItem onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <Link href='/services'>Services</Link>
        </NavbarMenuItem>
        <NavbarMenuItem onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <Link href='/portofolio'>Portofolio</Link>
        </NavbarMenuItem>
        <NavbarMenuItem onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <Link href='/teams'>Teams</Link>
        </NavbarMenuItem>
        <NavbarMenuItem onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <Link href='/contact'>Contact</Link>
        </NavbarMenuItem>
      </NavbarMenu>


    </Navbar >
  )
}

export default NavigationBar