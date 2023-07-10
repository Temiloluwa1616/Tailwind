import { useState } from 'react'
import Bolthero from '../assets/Boltassets/driver.webp'

function SeconeB(){
const [activeButton, setActiveButton] = useState(1)

 function handleButton(buttonid){
    setActiveButton(buttonid)
 }
    return(
        <div className="px-[7rem] py-[5rem]">
            <div className=" text-right">
                
                    <h1 className="text-[3rem] w-[50rem] font-bold  sm:text-[2.5rem] sm:w-[25rem]">Earn money with Bolt</h1>
                
                <div className="flex gap-5 pl-[18rem]">
                    <button className={ activeButton == 1 ?  " text-[white] bg-[#2f313f] p-3 my-[1rem] rounded-3xl sm:p-2 sm:my-0 sm:"  : ''} onClick={()=>handleButton(1)}>Driver</button>
                    <button className={ activeButton == 2 ? "border-2   gap-2 text-[black] bg-[white] p-3 my-[1rem] rounded-3xl sm:p-2 sm:my-0 sm:" : ''} onClick={()=>handleButton(2)}>Courier</button>
                    <button className={ activeButton == 3 ? "border-2   gap-2 text-[black] bg-[white] p-3 my-[1rem] rounded-3xl sm:p-2 sm:my-0 sm:" : ''} onClick={()=>handleButton(3)}>Restaurant or store owner</button>
                    <button className= { activeButton == 4 ? "border-2  gap-2 text-[black] bg-[white] p-3 my-[1rem] rounded-3xl sm:p-2 sm:my-0 sm:" : ''} onClick={()=>handleButton(4)}>Fleet owner</button>
                </div>
            </div>

            { activeButton === 1 && <div className='py-[7rem] flex  gap-20'>
                <div className='w-[50%]'>
                    <img src={Bolthero} alt="" className='w-[45rem] h-[35rem] rounded-2xl'/>
                </div>
                <div className='w-[50%]'>
                    <h1 className="text-[2.5rem] w-[30rem] text-[black] font-bold  sm:text-[2.5rem] sm:w-[25rem]">Drive and earn extra money</h1>
                    <div className='ml-9'>
                    <div className="flex pr-20 relative">
                    <span className="w-[1.5rem] h-[1.5rem]  absolute right-[34rem] top-[1rem] bg-[#32bb78] text-white text-center rounded-full "> 1 </span><h3 className="text-[1.2rem] w-[30rem] mt-3 text-[black] font-bold  sm:text-[2.5rem] sm:w-[25rem]">Drive more, earn more</h3>

                    </div>
                    <p className="text-[18px] w-[30rem] font-normal  text-gray-600 mt-3 sm:text-[20px] sm:w-[20rem] sm:pl-[5rem]">Our 100+ million riders will send you plenty of ride requests. When demand is high, you can earn even more.</p>

                    <div className="flex pr-20 relative">
                    <span className="w-[1.5rem] h-[1.5rem] absolute right-[34rem] top-[1rem] bg-[#32bb78] text-white text-center rounded-full  "> 2 </span><h3 className="text-[1.2rem] mt-3 w-[30rem] text-[black] font-bold  sm:text-[2.5rem] sm:w-[25rem]">Drive more, earn more</h3>

                    </div>
                    <p className="text-[18px] w-[30rem] font-normal text-gray-600  mt-3 sm:text-[20px] sm:w-[20rem] sm:pl-[5rem]">Our 100+ million riders will send you plenty of ride requests. When demand is high, you can earn even more.</p>

                    <div className=" pr-20 relative">
                    <span className="w-[1.5rem] h-[1.5rem] absolute top-[1.1rem] right-[33.8rem] bg-[#32bb78] text-white text-center rounded-full "> 3 </span><h3 className="text-[1.2rem] mt-3 w-[30rem] text-[black] font-bold  sm:text-[2.5rem] sm:w-[25rem]">Drive more, earn more</h3>
                    <p className="text-[18px] w-[30rem] font-normal  text-gray-600 mt-3 sm:text-[20px] sm:w-[20rem] sm:pl-[5rem]">Our 100+ million riders will send you plenty of ride requests. When demand is high, you can earn even more.</p>    
                    </div>
                    </div>
                    

                    <button className='gap-2 text-[black] bg-[#f5f6f7] p-3 my-[1rem] rounded-3xl sm:p-2 sm:my-0 sm:'>Learn more</button>
                </div>
            </div>}

            { activeButton=== 2 &&  <div>2</div>}

            { activeButton === 3 && <div> 3</div>}


            <div>
                <h1 className='text-[2.5rem] w-[30rem] ml-[27rem] text-[black] font-bold  sm:text-[2.5rem] sm:w-[25rem] pb-5 '>Our Services</h1>
                <div className='grid grid-cols-3 gap-[3rem]'>
                    <div className='bg-[#f5f6f7] px-[1rem] py-[2rem] w-[20rem] rounded-2xl'>
                        <h1 className='text-[1.8rem]  text-[black] font-bold  sm:text-[2.5rem] sm:w-[25rem]'>Rides</h1>
                        <p className='text-[18px] w-[15rem] font-normal  text-gray-600 mt-3 sm:text-[20px] sm:w-[20rem] sm:pl-[5rem]'>Request in seconds, Rides in minutes</p>
                    </div>
                    <div className='bg-[#f5f6f7] px-[1rem] py-[2rem] w-[20rem] rounded-2xl'>
                        <h1 className='text-[1.8rem]  text-[black] font-bold  sm:text-[2.5rem] sm:w-[25rem]'>Delivery</h1>
                        <p className='text-[18px] w-[15rem] font-normal  text-gray-600 mt-3 sm:text-[20px] sm:w-[20rem] sm:pl-[5rem]'>Your Favourite food delivered fast</p>
                    </div>
                    <div className='bg-[#f5f6f7] px-[1rem] py-[2rem] w-[20rem] rounded-2xl'>
                    <h1 className='text-[1.8rem]  text-[black] font-bold  sm:text-[2.5rem] sm:w-[25rem]'>Groceries</h1>
                        <p className='text-[18px] w-[15rem] font-normal  text-gray-600 mt-3 sm:text-[20px] sm:w-[20rem] sm:pl-[5rem]'>All the essentials Whenever you need them</p>
                    </div>
                    <div className='bg-[#f5f6f7] px-[1rem] py-[2rem] w-[20rem] rounded-2xl'>
                    <h1 className='text-[1.8rem]  text-[black] font-bold  sm:text-[2.5rem] sm:w-[25rem]'>Car sharing</h1>
                        <p className='text-[18px] w-[15rem] font-normal  text-gray-600 mt-3 sm:text-[20px] sm:w-[20rem] sm:pl-[5rem]'>High quality car rentals made easy</p>
                    </div>
                    <div className='bg-[#f5f6f7] px-[1rem] py-[2rem] w-[20rem] rounded-2xl'>
                    <h1 className='text-[1.8rem] text-[black] font-bold  sm:text-[2.5rem] sm:w-[25rem]'>Micromobility</h1>
                        <p className='text-[18px] w-[15rem] font-normal  text-gray-600 mt-3 sm:text-[20px] sm:w-[20rem] sm:pl-[5rem]'>2 wheel ride rental at your fingertips</p>
                    </div>
                    <div className='bg-[#f5f6f7] px-[1rem] py-[2rem] w-[20rem] rounded-2xl'>
                    <h1 className='text-[1.8rem]  text-[black] font-bold  sm:text-[2.5rem] sm:w-[25rem]'>Business</h1>
                        <p className='text-[18px] w-[15rem] font-normal  text-gray-600 mt-3 sm:text-[20px] sm:w-[20rem] sm:pl-[5rem]'>Manage business travels for your team and clients</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SeconeB


// import { useState } from "react";

// const EarnMoney = () => {
//     const [activeButton, setActiveButton] = useState(1);

//     const handleButtonClick = (buttonId) => {
//       setActiveButton(buttonId);
//     };
//   return (
//     <section>
//       <div>
//         <div className="text-center">
//           <p>Earn money with Bolt</p>
//           <div>
//             <button className={activeButton === 1 ? 'bg-black text-white' : ''} onClick={() => handleButtonClick(1)}>Button 1</button>
//             <button className={activeButton === 2 ? 'bg-black text-white' : ''} onClick={() => handleButtonClick(2)}>Button 2</button>
//             <button className={activeButton === 3 ? 'bg-black text-white' : ''} onClick={() => handleButtonClick(3)}>Button 3</button>
//             <button className={activeButton === 4 ? 'bg-black text-white' : ''} onClick={() => handleButtonClick(4)}>Button 4</button>
        
//             {/* Render div based on activeButton */}
//             {activeButton === 1 && <div>Div 1 is a fantsatic div</div>}
//             {activeButton === 2 && <div>Div 2</div>}
//             {activeButton === 3 && <div>Div 3</div>}
//             {activeButton === 4 && <div>Div 4</div>}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default EarnMoney;