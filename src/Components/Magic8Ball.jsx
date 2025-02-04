import { magicFetch } from "../Services/DataService.js";

const Magic8Ball = () => {

    return(
    
        <div className="w-screen flex flex-col items-center">
           
            <input placeholder="your question here" type="text" className="bg-white text-black w-[200px] h-[40px]"  />
        </div>
    )
};

export default Magic8Ball;