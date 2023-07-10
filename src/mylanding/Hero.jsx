import { BsArrowRightShort } from "react-icons/bs";

function Hero() {
  return (
    <div className="flex justify-center text-center">
      <div>
        <h1 className="text-[5.5rem] w-[50rem] font-bold py-10 sm:text-[2.5rem] sm:w-[25rem]">
          Build seamlessly with reliable APIs
        </h1>
        <p className="text-[30px] font-normal sm:text-[20px] sm:w-[20rem] sm:pl-[5rem]">
          Built by developers, for developers
        </p>
        <div className="flex justify-center  sm:flex-row sm:justify-center sm:gap-5 sm:mt-10">
          <button className="flex items-center gap-2 text-[white] bg-[#0055ba] p-3 my-[3rem] rounded-xl sm:p-2 sm:my-0">
            Read Our API docs
            <span>
              <BsArrowRightShort className="w-[2rem]" />
            </span>
          </button>
          <button className="flex items-center gap-2 text-[black] bg-[#f5f5f5] p-3 my-[3rem] rounded-xl sm:p-2 sm:my-0 sm:">
            See API Reference
            <span>
              <BsArrowRightShort className="w-[2rem]" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
