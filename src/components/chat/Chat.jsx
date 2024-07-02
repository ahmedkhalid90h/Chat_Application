import './chat.css'
import { RxAvatar } from "react-icons/rx";
import { BsEmojiWinkFill } from "react-icons/bs";
import {
    FaPhoneAlt,
    FaVideo,
    FaInfoCircle,
    FaMicrophone,
    FaCamera,
    FaImage
} from "react-icons/fa";
import EmojiPicker from 'emoji-picker-react'
import { useEffect, useRef, useState } from 'react';
import { arrayUnion, doc, getDoc, onSnapshot, updateDoc } from 'firebase/firestore';
import { db } from '../../lib/firebase';
import { chatStore } from '../../lib/chatStore';
import { userStore } from '../../lib/userStore';


const Chat = () => {
    const [emojiOpen, setEmojiOpen] = useState(false)
    const [text, setText] = useState("")
    const [chat, setChat] = useState()
    const { chatId, user } = chatStore();
    const { currentUser } = userStore();

    const endRef = useRef(null)
    useEffect(() => {
        endRef.current?.scrollIntoView({ behavior: "smooth" })
    }, [])

    useEffect(() => {
        const unSub = onSnapshot(doc(db, 'chats', chatId),
            (res) => {
                setChat(res.data())
            })

        return () => {
            unSub()
        }
    }, [chatId])
    console.log(chat)

    const handleEmojiClick = () => {
        setEmojiOpen(!emojiOpen);
    };
    const handleEmoji = (e) => {
        setText(text => text + e.emoji)
        setEmojiOpen(false)
    }

    const handleSend = async () => {
        if (text === '') return

        try {
            await updateDoc(doc(db, 'chats', chatId), {
                messages: arrayUnion({
                    senderId: currentUser.id,
                    text,
                    createdAt: new Date(),
                })
            })

            const userIDs = [currentUser.id, user.id]

            userIDs.forEach(async (id) => {
                const userChatsRef = doc(db, "userchats", id)
                const userChatsSnapshot = await getDoc(userChatsRef)

                if (userChatsSnapshot.exists()) {
                    const userChatData = userChatsSnapshot.data()
                    const chatIndex = userChatData.chats.findIndex(c => c.chatId === chatId)

                    userChatData.chats[chatIndex].lastMessage = text
                    userChatData.chats[chatIndex].isSeen = id === currentUser.id ? true : false
                    userChatData.chats[chatIndex].updatedAt = Date.now()

                    await updateDoc(userChatsRef, {
                        chats: userChatData.chats
                    })
                }
            })

        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div className='chat'>
            <div className="top">
                <div className="user">
                    <img src="./avatar.png" alt="" />
                    <div className="texts">
                        <span>Jow sev</span>
                        <p>Lorem ipsum dolor sit.</p>
                    </div>
                </div>
                <div className="icons">
                    <img src="./phone.png" alt="" />
                    <img src="./video.png" alt="" />
                    <img src="./info.png" alt="" />
                </div>
            </div>
            <div className="center">
                {chat?.messages?.map((message) => (
                    <div
                        className={"message own"} key={"message?.createdAt"}
                    >
                        <div className="texts">
                            {message.img && <img src={message.img} alt="" />}
                            <p>{message.text}</p>
                            {/* <span>{format(message.createdAt.toDate())}</span> */}
                        </div>
                    </div>
                ))}
                <div ref={endRef}></div>
            </div>
            <div className="bottom">
                <div className="icons">
                    <FaImage className='icon' />
                    <FaCamera className='icon' />
                    <FaMicrophone className='icon' />
                </div>
                <input
                    type="text"
                    value={text}
                    placeholder='Type a message...'
                    onChange={(e) => setText(e.target.value)}
                />
                <div className="emoji">
                    <BsEmojiWinkFill className='icon' onClick={handleEmojiClick} />
                    <div className="picker">
                        {emojiOpen && <EmojiPicker onEmojiClick={handleEmoji} />}
                    </div>
                </div>
                <button className='sendButton' onClick={handleSend}>Send</button>
            </div>
        </div>
    )
}

export default Chat

