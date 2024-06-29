import './userinfo.css'
import { IoIosMore, IoIosVideocam } from "react-icons/io";
import { FaEdit } from "react-icons/fa";
import { userStore } from '../../../lib/userStore';

const Userinfo = () => {
    const { currentUser } = userStore()

    return (
        <div className='userInfo'>
            <div className="user">
                <img src={currentUser.imgUrl || '../../../../public/userImag.png'} className='icon'/>
                <h2>{currentUser.username}</h2>
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
