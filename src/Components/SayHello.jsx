import { NavLink } from "react-router-dom";
import { helloFetch } from "../Services/DataService.js";
import { useEffect, useState } from "react";

const SayHello = () => {
    
  const [userInput, setUserInput] = useState("");
  const [helloResponse, setHelloResponse] = useState("");



  const helloClickFunc = async () => {
    if (userInput != "")
    {
      setHelloResponse(await helloFetch(userInput));
    }
  };

  return (
    <div className="relative bg-[#F2F2F2] h-screen w-screen overflow-hidden">
      {/* <!-- Nav --> */}
      <nav className="w-full h-[65px] bg-[#1765FF] flex relative py-1">
        <NavLink to="/" className=" absolute right-0 top-0 h-full">
          <div className="h-full w-16 bg-[#FF4343] rounded-[5px] flex justify-center ">
            <p className="m-0 text-center text-white font-bold text-[20px] self-center ">
              X
            </p>
          </div>
        </NavLink>

        <img
          className="ms-5"
          src="../Icons/XPComputerIcon.png"
          alt="a computer Icon"
        />
        <p className="text-center text-white font-bold text-[40px] self-center mb-0 ms-3 ">
          Hello World
        </p>
      </nav>

      {/* <!-- content --> */}
      <div className="h-full w-full flex">
        {/* <!-- File explorer (filler, doesnt actually do anything) --> */}
        <div className=" h-full w-[23%] hidden md:block">
          <div className="bg-[#0B44FF]">
            <p className="text-white text-[25px] font-bold ms-2 ">Running..</p>
          </div>

          <div className="flex py-2">
            <img
              className="ms-2 w-[65px] h-[42px]"
              src="../Icons/XPComputerIcon.png"
              alt="a computer Icon"
            />
            <p className="text-center font-bold text-[25px] self-center mb-0 ms-3 ">
              Hello World
            </p>
          </div>

          <div className="bg-[#0B44FF] w-full h-[37px] mb-2"></div>

          <div className="overflow-y-scroll h-full w-full">
            <div className="flex">
              <img
                className="ms-2 w-[65px] h-[42px]"
                src="../Icons/windoesXpFolder.png"
                alt="a computer Icon"
              />
              <p className="text-center font-bold text-[25px] w-[75%] self-center mb-0 truncate">
                Cat Pictures
              </p>
            </div>

            <div className="flex">
              <img
                className="ms-2 w-[65px] h-[42px]"
                src="../Icons/windoesXpFolder.png"
                alt="a computer Icon"
              />
              <p className="text-center font-bold text-[25px] w-[75%] self-center mb-0 truncate">
                Homework
              </p>
            </div>

            <div className="flex">
              <img
                className="ms-2 w-[65px] h-[42px]"
                src="../Icons/windoesXpFolder.png"
                alt="a computer Icon"
              />
              <p className="text-center font-bold text-[25px] w-[75%] self-center mb-0 truncate">
                Memes
              </p>
            </div>

            <div className="flex">
              <img
                className="ms-2 w-[65px] h-[42px]"
                src="../Icons/windoesXpFolder.png"
                alt="a computer Icon"
              />
              <p className="text-center font-bold text-[25px] w-[75%] self-center mb-0 truncate">
                Kanyewest
              </p>
            </div>

            <div className="flex">
              <img
                className="ms-2 w-[65px] h-[42px]"
                src="../Icons/windoesXpFolder.png"
                alt="a computer Icon"
              />
              <p className="text-center font-bold text-[25px] w-[75%] self-center mb-0 truncate">
                School
              </p>
            </div>

            <div className="flex">
              <img
                className="ms-2 w-[65px] h-[42px]"
                src="../Icons/windoesXpFolder.png"
                alt="a computer Icon"
              />
              <p className="text-center font-bold text-[25px] w-[75%] self-center mb-0 truncate">
                games
              </p>
            </div>

            <div className="flex">
              <img
                className="ms-2 w-[65px] h-[42px]"
                src="../Icons/windoesXpFolder.png"
                alt="a computer Icon"
              />
              <p className="text-center font-bold text-[25px] w-[75%] self-center mb-0 truncate">
                bronycon
              </p>
            </div>

            <div className="flex">
              <img
                className="ms-2 w-[65px] h-[42px]"
                src="../Icons/windoesXpFolder.png"
                alt="a computer Icon"
              />
              <p className="text-center font-bold text-[25px] w-[75%] self-center mb-0 truncate">
                RainbowDash
              </p>
            </div>

            <div className="flex">
              <img
                className="ms-2 w-[65px] h-[42px]"
                src="../Icons/windoesXpFolder.png"
                alt="a computer Icon"
              />
              <p className="text-center font-bold text-[25px] w-[75%] self-center mb-0 truncate">
                FursuitIdeas
              </p>
            </div>

            <div className="flex">
              <img
                className="ms-2 w-[65px] h-[42px]"
                src="../Icons/windoesXpFolder.png"
                alt="a computer Icon"
              />
              <p className="text-center font-bold text-[25px] w-[75%] self-center mb-0 truncate">
                FoodRecpis
              </p>
            </div>
          </div>

          <div className="flex self-end min-h-[65px] h-[8vh] w-full bg-amber-900">
            hello
          </div>
        </div>

        {/* <!-- separator --> */}
        <div className="bg-[#0B44FF] h-full w-[1%] hidden md:block"></div>

        {/* <!-- The main content --> */}
        <div className=" h-full w-full md:w-[76%] grid grid-cols-[16.67%_16.67%_16.67%_16.67%_16.67%_16.67%] grid-rows-[16.67%_16.67%_16.67%_16.67%_16.67%_16.67%]">
          {/* <!-- Button --> */}
          <button
            onClick={helloClickFunc}
            className="col-start-2 col-end-6 text-center row-start-5 h-25 self-center bg-[#DCD7B5] rounded-[5px] border-t-2 border-t-white  border-s-2 border-s-white border-b-2 border-b-black  border-e-2 border-e-black text-[30px] sm:text-[45px]  font-extrabold active:border-t-black active:border-s-black active:border-e-white active:border-b-white"
          >
            Hello, Computer!
          </button>

          {/* <!-- Input Field --> */}
          <input
            onChange={(e) => setUserInput(e.target.value)}
            placeholder="My name is"
            type="text"
            className="bg-white h-[50%] w-full sm:w-[80%] col-start-2 row-start-4 col-end-6 self-center justify-self-center border-1 inset-shadow-sm rounded-[5px] text-center text-[40px] font-bold"
          />

          {/* <!-- response --> */}
          <div className="col-start-2 col-end-6 text-center row-start-2 row-end-4 self-center h-full w-full flex justify-center">
            <div className="bg-white w-[90%] h-[90%] self-center rounded-[7px] border-x-4 border-b-4 border-[#0B44FF]">
              <h2 className="bg-[#0B44FF] text-white font-bold py-1 rounded-t-[5px]">
                Computer
              </h2>

              <div className="h-[90%]  place-content-center overflow-y-scroll">
                <p className="self-center text-[40px] font-bold">
                  {helloResponse}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Footer --> */}
      <footer className="w-full h-[6vh] bg-[#1765FF] absolute bottom-0 flex justify-start rounded-[5px]">
        <NavLink to="/">
          <div className="bg-[#1FED2C] h-full flex rounded-[5px]">
            <img
              src="../Icons/windows Icon.png"
              alt="windowsXP logo"
              className="w-[55px] h-[100%] self-center mx-3 "
            />
            <h1 className="m-0 text-center self-center text-white text-[40px] pe-8">
              Start
            </h1>
          </div>
        </NavLink>
      </footer>
    </div>
  );
};

export default SayHello;
