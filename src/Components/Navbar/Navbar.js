import React from 'react';
import { AiOutlineArrowDown, AiOutlineFacebook, AiOutlineHeart } from 'react-icons/ai';
import { TbBrandLinkedin } from 'react-icons/tb';
import { FiTwitter } from 'react-icons/fi';
import { HiOutlineMail } from 'react-icons/hi';
import { BsCart3 } from 'react-icons/bs';

const Navbar = () => {
    return (
        <div>
            {/* Top Bar */}
            <div className='w-full h-[56px] md:px-24 grid md:grid-cols-3 items-center    bg-black text-white'>
                {/* Icons */}
                <div className='flex '>

                    <AiOutlineFacebook className='rounded-md mx-2'></AiOutlineFacebook>
                    <TbBrandLinkedin className='rounded-md mx-2'></TbBrandLinkedin>
                    <FiTwitter className='rounded-md mx-2'></FiTwitter>
                    <HiOutlineMail className='rounded-md mx-2'></HiOutlineMail>
                </div>
                <div className='flex justify-end col-span-2 text-sm'>
                    <ul className='flex'>
                        <li className='mx-2'><a href="#">Introduce</a></li>
                        <li className='mx-2'><a href="#">Partner Incentives</a></li>
                        <li className='mx-2'><a href="#">Promotion</a></li>
                        <li className='mx-2'><a href="#">Contact</a></li>
                        <li className='mx-2'><a href="#">Frequently asked questions</a></li>
                    </ul>

                </div>
            </div>
            {/* main navbar */}
            <div className='h-[112px] w-full px-24 bg-black flex items-center'>
                <div className='w-1/5'>
                    <img src="https://i.ibb.co/0GrPScv/logo.png" alt="" />
                </div>
                <div className='w-4/5 flex items-center'>
                    <input type="text" placeholder="What are you looking for?" class="input input-bordered bg-[#F5F5F5] w-full max-w-lg" />
                    <div class="dropdown  dropdown-end bg-[#F5F5F5] px-3 rounded-md">
                        <label tabindex="0" >Category  <AiOutlineArrowDown className='inline h-[47px]
                        ' /></label>
                        <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-[150px]">
                            <li><a>Item 1</a></li>
                            <li><a>Item 2</a></li>
                        </ul>
                    </div>
                    <button class="btn h-[47px] px-6 mx-2  bg-[#68D237] text-white">Search</button>
                    <div className='ml-4 text-2xl text-white'>
                        <AiOutlineHeart className='inline-block mx-2' />
                        <BsCart3 className='inline-block mx-2' />
                    </div>

                </div>
            </div>
        </div >
    );
};

export default Navbar;