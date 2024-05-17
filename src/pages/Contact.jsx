import { useState } from 'react';
import '../stylesheets/Contact.css';
// Here we import a helper function that will check if the email is valid
import { validateEmail } from '../utils/helpers';

function Contact() {
  // Here we set the initial state of the form inputs
  const [nombre, setNombre] = useState('');
  const [lastname, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setBody] = useState('');
  const [inquiry, setInquiry] = useState('General Inquiry');

  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    switch (inputType) {
      case 'nombre':
        setNombre(inputValue);
        break;
      case 'lastname':
        setLastName(inputValue);
        break;
      case 'email':
        setEmail(inputValue);
        break;
      case 'message':
        setBody(inputValue);
        break;
      case 'inquiry':
        setInquiry(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
    if (!validateEmail(email) || !nombre) {
      setErrorMessage('Email or username is invalid');
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
      // Then we check to see if the password is not valid. If so, we set an error message regarding the password.
    }


    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Your message has been sent!',
      text: 'Thank you for reaching out. Silvia will be in touch with you shortly.',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
    });

    setNombre('');
    setLastName('');
    setEmail('');
    setBody('');
    setInquiry('General Inquiry')
  };

  return (
    <div className='container-form mt-4 mb-4 mb-2 rounded ml-5 mr-5'>

      <div className='container pt-3 text-center col-12 pl-5 pr-5 rounded ml-5 mr-5'>
        <h3 className='text-dark cormorant-garamond-bold'>
          Want to connect?
        </h3>
        <p className='cormorant-garamond-medium'>You're welcome to reach out via LinkedIn, GitHub, or email.
          Alternatively, you can simply fill out the form below to send a message.
          Excited to connect with you!</p>
          <div>
            <p className='cormorant-garamond-bold'><i className='fas fa-envelope'></i> snrvdevelopment@gmail.com</p>
            <p className='cormorant-garamond-bold'><i className='fas fa-phone'></i>+1(720)-885-7042</p>
          </div>
        <div className="create col-12">
          <form className='row g-2 form' onSubmit={handleFormSubmit}>
            <div className='col-md-6'>
              <label className='form-label h6 cormorant-garamond-semibold'>First Name:</label>
              <input
                className='form-control'
                value={nombre}
                required
                name="nombre"
                onChange={(e) => setNombre(e.target.value)}
                type="text"
                placeholder='First Name'
              />
            </div>
            <div className='col-md-6'>
              <label className='form-label h6 cormorant-garamond-semibold'>Last Name:</label>
              <input
                className='form-control'
                value={lastname}
                required
                name="lastname"
                onChange={(e) => setLastName(e.target.value)}
                type="text"
                placeholder='Last Name'
              />

            </div>
            <label className='form-label h6 cormorant-garamond-semibold'>Email:</label>
            <input
              className='form-control'
              value={email}
              required
              name="email"
              onChange={handleInputChange}
              type="email"
              placeholder='Email Address'
            />
            <label className='form-label h6 cormorant-garamond-semibold'>Message:</label>
            <textarea
              className='form-control'
              required
              value={message}
              name='message'
              onChange={handleInputChange}
              type='text'
            ></textarea>
            <label className='form-label h6 cormorant-garamond-semibold'>Reason for Contact:</label>
            <select
              className='form-select form-control'
              required
              value={inquiry}
              onChange={handleInputChange}
            >
              <option value='General Inquiry'>General Inquiry</option>
              <option value='Feedback or Suggestions'>Feedback or Suggestions</option>
              <option value='Job or Career Opportunity'>Job or Career Opportunity</option>
              <option value='Add a Recommendation'>Add a Recommendation</option>
              <option value='Report a Bug or Issue'>Report a Bug or Issue</option>
            </select>
            <div>
              <button
                type='submit'
                className='btn btn-primary mb-3 cormorant-garamond-medium'>
                Contact Silvia
              </button>
            </div>
          </form>
          {errorMessage && (
            <div>
              <p className="error-text">{errorMessage}</p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}

export default Contact;
