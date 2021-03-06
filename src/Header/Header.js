import CloseIcon from '@material-ui/icons/Close';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import SearchIcon from '@material-ui/icons/Search';
import MenuIcon from '@material-ui/icons/Menu';

import { useState, useEffect } from 'react'

const Header = () => {
    const [y, setY] = useState(window.scrollY)
    const [isScrollDown, setIsScrollDown] = useState('')

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    })

    const handleScroll = (e) => {
        const target = e.currentTarget
        if(target.scrollY === 0) {
            setIsScrollDown('')
        }else if(y > target.scrollY) {
            setIsScrollDown('scroll-up')
        }else if(y < target.scrollY) {
            setIsScrollDown('scroll-down')
        }

        setY(window.scrollY)
    }

    return (
        <header className={`fixed top-0 left-0 w-full z-20 ${isScrollDown}`}>
            <div className="bg-green-900 p-3 alert-bar relative">
                <div className="px-8 md:px-0">
                    <div className="text-center">
                        <p className="text-white text-xs md:text-sm">
                            <a href="#">JUNE DELIVERY UPDATE</a>&nbsp;|&nbsp;
                            <a href="#">LIFETIME WARRANTY</a>&nbsp;|&nbsp;
                            <a href="#">WHITE GLOVE DELIVERY SERVICE</a>
                        </p>
                    </div>
                </div>
                <button className="absolute right-2 text-white top-2">
                    <CloseIcon />
                </button>
            </div>
            <div className={ isScrollDown }>
                <div className="bg-white px-6 py-4 md:py-7 mb-header border-b border-green-800 border-opacity-20">
                    <div className="md:hidden flex justify-between items-center">
                        <button>
                            <MenuIcon />
                        </button>
                        <div>Logo</div>
                        <div className="flex items-center">
                            <button className="mr-2">
                                <SearchIcon />
                            </button>
                            <a href="#" className="bg-green-900 bg-opacity-20 rounded-full w-8 h-8 box-border px-3 py-1">0</a>
                        </div>
                    </div>
                    <div className="hidden md:block font-bold">
                        <div className="container mx-auto header-low">
                            <div className="flex justify-between items-center px-6 md:px-0 text-green-900">
                                <div className="md:hidden">
                                    <button>
                                        <MenuIcon />
                                    </button>
                                </div>
                                <div>
                                    <ul className="flex items-center">
                                        <li className="mr-4"><a href="#" className="text-sm">BUILD YOUR EGG</a></li>
                                        <li className="mr-4">
                                            <button className="flex items-center">
                                                <span className="font-bold text-sm">SHOP</span>
                                                <ExpandMoreIcon />
                                            </button>
                                        </li>
                                        <li>
                                            <a href="#" className="text-sm">EXPERIENCES</a>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <h1 className="text-2xl px-12 md:px-0 text-center md:text-3xl">Big Green Egg</h1>
                                </div>
                                <div className="flex items-center">
                                    <ul className="hidden md:flex">
                                        <li className="mr-4">
                                            <a href="#" className="text-sm">RECIPES</a>
                                        </li>
                                        <li className="mr-4">
                                            <a href="#" className="text-sm">GUIDES</a>
                                        </li>
                                    </ul>
                                    <button className="mr-2">
                                        <SearchIcon />
                                    </button>
                                    <a href="#" className="bg-green-900 bg-opacity-20 rounded-full w-8 h-8 box-border px-3 py-1 font-normal">0</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="main-header">
                    <div className="container mx-auto header-low">
                        <div className="flex justify-between items-center px-6 md:px-0 text-white">
                            <div className="md:hidden">
                                <button>
                                    <MenuIcon />
                                </button>
                            </div>
                            <div className="hidden md:block">
                                <ul className="flex items-center">
                                    <li className="mr-4"><a href="#" className="text-sm">BUILD YOUR EGG</a></li>
                                    <li className="mr-4">
                                        <button className="flex items-center">
                                            <span className="text-sm">SHOP</span>
                                            <ExpandMoreIcon />
                                        </button>
                                    </li>
                                    <li>
                                        <a href="#" className="text-sm">EXPERIENCES</a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h1 className="text-2xl px-12 md:px-0 text-center md:text-3xl">Big Green Egg</h1>
                            </div>
                            <div className="flex items-center">
                                <ul className="hidden md:flex">
                                    <li className="mr-4">
                                        <a href="#" className="text-sm">RECIPES</a>
                                    </li>
                                    <li className="mr-4">
                                        <a href="#" className="text-sm">GUIDES</a>
                                    </li>
                                </ul>
                                <button className="mr-2">
                                    <SearchIcon />
                                </button>
                                <a href="#" className="bg-white bg-opacity-20 rounded-full w-8 h-8 box-border px-3 py-1">0</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-white p-6 hidden">
                <div className="flex justify-between">
                    <div></div>
                    <div></div>
                    <div className="flex">
                        <SearchIcon />
                        <div className="bg-green-200">
                            <div>0</div>
                        </div>
                    </div>
                </div>
            </div>
      </header>
    );
}
 
export default Header;