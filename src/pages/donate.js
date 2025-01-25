import React, { useState } from 'react';
import Footer from '../components/Footer';

export default function Donate() {

  const [formData, setFormData] = useState({
    donationType: 'individual',
    companyName: '',
    street: '',
    city: '',
    province: '',
    emailAddress: '',
    phoneNumber: '',
    amount: '',
    referenceNumber: ''
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleDonationTypeChange = (e) => {
    setFormData({
      ...formData,
      donationType: e.target.value
    });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.emailAddress) newErrors.emailAddress = "Email is required";
    if (!formData.amount) newErrors.amount = "Amount is required";
    if (!formData.referenceNumber) newErrors.referenceNumber = "Reference number is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      const subject = encodeURIComponent('Donation Form Submission');
      const body = encodeURIComponent(
        `Donation Type: ${formData.donationType}\n` +
        `Company Name: ${formData.companyName}\n` +
        `Street: ${formData.street}\n` +
        `City: ${formData.city}\n` +
        `Province: ${formData.province}\n` +
        `Email Address: ${formData.emailAddress}\n` +
        `Phone Number: ${formData.phoneNumber}\n` +
        `Amount: Php ${formData.amount}\n` +
        `Reference Number: ${formData.referenceNumber}`
      );
      const mailtoLink = `mailto:villasoraironevonn@gmail.com?subject=${subject}&body=${body}`;

      window.location.href = mailtoLink;
    } else {
      setErrors(formErrors);
    }
  };


  return (
    <div className='mt-10'>
      <h1 className='text-center text-lg font-bold lg:text-2xl mb-4 uppercase'>
        Donate to the Missionaries of the Sacred Heart
      </h1>
      <p className='text-center w-full lg:w-6/12 m-auto'>
        You can support the Missionaries of the Sacred Heart by donating safely and securely online through our donation form below!
      </p>

      <div className='mt-10 lg:mt-28'>
        <h1 className='text-lg lg:text-2xl font-bold'>How would you like to donate?</h1>
        <hr className='mt-3'></hr>

        <div className='mt-5 flex flex-col md:flex-row justify-evenly'>
          <div className='h-96 w-full md:w-5/12'>
            <img
              src="mscpictures/Feb242024/featured_photo2.jpg"
              className="w-full h-full object-cover"
              alt="Donation"
            />
          </div>

          <div className='w-full mt-5 md:w-5/12 md:mt-0'>
            <h1 className='text-lg font-bold'>Donate as an</h1>
            <label>
                <input
                  type="radio"
                  name="donationType"
                  value="individual"
                  checked={formData.donationType === 'individual'}
                  onChange={handleDonationTypeChange}
                />
                {``} Individual
              </label>
              <label className='ml-3'>
                <input
                  type="radio"
                  name="donationType"
                  value="organization"
                  checked={formData.donationType === 'organization'}
                  onChange={handleDonationTypeChange}
                />
                {``} Organization
              </label>

            <form className='mt-2' onSubmit={handleSubmit}>
              <input
                className='bg-gray-200 p-2 w-full rounded-sm'
                type='text'
                placeholder='Company Name'
                name='companyName'
                value={formData.companyName}
                onChange={handleInputChange}
              />
              {errors.companyName ? <p className="text-red-500">{errors.companyName}</p> : <p></p>}

              <div className='flex gap-2 mt-2'>
                <input
                  className='bg-gray-200 p-2 w-full rounded-sm'
                  type='text'
                  placeholder='Street'
                  name='street'
                  value={formData.street}
                  onChange={handleInputChange}
                />
                <input
                  className='bg-gray-200 p-2 w-full rounded-sm'
                  type='text'
                  placeholder='City'
                  name='city'
                  value={formData.city}
                  onChange={handleInputChange}
                />
                <input
                  className='bg-gray-200 p-2 w-full rounded-sm'
                  type='text'
                  placeholder='Province'
                  name='province'
                  value={formData.province}
                  onChange={handleInputChange}
                />
              </div>

              <input
                className='bg-gray-200 p-2 mt-2 w-full rounded-sm'
                type='text'
                placeholder='Email Address'
                name='emailAddress'
                value={formData.emailAddress}
                onChange={handleInputChange}
              />
              {errors.emailAddress ? <p className="text-red-600 text-xs mt-1">{errors.emailAddress} </p> : <p></p>}

              <input
                className='bg-gray-200 p-2 mt-2 w-full rounded-sm'
                type='text'
                placeholder='Phone Number'
                name='phoneNumber'
                value={formData.phoneNumber}
                onChange={handleInputChange}
              />

              <div className='mt-4'>
                <label className='text-xs'>Amount to Donate: <span>Ex. Php 100, Php 200, Php 300</span></label>

                <div className='flex gap-2'>
                  <div>
                  <input
                      className='bg-gray-200 p-2 mt-2 w-full rounded-sm'
                      type='text'
                      placeholder='Amount'
                      name='amount'
                      value={formData.amount}
                      onChange={handleInputChange}
                    />
                    {errors.amount ? <p className="text-red-600 text-xs mt-1">{errors.amount}</p> : <p></p>}
                  </div>
                 
                  <div>
                    <input
                      className='bg-gray-200 p-2 mt-2 w-full rounded-sm'
                      type='text'
                      placeholder='Reference Number'
                      name='referenceNumber'
                      value={formData.referenceNumber}
                      onChange={handleInputChange}
                    />
                    {errors.referenceNumber && <p className="text-red-600 text-xs mt-1">{errors.referenceNumber}</p>}
                  </div>
                  
                </div>

                <input
                  className='bg-black text-white rounded-sm mt-3 w-full p-2 cursor-pointer'
                  type="submit"
                  value="Send Email"
                />
              </div>
            </form>
          </div>
        </div>

        <hr className='my-5'></hr>

        <div>
          <input type="radio" id="donateOnline" name="donateOption" value="online" />
          <label htmlFor="donateOnline"> Donate Online</label>
        </div>

        <p className='italic mt-2'>
          Pressing <span className='font-bold'>Continue</span> will take you to a Payment Gateway
        </p>

        <input
          className='bg-black lg:w-4/12 text-white rounded-sm mt-3 w-full p-2 cursor-pointer'
          type="button"
          value="Continue to Paymongo"
        />
      </div>

      <div className='mt-32'>
        <h1 className='text-center text-lg font-bold lg:text-2xl mb-4'>
          OTHER WAYS TO GET INVOLVED
        </h1>

        <p className='w-10/12 m-auto text-center'>
          There are many other ways to contribute to our mission beyond donations. We welcome volunteers who are passionate about making a difference, whether through sharing their skills, organizing events, or advocating for our cause. Every effort, big or small, helps us move closer to achieving our goals. Reach out to explore how you can take part in creating meaningful change.
        </p>
      </div>

      <Footer />
    </div>
  );
}
