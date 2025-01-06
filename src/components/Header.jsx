import { Link, NavLink } from "react-router-dom"
import logoURI from '@/assets/logo.webp'
import Button from "./ui/Button"
import { motion } from 'motion/react'
import { Fade as Hamburger } from 'hamburger-react'
import { useState } from "react"
import { Drawer, DrawerContent, DrawerDescription, DrawerHeader, DrawerTitle, DrawerTrigger } from "./ui/drawer"
import Auth from "./Auth"

const Header = () => {

    const [menuIsOpen, setmenuIsOpen] = useState(false);

    return (
        <>
            <header className="w-full fixed flex justify-center backdrop-blur">
                <div className="w-primary p-5 inline-flex justify-between items-center">
                    <Link to={'/'}>
                        <img width={150} src={logoURI} alt="MockAi" />
                    </Link>
                    <motion.nav 
                        className={`fixed w-full left-0 px-5 top-20 ${menuIsOpen ? 'block' : 'hidden'} xl:!block xl:static xl:w-fit`}>
                        <ul className="flex text-[16px] font-semibold backdrop-blur p-5 rounded-xl border flex-col xl:flex-row xl:backdrop-blur-0 xl:p-0 xl:border-none xl:gap-8">
                            {NavData && NavData.map((li, index) => (
                                <NavLink 
                                to={li?.path}
                                className={({isActive}) => `${isActive && 'text-primary-1 hover:text-primary-1'} py-3 transition-all last:border-0 xl:border-none border-neutral-500/15 border-b hover:text-yellow-500`}
                                key={index}>
                                    {li?.pathName}
                                </NavLink>
                            ))}
                        </ul>
                    </motion.nav>
                    <div className="flex gap-3">
                        <div className="xl:hidden">
                            <Hamburger
                                size={25}
                                onToggle={toggled => {
                                    if (toggled) {
                                        setmenuIsOpen(true)
                                    } else {
                                        setmenuIsOpen(false)
                                    }}
                                }
                            />
                        </div>
                        <div>
                            <Link to={`?authpopup`}>
                                <Button option={1} className={`scale-90 xl:scale-100`}>
                                    Sign Up
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header


const NavData = [
    {pathName: 'Home', path: '/'},
    {pathName: 'About', path: '/about'},
    {pathName: 'Blogs', path: '/blogs'},
    {pathName: 'Contact', path: '/contact'},
]