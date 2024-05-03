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
import { useState } from 'react';


const Chat = () => {
    const [emojiOpen, setEmojiOpen] = useState(false)
    const handleEmojiClick = () => {
        setEmojiOpen(!emojiOpen);
    };

    return (
        <div className='chat'>
            <div className="top">
                <div className="user">
                    <RxAvatar className='icon' />
                    <div className="texts">
                        <span>Jow sev</span>
                        <p>Lorem ipsum dolor sit.</p>
                    </div>
                </div>
                <div className="icons">
                    <FaPhoneAlt className='icon' />
                    <FaVideo className='icon' />
                    <FaInfoCircle className='icon' />
                </div>
            </div>
            <div className="center"></div>
            <div className="bottom">
                <div className="icons">
                    <FaImage className='icon' />
                    <FaCamera className='icon' />
                    <FaMicrophone className='icon' />
                </div>
                <input type="text" placeholder='Type a message...' />
                <div className="emoji">
                    <BsEmojiWinkFill className='icon' onClick={handleEmojiClick} />
                    {emojiOpen && <EmojiPicker onEmojiClick={console.log} />}
                </div>
                <button className='sendButton'>Send</button>
            </div>
        </div>
    )
}

export default Chat

