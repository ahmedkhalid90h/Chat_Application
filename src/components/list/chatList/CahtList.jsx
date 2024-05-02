import { useState, useEffect } from 'react';
import './chatlist.css'
import { RxAvatar } from "react-icons/rx";
import { FaSearch, FaPlus, FaMinus } from "react-icons/fa";

const CahtList = () => {

    
    const [addBtn, setAddBtn] = useState(true)
    return (
        
        <div className='chatList'>
            <div className="search">
                <div className="searchBar">
                    <FaSearch className='icon' />
                    <input type="text" placeholder='Search' />
                </div>
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
