
import Sidebar from "../Musica/Sidebar";

function SSidebar({children}){
    return (
        <div>
            <Sidebar/>
            {children}
        </div>
    )
}

export default SSidebar