import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';


const Footer = () => {
    return (
        <footer className="bg-green-900 mt-20">
            <div className="container mx-auto py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 mb-28">
                    <div className="text-left">
                        <p className="text-white mb-4">Sign up for tasty recipes, exclusive product launches, and unique experiences.</p>
                        <div className="mb-8 bg-white bg-opacity-20 inline-flex rounded">
                            <input className="mr-4 bg-transparent py-2 pl-6 leading-10 text-white" type="text" placeholder="Email Address" />
                            <button className="px-6 opacity-30 text-white">
                                <span>SUBMIT</span>
                            </button>
                        </div>
                        <div className="text-white">
                            <FacebookIcon className="mr-8" />
                            <InstagramIcon className="mr-8" />
                            <TwitterIcon />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 text-left text-white">
                        <div>
                            <button className="opacity-50" disabled>Shop</button>
                            <ul>
                                <li><a className="py-2 block" href="#">Eggs</a></li>
                                <li><a className="py-2 block" href="#">Boses</a></li>
                                <li><a className="py-2 block" href="#">Accessories</a></li>
                                <li><a className="py-2 block" href="#">Fuel</a></li>
                            </ul>
                        </div>
                        <div>
                            <button className="opacity-50" disabled>Support</button>
                            <ul>
                                <li><a className="py-2 block" href="#">Guides</a></li>
                                <li><a className="py-2 block" href="#">FAQs</a></li>
                                <li><a className="py-2 block" href="#">Stocklists</a></li>
                                <li><a className="py-2 block" href="#">Returns Policy</a></li>
                                <li><a className="py-2 block" href="#">Warranty</a></li>
                                <li><a className="py-2 block" href="#">Delivery</a></li>
                            </ul>
                        </div>
                        <div>
                            <button className="opacity-50" disabled>About</button>
                            <ul>
                                <li><a className="py-2 block" href="#">About Us</a></li>
                                <li><a className="py-2 block" href="#">Become a Reseller</a></li>
                                <li><a className="py-2 block" href="#">Contact</a></li>
                                <li><a className="py-2 block" href="#">Privacy Policy</a></li>
                                <li><a className="py-2 block" href="#">Terms of Use</a></li>
                                <li><a className="py-2 block" href="#">Reseller Portal</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="mb-12">
                    <h2 className="text-white text-8xl">Big Green Egg</h2>
                </div>
                <div>
                    <p className="opacity-50 text-white">©2021 Alfresco Concepts, UK. The Big Green Egg logo is Trade Marked</p>
                </div>
            </div>
        </footer>
    );
}
 
export default Footer;