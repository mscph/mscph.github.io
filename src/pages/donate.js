import React from 'react'
import Footer from '../components/Footer'

export default function Donate() {
  return (
    <div className='mt-10'>
        <h1 className='text-center text-lg font-bold lg:text-2xl mb-4 uppercase'>Donate to the Missionaries of the Sacred Heart</h1>

        <p className='text-center w-full lg:w-6/12 m-auto'>You can support the Missionaries of the Sacred Heart by donating safely and securely online through our donation form below!</p>


        <div className='mt-10 lg:mt-28'>
          <h1 className='text-lg lg:text-2xl font-bold'>How would you like to donate?</h1>
          <hr className='mt-3'></hr>

          <div className='mt-5 flex flex-col md:flex-row justify-evenly'>
            <div className='h-96 w-full md:w-5/12'>
              <img src="mscpictures/Feb242024/featured_photo2.jpg"
              className="w-full h-full object-cover"/>
            </div>

            <div className='w-full mt-5 md:w-5/12 md:mt-0 '>
              <h1 className='text-lg font-bold'>Donate as an</h1>

              <p><span>Individual</span> | <span>Organization</span> </p>

              <form className='mt-2'>
                <input className='bg-gray-200 p-2 w-full rounded-sm' type='text' placeholder='Company Name' name='companyname'></input>

                <div className='flex gap-2 mt-2'>
                  <input className='bg-gray-200 p-2 w-full rounded-sm' type='text' placeholder='Street' name='street'></input>
                  <input className='bg-gray-200 p-2 w-full rounded-sm' type='text' placeholder='City' name='city'></input>
                  <input className='bg-gray-200 p-2 w-full rounded-sm' type='text' placeholder='Province' name='province'></input>
                </div>

                <input className='bg-gray-200 p-2 mt-2 w-full rounded-sm' type='text' placeholder='Email Address' name='emailAddress'></input>

                <input className='bg-gray-200 p-2 mt-2 w-full rounded-sm' type='text' placeholder='Phone Number' name='phoneNumber'></input>

                <div className='mt-4'>
                  <label>Amount to Donate: <span>Ex. Php 100, Php 200, Php 300</span></label>

                  <div className='flex gap-2'>
                    <input className='bg-gray-200 p-2 mt-2 w-full rounded-sm' type='text' placeholder='Amount' name='amount'></input>
                    <input className='bg-gray-200 p-2 mt-2 w-full rounded-sm' type='text' placeholder='Reference Number' name='referenceNumber'></input>
                  </div>

                  <input className='bg-black text-white rounded-sm mt-3 w-full p-2 cursor-pointer' type="button" value="Send Email" />
                </div>
               
              </form>
            </div>
          </div>

          <hr className='my-5'></hr>

          <div>
            <input type="radio" id="#" name="drone" value="#" />
            <label for="#"> Donate Online</label>
          </div>

          <p className='italic mt-2'>Pressing <span className='font-bold'>Continue</span> will take you to a Payment Gateway</p>

          <input className='bg-black lg:w-4/12 text-white rounded-sm mt-3 w-full p-2 cursor-pointer' type="button" value="Continue to Paymongo" />
        </div>


        <div className='mt-32'>
          <h1 className='text-center text-lg font-bold lg:text-2xl mb-4'>OTHER WAYS TO GET INVOLVED</h1>

          <p className='w-10/12 m-auto text-center'>
          There are many other ways to contribute to our mission beyond donations. We welcome volunteers who are passionate about making a difference, whether through sharing their skills, organizing events, or advocating for our cause. Every effort, big or small, helps us move closer to achieving our goals. Reach out to explore how you can take part in creating meaningful change.
          </p>
        </div>

        <Footer/>
    </div>
  )
}
