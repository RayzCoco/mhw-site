import CloseIcon from '@material-ui/icons/Close';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import SearchIcon from '@material-ui/icons/Search';

const Header = () => {
    return (
        <header className="fixed top-0 left-0 w-full z-20">
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
            <div className="transform translate-y-10">
                <div className="container mx-auto header-low">
                    <div className="flex justify-between items-center px-9 md:px-0 text-white">
                        <div className="md:hidden">
                            <button>MENU</button>
                        </div>
                        <div className="hidden md:block">
                            <ul className="flex">
                                <li className="mr-4"><a href="#">BUILD YOUR EGG</a></li>
                                <li>
                                    <button>
                                        <span>SHOP</span>
                                        <ExpandMoreIcon />
                                    </button>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h1 className="text-2xl px-12 md:px-0 text-center md:text-3xl">Big Green Egg</h1>
                        </div>
                        <div className="flex">
                            <ul className="hidden md:flex">
                                <li className="mr-4">
                                    <a href="#">RECIPES</a>
                                </li>
                                <li className="mr-4">
                                    <a href="#">GUIDES</a>
                                </li>
                            </ul>
                            <button className="mr-4">
                                <SearchIcon />
                            </button>
                            <a href="#" className="bg-white bg-opacity-20 rounded-full w-8 h-8 box-border px-3 py-1">0</a>
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