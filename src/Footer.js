import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';

import FooterAccordion from './FooterAccordion';

import { useState } from 'react'

const Footer = () => {
    const [ footerLinks, setfooterLinks ] = useState([
        { id: 1, title: "Shop", links: ["Eggs", "Boses", "Accessories", "Fuel"] },
        { id: 2, title: "Support", links: ["Guides", "FAQs", "Stocklists", "Return Policy", "Warranty", "Delivery"] },
        { id: 3, title: "About", links: ["About Us", "Became a Reseller", "Contact", "Privacy Policy", "Terms of Use", "Reseller Portal"] }
    ])

    return (
        <footer className="bg-green-900 mt-20">
            <div className="container mx-auto py-10 px-6 md:px-0 md:py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 mb-28">
                    <div className="text-left">
                        <p className="text-white mb-4">Sign up for tasty recipes, exclusive product launches, and unique experiences.</p>
                        <div className="mb-4 md:mb-8 bg-white bg-opacity-20 inline-flex rounded">
                            <input className="mr-4 bg-transparent py-2 pl-6 leading-10 text-white" type="text" placeholder="Email Address" />
                            <button className="px-6 opacity-30 text-white">
                                <span>SUBMIT</span>
                            </button>
                        </div>
                        <div className="text-white flex">
                            <div className="bg-white md:bg-transparent bg-opacity-20 h-9 w-9 relative rounded-full mr-4 md:mr-8">
                                <FacebookIcon className="absolute top-1.5 left-1.5" />
                            </div>
                            <div className="bg-white md:bg-transparent bg-opacity-20 h-9 w-9 relative rounded-full mr-4 md:mr-8">
                                <InstagramIcon className="absolute top-1.5 left-1.5" />
                            </div>
                            <div className="bg-white md:bg-transparent bg-opacity-20 h-9 w-9 relative rounded-full">
                                <TwitterIcon className="absolute top-1.5 left-1.5" />
                            </div>
                        </div>
                    </div>
                    <FooterAccordion footerLinks={ footerLinks } />
                </div>
                <div className="mb-12 text-center">
                    <h2 className="text-white text-5xl md:text-8xl">Big Green Egg</h2>
                </div>
                <div>
                    <p className="opacity-50 text-xs text-center md:text-base text-white">©2021 Alfresco Concepts, UK. The Big Green Egg logo is Trade Marked</p>
                </div>
            </div>
        </footer>
    );
}
 
export default Footer;