import './login.css'
import { useState } from 'react'
import { RxAvatar } from "react-icons/rx";
import { toast } from 'react-toastify';


const Login = () => {
  const [avatar, setAvatar] = useState({
    file: null,
    url:""
  })
  const handelAvatar = e => {
    if (e.target.files[0]){
      setAvatar({
        file: e.target.files[0],
        url: URL.createObjectURL(e.target.files[0])
      })
    }
  }
  const handelSubmit = e => {
    e.preventDefault()
    toast.warn('Hellooooo')
  }
  return (
    <div className='login'>
      <div className="item">
        <h2>Welcome in secret chat</h2>
        <form onSubmit={handelSubmit}>
          <input type="text" placeholder='Email' name="email" id="" />
          <input type="password" placeholder='Password' name="password" id="" />
          <button>Sign In</button>
        </form>
      </div>
      <div className="separator">

      </div>
      <div className="item">
        <h2>Create an Account</h2>
        <form action="">
          <label htmlFor="file">
            {avatar.url ? (
              <img src={avatar.url} alt="" />
            ) : (
                <RxAvatar className="avatar" />
            )}
            Upload an image
          </label>
          <input type="file" id="file" style={{display:"none"}} onChange={handelAvatar} />
          <input type="text" placeholder='Username' name="username" id="" />
          <input type="text" placeholder='Email' name="email" id="" />
          <input type="password" placeholder='Password' name="password" id="" />
          <button>Sign In</button>
        </form>
      </div>
    </div>
  )
}

export default Login
