import './chatlist.css'
import { FaSearch } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";

const CahtList = () => {
    return (
        <div className='chatList'>
            <div className="">
                <div className="searchBar">
                    <FaSearch />
                    <input type="text" placeholder='Search' />
                </div>
                <FaPlus />
            </div>
        </div>
    )
}

export default CahtList
