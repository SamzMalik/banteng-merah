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

      <NavbarBrand className="">
        <Link href='/'>
          Banteng
        </Link>
      </NavbarBrand>

      <NavbarContent className="sm:hidden" justify="end">
        <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {menuItems.map(item => <NavbarItem key={item}><Link href={`/${item.toLowerCase()}`}>{item}</Link></NavbarItem>)}
      </NavbarContent>

      {/* Sign up or Login */}



      {/* Navbar Menu */}
      <NavbarMenu className="bg-primary-white justify-center items-center font-bold">
        <NavbarMenuItem onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <Link className='text-2xl' href='/'>Home</Link>
        </NavbarMenuItem>
        <NavbarMenuItem onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <Link className='text-2xl' href='/about'>About</Link>
        </NavbarMenuItem>
        <NavbarMenuItem onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <Link className='text-2xl' href='/services'>Services</Link>
        </NavbarMenuItem>
        <NavbarMenuItem onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <Link className='text-2xl' href='/portofolio'>Portofolio</Link>
        </NavbarMenuItem>
        <NavbarMenuItem onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <Link className='text-2xl' href='/teams'>Teams</Link>
        </NavbarMenuItem>
        <NavbarMenuItem onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <Link className='text-2xl' href='/contact'>Contact</Link>
        </NavbarMenuItem>
      </NavbarMenu>


    </Navbar >
  )
}

export default NavigationBar