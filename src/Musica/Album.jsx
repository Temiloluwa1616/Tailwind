import { useState } from "react"
import logo from '../assets/Boltassets/logo.svg'
import lead from '../assets/Boltassets/Lead.png'
import SSidebar from "../Sharedbar/SSidebar"
import { IoPlayCircle } from 'react-icons/io5'
import { BsMusicNote } from 'react-icons/bs';
import { IoHeartCircle } from "react-icons/io5";
import reco from '../assets/Boltassets/Rectangle1.png'
import rect from '../assets/Boltassets/Rectangle2.png'
import recth from '../assets/Boltassets/Rectangle3.png'
import recf from '../assets/Boltassets/Rectangle4.png'
import { AiOutlineHeart } from 'react-icons/ai';
import { AiOutlineMore } from 'react-icons/ai';




function Album(){
    const [searchTerm ,setSearchTerm] = useState('')
    const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

    return(
        
        <div className="px-[3rem] pt-[2rem] pb-[5rem] bg-[#1d2123] h-screen overflow-y-auto sm:px-[1.5rem]">
            <div className="flex gap-5">
            <div>
                <img src={logo} alt="Logo" width={40} height={40} />
            </div>
             <div className="flex items-center bg-white rounded-lg">
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

            <div className="mt-[2rem] flex  gap-5">
                <div className=" lg:block sm:hidden">
                    <SSidebar/>
                </div>
                
                <div>
                    <div className="flex gap-10 sm:flex-col">
                <div>
                    <img src={lead} alt="" width={220} height={220} className="sm:w-[20rem]"/>
                </div>

                <div className="mt-[3rem] sm:mt-0">
                    <h1 className="text-[30px] font-bold text-[#a4c7c6]">Tomorrow's Tunes</h1>
                    <p className="w-[45rem] text-white sm:w-[20rem]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, tempore alias,?</p>
                        <p className="mt-3 text-white">
                            64songs-16hrs +
                        </p>

                        <div className="flex items-center gap-5 mt-[2rem] text-white">
                            <div className="flex items-center"><span>
                            <IoPlayCircle size={30} color='#facd66'/>
                            </span>
                                
                                <p>Play All</p>
                            </div>
                            <div className="flex items-center ">
                                <span>
                                    <BsMusicNote size={30} color='#facd66'/>
                                </span>
                                <p>
                                    Add to collection
                                </p>
                            </div>

                            <div>
                                <span>
                                    <IoHeartCircle size={30} color='#e5524a'/>
                                </span>
                            </div>
                        </div>
                        
                </div>
                </div>

<div className="mt-7 text-white" >
                <div className="flex gap-10 items-center bg-[#26292d] p-2 rounded-xl sm:gap-3 sm:w-[23rem]">
      <div>
        <div className="flex items-center gap-4">
          
          <img src={reco} alt="" />
          <AiOutlineHeart size={25} color="#4f524f" className="sm:hidden"/>
        </div>
      </div>

      <div className="flex gap-[15rem] sm:gap-[7rem] sm:relative">
        <p className="sm:pb-5 sm:text-[14px]">Let me love you-krisk</p>
        <p className="sm:absolute left-0 top-6">Single</p>
        <p className="sm:absolute right-0 top-6">4:17</p>
        <AiOutlineMore size={25} />
      </div>

     
    </div>

    <div className="flex gap-10 items-center mt-2.5 bg-[#26292d] p-2 rounded-xl sm:gap-3 sm:w-[23rem]">
      <div>
        <div className="flex items-center gap-4 ">
          
          <img src={reco} alt="" />
          <AiOutlineHeart size={25} color="#4f524f"  className="sm:hidden"/>
        </div>
      </div>

      <div className="flex gap-[15rem] sm:gap-[7rem] sm:relative">
        <p className="sm:pb-5 sm:text-[14px]">Let me love you-krisk</p>
        <p className="sm:absolute left-0 top-6">Single</p>
        <p className="sm:absolute right-0 top-6">4:17</p>
        <AiOutlineMore size={25} />
      </div>

      
    </div>

    <div className="flex gap-10 items-center mt-2.5 bg-[#26292d] p-2 rounded-xl sm:gap-3 sm:w-[23rem]">
      <div>
        <div className="flex items-center gap-4">
          
          <img src={reco} alt="" />
          <AiOutlineHeart size={25} color="#4f524f" className="sm:hidden"/>
        </div>
      </div>

      <div className="flex gap-[15rem] sm:gap-[7rem] sm:relative">
        <p className="sm:pb-5 sm:text-[14px]">Let me love you-krisk</p>
        <p className="sm:absolute left-0 top-6">Single</p>
        <p className="sm:absolute right-0 top-6">4:17</p>
        <AiOutlineMore size={25} />
      </div>

      
    </div>

    <div className="flex gap-10 items-center mt-2.5 bg-[#26292d] p-2 rounded-xl sm:gap-3 sm:w-[23rem]">
      <div>
        <div className="flex items-center gap-4">
          
          <img src={reco} alt="" />
          <AiOutlineHeart size={25} color="#4f524f" className="sm:hidden"/>
        </div>
      </div>

      <div className="flex gap-[15rem] sm:gap-[7rem] sm:relative">
        <p className="sm:pb-5 sm:text-[14px]">Let me love you-krisk</p>
        <p className="sm:absolute left-0 top-6">Single</p>
        <p className="sm:absolute right-0 top-6">4:17</p>
        <AiOutlineMore size={25} />
      </div>

      
    </div>
    </div>
                </div>
         
            </div>

            <div className=' fixed bottom-0 left-0 right-0 bg-[#1d2123] py-3 text-center'>
                <audio controls className='w-full '>
                    <source src='' type='' />
                    
                </audio>
                
            </div>

            
           

        </div>
       
    )
}

export default Album





