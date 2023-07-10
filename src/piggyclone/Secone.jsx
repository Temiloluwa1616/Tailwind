import security from '../assets/security.png'

function Secone(){
    return(
        <div className='flex px-[7rem] gap-5 justify-center py-[9rem]'>
           <div>
            <img src={security} alt="" className='w-[6rem]'/>
           </div>
           <div>
            <h1 className='text-[2.0rem] w-[40rem] font-bold '>Your security is our priority</h1>
            <p className='text-[16px] w-[40rem] font-normal'>PiggyVest uses the highest level of Internet Security and 
               it is secured by 256 bits SSL security encryption to ensure that your information 
               is comepletely protected from fraud.</p>

               <a href="" className='flex items-center font-medium mt-3 text-[18px] text-blue-500'>Learn More</a>
           </div>
        </div>
    )
}

export default Secone


