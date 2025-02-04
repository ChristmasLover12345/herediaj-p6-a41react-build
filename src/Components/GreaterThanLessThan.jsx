import { GTLTFetch } from "../Services/DataService.js";

const GreaterThanLessThan = () => {

    return(
    
        <div className="w-screen flex flex-col items-center">
           

            <input placeholder="number here" type="text" className="bg-white text-black w-[100px] h-[40px] mb-2"  />

            <input placeholder="number here" type="text" className="bg-white text-black w-[100px] h-[40px]"  />
        </div>
    )
};

export default GreaterThanLessThan;