import map from '../assets/Boltassets/map.svg'
function Map(){
    return(
        <div className='px-[7rem] py-[10rem]'>
            <div className='text-center'>
                <h1 className="text-[2.5rem] ml-[20rem] w-[30rem] text-[black] font-bold  sm:text-[2.5rem] sm:w-[25rem]">À propos</h1>
                <p className="text-[20px] w-[50rem] ml-[10rem] font-normal pb-7 mt-3 sm:text-[20px] sm:w-[20rem] sm:pl-[5rem]">Bolt is the first European mobility super-app. 
                    We’re making cities for people, offering better 
                    alternatives for every purpose a private car serves — 
                    including ride-hailing, shared cars, scooters, and food and grocery delivery.</p>
            </div>
            <div>
                <img src={map} alt="" className='w-[70rem]'/>
            </div>
            <div className='flex justify-center gap-[10rem] mt-9'>
                <div className='text-center'>
                    <h1 className="text-[1.5rem]   text-[black] font-bold  sm:text-[2.5rem] sm:w-[25rem]">100+ million</h1>
                    <p  className="text-[18px]   font-normal   sm:text-[20px] sm:w-[20rem] sm:pl-[5rem]">customers around the world.</p>
                </div>
                <div className='text-center'>
                    <h1 className="text-[1.5rem]   text-[black] font-bold  sm:text-[2.5rem] sm:w-[25rem]">5 Continents</h1>
                    <p  className="text-[18px]   font-normal   sm:text-[20px] sm:w-[20rem] sm:pl-[5rem]">45+ countries.</p>
                </div>
                <div className='text-center'>
                    <h1 className="text-[1.5rem]   text-[black] font-bold  sm:text-[2.5rem] sm:w-[25rem]">3.1+ million</h1>
                    <p  className="text-[18px]   font-normal   sm:text-[20px] sm:w-[20rem] sm:pl-[5rem]">drivers and couriers.</p>
                </div>
            </div>
        </div>
    )
}

export default Map