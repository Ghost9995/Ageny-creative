import React from 'react'

const NAV_LINKS = [
    {
        title: "Home",
        href: "/home",
    },
    {
        title: "About",
        href: "/about",
    },
    {
        title: "Services",
        href: "/services",
    },
    {
        title: "Projects",
        href: "/projects",
    },
]
function NavbarLinks() {
  return (
    <ul className='flex items-center gap-[50px]'>
    {NAV_LINKS.map((link, index) => (
        <li className='text-lg font-light' key={index}>
            <a href="{link.title}">{link.title}</a>
        </li>
    ))}
    </ul>
  
  )
}

export default NavbarLinks;