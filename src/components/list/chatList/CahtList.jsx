import { useState } from 'react';
import './chatlist.css'
import { RxAvatar } from "react-icons/rx";
import { FaSearch } from "react-icons/fa";
import { FaPlus, FaMinus } from "react-icons/fa6";

const CahtList = () => {

    
    const [addBtn, setAddBtn] = useState(false)
    return (
        
        <div className='chatList'>
            <div className="search">
                <div className="searchBar">
                    <FaSearch className='icon' />
                    <input type="text" placeholder='Search' />
                </div>
                <div className="bgDark">
                    {addBtn ? (
                        <FaPlus 
                            onClick={() => setAddBtn(!addBtn)}
                            className='add'
                        />
                    ) : (
                        <FaMinus 
                            onClick={() => setAddBtn(!addBtn)}
                            className='add'
                        />
                    )}
                </div>
            </div>
            <FaMinus />
            <div className="item">
                <RxAvatar className='icon' />
                <div className="texts">
                    <span>Sire Jow  </span>
                    <p>Hello for</p>
                </div>
            </div>
            <div className="item">
                <RxAvatar className='icon' />
                <div className="texts">
                    <span>Sire Jow  </span>
                    <p>Hello for</p>
                </div>
            </div>
            <div className="item">
                <RxAvatar className='icon' />
                <div className="texts">
                    <span>Sire Jow  </span>
                    <p>Hello for</p>
                </div>
            </div>
            <div className="item">
                <RxAvatar className='icon' />
                <div className="texts">
                    <span>Sire Jow  </span>
                    <p>Hello for</p>
                </div>
            </div>
            <div className="item">
                <RxAvatar className='icon' />
                <div className="texts">
                    <span>Sire Jow  </span>
                    <p>Hello for</p>
                </div>
            </div>
        </div>
    )
}

export default CahtList
