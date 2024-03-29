import React from 'react'
import { Link } from 'react-router-dom'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import { signOutUser } from '../utils/firebase/FirebaseUtil'
import Cart from './Cart'
import { useSelector } from 'react-redux'

const Navbar = () => {
    const [ham, setHam] = React.useState(false)

    const currentUser = useSelector((state) => state.user.currentUser)

    return (
        <div className=" mx-2 mt-4 flex items-center justify-between lg:mb-8">
            <div id="logo" className=" m-2 p-1">
                <Link to="/" className="text-2xl font-extrabold md:text-3xl">
                    RECW
                </Link>
            </div>

            <div
                id="nav-links"
                className=" m-2 flex items-center justify-between p-1
                text-lg max-[480px]:hidden md:text-xl"
            >
                <Link to="shop" className="ml-8 hover:bg-slate-200 p-1">
                    Shop
                </Link>
                <Link to="about" className="ml-8 hover:bg-slate-200 p-1">
                    About
                </Link>
                {currentUser ? (
                    <Link onClick={signOutUser} className="ml-8 hover:bg-slate-200 p-1">
                        Sign Out
                    </Link>
                ) : (
                    <Link to="sign-in" className="ml-8 hover:bg-slate-200 p-1">
                        Sign In
                    </Link>
                )}
                <Cart />
            </div>
            <div
                className="m-2 flex cursor-pointer items-center 
                rounded-full p-1 hover:bg-slate-100 active:bg-slate-200 min-[481px]:hidden
                "
            >
                <Cart />
                <Bars3Icon
                    className="ml-4 h-8 w-8"
                    onClick={() => setHam(true)}
                />

                {ham && (
                    <div
                        id="ham-menu"
                        className="fixed right-0 top-[0px] z-20 flex h-full w-[45%]
                min-w-[11rem] flex-col bg-white shadow-lg shadow-slate-700"
                    >
                        <XMarkIcon
                            className="mb-12 ml-2 mt-2 h-10 w-10 hover:bg-slate-100 active:bg-slate-200"
                            onClick={() => setHam(false)}
                        />

                        <ul className="flex flex-col items-center text-lg">
                            <li className="mx-8 my-3">
                                <Link onClick={() => setHam(false)} to="shop">
                                    Shop
                                </Link>
                            </li>
                            <li className="mx-8 my-3">
                                <Link
                                    onClick={() => setHam(false)}
                                    to="about"
                                    className=""
                                >
                                    About
                                </Link>
                            </li>
                            {currentUser ? (
                                <li className="mx-8 my-3">
                                    <Link
                                        onClick={() => {
                                            setHam(false)
                                            signOutUser()
                                        }}
                                        to="sign-in"
                                    >
                                        Sign Out
                                    </Link>
                                </li>
                            ) : (
                                <li className="mx-8 my-3">
                                    <Link
                                        onClick={() => setHam(false)}
                                        to="sign-in"
                                    >
                                        Sign In
                                    </Link>
                                </li>
                            )}
                        </ul>
                    </div>
                )}
                {ham && (
                    <div className="fixed left-0 top-0 z-10 h-screen w-screen bg-slate-400 opacity-60"></div>
                )}
            </div>
        </div>
    )
}

export default Navbar
