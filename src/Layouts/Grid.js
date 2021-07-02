import FirstLayout from './FirstLayout'
import SecondLayout from './SecondLayout'
import ThirdLayout from './ThirdLayout'
import FoodCarousel from '../Food/FoodCarousel'

const Grid = () => {
    return (
        <div className="container mx-auto py-12">
            <FirstLayout />
            <SecondLayout />
            <FoodCarousel />
            <ThirdLayout />
        </div>
    );
}
 
export default Grid;