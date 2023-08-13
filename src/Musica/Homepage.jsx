
import SSidebar from '../Sharedbar/SSidebar'
import Albumo from '../assets/Boltassets/AlbumCardo.png'
import Albumt from '../assets/Boltassets/AlbumCardt.png'
import Albumth from '../assets/Boltassets/AlbumCardth.png'
import Albumf from '../assets/Boltassets/AlbumCardf.png'
import Albumfi from '../assets/Boltassets/AlbumCardfi.png'
import Albums from '../assets/Boltassets/AlbumCards.png'
import Albumse from '../assets/Boltassets/AlbumCard.png'
import logo from '../assets/Boltassets/logo.svg'
import Rectangleo from '../assets/Boltassets/rectangleo.png'
import Rectanglet from '../assets/Boltassets/Rectanglet.png'
import Rectanglett from '../assets/Boltassets/Rectanglett.png'
import Vector from "../assets/Boltassets/Vector.png"
import Pexel from "../assets/Boltassets/Pexels.png"
import Likes from "../assets/Boltassets/Likes.png"
import { IoHeartCircle } from "react-icons/io5";
import { FaHeart } from 'react-icons/fa';

import SwipeableViews from 'react-swipeable-views';






function HomePage() {
    
   
    return (
        <div className='px-[3rem] pt-[2rem] bg-[#1d2123] pb-16 h-[100%] text-white sm:px-[1.5rem]'>
            <div>
                <img src={logo} alt="Logo" width={40} height={40} />
            </div>

            <div className='pt-[3rem] flex gap-6 sm:flex-col'>
                <div className='lg:block sm:hidden'>
              <SSidebar/>
                </div>
                <div className='w-[45rem] bg-bgg relative bg-cover bg-no-repeat rounded-3xl overflow-hidden sm:w-[23rem] sm:h-[28rem]'>
                    <div className='px-[3rem] flex  '>
                        <div>
                    <p className='text-[15px] mt-10'>Currated Playlist</p>
                    <div className='sm:mt-[8rem]'>
                    <h2 className='text-[30px] pt-[2.5rem] w-[20rem]'>
                        R&B Hits
                    </h2>
                    <p className='w-[20rem]  font-mono'>
                        All mine, Lie again,Petty call me everyday,Out of time,No love,Bad habit, and so much more
                    </p>
                   
                   

                    <div className='mt-[4rem] flex gap-5 sm:mt-5'>
                        <img src={Likes} alt="" />
                        <FaHeart color="white" size={24} />
                        <p>33k Likes</p>
                    </div>
                    </div>
                    </div>

                    <div className=''>
                        <img src={Pexel}  width={300} height={300} className='relative z-10 lg:block  sm:hidden'/>
                        <img src={Vector}  width={450} height={450}  className='absolute left-[15rem] bottom-[0rem] object-contain '/>

                    </div>
                    
                    </div>
                    
                     

                </div>

                <div>
    <h1 className='text-[20px] font-bold'>Top Charts</h1>
    <SwipeableViews
    
    enableMouseEvents>
    <div className='mt-3 lg:flex-col sm:flex sm:gap-10 sm:w-[100rem]'>
        
        <div className='flex gap-4 bg-[#1a1e1f] p-3 rounded-2xl items-center sm:flex-col sm:p-[1] sm:items-start sm:relative sm:w-[15rem]'>
            <img src={Rectangleo} alt="" width={60} height={60} className='sm:w-[5rem]'/>
            <div>
                <h3>
                    Golden age of 80s
                </h3>
                <p className='text-[12px] font-thin'>
                    Sean Swadder
                </p>
                <p className='text-[12px] font-light sm:mt-6'>2:34:45</p>
            </div>
            <div className="ml-auto pl-[4rem] sm:ml-[0] sm:absolute sm:top-1 sm:right-[1rem]">
                <IoHeartCircle size={30} />
            </div>
        </div>

        <div className='flex gap-4 mt-3 bg-[#1a1e1f] p-3 rounded-2xl items-center sm:flex-col sm:p-[1] sm:items-start sm:relative sm:w-[15rem]'>
            <img src={Rectanglet} alt="" width={60} height={60} className='sm:w-[5rem]'/>
            <div>
                <h3>
                    Reggae 'n' Blues
                </h3>
                <p className='text-[12px] font-thin'>
                    Dj yk mule
                </p>
                <p className='text-[12px] font-light'>2:34:45</p>
            </div>
            <div className="ml-auto sm:ml-[0] sm:absolute sm:top-1 sm:right-[1rem]">
                <IoHeartCircle size={30} />
            </div>
        </div>

        <div className='flex gap-4 mt-3 bg-[#1a1e1f] p-3 rounded-2xl items-center sm:flex-col sm:p-[1] sm:items-start sm:relative sm:w-[15rem]'>
            <img src={Rectanglett} alt="" width={60} height={60} className='sm:w-[5rem]'/>
            <div>
                <h3>
                    Tommorow's tunes
                </h3>
                <p className='text-[12px] font-thin'>
                    Obi Datti
                </p>
                <p className='text-[12px] font-light'>2:34:45</p>
            </div>
            <div className="ml-auto sm:ml-[0] sm:absolute sm:top-1 sm:right-[1rem]">
                <IoHeartCircle size={30} />
            </div>
        </div>
       
       
    </div>
    </SwipeableViews>



</div>

               
            </div>

            <div className='px-[3rem] mt-6'>
                    <h2 className='text-[17px] font-bold'>New Releases</h2>
                    <div>
                    <SwipeableViews >
                        <div className='flex gap-6'>
                            
                            <img src={Albumo} alt="" width={120} height={120}/>
                            <img src={Albumt} alt="" width={120} height={120}/>
                            <img src={Albumth} alt="" width={120} height={120}/>
                            <img src={Albumf} alt="" width={120} height={120}/>
                            <img src={Albumfi} alt="" width={120} height={120}/>
                            <img src={Albums} alt="" width={120} height={120}/>
                            <img src={Albums} alt="" width={120} height={120}/>
                            
                        </div>
                        </SwipeableViews>
                        
                    </div>
            </div>
           
            <div className=' fixed bottom-0 left-0 right-0 bg-[#1d2123] py-3 text-center sm:max-w-[414px]'>
                <audio controls className='w-full '>
                    <source src='' type='' />
                   
                </audio>
                
            </div>
        </div>
    )
}

export default HomePage;
