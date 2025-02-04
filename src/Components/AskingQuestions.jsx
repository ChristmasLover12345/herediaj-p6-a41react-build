import { AskFetch } from "../Services/DataService.js";

const AskingQuestions = () => {

    return(
    
        <div className="w-screen flex flex-col items-center">
          

            <input placeholder="your name here" type="text" className="bg-white text-black w-[100px] h-[40px] mb-2"  />

            <input placeholder="Wake up time" type="text" className="bg-white text-black w-[100px] h-[40px]"  />
        </div>
    )
};

export default AskingQuestions;