import logo from '../assets/Boltassets/logo.svg'
import { useState } from "react"
import SSidebar from '../Sharedbar/SSidebar'
import Albumo from '../assets/Boltassets/AlbumCardo.png'
import Albumth from '../assets/Boltassets/AlbumCardth.png'
import Albumfi from '../assets/Boltassets/AlbumCardfi.png'
import Albums from '../assets/Boltassets/AlbumCards.png'
import Limits from '../assets/Boltassets/Limits.png'

function Collections(){
    const [searchTerm ,setSearchTerm] = useState('')
    return(
        <div className=' bg-[#1d2123] h-screen px-[3rem] pt-[2rem] sm:h-[100%]'>
             <div className="flex gap-5">
            <div>
                <img src={logo} alt="Logo" width={40} height={40} className='sm:w-[3rem]'/>
            </div>
             <div className="flex items-center bg-white rounded-lg ">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="px-4 py-2 w-[20rem] rounded-l-lg  border border-none bg-[#1d2123]
           sm:hidden"
        />
      </div>
            </div>

            <div className='flex gap-5 mt-8'>
                <div className='lg:block sm:hidden'>
                    <SSidebar/>
                </div>
                <div>
                    <div className='flex gap-5'>
                        <div className='bg-[#facd66] p-2 rounded-full sm:pl-[3rem] sm:pr-[3rem]'>
                            <p>My Collection</p>
                        </div>
                        <div className='bg-[#1d2123] p-2 pl-5 pr-5 border border-white rounded-full text-white sm:pl-[2rem] sm:pr-[2rem]'>
                            <p >Likes</p>
                        </div>

                    </div>
                    <div className='flex gap-8 mt-6 sm:flex-col'>
                        <img src={Albumth} alt="" width={180} height={180} className='sm:w-[20rem]'/>
                        <img src={Albumfi} alt="" width={180} height={180} className='sm:w-[20rem]'/>
                        <img src={Albumo} alt="" width={180} height={180} className='sm:w-[20rem]'/>
                        <img src={Albums} alt="" width={180} height={180} className='sm:w-[20rem]'/>
                       
                       

                    </div>
                </div>
            </div>

            <div className=' fixed bottom-0 left-0 right-0 bg-[#1c2022] py-3 text-center ' style={{boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"}}>
                <audio controls className='w-full '>
                    <source src='' type='' />
                   
                </audio>
                
            </div>
        </div>
    )
}

export default Collections