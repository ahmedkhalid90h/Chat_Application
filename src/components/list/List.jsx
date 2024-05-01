import './list.css'
import CahtList from './chatList/CahtList.jsx'
import Userinfo from './userInfo/UserInfo.jsx'

const List = () => {
    return (
        <div className='list'>
            <Userinfo />
            <CahtList />
        </div>
    )
}

export default List
