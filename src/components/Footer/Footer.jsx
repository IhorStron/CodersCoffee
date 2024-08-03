import React from 'react'
import { FaFacebookF, FaInstagram, FaPhone, FaTelegram, FaGoogle, } from "react-icons/fa";
import { FaMapLocation } from "react-icons/fa6";
import CreditCards from "../../assets/credit-cards.webp";
import { motion } from "framer-motion";


const Footer = () => {
   return (
      <div className="bg-gradient-to-r from-primary to-primaryDark pt-12 pb-8 text-white">
         <div className="container">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
               {/* company details section  */}
               <motion.div
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{
                     delay: 0.2,
                     duration: 0.6,
                  }}
                  className="space-y-6">
                  <h1 className="text-3xl font-bold uppercase">Coders Cafe</h1>
                  <p className="text-sm max-w-[300px]">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam repellat dicta blanditiis laudantium quas quo ex doloremque nesciunt? Doloremque, quos.</p>
                  <div>
                     <p className="flex items-center gap-2 cursor-pointer"><FaPhone />
                        +1 (123) 456-7890
                     </p>
                     <p className="flex items-center gap-2 mt-2 cursor-pointer">
                        {" "}
                        <FaMapLocation /> Noida, Uttlar Pradesh
                     </p>
                  </div>
               </motion.div>
               {/* Footer links section  */}
               <motion.div
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{
                     delay: 0.4,
                     duration: 0.6,
                  }}
                  className="space-y-6">
                  <h1 className="text-3xl font-bold">Quick Links</h1>
                  <div className="grid grid-cols-2 gap-3">
                     {/* first column section  */}
                     <div>
                        <ul className="space-y-2">
                           <a href="#"><li className="mb-3">Home</li></a>
                           <a href="#"><li className="mb-3">About</li></a>
                           <a href="#"><li className="mb-3">Contact us</li></a>
                           <a href="#"><li className="mb-3">Privacy Policy</li></a>
                        </ul>
                     </div>
                     <div>
                        <ul className="space-y-2">
                           <a href="#"><li className="mb-3">Home</li></a>
                           <a href="#"><li className="mb-3">About</li></a>
                           <a href="#"><li className="mb-3">Contact us</li></a>
                           <a href="#"><li className="mb-3">Privacy Policy</li></a>
                        </ul>
                     </div>
                  </div>
               </motion.div>
               {/* Socila links section  */}
               <motion.div
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{
                     delay: 0.6,
                     duration: 0.6,
                  }}
                  className="space-y-6">
                  <h1 className="text-3xl font-bold">Follow Us</h1>
                  <div className="flex items-center gap-3">
                     <FaFacebookF className="text-3xl hover:scale-105 duration-300 cursor-pointer" />
                     <FaInstagram className="text-3xl hover:scale-105 duration-300 cursor-pointer" />
                     <FaTelegram className="text-3xl hover:scale-105 duration-300 cursor-pointer" />
                     <FaGoogle className="text-3xl hover:scale-105 duration-300 cursor-pointer" />
                  </div>
                  <div>
                     <h1 className="text-xl font-semibold mb-2">Payment Methods</h1>
                     <img src={CreditCards} alt="credit cards" className="w-[80%]" />
                  </div>
               </motion.div>
            </div>
            {/* copyright section  */}
            <p className="text-white text-center mt-8 pt-8 border-t-2">Copyright &copy; 2024 Company Name. All rights reserved.</p>
         </div>
      </div>
   )
}

export default Footer