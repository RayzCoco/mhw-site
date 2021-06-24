import chef1 from './img/chef1.webp'
import chef2 from './img/chef2.webp'
import chef3 from './img/chef3.webp'

import { useState } from 'react'
import Chefs from './Chefs'

const Trust = () => {
    const [ chefs, setChefs ] = useState([
        { id: 1, title: "The two-michelin starred chef", img: chef1, name: "Tom kerridge", chefTitle: "The chef", content: "Tom Kerridge worked as a chef in restaurants across Britain before deciding to open The Hand & Flowers with his wife in 2005. It went on to become the first (and only) pub in the world to acquire two Michelin stars. Cooking on the Big Green Egg is an all-round experience: the warmth of the green dome, the aroma and crackle of the charcoal, the charring or gently smoking food inside. There’s nothing else quite like it." },
        { id: 2, title: "The award winning butcher", img: chef2, name: "Richard turner", chefTitle: "The butcher", content: "Richard Turner is one half of the independent butcher, Turner & George — who supply some of the best quality British rare breed meat money can buy — and co-founder of Meatopia UK. 'There’s a crazy alchemy that goes on inside the EGG: you set the temperature, close the lid and boom, you get the best tasting meat. I’ve been a fan from day one.'" },
        { id: 3, title: "The published author & producer", img: chef3, name: "james whetlor", chefTitle: "The writer & producer", content: "James founded award-winning business Cabrito in 2012, selling goat meat to catering butchers and restaurants, from a network of farms across the country. He is the author of our new cookbook 'Cooking on the Big Green Egg', published April 2021. 'The flavour and texture that the EGG adds to your food is unachievable in conventional ovens and inconsistent in other kinds of barbecues. I would never go back.'" }
    ])
    return (
        <div className="container mx-auto">
            <h2 className="text-green-900 mb-6 px-6 md:px-0 text-xl md:text-4xl font-bold">TRUSTED BY THOSE IN THE KNOW</h2>
            <Chefs chefs={ chefs } />
        </div>
    );
}
 
export default Trust;