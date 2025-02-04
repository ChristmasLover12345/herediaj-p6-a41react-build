import { RestaurantFetch } from "../Services/DataService.js";

const RestaurantPicker = () => {

    return(
    
        <div className="w-screen flex flex-col items-center">
         

                {/* replace this with a button */}
            <input placeholder="your restaurant Here " type="text" className="bg-white text-black w-[300px] h-[40px]"  />
        </div>
    )
};

export default RestaurantPicker;