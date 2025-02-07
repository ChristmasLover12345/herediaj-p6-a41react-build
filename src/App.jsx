

import './App.css'
import { NavLink } from 'react-router-dom'

function App() {
  
  return (
    <>

    <div className='relative bg-center bg-cover h-screen w-screen overflow-hidden bg-[url(./Icons/WindowsXpBack.jpg)]'>



    <section className="grid sm:gap-x-5 lg:gap-x-0 grid-cols-[15%_35%_35%_15%] sm:grid-cols-9 grid-rows-[10px_1fr_1fr_1fr_1fr_1fr_20px_6vh] sm:grid-rows-[10px_1fr_1fr_1fr_1fr_1fr_1fr_20px_6vh] w-full h-full text-[16px] sm:text-[12px] lg:text-[20px] xl:text-[25px] ">

<div className="drop-shadow-sm  col-start-2 row-start-2 sm:col-start-1 sm:row-start-2 ">
    <NavLink to="/SayHello">
        <img className="w-[132px] h-[75px] sm:w-[132px] sm:h-[60px] lg:w-[132px] lg:h-[75px] justify-self-center" src="./Icons/XPComputerIcon.png" alt="a computer Icon"/>
        <p className="text-center text-white juanStroke">Say Hello.exe</p>
    </NavLink>
</div>

<div className="drop-shadow-sm  col-start-3 row-start-3 sm:col-start-1 sm:row-start-3">
    <NavLink to="/AskingQuestions">
        <img className="w-[132px] h-[75px] sm:w-[132px] sm:h-[60px] lg:w-[132px] lg:h-[75px] justify-self-center" src="./Icons/XPComputerIcon.png" alt="a computer Icon"/>
        <p className="text-center text-white juanStroke">Asking Questions.exe</p>
    </NavLink>
</div>

<div className="drop-shadow-sm  col-start-2 row-start-3 sm:col-start-1 sm:row-start-4">
    <NavLink to="/AddTwo">
        <img className="w-[132px] h-[75px] sm:w-[132px] sm:h-[60px] lg:w-[132px] lg:h-[75px] justify-self-center" src="./Icons/XPComputerIcon.png" alt="a computer Icon"/>
        <p className="text-center text-white juanStroke">Add Two Nums.exe</p>
    </NavLink>
</div>

<div className="drop-shadow-sm  col-start-2 row-start-4 sm:col-start-1 sm:row-start-5">
    <NavLink to="/MadLib">
        <img className="w-[132px] h-[75px] sm:w-[132px] sm:h-[60px] lg:w-[132px] lg:h-[75px] justify-self-center" src="./Icons/XPComputerIcon.png" alt="a computer Icon"/>
        <p className="text-center text-white juanStroke">MadLib.exe</p>
    </NavLink>
</div>

<div className="drop-shadow-sm  col-start-2 row-start-5 sm:col-start-1 sm:row-start-6">
    <NavLink to="/OddOrEven">
        <img className="w-[132px] h-[75px] sm:w-[132px] sm:h-[60px] lg:w-[132px] lg:h-[75px] justify-self-center" src="./Icons/XPComputerIcon.png" alt="a computer Icon"/>
        <p className="text-center text-white juanStroke">Odd Or Even.exe</p>
    </NavLink>
</div>

<div className="drop-shadow-sm  col-start-2 row-start-6 sm:col-start-1 sm:row-start-7 ">
    <NavLink to="/ReverseAlpha">
        <img className="w-[132px] h-[75px] sm:w-[132px] sm:h-[60px] lg:w-[132px] lg:h-[75px] justify-self-center" src="./Icons/XPComputerIcon.png" alt="a computer Icon"/>
        <p className="text-center text-white juanStroke">Reverse It Alpha.exe</p>
    </NavLink>
</div>

<div className="drop-shadow-sm  col-start-3 row-start-6 sm:col-start-2 sm:row-start-7">
    <NavLink to="/ReverseNums">
        <img className="w-[132px] h-[75px] sm:w-[132px] sm:h-[60px] lg:w-[132px] lg:h-[75px] justify-self-center" src="./Icons/XPComputerIcon.png" alt="a computer Icon"/>
        <p className="text-center text-white juanStroke">Reverse It Numbers.exe</p>
    </NavLink>
</div>

<div className="drop-shadow-sm  col-start-3 row-start-5 sm:col-start-2 sm:row-start-6">
    <NavLink to="/Magic8Ball">
        <img className="w-[132px] h-[75px] sm:w-[132px] sm:h-[60px] lg:w-[132px] lg:h-[75px] justify-self-center" src="./Icons/XPComputerIcon.png" alt="a computer Icon"/>
        <p className="text-center text-white juanStroke">Magic 8 Ball.exe</p>
    </NavLink>
</div>

<div className="drop-shadow-sm  col-start-3 row-start-4 sm:col-start-2 sm:row-start-5">
    <NavLink to="/Restaurant">
        <img className="w-[132px] h-[75px] sm:w-[132px] sm:h-[60px] lg:w-[132px] lg:h-[75px] justify-self-center self-center" src="./Icons/XPComputerIcon.png" alt="a computer Icon"/>
        <p className="text-center text-white juanStroke">Restaurant Picker.exe</p>
    </NavLink>
</div>

<div className="drop-shadow-sm  col-start-3 row-start-2 sm:col-start-2 sm:row-start-4">
    <NavLink to="/GTLT">
        <img className="w-[132px] h-[75px] sm:w-[132px] sm:h-[60px] lg:w-[132px] lg:h-[75px] justify-self-center self-center" src="./Icons/XPComputerIcon.png" alt="a computer Icon"/>
        <p className="text-center text-white juanStroke">GTLT.exe</p>
    </NavLink>
</div>

</section>



{/* <!-- Footer --> */}
<footer className="w-full h-[6vh] bg-[#1765FF] absolute bottom-0 flex justify-start rounded-[5px]">

<NavLink to="/"><div className="bg-[#1FED2C] h-full flex rounded-[5px]">
<img src="./Icons/windows Icon.png" alt="windowsXP logo" className="w-[55px] h-[100%] self-center mx-3 "/>
<h1 className="m-0 text-center self-center text-white text-[40px] pe-8">Start</h1>
</div></NavLink>

</footer>







    {/* <NavLink to="/SayHello" className='mb-2'>Say Hello</NavLink>

    <NavLink to="/AskingQuestions"className='mb-2'>Asking Questions</NavLink>

    <NavLink to="/GTLT"className='mb-2'>GTLT</NavLink>

    <NavLink to="/AddTwo"className='mb-2'>Adding numbers</NavLink>

    <NavLink to="/MadLib"className='mb-2'>MadLib</NavLink>

    <NavLink to="/OddOrEven"className='mb-2'>Odd Or Even</NavLink>
    
    <NavLink to="/ReverseAlpha"className='mb-2'>Reverse It Alpha</NavLink>

    <NavLink to="/ReverseNums"className='mb-2'>Reverse It Nums</NavLink>

    <NavLink to="/Magic8Ball"className='mb-2'>Magic 8 Ball</NavLink>

    <NavLink to="/Restaurant"className='mb-2'>Restaurant Picker</NavLink> */}

    </div>

    </>
  )
}

export default App
