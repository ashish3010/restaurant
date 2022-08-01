import React, {useState} from 'react'
import {motion} from 'framer-motion'
import logo from '../img/logo.png'
import {MdShoppingBasket, MdAdd, MdLogout} from 'react-icons/md'
import avatar from '../img/avatar.png'
import {Link} from 'react-router-dom'
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from '../firebase.config'
import {useStateValue} from '../context/StateProvider'
import { actionType } from "../context/reducer";

const Header = () => {
    const firebaseAuth = getAuth(app);
    const provider = new GoogleAuthProvider();

    const [{user, cartShow, cartItems}, dispatch] = useStateValue();
    const [isMenu, setIsMenu] = useState(false)

    const login = async () => {
        if (!user) {
          const {
            user: { refreshToken, providerData },
          } = await signInWithPopup(firebaseAuth, provider);
          dispatch({
            type: actionType.SET_USER,
            user: providerData[0],
          });
          localStorage.setItem("user", JSON.stringify(providerData[0]));
        } else {
          setIsMenu(!isMenu);
        } 
      };
      const logout = () => {
        setIsMenu(false);
        localStorage.clear();
        dispatch({
          type: actionType.SET_USER,
          user: null,
        })
      };

      const showCart = () => {
        dispatch({
          type: actionType.SET_CART_SHOW,
          cartShow: !cartShow,
        })
      }

  return (
    <header className='fixed z-50 w-screen p-3 px-4 md:p-6 md:px-16 bg-primary'>
        {/* desktop & tablet */}
        <div className="hidden md:flex w-full h-full items-center justify-between">
            <Link to={'/'} classNa me="flex items-ceter gap-2">
                <img src={logo} alt="logo" className="w-8 object-cover" />
                <p className="text-headingColor text-xl font-bold">Restaurant</p>
            </Link>
            <div className='flex items-center gap-8'>  
                <motion.ul
                initial={{opacity:0, x:200}}
                animate={{opacity:1, x:0}}
                exit={{opacity:0, x:200}}
                 className='flex items-center gap-8 ml-auto'>
                    <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>Home</li>
                    <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>Menu</li>
                    <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>About Us</li>
                    <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>Services</li>
                </motion.ul>

                <div className="relative flex items-center justify-center" onClick={showCart}>
                    <MdShoppingBasket className='text-textColor text-2xl cursor-pointer'/>
                    {cartItems && cartItems.length > 0 && (
                      <div className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-cartNumBg flex items-center justify-center">
                        <p className="text-xs text-white font-semibold">{cartItems.length}</p>
                      </div>
                    )}
                    
                </div>

                <div className="relative">
                    <motion.img whileTap={{scale:0.6}} src={user ? user.photoURL : avatar} alt='' className='w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-2xl rounded-full cursor-pointer' onClick={login} />
                    {
                      isMenu && (
                        <motion.div 
                          initial={{opacity: 0, scale: 0.6}}
                          animate={{opacity: 1, scale: 1}}
                          exit={{opacity: 0, scale: 0.6}}
                          className="w-40 bg-gray-50 shadow-xl rounded-lg flex flex-col absolute top-12 right-0">
                        {user && user.email === "akmvns01@gmail.com" && (
                          <Link to={'/createItem'}>
                          <p onClick={()=> setIsMenu(false)} className='px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all ease-in-out text-textColor text-base'>New Item <MdAdd/> </p>
                          </Link>
                        )}
                        <p className='px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all ease-in-out text-textColor text-base' onClick={logout}>Logout <MdLogout/> </p>
                      </motion.div>
                      )
                    }
                </div>
            </div>
        </div>


        {/* mobile */}
        <div className="flex items-center justify-between md:hidden w-full h-full">

          <div className="relative flex items-center justify-center" onClick={showCart}>
            <MdShoppingBasket className='text-textColor text-2xl cursor-pointer'/>
            {cartItems && cartItems.length > 0 && (
              <div className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-cartNumBg flex items-center justify-center">
                <p className="text-xs text-white font-semibold">{cartItems.length}</p>
              </div>
            )}
          </div>

          <Link to={'/'} className="flex items-ceter gap-2">
              <img src={logo} alt="logo" className="w-8 object-cover" />
              <p className="text-headingColor text-xl font-bold">Restaurant</p>
          </Link>

          <div className="relative">
                    <motion.img whileTap={{scale:0.6}} src={user ? user.photoURL : avatar} alt='' className='w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-2xl rounded-full cursor-pointer' onClick={login} />
                    {
                      isMenu && (
                        <motion.div 
                          initial={{opacity: 0, scale: 0.6}}
                          animate={{opacity: 1, scale: 1}}
                          exit={{opacity: 0, scale: 0.6}}
                          className="w-40 bg-gray-50 shadow-xl rounded-lg flex flex-col absolute top-12 right-0">
                        {user && user.email === "akmvns01@gmail.com" && (
                          <Link to={'/createItem'}>
                          <p onClick={()=> setIsMenu(false)} className='px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all ease-in-out text-textColor text-base'>New Item <MdAdd/> </p>
                          </Link>
                        )}
                        <ul className='flex flex-col'>
                          <li onClick={()=> setIsMenu(false)} className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-slate-100 px-4 py-2'>Home</li>
                          <li onClick={()=> setIsMenu(false)} className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-slate-100 px-4 py-2'>Menu</li>
                          <li onClick={()=> setIsMenu(false)} className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-slate-100 px-4 py-2'>About Us</li>
                          <li onClick={()=> setIsMenu(false)} className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-slate-100 px-4 py-2'>Services</li>
                      </ul>
                        <p className='m-2 p-2 rounded-md flex bg-slate-200 items-center gap-3 cursor-pointer hover:bg-slate-300 transition-all ease-in-out text-black text-base' onClick={logout}>Logout <MdLogout/> </p>
                      </motion.div>
                      )
                    }
                </div>
        </div>
    </header>
  )
}

export default Header