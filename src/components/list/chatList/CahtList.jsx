import { useEffect, useState } from "react";
import "./chatlist.css";
import AddUser from "./addUser/AddUser";
import { doc, getDoc, onSnapshot, updateDoc } from "firebase/firestore";
import { userStore } from "../../../lib/userStore";
import { db } from "../../../lib/firebase";
import { FaMinus, FaPlus, FaSearch } from "react-icons/fa";
import { chatStore } from "../../../lib/chatStore";

const ChatList = () => {
    const [chats, setChats] = useState([]);
    const [addBtn, setAddBtn] = useState(false)
    const [input, setInput] = useState("");

    const { currentUser } = userStore();
    const { chatId, changeChat } = chatStore();
    console.log(chatId)
    useEffect(() => {
        const unSub = onSnapshot(
            doc(db, "userchats", currentUser.id),
            async (res) => {
                const data = res.data();
                const items = data ? data.chats || [] : [];

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
            unSub();
        };
    }, [currentUser.id]);

    const handleSelect = async (chat) => {
        const userChats = chats.map((item) => {
            const { user, ...rest } = item;
            return rest;
        });

        const chatIndex = userChats.findIndex(
            (item) => item.chatId === chat.chatId
        );

        userChats[chatIndex].isSeen = true;

        const userChatsRef = doc(db, "userchats", currentUser.id);

        try {
            await updateDoc(userChatsRef, {
                chats: userChats,
            });
            changeChat(chat.chatId, chat.user);
        } catch (err) {
            console.log(err);
        }
    };

    const filteredChats = chats.filter((c) =>
        c.user.username.toLowerCase().includes(input.toLowerCase())
    );

    return (
        <div className="chatList">
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
            {filteredChats.map((chat) => (
                <div
                    className="item"
                    key={chat.chatId}
                    onClick={() => handleSelect(chat)}
                    style={{
                        backgroundColor: chat?.isSeen ? "transparent" : "#5183fe",
                    }}
                >
                    <img
                        src={
                            chat.user.blocked.includes(currentUser.id)
                                ? "./avatar.png"
                                : chat.user.avatar || "./avatar.png"
                        }
                        alt=""
                    />
                    <div className="texts">
                        <span>
                            {chat.user.blocked.includes(currentUser.id)
                                ? "User"
                                : chat.user.username}
                        </span>
                        <p>{chat.lastMessage}</p>
                    </div>
                </div>
            ))}

            {addBtn && <AddUser />}
        </div>
    );
};

export default ChatList;