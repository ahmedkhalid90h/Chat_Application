import './addUser.css'
import { RxAvatar } from "react-icons/rx";

const AddUser = () => {
    return (
        <div className='addUser'>
            <form>
                <input type="text" placeholder='Username' name="username" id="" />
                <button>Search</button>
            </form>
            <div className="user">
                <div className="ditail">
                    <RxAvatar className="icon" />
                    <span>Jow sev</span>
                </div>
                <button>Add User</button>
            </div>
        </div>
    )
}

export default AddUser
