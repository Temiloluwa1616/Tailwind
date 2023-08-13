import { GoHome } from 'react-icons/go';
import { MdQueueMusic } from 'react-icons/md';
import { MdRadio } from 'react-icons/md';
import { BiVideo } from 'react-icons/bi';
import { BiUserCircle } from 'react-icons/bi';
import { BiLogOut } from 'react-icons/bi';
import {Link,} from 'react-router-dom'

function Sidebar(){
    return(
        <div className=''>
            <div className='bg-[#1a1e1f]  p-4 space-y-3 rounded-full'>
                <Link to="/album">
            <div style={{ color: '#4f524f' }} onMouseEnter={(e) => e.target.style.color = 'white'} onMouseLeave={(e) => e.target.style.color = '#4f524f'}>
                <span>
                    <GoHome size={30} color='#4f524f' className='hover:text-white'/>
                </span>
            </div>
            </Link>

<Link to="/collection">
            <div style={{ color: '#4f524f' }} onMouseEnter={(e) => e.target.style.color = 'white'} onMouseLeave={(e) => e.target.style.color = '#4f524f'}>
  <span>
    <MdQueueMusic size={30} color='#4f524f' />
  </span>
</div>
</Link>


            <div style={{ color: '#4f524f' }} onMouseEnter={(e) => e.target.style.color = 'white'} onMouseLeave={(e) => e.target.style.color = '#4f524f'}>
                <span>
                <MdRadio size={30} color='#4f524f' className='hover:text-white'/>
                </span>
            </div>

            <div style={{ color: '#4f524f' }} onMouseEnter={(e) => e.target.style.color = 'white'} onMouseLeave={(e) => e.target.style.color = '#4f524f'}>
                <span>
                    <BiVideo size={30} color='#4f524f'/>
                </span>
            </div>
            </div>

            

            <div className='bg-[#1a1e1f]  p-4 space-y-3 rounded-full mt-[2rem]'>
            <div style={{ color: '#4f524f' }} onMouseEnter={(e) => e.target.style.color = 'white'} onMouseLeave={(e) => e.target.style.color = '#4f524f'}>
                <span>
                    <BiUserCircle size={30} color='#4f524f'/>
                </span>
            </div>

            <div style={{ color: '#4f524f' }} onMouseEnter={(e) => e.target.style.color = 'white'} onMouseLeave={(e) => e.target.style.color = '#4f524f'}>
                <span>
                    <BiLogOut size={30} color='#4f524f'/>
                </span>
            </div>
            </div>
            
        </div>
    )
}

export default Sidebar