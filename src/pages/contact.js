import React, { useState } from 'react'
import { FaPhoneAlt } from 'react-icons/fa'
import { FaEnvelope, FaFacebook, FaLocationPin } from 'react-icons/fa6'
import Footer from '../components/Footer'

export default function Contact() {

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    emailAddress: '',
    phoneNumber: '',
    message: ''
  })

  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstName) newErrors.firstName = "First name is required";
    if (!formData.lastName) newErrors.lastName = "Last name is required";
    if (!formData.emailAddress) newErrors.emailAddress = "Email address is required";
    if (!formData.message) newErrors.message = "Message is required";
    return newErrors;
  };

   const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const {name, value} = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
  if (Object.keys(formErrors).length === 0) {
    const subject = encodeURIComponent('Contact Form Submission');

    const body = encodeURIComponent(
      `Dear Ma'am/Sir,\n\n` +
      `You have received a new message from the contact form on your website. Below are the details:\n\n` +
      `First Name: ${formData.firstName}\n` +
      `Last Name: ${formData.lastName}\n` +
      `Email Address: ${formData.emailAddress}\n` +
      `Phone Number: ${formData.phoneNumber}\n\n` +
      `Message:\n${formData.message}\n\n` +
      `Kind regards,\n` +
      `${formData.firstName} ${formData.lastName}`
    );

    const mailtoLink = `mailto:villasoraironevonn@gmail.com?subject=${subject}&body=${body}`;

      window.location.href = mailtoLink;
    } else {
      setErrors(formErrors);
    }
  }

  return (
    <div className='mt-10'>
       <h1 className='text-center text-lg font-bold lg:text-2xl mb-4 uppercase'>Get in touch with us.</h1>

       <p className='w-full lg:w-10/12 text-center m-auto'>We invite you to be a part of our mission to create lasting change. Whether you are considering making a donation or offering your time as a volunteer, our team is here to provide guidance and support. Your contribution, in any form, plays a vital role in the communities we serve. Please contact us to explore how you can make a meaningful impact through your involvement.</p>

       <div className='flex gap-2 justify-between mt-20'>
        {/* FORM */}
        <div className='lg:w-5/12 m-auto'>
          <form onSubmit={handleSubmit}>
            <div className='mt-4'>

              <div className='flex gap-2'>
                <div>
                  <label>First Name</label>
                  <input 
                  className='bg-gray-100 p-2 mt-2 w-full rounded-sm' 
                  type='text' 
                  placeholder='First Name' 
                  name='firstName'
                  value={formData.firstName}
                  onChange={handleInputChange}></input>

                  {errors.firstName ? <p className="text-xs text-red-500">{errors.firstName}</p> : <p></p>}
                </div>

                <div>
                  <label>Last Name</label>
                  <input 
                  className='bg-gray-100 p-2 mt-2 w-full rounded-sm' 
                  type='text' 
                  placeholder='Last Name' 
                  name='lastName'
                  value={formData.lastName}
                  onChange={handleInputChange}></input>

                  {errors.lastName ? <p className="text-xs text-red-500">{errors.lastName}</p> : <p></p>}
                </div>
              </div>


              <div className='mt-3'>
                <label>Email Address</label>
                <input
                className='bg-gray-100 p-2 mt-2 w-full rounded-sm' 
                type='text' 
                placeholder='example@gmail.com' name='emailAddress'
                value={formData.emailAddress}
                onChange={handleInputChange}></input>
                 {errors.emailAddress ? <p className="text-xs text-red-500">{errors.emailAddress}</p> : <p></p>}
              </div>

              <div className='mt-3'>
                <label>Phone Number</label>
                <input 
                className='bg-gray-100 p-2 mt-2 w-full rounded-sm' 
                type='text' 
                placeholder='Must start with +63' name='phoneNumber'
                value={formData.phoneNumber}
                onChange={handleInputChange}></input>
              </div>

              <div className='mt-3'>
                <label >Message</label>
                <input 
                className='bg-gray-100 p-2 mt-2 w-full rounded-sm' 
                type='text' 
                placeholder='Leave us a message.' name='message'
                value={formData.message}
                onChange={handleInputChange}></input>
                 {errors.message ? <p className="text-xs text-red-500">{errors.message}</p> : <p></p>}
              </div>

              <input className='bg-black text-white rounded-sm mt-3 w-full p-2 cursor-pointer' type="submit" value="Send Email" />
            </div>
          </form>
        </div>

        <div className='lg:w-5/12 m-auto'>
          <div>
            
            <h1 className='font-bold'>
              Social Media
            </h1>

            <ul>
              <li className='flex items-center gap-2 mt-2'>
                <span><FaFacebook className='text-xl' /></span>
                <a href='https://www.facebook.com/CenterFTPoorMSC'>www.facebook.com/CenterFTPoorMSC</a>
              </li>


              <li className='flex items-center gap-2 mt-2'>
                <span><FaEnvelope className='text-xl' /></span>
                <a href='msccenterforthepoor@gmail.com'>msccenterforthepoor@gmail.com</a></li>
            </ul>

            <div className='mt-5'>
              <h1 className='font-bold'>
                Social Media
              </h1>

              <p className='text-sm'>You can reach us at the number below, Monday-Friday, 8 AM to 5 PM.</p>

              <ul>
                <li className='flex items-center gap-2 mt-2'>
                  <span><FaPhoneAlt className='text-xl' /></span>
                  <a href='#'>+63-926-640-5474</a>
                </li>
              </ul>
            </div>

            <div className='mt-5'>
              <h1 className='font-bold'>
                Visit Us
              </h1>

              <p className='text-sm'>Talk to us in person at our office.</p>

              <ul>
                <li className='flex items-center gap-2 mt-2'>
                  <span><FaLocationPin className='text-xl' /></span>
                  <a href='#' className='text-sm'>1st St., Pareja Subdivision
                  Butuan City, Philippines, 8600</a>
                </li>
              </ul>

              <div className='bg-gray-200 h-40 w-full mt-5'>
                <img
                  alt="This is location of the site"
                  src="mscpictures/EmbeddedImage.png"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            
          </div>
        </div>
       </div>

       <Footer/>
    </div>
  )
}
