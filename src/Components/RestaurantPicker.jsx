import { RestaurantFetch } from "../scripts/DataService.js";

const RestaurantPicker = () => {

    return(
    
        <div className="w-screen flex flex-col items-center">
            <div className='bg-red-500 flex justify-around mb-5 w-[80%]'>

            <a href="/">Home</a>

            

            </div>

                {/* replace this with a button */}
            <input placeholder="your restaurant Here " type="text" className="bg-white text-black w-[300px] h-[40px]"  />
        </div>
    )
};

export default RestaurantPicker;