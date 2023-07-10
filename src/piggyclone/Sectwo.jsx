import { RiArrowRightSLine } from 'react-icons/ri';

function Sectwo (){
    return(
        <div className="flex px-[7rem] gap-[8rem] py-[7rem]">
          <div>
            <h1 className="text-[2.5rem] w-[20rem] font-bold">4 ways to build your savings</h1>
            <p className="text-[16px] w-[20rem] font-normal py-3">Earn 5%-15% when you save with any of these PiggyVest plans.</p>
            <button className="p-3 bg-black text-white rounded-lg mt-4">Start Saving</button>
          </div>
          <div className="grid grid-cols-2 gap-[3rem]">
          <div className='bg-[#f9f9f9] px-[3rem] py-[4rem] rounded-2xl'>
          <h1 className="text-[1.5rem] font-bold">Automated Savings</h1>
          <p className="w-[15rem] text-[17px] text-gray-600 mt-4">Build a dedicated savings faster on your terms automatically or manually.</p>
          <a href="#" className="flex items-center font-medium mt-3 text-[18px] text-black-500">
            piggybank <RiArrowRightSLine  />
          </a>
          <link rel="stylesheet" href="" />
        </div>

           <div className='bg-[#f9f9f9]  px-[3rem] py-[4rem] rounded-2xl'>
          <h1 className="text-[1.5rem] font-bold">Fixed Savings</h1>
          <p className="w-[15rem] text-[17px] text-gray-600 mt-4">Lock money away for a fixed duration with no access to it until maturity. It’s like having a custom fixed deposit.</p>
          <a href="#" className="flex items-center font-medium mt-3 text-[18px] text-black-500">
            Safelock <RiArrowRightSLine  />
          </a>
          <link rel="stylesheet" href="" />
        </div>

            <div className='bg-[#f9f9f9] px-[3rem] py-[4rem] rounded-2xl'>
          <h1 className="text-[1.5rem] font-bold">Goal-oriented Savings</h1>
          <p className="w-[15rem] text-[17px] text-gray-600 mt-4">Reach all your savings goals faster. Save towards multiple goals on your own or with a group.</p>
          <a href="#" className="flex items-center font-medium mt-3 text-[18px] text-black-500">
          Target Savings <RiArrowRightSLine  />
          </a>
          <link rel="stylesheet" href="" />
        </div>

            <div className='bg-[#f9f9f9] px-[3rem] py-[4rem] rounded-2xl'>
          <h1 className="text-[1.5rem] font-bold">Flexible Savings</h1>
          <p className="w-[15rem] text-[17px] text-gray-600 mt-4">Save, transfer, withdraw, manage and organise your money for free at any time.</p>
          <a href="#" className="flex items-center font-medium mt-3 text-[18px] text-black-500">
          Flex Naira <RiArrowRightSLine  />
          </a>
          <link rel="stylesheet" href="" />
        </div>
          </div>
        </div>
    )
}

export default Sectwo