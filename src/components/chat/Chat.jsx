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
    const [text, setText] = useState("")
    const handleEmojiClick = () => {
        setEmojiOpen(!emojiOpen);
    };
    const handleEmoji = (e) => {
        setText(text => text + e.emoji)
        setEmojiOpen(false)
    }
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
            <div className="center">
                <div className="message">
                    <RxAvatar className='icon' />
                    <div className="texts">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, officia libero? Vitae labore molestias vero, ipsa pariatur unde neque quibusdam exercitationem, dolorem quaerat itaque error similique repudiandae voluptatibus accusantium! Consequatur.
                        Officia sapiente hic earum, praesentium, modi amet esse, dolor similique atque possimus nemo ad molestiae et excepturi ut placeat necessitatibus in autem nesciunt. Modi expedita sequi quia quo amet exercitationem!
                        Exercitationem accusantium vitae accusamus hic quia magni ipsam quasi itaque velit repellendus illum nihil delectus, praesentium adipisci ea aperiam consequatur. Ipsam voluptatum fugit temporibus consequatur sed laboriosam labore voluptas tempore.
                        Saepe vel perspiciatis soluta cumque natus. Nam harum eos maiores. Aut labore sunt molestiae nisi sit culpa facere fugit autem laudantium quo at cum, minima pariatur rerum nesciunt? Repellendus, consectetur.
                        Hic, accusamus. Nemo sit beatae reiciendis laudantium quasi reprehenderit expedita, culpa earum voluptate aliquam doloremque commodi necessitatibus quae quis ut. Aspernatur aperiam illo recusandae numquam provident? At autem assumenda impedit.</p>
                        <span>1 min ago</span>
                    </div>
                </div>
                <div className="message own">
                    <div className="texts">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, officia libero? Vitae labore molestias vero, ipsa pariatur unde neque quibusdam exercitationem, dolorem quaerat itaque error similique repudiandae voluptatibus accusantium! Consequatur.
                        Officia sapiente hic earum, praesentium, modi amet esse, dolor similique atque possimus nemo ad molestiae et excepturi ut placeat necessitatibus in autem nesciunt. Modi expedita sequi quia quo amet exercitationem!
                        Exercitationem accusantium vitae accusamus hic quia magni ipsam quasi itaque velit repellendus illum nihil delectus, praesentium adipisci ea aperiam consequatur. Ipsam voluptatum fugit temporibus consequatur sed laboriosam labore voluptas tempore.
                        Saepe vel perspiciatis soluta cumque natus. Nam harum eos maiores. Aut labore sunt molestiae nisi sit culpa facere fugit autem laudantium quo at cum, minima pariatur rerum nesciunt? Repellendus, consectetur.
                        Hic, accusamus. Nemo sit beatae reiciendis laudantium quasi reprehenderit expedita, culpa earum voluptate aliquam doloremque commodi necessitatibus quae quis ut. Aspernatur aperiam illo recusandae numquam provident? At autem assumenda impedit.</p>
                        <span>1 min ago</span>
                    </div>
                </div>
                <div className="message">
                    <RxAvatar className='icon' />
                    <div className="texts">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, officia libero? Vitae labore molestias vero, ipsa pariatur unde neque quibusdam exercitationem, dolorem quaerat itaque error similique repudiandae voluptatibus accusantium! Consequatur.
                        Officia sapiente hic earum, praesentium, modi amet esse, dolor similique atque possimus nemo ad molestiae et excepturi ut placeat necessitatibus in autem nesciunt. Modi expedita sequi quia quo amet exercitationem!
                        Exercitationem accusantium vitae accusamus hic quia magni ipsam quasi itaque velit repellendus illum nihil delectus, praesentium adipisci ea aperiam consequatur. Ipsam voluptatum fugit temporibus consequatur sed laboriosam labore voluptas tempore.
                        Saepe vel perspiciatis soluta cumque natus. Nam harum eos maiores. Aut labore sunt molestiae nisi sit culpa facere fugit autem laudantium quo at cum, minima pariatur rerum nesciunt? Repellendus, consectetur.
                        Hic, accusamus. Nemo sit beatae reiciendis laudantium quasi reprehenderit expedita, culpa earum voluptate aliquam doloremque commodi necessitatibus quae quis ut. Aspernatur aperiam illo recusandae numquam provident? At autem assumenda impedit.</p>
                        <span>1 min ago</span>
                    </div>
                </div>
                <div className="message own">
                    <div className="texts">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, officia libero? Vitae labore molestias vero, ipsa pariatur unde neque quibusdam exercitationem, dolorem quaerat itaque error similique repudiandae voluptatibus accusantium! Consequatur.
                        Officia sapiente hic earum, praesentium, modi amet esse, dolor similique atque possimus nemo ad molestiae et excepturi ut placeat necessitatibus in autem nesciunt. Modi expedita sequi quia quo amet exercitationem!
                        Exercitationem accusantium vitae accusamus hic quia magni ipsam quasi itaque velit repellendus illum nihil delectus, praesentium adipisci ea aperiam consequatur. Ipsam voluptatum fugit temporibus consequatur sed laboriosam labore voluptas tempore.
                        Saepe vel perspiciatis soluta cumque natus. Nam harum eos maiores. Aut labore sunt molestiae nisi sit culpa facere fugit autem laudantium quo at cum, minima pariatur rerum nesciunt? Repellendus, consectetur.
                        Hic, accusamus. Nemo sit beatae reiciendis laudantium quasi reprehenderit expedita, culpa earum voluptate aliquam doloremque commodi necessitatibus quae quis ut. Aspernatur aperiam illo recusandae numquam provident? At autem assumenda impedit.</p>
                        <span>1 min ago</span>
                    </div>
                </div>
                <div className="message">
                    <RxAvatar className='icon' />
                    <div className="texts">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, officia libero? Vitae labore molestias vero, ipsa pariatur unde neque quibusdam exercitationem, dolorem quaerat itaque error similique repudiandae voluptatibus accusantium! Consequatur.
                        Officia sapiente hic earum, praesentium, modi amet esse, dolor similique atque possimus nemo ad molestiae et excepturi ut placeat necessitatibus in autem nesciunt. Modi expedita sequi quia quo amet exercitationem!
                        Exercitationem accusantium vitae accusamus hic quia magni ipsam quasi itaque velit repellendus illum nihil delectus, praesentium adipisci ea aperiam consequatur. Ipsam voluptatum fugit temporibus consequatur sed laboriosam labore voluptas tempore.
                        Saepe vel perspiciatis soluta cumque natus. Nam harum eos maiores. Aut labore sunt molestiae nisi sit culpa facere fugit autem laudantium quo at cum, minima pariatur rerum nesciunt? Repellendus, consectetur.
                        Hic, accusamus. Nemo sit beatae reiciendis laudantium quasi reprehenderit expedita, culpa earum voluptate aliquam doloremque commodi necessitatibus quae quis ut. Aspernatur aperiam illo recusandae numquam provident? At autem assumenda impedit.</p>
                        <span>1 min ago</span>
                    </div>
                </div>
                
                <div className="message own">
                    <div className="texts">
                    <img src="../../../public/lee-campbell-DtDlVpy-vvQ-unsplash.jpg" alt="" />
                        <p>Lorem eatae reiciendis   commodi necessitatibus quae quis ut. Aspernatur aperiam illo recusandae numquam provident? At autem assumenda impedit.</p>
                        <span>1 min ago</span>
                    </div>
                </div>
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
                <button className='sendButton'>Send</button>
            </div>
        </div>
    )
}

export default Chat

