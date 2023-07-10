import { useState } from "react";
import Button from "./Button";
import arrowDown from "../assets/arrowDown.svg";
import Logo from "../assets/Logo.svg";
import heart from "../assets/heart.svg";
import tag from "../assets/tag.svg";
import btn from "../assets/btn.svg";
import percept from "../assets/percept.svg";
import portal from "../assets/portal.svg";
import directpay from "../assets/directpay.svg";
import connect from "../assets/connect.svg";
import directpaypages from "../assets/directpaypages.svg";
import statementpages from "../assets/statementpages.svg";
import tutorials from "../assets/tutorials.svg";
import product from "../assets/product.svg";
import blog from "../assets/blog.svg";
import aboutus from "../assets/aboutus.svg";
import docs from "../assets/docs.svg";
import overview from "../assets/overview.svg";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosCloseCircle } from "react-icons/io";

function Navbar() {
  const [clicked, setClicked] = useState(false);

  function handleclicked() {
    setClicked(!clicked);
  }

  return (
    <div>
      <nav>
        <nav className="flex justify-center px-[7rem] py-[2rem] sm:px-5">
          <div className="w-[100%] flex justify-between ">
            <div className="sm:flex sm:gap-[16.5rem]">
              <img
                src={Logo}
                alt=""
                className="w-[5rem] mt-6 sm:w-[5rem] sm:mt-2"
              />

              <div className="hidden sm:block" onClick={handleclicked}>
                {clicked ? (
                  <IoIosCloseCircle className="w-8 h-8 text-black" />
                ) : (
                  <GiHamburgerMenu className="w-8 h-8 text-black" />
                )}
              </div>
            </div>

            <ul
              className={
                clicked
                  ? "sm:block sm: bg-black sm: text-white sm:absolute sm:top-[4rem] sm:right-1 sm:-full sm:h-[50rem] sm:px-[2rem] sm:w-full"
                  : " flex items-center text-[#6c737b] relative sm:hidden"
              }
            >
              <div className="flex w-[8rem] p-2 group">
                <li className="text-base font-bold">Save</li>
                <img src={arrowDown} alt="" className="w-[20px]" />
                <div className="hidden group-hover:block px-8 py-4 text-lg shadow-lg bg-white w-[25rem] h-[20rem] absolute font-medium top-[4rem] -left-[5rem] sm:hidden sm:group-hover sm:left-5 sm:top-[15rem] sm:w-[20rem] sm:text-sm">
                  <div className="flex mb-6 gap-3">
                    <img src={heart} alt="" />
                    <div>
                      <h1 className="sm:text-black">Why choose Mono</h1>
                      <p className="text-gray-600">
                        here is why 250+ Buisnesses and Developers use Mono APIs
                      </p>
                    </div>
                  </div>
                  <div className="flex mb-6 gap-3">
                    <img src={tag} alt="" />
                    <div>
                      <h1 className="sm:text-black">Pricing</h1>
                      <p className="text-gray-600">
                        Affordable pricing for Developers, SMEs and enterprises
                      </p>
                    </div>
                  </div>
                  <div className="flex mb-6 gap-3">
                    <img src={btn} alt="" />
                    <div>
                      <h1 className="sm:text-black">See a Demo</h1>
                      <p className="text-gray-600">
                        Experience Mono APIs in Action
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex w-[8rem] p-2 group">
                <li className="text-base font-bold">Invest</li>
                <img src={arrowDown} alt="" className="w-[20px]" />
                <div
                  className=" hidden group-hover:block px-8 py-4 text-lg shadow-lg bg-white w-[55rem] h-[17rem] absolute font-medium top-[4rem] -left-[5rem] 
                                sm:hidden sm:group-hover sm:left-5 sm:top-[15rem] sm:w-[20rem] sm:h-[34rem] sm:text-sm"
                >
                  <div className="flex gap-20 sm:flex-col sm:gap-2">
                    <div>
                      <div className="flex mb-6 gap-3">
                        <img src={connect} alt="" />
                        <div>
                          <h1 className="sm:text-black">Connect</h1>
                          <p className="text-gray-600">
                            Financial Account Linking
                          </p>
                        </div>
                      </div>
                      <div className="flex mb-6 gap-3">
                        <img src={directpay} alt="" />
                        <div>
                          <h1 className="sm:text-black">Direct Pay</h1>
                          <p className="text-gray-600">
                            Direct Bank payment collection
                          </p>
                        </div>
                      </div>
                      <div className="flex mb-6 gap-3">
                        <img src={portal} alt="" />
                        <div>
                          <h1 className="sm:text-black">Portal</h1>
                          <p className="text-gray-600">
                            Linked Account Management
                          </p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="flex mb-6 gap-3">
                        <img src={statementpages} alt="" />
                        <div>
                          <h1 className="sm:text-black">Statement Pages</h1>
                          <p className="text-gray-600">
                            No-code Bank statement collection
                          </p>
                        </div>
                      </div>
                      <div className="flex mb-6 gap-3">
                        <img src={directpaypages} alt="" />
                        <div>
                          <h1 className="sm:text-black">Direct Pay Pages</h1>
                          <p className="text-gray-600">
                            No-code Bank payment collection
                          </p>
                        </div>
                      </div>
                      <div className="flex mb-6 gap-3">
                        <img src={percept} alt="" />
                        <div>
                          <h1 className="sm:text-black">Percept</h1>
                          <p className="text-gray-600">
                            Corporate finance Management
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex w-[8rem] p-2 group">
                <li className="text-base font-bold">Stories</li>
                <img src={arrowDown} alt="" className="w-[20px]" />
                <div className=" hidden group-hover:block px-8 py-4 text-lg shadow-lg bg-white w-[20rem] h-[20rem] absolute font-medium top-[4rem] -right-[1rem]">
                  <div className="flex mb-6 gap-3">
                    <img src={aboutus} alt="" />
                    <div>
                      <h1>About us</h1>
                    </div>
                  </div>
                  <div className="flex mb-6 gap-3">
                    <img src={blog} alt="" />
                    <div>
                      <h1>Blog</h1>
                    </div>
                  </div>
                  <div className="flex mb-6 gap-3">
                    <img src={tutorials} alt="" />
                    <div>
                      <h1>Tutorials</h1>
                    </div>
                  </div>

                  <div className="flex mb-6 gap-3">
                    <img src={product} alt="" />
                    <div>
                      <h1>Coverage</h1>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex w-[8rem] group">
                <li className="text-base font-bold">FAQs</li>
                <img src={arrowDown} alt="" className="w-[20px]" />
                <div className=" hidden group-hover:block px-8 py-4 text-lg shadow-lg bg-white w-[20rem] h-[20rem] absolute font-medium top-[4rem] -right-[6rem]">
                  <div className="flex mb-6 gap-3">
                    <img src={overview} alt="" />
                    <div>
                      <h1>Overview</h1>
                    </div>
                  </div>
                  <div className="flex mb-6 gap-3">
                    <img src={docs} alt="" />
                    <div>
                      <h1>Documentation</h1>
                    </div>
                  </div>
                </div>
              </div>
            </ul>
            <div className="flex gap-3">
              <button className="lg: p-4 bg-white text-black border-2 rounded-lg sm:hidden">
                Sign In
              </button>
              <button className="lg: p-4 bg-black text-white rounded-lg sm:hidden">
                Create Free Account
              </button>
            </div>
          </div>
        </nav>
      </nav>
    </div>
  );
}

export default Navbar;
