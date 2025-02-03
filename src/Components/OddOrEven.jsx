import { oddFetch } from "../scripts/DataService.js";

const OddOrEven = () => {

    return(
    
        <div className="w-screen flex flex-col items-center">
            <div className='bg-red-500 flex justify-around mb-5 w-[80%]'>

            <a href="/">Home</a>

            

            </div>

            <input placeholder="your number here" type="text" className="bg-white text-black w-[100px] h-[40px]"  />
        </div>
    )
};

export default OddOrEven;