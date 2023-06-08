import React from 'react';
import { FaFacebookF,FaInstagram,FaYoutube, FaTwitter,FaMapMarkerAlt, FaPhoneAlt} from "react-icons/fa";
import { Link } from 'react-router-dom';
import { MdOutlineEmail} from "react-icons/md";


const Footer = () => {
    return (
        <footer>
            <div className="footer p-10 bg-base-200 text-base-content">
                <div>
                    <img src="https://i.ibb.co/0tJTGsc/v1033-a-22-a-removebg-preview.png" alt="" className='h-28' />
                    <p>Quisque quis dignissim elit. Aliquam et<br/> augue aliquet orci maximus convallis id vitae<br/> augue. Phasellus elementum commodo <br/>aliquet.</p>
                    <div className='flex gap-3 text-2xl mt-3'>
                    <Link><FaFacebookF/></Link>
                    <Link><FaTwitter/></Link>
                    <Link><FaYoutube/></Link>
                    <Link><FaInstagram/></Link>
                    </div>
                </div>
                <div>
                    <span className=" font-semibold text-2xl text-blue-950 mb-5 ">Contact Us</span>
                    <a className="link link-hover mb-3 text-xl flex items-center gap-2"><FaMapMarkerAlt/> Dhaka Uttara </a>
                    <a className="link link-hover mb-3 text-xl flex items-center gap-2"><FaPhoneAlt/>803-33-5644-99</a>
                    <a className="link link-hover mb-3 text-xl flex items-center gap-2"><MdOutlineEmail/> music@school.com</a>
                </div>
                <div>
                <span className=" font-semibold text-2xl text-blue-950 mb-5 ">Instagram</span>
                    <p >Instagram has returned invalid data.</p>

                </div>

            </div>
            <div className='footer-center p-4 bg-base-300 text-base-content'>
                <p>Copyright © 2023 - All right reserved by Music School</p>
            </div>

        </footer>
    );
};

export default Footer;