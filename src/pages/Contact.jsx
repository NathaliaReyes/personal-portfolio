import React, { useState } from 'react';
import { useForm } from '@formspree/react';
import '../stylesheets/Contact.css';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
// Here we import a helper function that will check if the email is valid
// import { validateEmail } from '../utils/helpers';

function Contact() {
  // Here we set the initial state of the form inputs
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

  // const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (event) => {
    // Getting the value and name of the input which triggered the change
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
    document.querySelector('#success-modal').classList.add('is-active');

  };

  const handleCancel = () => {
    window.history.back();
  };

  return (
    <>
      {submitted && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-2 text-center relative">
            <button
              onClick={() => {
                setSubmitted(false);
                window.location.href = '/';
              }}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold mb-4">Your message has been delivered!</h2>
            <p className="text-gray-700 mb-4">Thank you for reaching out - I will get in touch soon!</p>
            <p className="text-gray-500">✨ Have a splendid day! ✨</p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="max-w-3xl mx-auto p-2 bg-white rounded-lg shadow-lg mt-4 mb-4">
        <div>
          <p className='lg:text-xl md:text-lg sm:text-base mt-4 ml-10 mr-10 mb-4 text-center'>
            Want to connect?
          </p>
          <p className='lg:text-xl md:text-lg sm:text-base mt-4 ml-10 mr-10 mb-4 text-center'>
            You're welcome to reach out via LinkedIn, GitHub, or email.
            Alternatively, you can simply fill out the form below to send a message.
            Excited to connect with you!
          </p>
          <p className='cormorant-garamond-bold text-center'><i className='fas fa-envelope'></i>
            snrvdevelopment@gmail.com
          </p>
          <p className='cormorant-garamond-bold text-center'><i className='fas fa-phone'></i>
            +1(720)-885-7042
          </p>
          {!fieldsCompleted && <p className="text-red-500 text-xs mt-2">Please fill out all required fields.</p>}
        </div>
        <div className="mb-4 ml-4 mr-4">
          <label className="d-block text-secondary text-sm font-weight-bold mb-2">Name</label>
          <input
            name="firstName"
            value={firstName}
            className="shadow appearance-none border rounded w-100 py-2 px-3 text-secondary focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="First Name"
            onChange={handleInputChange}
          />
          {nameRequired && <p className="text-red-500 text-xs mt-2">Name is required.</p>}
        </div>

        <div className="mb-4 ml-4 mr-4">
          <label className="d-block text-secondary text-sm font-weight-bold mb-2">Last Name</label>
          <input
            name="lastName"
            value={lastName}
            className="shadow appearance-none border rounded w-100 py-2 px-3 text-secondary focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Last Name"
            onChange={handleInputChange}
          />
          {nameRequired && <p className="text-red-500 text-xs mt-2">Last Name is required.</p>}
        </div>

        <div className="mb-4 ml-4 mr-4">
          <label className="d-block text-secondary text-sm font-weight-bold mb-2">Email</label>
          <input
            name="email"
            value={email}
            className="shadow appearance-none border rounded w-100 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="email"
            placeholder="email@example.com"
            onChange={handleInputChange}
          />
          {emailRequired && <p className="text-red-500 text-xs mt-2">Email is required.</p>}
          {!emailValid && email && <p className="text-red-500 text-xs mt-2">Please enter a valid email address.</p>}
        </div>

        <div className="mb-4 ml-4 mr-4">
          <label className="block text-gray-700 text-sm font-weight-bold mb-2">Phone Number</label>
          <PhoneInput
            name="phone"
            value={phone}
            placeholder="Enter phone number"
            className='shadow appearance-none border rounded w-100 py-3 px-3 text-secondary focus:outline-none focus:shadow-outline'
            onChange={handlePhoneChange}
            defaultCountry="US" />
          {phoneRequired && <p className="text-danger text-xs mt-2">Phone Number is required.</p>}
        </div>

        <div className="mb-4 ml-4 mr-4">
          <label className="d-block text-secondary text-sm font-weight-bold mb-2">I am interested in:</label>
          <div className="relative">
            <select
              name="inquiry"
              value={inquiry}
              onChange={handleInputChange}
              className="d-block appearance-none w-100 bg-white border border-secondary hover:border-primary px-4 py-2 pr-8 rounded shadow focus:outline-none focus:shadow-outline"
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

        <div className="mb-3 ml-4 mr-4">
          <label className="d-block text-secondary text-sm font-weight-bold mb-2">Message</label>
          <textarea
            name="message"
            className="shadow appearance-none border rounded w-100 py-2 px-3 text-dark focus:outline-none focus:shadow-outline"
            placeholder="Message for Silvia Reyes"
            value={message}
            onChange={handleInputChange}
          ></textarea>
          {messageRequired && <p className="text-red-500 text-xs mt-2">Message is required.</p>}
        </div>

        <div className="d-flex align-items-center justify-content-center gap-2">
          <button type="submit" disabled={state.submitting} className="bg-primary hover:bg-secondary text-white font-weight-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Send
          </button>
          <button type="button" className="bg-primary hover:bg-secondary text-white font-weight-bold p-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </form>


    </>
  );
}


export default Contact;
