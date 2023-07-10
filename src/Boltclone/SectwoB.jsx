import Road from '../assets/Boltassets/Road(1).png'

function SectwoB(){
    return(
        <div className="px-[7rem] flex">
           <div className='w-[50%]'>
                    <h1 className="text-[2.5rem] w-[30rem] text-[black] font-bold  sm:text-[2.5rem] sm:w-[25rem]">Sharing best practices</h1>

                    <p className="text-[20px] w-[30rem] font-normal  mt-3 sm:text-[20px] sm:w-[20rem] sm:pl-[5rem]">We’re able to provide insights that help local authorities make their cities more connected and liveable.</p>

                <div className="ml-9">
                    <div className="flex pr-20 relative">
                    <span className="w-[1.5rem] h-[1.5rem] absolute right-[34rem] top-[1rem] bg-[#32bb78] text-white text-center rounded-full "> 1 </span><h3 className="text-[1.2rem] w-[30rem] mt-3 text-[black] font-bold  sm:text-[2.5rem] sm:w-[25rem]">One app, many ways to move</h3>
                    </div>
                    <p className="text-[18px] w-[30rem] font-normal  text-gray-600 mt-3 sm:text-[20px] sm:w-[20rem] sm:pl-[5rem]">With multiple transport services inside a single app, getting around safely, in a more sustainable way, has never been easier.</p>

                    <div className="flex pr-20">
                    <span className="w-[1.5rem] h-[1.5rem] absolute top-[165em] right-[76.2rem]  bg-[#32bb78] text-white text-center rounded-full  "> 2 </span><h3 className="text-[1.2rem] mt-3 w-[30rem] text-[black] font-bold  sm:text-[2.5rem] sm:w-[25rem]">Drive more, earn more</h3>

                    </div>
                    <p className="text-[18px] w-[30rem] font-normal text-gray-600  mt-3 sm:text-[20px] sm:w-[20rem] sm:pl-[5rem]">Our 100+ million riders will send you plenty of ride requests. When demand is high, you can earn even more.</p>

                    <div className=" pr-20">
                    <span className="w-[1.5rem] h-[1.5rem] absolute top-[171.7rem] right-[76.2rem] bg-[#32bb78] text-white text-center rounded-full "> 3 </span><h3 className="text-[1.2rem] mt-3 w-[30rem] text-[black] font-bold  sm:text-[2.5rem] sm:w-[25rem]">Sustainability as a priority</h3>
                    <p className="text-[18px] w-[30rem] font-normal  text-gray-600 mt-3 sm:text-[20px] sm:w-[20rem] sm:pl-[5rem]">We’re compensating for the CO2 emissions our transport and delivery solutions create, minimising our impact on the local environment.</p>
                    </div>
                </div>

                    

                    <button className='gap-2 text-[black] bg-[#f5f6f7] p-3 my-[1rem] rounded-3xl sm:p-2 sm:my-0 sm:'>Learn more</button>
                </div>
            <div>
                <img src={Road} alt="" className='w-[40rem]'/>
            </div>
        </div>
    )
}

export default SectwoB



