import { oddFetch } from "../Services/DataService.js";

const OddOrEven = () => {

    return(
    
        <div className="w-screen flex flex-col items-center">
           

            <input placeholder="your number here" type="text" className="bg-white text-black w-[100px] h-[40px]"  />
        </div>
    )
};

export default OddOrEven;