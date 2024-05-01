import './userinfo.css'
import { IoIosMore, IoIosVideocam } from "react-icons/io";
import { RxAvatar } from "react-icons/rx";
import { FaEdit } from "react-icons/fa";

const Userinfo = () => {
    console.log('object')
    return (
        <div className='userinfo'>
            <div className="user">
                <RxAvatar className='icon'/>
                <h2>John Doe</h2>
            </div>
            <div className="icons">
                <IoIosMore className='icon'/>
                <IoIosVideocam className='icon'/>
                <FaEdit className='icon'/>
            </div>
        </div>
    )
}

export default Userinfo
