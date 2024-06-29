import { useEffect, useState } from 'react';
import './chatlist.css'
import { RxAvatar } from "react-icons/rx";
import { FaSearch } from "react-icons/fa";
import { FaPlus, FaMinus } from "react-icons/fa6";
import AddUser from './addUser/AddUser';
import { userStore } from '../../../lib/userStore';
import { doc, getDoc, onSnapshot, docSnapshot } from 'firebase/firestore';
import { db } from '../../../lib/firebase';

const CahtList = () => {

    const [addBtn, setAddBtn] = useState(false)
    const [chats, setChats] = useState([])
    const { currentUser } = userStore()

    useEffect(() => {
        const unSub = onSnapshot(
            doc(db, "userchats", currentUser.id),
            async (res) => {
                const items = res.data()?.chats || [];

                const promises = items.map(async (item) => {
                    const userDocRef = doc(db, "users", item.receiverId);
                    const userDocSnap = await getDoc(userDocRef);

                    const user = userDocSnap.data();

                    return { ...item, user };
                });

                const chatData = await Promise.all(promises);

                setChats(chatData.sort((a, b) => b.updatedAt - a.updatedAt));
            }
        );
        return () => {
            unSub()
        }
    }, [currentUser.id])
    return (

        <div className='chatList'>
            <div className="search">
                <div className="searchBar">
                    <FaSearch className='icon' />
                    <input type="text" placeholder='Search' />
                </div>
                <div className="bgDark">
                    {addBtn ? (
                        <FaMinus
                            onClick={() => setAddBtn(!addBtn)}
                            className='add'
                        />
                    ) : (
                        <FaPlus
                            onClick={() => setAddBtn(!addBtn)}
                            className='add'
                        />
                    )}
                </div>
            </div>
            <FaMinus />
            {chats.map(chat => (
                <div className="item" key={chat.id}>
                    <RxAvatar className='icon' />
                    <div className="texts">
                        <span>{chat.user?.name}</span>
                        <p>{chat.lastMessage}</p>
                    </div>
                </div>
            ))}


            {addBtn && <AddUser />}
        </div>
    )
}

export default CahtList
