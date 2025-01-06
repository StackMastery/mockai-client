import { Link, NavLink } from "react-router-dom"
import logoURI from '@/assets/logo.webp'
import Button from "./ui/Button"
import { motion } from 'motion/react'
import { Fade as Hamburger } from 'hamburger-react'
import { useContext, useState } from "react"
import { AuthContext } from "@/context/Auth.Context"
import { Skeleton } from "./ui/skeleton"
import Avatar from "./ui/Avatar"
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover"
import { CiUser } from "react-icons/ci";
import { BsChevronDoubleUp } from "react-icons/bs";
import { CiLogout } from "react-icons/ci";
import Logout from "@/hooks/Logout"

const Header = () => {

    const [menuIsOpen, setmenuIsOpen] = useState(false);
    const { isLoading, authInfo } = useContext(AuthContext)

    return (
        <>
            <header className="w-full fixed flex justify-center backdrop-blur z-[9999999999999999999999999999]">
                <div className="w-primary p-5 inline-flex justify-between items-center">
                    <Link to={'/'}>
                        <img width={150} src={logoURI} alt="MockAi" />
                    </Link>
                    <motion.nav 
                        className={`fixed w-full left-0 px-5 top-20 ${menuIsOpen ? 'block' : 'hidden'} xl:!block xl:static xl:w-fit`}>
                        <ul className="flex text-[16px] font-semibold backdrop-blur bg-gradient-to-br bg-white p-5 rounded-xl border flex-col xl:flex-row xl:bg-transparent xl:p-0 xl:border-none xl:gap-8">
                            {NavData && NavData.map((li, index) => (
                                <NavLink 
                                to={li?.path}
                                className={({isActive}) => `${isActive && 'text-primary-1 hover:text-primary-1'} py-3 transition-all last:border-0 xl:border-none border-neutral-500/15 border-b hover:text-yellow-500`}
                                key={index}>
                                    {li?.pathName}
                                </NavLink>
                            ))}
                            <div className="sm:hidden">
                            {isLoading ? (
                                <div className="flex items-center gap-5">
                                    <Skeleton className="w-[82px] h-[37px] rounded-xl" />
                                    <Skeleton className="w-[37px] h-[37px] rounded-full" />
                                </div>
                            ): (
                                <>
                                    {authInfo && (
                                        <div className="p-5 border my-5 rounded-lg">
                                            <div className="flex gap-5 items-center">
                                                <Avatar 
                                                    user={authInfo}
                                                    name={authInfo?.displayName}
                                                    avatar={authInfo?.photoURL}
                                                />
                                                <div>
                                                    <h4 className="font-medium">{authInfo?.displayName}</h4>
                                                    <p className="font-thin text-sm">{authInfo?.email}</p>
                                                </div>
                                            </div>
                                            <ul className="space-y-2 pt-5 font-thin">
                                                <span className="w-full h-[1px] bg-neutral-200 flex"></span>
                                                <Link className="flex gap-2 items-center">
                                                    <CiUser size={20}/>
                                                    Dahsboard
                                                </Link>
                                                <span className="w-full h-[1px] bg-neutral-200 flex"></span>
                                                <Link className="flex gap-2 items-center">
                                                    <BsChevronDoubleUp size={20}/>
                                                    Upgrade
                                                </Link>
                                                <span className="w-full h-[1px] bg-neutral-200 flex"></span>
                                                <button onClick={Logout} className="flex gap-2 items-center">
                                                    <CiLogout size={20}/>
                                                    Logout
                                                </button>
                                            </ul>
                                        </div>
                                    )}
                                    <div className="flex gap-5 items-center w-full">                                
                                        <Link 
                                            className="w-full"
                                            to={
                                            authInfo ? (
                                                `/create`
                                            ): (
                                                `?authpopup`
                                            )
                                        }>
                                            <button className={`bg-primary-1 w-full text-white flex justify-center group px-5 h-fit py-2 rounded-xl font-semibold flex items-center  border border-primary-1 ring-offset-2 hover:ring-1 ring-primary-1/80 transition-all`}>
                                                {
                                                    authInfo ? (
                                                        'Create'
                                                    ): (
                                                        'Sign Up'
                                                    )
                                                }
                                            </button>
                                        </Link>
                                    </div>
                                </>
                            )}
                        </div>
                        </ul>
                    </motion.nav>
                    <div className="flex gap-3 xl:w-40 items-center">
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
                        <div className="hidden sm:block">
                            {isLoading ? (
                                <div className="flex items-center gap-5">
                                    <Skeleton className="w-[82px] h-[37px] rounded-xl" />
                                    <Skeleton className="w-[37px] h-[37px] rounded-full" />
                                </div>
                            ): (
                                <div className="flex gap-5 items-center">                                
                                    <Link to={
                                        authInfo ? (
                                            `/create`
                                        ): (
                                            `?authpopup`
                                        )
                                    }>
                                        <Button option={1} className={`scale-90 xl:scale-100`}>
                                            {
                                                authInfo ? (
                                                    'Create'
                                                ): (
                                                    'Sign Up'
                                                )
                                            }
                                        </Button>
                                    </Link>
                                    {authInfo && (
                                        <Popover>
                                            <PopoverTrigger>
                                                <Avatar 
                                                    user={authInfo}
                                                    name={authInfo?.displayName}
                                                    avatar={authInfo?.photoURL}
                                                />
                                            </PopoverTrigger>
                                            <PopoverContent className="w-40 !shadow-none text-[14px] mt-5 mr-5 xl:mr-10 2xl:mr-28 text-neutral-600">
                                                <ul className="space-y-2">
                                                    <Link className="flex gap-2 items-center">
                                                        <CiUser size={20}/>
                                                        Dahsboard
                                                    </Link>
                                                    <span className="w-full h-[1px] bg-neutral-200 flex"></span>
                                                    <Link className="flex gap-2 items-center">
                                                        <BsChevronDoubleUp size={20}/>
                                                        Upgrade
                                                    </Link>
                                                    <span className="w-full h-[1px] bg-neutral-200 flex"></span>
                                                    <button onClick={Logout} className="flex gap-2 items-center">
                                                        <CiLogout size={20}/>
                                                        Logout
                                                    </button>
                                                </ul>
                                            </PopoverContent>
                                        </Popover>
                                    )}
                                </div>
                            )}
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