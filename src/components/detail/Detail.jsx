import './detail.css'
import { RxAvatar } from "react-icons/rx";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { MdOutlineFileDownload } from "react-icons/md";
import { auth, db } from '../../lib/firebase';
import { chatStore } from '../../lib/chatStore';
import { userStore } from '../../lib/userStore';
import { arrayRemove, arrayUnion, doc, updateDoc } from 'firebase/firestore';



const Detail = () => {
    const { chatId, user, isCurrentUserBlocked, isReceiverBlocked, changeBlock } =
        chatStore()
    const { currentUser } = userStore()

    const handleBlock = async () => {
        if (!user) return

        const userDocRef = doc(db, "users", currentUser.id)

        try {
            await updateDoc(userDocRef, {
                blocked: isReceiverBlocked ? arrayRemove(user.id) : arrayUnion(user.id)
            })
            changeBlock()
        } catch (err) {
            console.log(err)
        }
    }
    return (
        <div className='detail'>
            <div className="user">
                <img src={user?.avatar || './avatar.png'} />
                <h2>{user?.username}</h2>
                <p>Lorem ipsum dolor sit amet,</p>
            </div>
            <div className="info">
                <div className="option">
                    <div className="title">
                        <span>Chat Settings</span>
                        <IoIosArrowUp className='icon' />
                    </div>
                </div>
                <div className="option">
                    <div className="title">
                        <span>Privacy & help</span>
                        <IoIosArrowUp className='icon' />
                    </div>
                </div>
                <div className="option">
                    <div className="title">
                        <span>Shared photos</span>
                        <IoIosArrowUp className='icon' />
                    </div>
                    <div className="photos">
                        <div className="photoItem">
                            <div className="photoDetail">
                                <img
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT744O0IhvCPbCItxQA5Sj9r-LNxe0J1zloNw&s"
                                    alt=""
                                    className='img'
                                />
                                <span>photo_encrypted-0225878</span>
                            </div>
                            <MdOutlineFileDownload className="icon" />
                        </div>
                        <div className="photoItem">
                            <div className="photoDetail">
                                <img
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT744O0IhvCPbCItxQA5Sj9r-LNxe0J1zloNw&s"
                                    alt=""
                                    className='img'
                                />
                                <span>photo_encrypted-0225878</span>
                            </div>
                            <MdOutlineFileDownload className="icon" />
                        </div>
                    </div>
                </div>
                <div className="option">
                    <div className="title">
                        <span>Shared Files</span>
                        <IoIosArrowUp className='icon' />
                    </div>
                </div>
                <button onClick={handleBlock}>{
                    isCurrentUserBlocked
                    ? "You are Blocked?!"
                    : isReceiverBlocked
                    ? "User Blocked"
                    : "Block User"
                }</button>
                <button className="logout" onClick={() => auth.signOut()}>Logout</button>
            </div>
        </div>
    )
}

export default Detail
