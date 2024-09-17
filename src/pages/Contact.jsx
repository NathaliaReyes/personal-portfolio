import React, { useState } from 'react';
import { useForm } from '@formspree/react';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

function Contact() {
  const [state, handleSubmitFormspree] = useForm("xzzpzjkp");
  const [firstName, setfirstName] = useState('');
  const [lastName, setlastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [inquiry, setInquiry] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [emailValid, setEmailValid] = useState(true);
  const [fieldsCompleted, setFieldsCompleted] = useState(true);
  const [nameRequired, setNameRequired] = useState(false);
  const [emailRequired, setEmailRequired] = useState(false);
  const [phoneRequired, setPhoneRequired] = useState(false);
  const [messageRequired, setMessageRequired] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case 'firstName':
        setfirstName(value);
        setNameRequired(!value);
        break;
      case 'lastName':
        setlastName(value);
        setNameRequired(!value);
        break;
      case 'email':
        setEmail(value);
        setEmailValid(validateEmail(value));
        setEmailRequired(!value);
        break;
      case 'inquiry':
        setInquiry(value);
        break;
      case 'message':
        setMessage(value);
        setMessageRequired(!value);
        break;
      default:
        break;
    }
  };

  const handlePhoneChange = (value) => {
    setPhone(value);
    setPhoneRequired(!value);
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!firstName || !lastName || !email || !phone || !message) {
      setFieldsCompleted(false);
      return;
    } else if (!emailValid) {
      return;
    }
    setSubmitted(true);
    handleSubmitFormspree(event);
    // document.querySelector('#success-modal').classList.add('is-active');

  };

  const handleCancel = () => {
    window.history.back();
  };

  return (
    <>
      {submitted && (
        <div className="absolute top-0 left-0 w-full h-full bg-zinc-600 bg-opacity-50 flex justify-center items-center" style={{ zIndex: 50 }}>
          <div className="bg-sky-50 rounded shadow-lg p-2 text-center relative">
            <button
              onClick={() => {
                setSubmitted(false);
                window.location.href = '/';
              }}
              className="absolute top-0 right-0 m-2 text-zinc-600 hover:text-zinc-800 focus:outline-none"
            >
              &times;
            </button>
            <h2 className="text-base font-semibold mb-4">Your message has been delivered!</h2>
            <p className="text-zinc-700 mb-4">Thank you for reaching out - I will get in touch soon!</p>
            <p className="text-zinc-800">✨ Have a splendid day! ✨</p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="container my-2 p-5 bg-white rounded-lg shadow-lg mt-2 mb-4">
        <div>
          <h2 className='cormorant-infant-bold text-xl text-center'>Get in touch</h2>
          <p className="cormorant-infant-semibold lg:text-xl md:text-lg sm:text-base mt-2 ml-10 mr-10 mb-4 text-center">
            You're welcome to reach out via LinkedIn, GitHub, or email.
            Alternatively, you can simply fill out the form below to send a message.
            <br />Excited to connect with you!

          </p>
          <p className='cormorant-infant-bold text-center'><i className='fas fa-envelope'></i>
            <a href="mailto:snrvdevelopment@gmail.com" style={{ textDecoration: 'none', color: 'inherit' }}>
              snrvdevelopment@gmail.com
            </a>
          </p>
          <p className='cormorant-infant-bold text-center'>
            <i className='fas fa-phone'></i>
            <a href="tel:+17208857042" style={{ textDecoration: 'none', color: 'inherit' }}>
              +1(720)-885-7042
            </a>
          </p>

          {!fieldsCompleted && <p className="text-red-500 text-xs mt-2 cormorant-infant-bold">Please fill out all required fields.</p>}
        </div>
        <div className='flex flex-row space-x-2 mt-2'>
          <div className="w-full sm:w-1/2 mb-4">
            <label className="cormorant-infant-bold-italic block text-gray-700 text-sm font-bold mb-2">Name</label>
            <input
              name="firstName"
              value={firstName}
              className="cormorant-infant-light shadow border rounded w-full py-2 px-3 text-zinc-900 focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="First Name"
              onChange={handleChange}
            />
            {nameRequired && <p className="text-red-900 mt-2 cormorant-infant-bold">Name is required.</p>}
          </div>

          <div className="w-full sm:w-1/2 mb-4">
            <label className="cormorant-infant-bold-italic block text-gray-700 text-sm font-bold mb-2">Last Name</label>
            <input
              name="lastName"
              value={lastName}
              className="cormorant-infant-light shadow border rounded w-full py-2 px-3 text-zinc-900 focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Last Name"
              onChange={handleChange}
            />
            {nameRequired && <p className="text-red-900 cormorant-infant-bold mt-2">Last Name is required.</p>}
          </div>
        </div>

        <div className="mb-4 mr-4">
          <label className="cormorant-infant-bold-italic block text-gray-700 text-sm font-bold mb-2">Email</label>
          <input
            name="email"
            value={email}
            className="cormorant-infant-light shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="email"
            placeholder="email@example.com"
            onChange={handleChange}
          />
          {emailRequired && <p className="text-red-900 mt-2 cormorant-infant-bold">Email is required.</p>}
          {!emailValid && email && <p className="text-red-900 mt-2 cormorant-infant-bold">Please enter a valid email address.</p>}
        </div>

        <div className="mb-4 mr-4">
          <label className="cormorant-infant-bold-italic block text-gray-700 text-sm font-bold mb-2">Phone Number</label>
          <PhoneInput
            name="phone"
            value={phone}
            placeholder="Enter phone number"
            className='cormorant-infant-light shadow border rounded w-full py-3 px-3 text-zinc-600 focus:outline-none focus:shadow-outline'
            onChange={handlePhoneChange}
            defaultCountry="US" />
          {phoneRequired && <p className="text-red-900 mt-2 cormorant-infant-bold">Phone Number is required.</p>}
          
        </div>

        <div className="mb-4 mr-4">
          <label className="cormorant-infant-bold-italic block text-gray-700 text-sm font-bold mb-2">I am interested in:</label>
          <div className="relative">
            <select
              name="inquiry"
              value={inquiry}
              onChange={handleChange}
              className="cormorant-infant-light d-block appearance-none w-100 bg-white border border-secondary hover:border-primary px-4 py-2 pr-8 rounded shadow focus:outline-none focus:shadow-outline"
            >
              <option value="" disabled>I am looking for:</option>
              <option value='Feedback or Suggestions'>Feedback or Suggestions</option>
              <option value='Job or Career Opportunity'>Job or Career Opportunity</option>
              <option value='Add a Recommendation'>Add a Recommendation</option>
              <option value='Report a Bug or Issue'>Report a Bug or Issue</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>

        <div className="mb-6 ">
          <label className="cormorant-infant-bold-italic block text-zinc-700 text-sm font-weight-bold mb-2">Message</label>
          <textarea
            name="message"
            className="cormorant-infant-light shadow appearance-none border rounded w-full py-2 px-3 text-zinc-900 focus:outline-none focus:shadow-outline"
            placeholder="Message for Silvia Reyes"
            value={message}
            onChange={handleChange}
          ></textarea>
          {messageRequired && <p className="text-red-900 mt-2 cormorant-infant-bold">Message is required.</p>}
        </div>

        <div className="flex items-center justify-evenly gap-2 mt-2">
          <button type="submit" disabled={state.submitting} className="bg-sky-800 hover:bg-zinc-500 text-white font-weight-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Send
          </button>
          <button type="button" className="bg-sky-800 hover:bg-zinc-500 text-white font-weight-bold p-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </form>
    </>
  );
}

export default Contact;
