import { magicFetch } from "../scripts/DataService.js";

const Magic8Ball = () => {

    return(
    
        <div className="w-screen flex flex-col items-center">
            <div className='bg-red-500 flex justify-around mb-5 w-[80%]'>

            <a href="/">Home</a>

            

            </div>

            <input placeholder="your question here" type="text" className="bg-white text-black w-[200px] h-[40px]"  />
        </div>
    )
};

export default Magic8Ball;