import vector from "../assets/vector.svg";
import { BsArrowRightShort } from "react-icons/bs";

function FirstSection(){
    return(
        <div className="bg-[#f5f5f5]">
            <div className="px-[12rem] py-[8rem] sm:px-5">
                <h1 className="text-[3.5rem] w-[40rem] font-bold py-10 sm:text-[2.5rem] sm:w-[25rem]">Start building with our setup resources</h1>
                <p className="text-[23px] text-gray-500 w-[30rem] font-normal sm:text-[20px] sm:w-[20rem] ">Find everything you need to integrate easily with Mono, learn about our APIs, and more.</p>
            </div>
            <div className="grid grid-cols-1 gap-1 justify-evenly  px-[12rem]  sm:px-5 ">
        <div className="bg-white text-black p-[3rem] rounded-2xl">
          <img src={vector} alt="" className="" />
          <p className="text-[40px] font-bold w-[20rem] py-[2rem]">API reference</p>
          <p className="w-[20rem] text-[18px]">
          The Mono API reference provides a detailed guide of all resources accessible via our API.
          </p>
          <button className="flex items-center gap-2 text-[#0055ba] bg-white w-[20rem] p-3 my-[3rem] rounded-xl text-[20px]">
          View Quickstart
            <span className="">
              <BsArrowRightShort className="w-[2rem]" />
            </span>
          </button>
        </div>

        <div className="grid grid-cols-2 gap-5 mt-5 pb-[12rem] sm:grid-cols-1 ">
          <div className="bg-white  rounded-2xl ">
            <div className="w-[30rem] mx-[4rem] pt-[4rem] sm:w-[10rem]">
              <img src={vector} alt="" className="" />
              <p className="text-[45px] font-bold w-[10rem] py-[2rem]">
              Quickstart
              </p>
              <p className="w-[20rem] text-[18px]">
              We've designed a detailed quickstart guide to getting set up and integrated with Mono APIs.
              </p>
              <button className="flex items-center gap-2 text-[#0055ba] bg-white w-[20rem] p-3 my-[3rem] rounded-xl text-[20px]">
              View references
                <span className="">
                  <BsArrowRightShort className="w-[2rem]" />
                </span>
              </button>
            </div>
          </div>

          <div className="bg-white  rounded-2xl text-black">
            <div className="w-[30rem] mx-[4rem] pt-[4rem] sm:w-[10rem]">
              <img src={vector} alt="" className="" />
              <p className="text-[45px] font-bold w-[10rem] py-[2rem]">
              FAQs
              </p>
              <p className="w-[20rem] text-[18px]">
              Read our extensive articles to answer questions on our libraries, SDKs, API documentation, and more.
              </p>
              <button className="flex items-center gap-2 text-[#0055ba] bg-white w-[20rem] p-3 my-[3rem] rounded-xl text-[20px]">
              Support Articles
                <span className="">
                  <BsArrowRightShort className="w-[2rem]" />
                </span>
              </button>
            </div>
          </div>
        </div>

        
      </div>
        </div>
    )
}

export default FirstSection