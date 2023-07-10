import Bolt from "../assets/Boltassets/Bolt.svg";

function Navbarr() {
  return (
    <div>
      <nav className="flex justify-center px-[7rem] py-[2rem] sm:px-5">
        <div className="w-[100%] justify-between ">
          <div className="flex gap-10">
            <img
              src={Bolt}
              alt=""
              className="w-[5rem] mt-6 sm:w-[5rem] sm:mt-2"
            />
            <div className="mt-6 space-x-4">
                
              <button
                id="dropdownDefaultButton"
                data-dropdown-toggle="dropdown"
                class="text-black bg-white-700 hover:bg-blue-800 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                type="button"
              >
                Products{" "}
                <svg
                  class="w-4 h-4 ml-2"
                  aria-hidden="true"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </button>

              <div
                id="dropdown"
                class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w- dark:bg-gray-700 "
              >
                <ul
                  class="py-2 text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="dropdownDefaultButton"
                >
                  <li>
                    <a
                      href="#"
                      class=" font-bold mt-3 text-[14px] text-black-500 block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Rides
                      <p className="text-[13px] w-[15rem] text-[#747a82]">Request a ride in minutes</p>
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Scooters
                      <p className="text-[13px] w-[15rem] text-[#747a82]">2 Wheel ride rental at your fingertips</p>
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Car-sharing
                      <p className="text-[13px] w-[15rem] text-[#747a82]">Top quality car rental at affordable prices</p>
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                     Food deliver
                     <p className="text-[13px] w-[15rem] text-[#747a82]">Your favorite food delivered fast</p>
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                     Food deliver
                     <p className="text-[13px] w-[15rem] text-[#747a82]"> All the essentials at your door in 15 minutes</p>
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                     Food deliver
                     <p className="text-[13px] w-[15rem] text-[#747a82]"></p>
                    </a>
                  </li>
                </ul>
              </div>

              <button
                id="sulaiman"
                data-dropdown-toggle="temi"
                class="text-black bg-white-700 hover:bg-blue-800 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                type="button"
              >
                Partner with Bolt{" "}
                <svg
                  class="w-4 h-4 ml-2"
                  aria-hidden="true"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </button>

              <div
                id="temi"
                class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w- dark:bg-gray-700 "
              >
                <ul
                  class="py-2 text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="sulaiman"
                >
                  <li>
                    <a
                      href="#"
                      class=" font-bold mt-3 text-[14px] text-black-500 block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Driver
                      <p className="text-[13px] w-[15rem] text-[#747a82]">Request a ride in minutes</p>
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Company
                      <p className="text-[13px] w-[15rem] text-[#747a82]">2 Wheel ride rental at your fingertips</p>
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Car-sharing
                      <p className="text-[13px] w-[15rem] text-[#747a82]">Top quality car rental at affordable prices</p>
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                     Food deliver
                     <p className="text-[13px] w-[15rem] text-[#747a82]">Your favorite food delivered fast</p>
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                     Food deliver
                     <p className="text-[13px] w-[15rem] text-[#747a82]"> All the essentials at your door in 15 minutes</p>
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                     Food deliver
                     <p className="text-[13px] w-[15rem] text-[#747a82]"></p>
                    </a>
                  </li>
                </ul>
              </div>


              <button
                id="dropdownDefaultButton"
                data-dropdown-toggle="dropdown"
                class="text-black bg-white-700 hover:bg-blue-800 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                type="button"
              >
                Support{" "}
                <svg
                  class="w-4 h-4 ml-2"
                  aria-hidden="true"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </button>

              <div
                id="dropdown"
                class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w- dark:bg-gray-700 "
              >
                <ul
                  class="py-2 text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="dropdownDefaultButton"
                >
                  <li>
                    <a
                      href="#"
                      class=" font-bold mt-3 text-[14px] text-black-500 block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Driver
                      <p className="text-[13px] w-[15rem] text-[#747a82]">Request a ride in minutes</p>
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Courier
                      <p className="text-[13px] w-[15rem] text-[#747a82]">2 Wheel ride rental at your fingertips</p>
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Car-sharing
                      <p className="text-[13px] w-[15rem] text-[#747a82]">Top quality car rental at affordable prices</p>
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                     Food deliver
                     <p className="text-[13px] w-[15rem] text-[#747a82]">Your favorite food delivered fast</p>
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                     Food deliver
                     <p className="text-[13px] w-[15rem] text-[#747a82]"> All the essentials at your door in 15 minutes</p>
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                     Food deliver
                     <p className="text-[13px] w-[15rem] text-[#747a82]"></p>
                    </a>
                  </li>
                </ul>
              </div>


              <button
                id="dropdownDefaultButton"
                data-dropdown-toggle="dropdown"
                class="text-black bg-white-700 hover:bg-blue-800 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                type="button"
              >
                Safety{" "}
                <svg
                  class="w-4 h-4 ml-2"
                  aria-hidden="true"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </button>

              <div
                id="dropdown"
                class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w- dark:bg-gray-700 "
              >
                <ul
                  class="py-2 text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="dropdownDefaultButton"
                >
                  <li>
                    <a
                      href="#"
                      class=" font-bold mt-3 text-[14px] text-black-500 block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Driver
                      <p className="text-[13px] w-[15rem] text-[#747a82]">Request a ride in minutes</p>
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Courier
                      <p className="text-[13px] w-[15rem] text-[#747a82]">2 Wheel ride rental at your fingertips</p>
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Car-sharing
                      <p className="text-[13px] w-[15rem] text-[#747a82]">Top quality car rental at affordable prices</p>
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                     Food deliver
                     <p className="text-[13px] w-[15rem] text-[#747a82]">Your favorite food delivered fast</p>
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                     Food deliver
                     <p className="text-[13px] w-[15rem] text-[#747a82]"> All the essentials at your door in 15 minutes</p>
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                     Food deliver
                     <p className="text-[13px] w-[15rem] text-[#747a82]"></p>
                    </a>
                  </li>
                </ul>
              </div>



              <button
                id="dropdownDefaultButton"
                data-dropdown-toggle="dropdown"
                class="text-black bg-white-700 hover:bg-blue-800 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                type="button"
              >
                Cities{" "}
                <svg
                  class="w-4 h-4 ml-2"
                  aria-hidden="true"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </button>

              <div
                id="dropdown"
                class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w- dark:bg-gray-700 "
              >
                <ul
                  class="py-2 text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="dropdownDefaultButton"
                >
                  <li>
                    <a
                      href="#"
                      class=" font-bold mt-3 text-[14px] text-black-500 block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Driver
                      <p className="text-[13px] w-[15rem] text-[#747a82]">Request a ride in minutes</p>
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Courier
                      <p className="text-[13px] w-[15rem] text-[#747a82]">2 Wheel ride rental at your fingertips</p>
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Car-sharing
                      <p className="text-[13px] w-[15rem] text-[#747a82]">Top quality car rental at affordable prices</p>
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                     Food deliver
                     <p className="text-[13px] w-[15rem] text-[#747a82]">Your favorite food delivered fast</p>
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                     Food deliver
                     <p className="text-[13px] w-[15rem] text-[#747a82]"> All the essentials at your door in 15 minutes</p>
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                     Food deliver
                     <p className="text-[13px] w-[15rem] text-[#747a82]"></p>
                    </a>
                  </li>
                </ul>
              </div>


              


             


            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbarr;
