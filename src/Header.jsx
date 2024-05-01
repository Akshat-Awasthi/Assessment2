import React from 'react'
import { CiShoppingCart } from "react-icons/ci";
import { PiHeadsetBold } from "react-icons/pi";
import { IoInformationCircleOutline } from "react-icons/io5";
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoSearch } from "react-icons/io5"

const Header = () => {
  return (
    <div className='flex bg-white'>
        <div className='flex flex-row h-16 bg-[#D6D6D6] p-4 ml-24 mt-2 mb-2 rounded-[25px] w-5/6 justify-between '>
            <div className='mt-1 ml-3'><h2 className='font-bold'>Createnary</h2></div>
            <div className='pb-5'>
            <input
                type="text"
                placeholder="Search Creators"
                className="w-full md:w-52 text-sm text-black pl-8 px-4 py-2 border border-white rounded-full placeholder-black placeholder:text-sm placeholder:font-light focus:outline-none focus:border-black focus:shadow-outline transition duration-300"
                />
                <IoSearch className="absolute top-9 ml-3"/>
            </div>
            <div className='flex flex-row space-x-7 mt-2 text-sm font-light'>
                <div className='flex flex-row space-x-2'><CiShoppingCart size={17} style={{ fontWeight:'10px' }}/><h3>Cart</h3></div>
                <div className='flex flex-row space-x-2'><IoInformationCircleOutline size={17} style={{ marginTop: '2px' }}/><h3>About</h3></div>
                <div className='flex flex-row space-x-2'><PiHeadsetBold style={{ marginTop: '2px' }}/><h3>Contact</h3></div>
            </div>
            <div className='mb-1 mr-12'>
            <select
                name="Select"
                id="auth"
                className="
                    w-24 h-8 mt-1 mb-1 pl-3 border border-black rounded-lg text-black text-sm
                    appearance-none bg-right bg-no-repeat pr-8 bg-[#D6D6D6] font-light
                    focus:outline-none
                "
                >
                <option value="login">Login</option>
                <option value="signin">SignIn</option>
                </select>
                <MdKeyboardArrowDown
                        className="absolute top-9 ml-16 text-black"
                        size={17}
                    />

            </div>
        </div>
        
    </div>
  )
}

export default Header