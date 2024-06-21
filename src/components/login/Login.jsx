import './login.css'
import { useState } from 'react'
import { RxAvatar } from "react-icons/rx";
import { toast } from 'react-toastify';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth, db } from "../../lib/firebase";
import { doc, setDoc } from 'firebase/firestore';
import upload from '../../lib/upload';

const Login = () => {
  const [avatar, setAvatar] = useState({
    file: null,
    url: ""
  })
  const [loading, setLoading] = useState(false)
  const handelAvatar = e => {
    if (e.target.files[0]) {
      setAvatar({
        file: e.target.files[0],
        url: URL.createObjectURL(e.target.files[0])
      })
    }
  }
  const handelRegister = async e => {
    e.preventDefault()
    setLoading(true)
    const formData = new FormData(e.target)
    const { username, email, password } = Object.fromEntries(formData)

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const imgUrl = await upload(avatar.file)
      await setDoc(doc(db, "users", res.user.uid), {
        username,
        email,
        imgUrl,
        id: res.user.uid,
        blocked: [],
      })

      await setDoc(doc(db, "userchats", res.user.uid), {
        chat: [],
      })

      toast.success('success');
    } catch (error) {
      console.error("Firebase Error:", error.code, error.message);
      toast.error(error.message);
    } finally {
      setLoading(false)
    }
  }

  const handelLogin = async e => {
    e.preventDefault()
    setLoading(true)
    const formData = new FormData(e.target)
    const {email, password } = Object.fromEntries(formData)

    try {
      await signInWithEmailAndPassword(auth, email, password)
      toast.success('success');
    } catch (error) {
      console.error("Firebase Error:", error.code, error.message);
      toast.error(error.message);
    } finally {
      setLoading(false)
    }
  }



  return (
    <div className='login'>
      <div className="item">
        <h2>Welcome in secret chat</h2>
        <form onSubmit={handelLogin}>
          <input type="text" placeholder='Email' name="email" id="" />
          <input type="password" placeholder='Password' name="password" id="" />
          <button disabled={loading}>{loading ? "loding" : "Sign In"}</button>
        </form>
      </div>
      <div className="separator">

      </div>
      <div className="item">
        <h2>Create an Account</h2>
        <form onSubmit={handelRegister}>
          <label htmlFor="file">
            {avatar.url ? (
              <img src={avatar.url} alt="" />
            ) : (
              <RxAvatar className="avatar" />
            )}
            Upload an image
          </label>
          <input type="file" id="file" style={{ display: "none" }} onChange={handelAvatar} />
          <input type="text" placeholder='Username' name="username" id="" />
          <input type="text" placeholder='Email' name="email" id="" />
          <input type="password" placeholder='Password' name="password" id="" />
          <button disabled={loading}>{loading ? "loding" : "Sign Up"}</button>
        </form>
      </div>
    </div>
  )
}

export default Login
