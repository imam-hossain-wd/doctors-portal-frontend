'use client'
import {Navbar,NavbarMenuToggle, NavbarMenu, NavbarMenuItem, NavbarContent, NavbarItem, Button} from "@nextui-org/react";
import Link from "next/link";
import NavUser from "./user/NavUser";

export default function INavbar() {

  const menuItems = [
    { name: "Doctor", link: "/doctor" },
    { name: "Hospital", link: "/hospital" },
    { name: "Blood Bank", link: "/blood-bank" },
    { name: "Contact Us", link: "/contact-us" },
    { name: "About Us", link: "/about-us" },
    { name: "Blog", link: "/blog" },
  ];

  return (
    <Navbar disableAnimation isBordered>
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle />
      </NavbarContent>

      {/* <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <AcmeLogo />
          <p className="font-bold text-inherit">ACME</p>
        </NavbarBrand>
      </NavbarContent> */}

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {/* <NavbarBrand>
          <AcmeLogo />
          <p className="font-bold text-inherit">ACME</p>
        </NavbarBrand> */}
        <NavbarItem>
          <Link color="foreground" href="/doctor">
            Doctors
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="/hospital" aria-current="page" color="warning">
            Hospitals
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/blood-bank">
            Blood Bank
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/contact-us">
            Contact Us
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/about-us">
            About Us
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="/login">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="warning" href="/signup" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
        <NavbarItem>
          <NavUser />
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu className="bg-[#596781] text-white">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={
                index === 2 ? "warning" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              href={item.link}
              // size="lg"
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}

