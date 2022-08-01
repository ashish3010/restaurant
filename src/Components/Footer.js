import React from 'react'
import { BsInstagram, BsFacebook, BsTwitter } from "react-icons/bs";
import { motion } from "framer-motion";


const Footer = () => {
  return (
    <div className="h-full flex justify-between w-screen py-10 px-4 md:p-6 md:px-16 bg-headingColor">
        <div>
            <p className='text-primary text-xl font-bold'>Restaurant</p>
        </div>
        <div className="flex flex-col gap-5"> 
        <div className='flex gap-5'>
        <motion.div
                whileTap={{ scale: 0.75 }}
                className="w-8 h-8 rounded-full bg-primary flex items-center justify-center cursor-pointer hover:shadow-md "
              >
                <BsInstagram className="text-headingColor"/>
        </motion.div>
        <motion.div
                whileTap={{ scale: 0.75 }}
                className="w-8 h-8 rounded-full bg-primary flex items-center justify-center cursor-pointer hover:shadow-md "
              >
                <BsFacebook className="text-headingColor"/>
        </motion.div>
        <motion.div
                whileTap={{ scale: 0.75 }}
                className="w-8 h-8 rounded-full bg-primary flex items-center justify-center cursor-pointer hover:shadow-md "
              >
                <BsTwitter className="text-headingColor"/>
        </motion.div>
        </div>
        <div>
            <p className='text-primary text-l font-semibold'>&copy; All Rights Reserved</p>
        </div>
        </div>
    </div>
  )
}

export default Footer