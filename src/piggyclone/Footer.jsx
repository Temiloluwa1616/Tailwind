import { RiArrowRightSLine } from 'react-icons/ri';
import Hero from '../assets/piggyvest.jpeg'

function Footer (){
    return(
        <div className='flex px-[7rem] bg-[#0d60d8]  justify-between'>
            <div className='p-20'>
                <h1 className='text-[2.5rem] w-[20rem] text-white font-bold'>Meet Saver</h1>
                <a href="#" className="flex items-center font-medium mt-3 text-[18px] text-white">
                Meet saver of the month <RiArrowRightSLine  />
          </a>
            </div>
            <div>
                <img src={Hero} alt="" className='w-[30rem] h-[20rem]'/>
            </div>
        </div>
    )
}

export default Footer