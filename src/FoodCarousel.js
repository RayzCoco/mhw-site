import { useState } from 'react'
import FoodList from './FoodList'

const FoodCarousel = () => {
    const [ foods, setFoods ] = useState([
        { title: 'Roast', start: 'Sunday lunch, alfresco', content: 'Convection cooking, with charcoal. As heat is deflected around your EGG you can roast at a stable, even temperature. Think roast chicken or pork belly; crisp skin, crackling and deliciously moist meat. Perfect for vegetables and whole fish too.' },
        { title: 'Low & Slow', start: 'Slow things down', content: 'Turn the temperature down, crack open a beer, and let the EGG do the hard work for you. Slow Cooking is an indirect cooking mode that allows you to break down fats to create tender lamb, succulent pulled pork, brisket, ribs and so much more.' },
        { title: 'Bake', start: "A baker's oven", content: "With the EGG's ConvEGGtor and the addition of a Baking Stone, you can match the results achieved in a wood-fired oven. This means that perfectly crisp pizza bases, crusty sourdough loaves, or even a flaky-based tarte tatin, are all within reach." },
        { title: "Grill", start: "Direct cooking, elevated", content: "Even in its classic barbecue form, the EGG is a cut above. With the ability to crank up the heat, and a range of cooking surfaces and charcoal to choose from, you can ensure that your steaks, fish and vegetables achieve restaurant-level results." },
        { title: "Smoke", start: "Infuse with smoke", content: "Bring the temperature down, add a few woodchips to your charcoal, and watch as the smoke circulates around the dome of your EGG, adding delicate flavour to a whole host of barbecue favourites. Whole hot-smoked sides of salmon or a punchy baba ghanoush couldn't be easier." },
        { title: "Pans & Plancha", start: "An outdoor hob", content: "Enhance your favourite chilli or stew, add depth to your weekend eggs and make gravies and sauces to remember by cooking them over fire on your EGG. Keep the lid down and lock the flavour in." },
        { title: "Dirty Cooking", start: "Flavour in fuel", content: "Our charcoal is so good, you cook straight on top of it. Forget cooking surfaces — simply add whole vegetables, or even steak, directly onto the smouldering embers." }
    ])

    return (
        <div className="container mx-auto mb-10">
            <h2 className="text-green-900 text-xl md:text-4xl mb-8 px-6 md:px-0 font-bold">SEVEN WAYS TO COOK. INFINITE POSSIBILITIES.</h2>
            <FoodList foods={ foods } />
        </div>
    );
}
 
export default FoodCarousel;