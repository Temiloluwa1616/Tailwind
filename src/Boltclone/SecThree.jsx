import players from '../assets/Boltassets/players.jpg'
import man from '../assets/Boltassets/manincar.jpg'
import car from '../assets/Boltassets/boltcar.jpg'

function SecThree(){
    return(
        <div className='px-[7rem] py-[8rem]'>
            <div className='flex gap-[30rem] pb-6 '>
                <h1 className='text-[2.5rem] w-[30rem]  text-[black] font-bold  sm:text-[2.5rem] sm:w-[25rem] pb-5 '>News and updates</h1>
                <a href="" className="flex font-medium mt-3 text-[22px]">View all</a>
            </div>
            <div className='flex gap-8'>
                <div>
                    <img src={players} alt="" className='w-[25rem] rounded-xl'/> 
                    <h1 className='text-[1.3rem]  font-bold  sm:text-[2.5rem] sm:w-[25rem]  '>Bringing drivers together with football</h1>
                </div>
                <div>
                    <img src={man} alt="" className='w-[25rem] rounded-xl'/>
                    <h1 className='text-[1.3rem]    font-bold  sm:text-[2.5rem] sm:w-[25rem] '>How much is a bolt ride?</h1>
                </div>
                <div>
                    <img src={car} alt="" className='w-[25rem] rounded-xl'/>
                    <h1 className='text-[1.3rem] w-[20rem]  font-bold  sm:text-[2.5rem] sm:w-[25rem] '>Get the Bolt Logo on Your car and get a bonus!</h1>
                </div>
            </div>
        </div>
    )
}

export default SecThree