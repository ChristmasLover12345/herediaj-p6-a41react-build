import { AddTwoFetch } from "../scripts/DataService.js";

const AddingNumbers = () => {

    return(
    
        <div className="w-screen flex flex-col items-center">
            <div className='bg-red-500 flex justify-around mb-5 w-[80%]'>

                <a href="/">Home</a>

            </div>

            <input placeholder="number here" type="text" className="bg-white text-black w-[100px] h-[40px] mb-2"  />

                <h2>+</h2>

            <input placeholder="number here" type="text" className="bg-white text-black mt-2 w-[100px] h-[40px]"  />
        </div>
    )
};

export default AddingNumbers;