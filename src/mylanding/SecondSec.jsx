import { RiArrowRightSLine } from 'react-icons/ri';

function SecondSec() {
  return (
    <div>
      <div className="grid grid-cols-2 gap-[8rem] px-[12rem] py-[17rem] bg-[#278ED6] sm:grid-cols-1 sm:px-5">
        <div className='bg-[white] px-[3rem] py-[4rem] rounded-2xl'>
          <h1 className="text-[2.5rem] font-bold">Transactions</h1>
          <p className="w-[20rem] text-[20px] text-gray-600">Retrieve realtime transaction data from connected financial accounts with the Transactions endpoint.</p>
          <a href="#" className="flex items-center font-medium mt-3 text-[18px] text-blue-500">
            Go to Guide <RiArrowRightSLine  />
          </a>
          <link rel="stylesheet" href="" />
        </div>
        <div className='bg-[white]  px-[3rem] py-[4rem] rounded-2xl'>
          <h1 className="text-[2.5rem] font-bold">Statements</h1>
          <p className="w-[20rem] text-[20px] text-gray-600">Retrieve bank statements from 1 to 12 months from connected accounts using the Statements endpoint.</p>
          <a href="#" className="flex items-center font-medium mt-3 text-[18px] text-blue-500">
            Go to Guide <RiArrowRightSLine  />
          </a>
          <link rel="stylesheet" href="" />
        </div>
        <div className='bg-[white] px-[3rem] py-[4rem] rounded-2xl'>
          <h1 className="text-[2.5rem] font-bold">Payments</h1>
          <p className="w-[20rem] text-[20px] text-gray-600">Collect bank transfer payments from connected accounts in your app, via the Payments endpoint.</p>
          <a href="#" className="flex items-center font-medium mt-3 text-[18px] text-blue-500">
            Go to Guide <RiArrowRightSLine  />
          </a>
          <link rel="stylesheet" href="" />
        </div>
        <div className='bg-[white] px-[3rem] py-[4rem] rounded-2xl'>
          <h1 className="text-[2.5rem] font-bold">Information</h1>
          <p className="w-[20rem] text-[20px] text-gray-600">Retrieve account holder information from connected accounts using the Accounts Endpoint.</p>
          <a href="#" className="flex items-center font-medium mt-3 text-[18px] text-blue-500">
            Go to Guide <RiArrowRightSLine  />
          </a>
          <link rel="stylesheet" href="" />
        </div>
        <div className='bg-[white] px-[3rem] py-[4rem] rounded-2xl'>
          <h1 className="text-[2.5rem] font-bold">Income</h1>
          <p className="w-[20rem] text-[20px] text-gray-600">Retrieve account holder income values and type from connected accounts in real-time.</p>
          <a href="#" className="flex items-center font-medium mt-3 text-[18px] text-blue-500">
            Go to Guide <RiArrowRightSLine  />
          </a>
          <link rel="stylesheet" href="" />
        </div>
        <div className='bg-[white] px-[3rem] py-[4rem] rounded-2xl'>
          <h1 className="text-[2.5rem] font-bold">Identity</h1>
          <p className="w-[20rem] text-[20px] text-gray-600">Retrieve account holder identity information like BVN, date of birth, phone number and more.</p>
          <a href="#" className="flex items-center font-medium mt-3 text-[18px] text-blue-500">
          Go to Guide <RiArrowRightSLine  />
          </a>
          <link rel="stylesheet" href="" />
        </div>
      </div>
    </div>
  );
}

export default SecondSec;
