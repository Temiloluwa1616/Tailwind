import rect from '../assets/rect.png'
import header from '../assets/headerimg.png'
import invest from '../assets/investify.png'
import rent from '../assets/rent.png'

function Heroo(){
    return(
        <div className=" flex gap-[17rem] px-[7rem] py-[2rem] sm:px-10">
            <div className='w-[40%]'>
                <h1 className="text-[4.0rem] w-[38rem] font-bold py-10 sm:text-[2.5rem] sm:w-[20rem] sm:py-1  text-center">The Better Way to Save & Invest.</h1>
                <p className="text-[20px] w-[35rem] font-normal sm:text-[15px]  text-center sm:w-[20rem] 
                ">PiggyVest helps over 4 million customers achieve their financial goals by helping them save and invest with ease.</p>
                <button className="p-4 bg-black text-white rounded-lg mt-5 sm:p-2 sm:pl-10 sm:pr-10 sm:mt-20">
                    Create Free Account
                </button>
                <div className='flex gap-4 mt-9'>
                    <button className='p-4 bg-white text-black border-2 rounded-lg '>Get on iPhone</button>
                    <button className='p-4 bg-white text-black border-2 rounded-lg '>Get on Android</button>
                </div>
            </div>
            <div className='w-[60%]'>
                <img src={rect} alt="" className='relative'/>
                <img src={header} alt="" className='absolute top-[12rem] left-[50rem]'/>
                <img src={rent} alt="" className='w-[15rem] absolute top-[18rem] left-[42rem]' />
                <img src={invest} alt="" className='w-[15rem] absolute top-[35rem] right-[5rem]'/>
            </div>
        </div>
    )
}

export default Heroo