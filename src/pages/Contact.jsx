import { useState } from 'react';
import '../stylesheets/Contact.css';

function Contact() {
  // Here we set two state variables for firstName and lastName using `useState`
  const [nombre, setNombre] = useState('');
  const [lastname, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setBody] = useState('');
  const [author, setAuthor] = useState('Silvia');

  return (
    <div className='container-form mt-4 mb-4 mb-2 rounded ml-5 mr-5'>

      <div className='container pt-3 text-center col-12 pl-5 pr-5 rounded ml-5 mr-5'>
          <h3 className='text-dark'>
            Want to connect?
          </h3>
        <p>You're welcome to reach out via LinkedIn, GitHub, or email. 
          Alternatively, you can simply fill out the form below to send a message. 
          Excited to connect with you!</p>
        <div className="create col-12">
          <form className='row g-2'>
            <div className='col-md-6'>
              <label className='form-label h6'>First Name:</label>
              <input
                className='form-control'
                value={nombre}
                required
                name="nombre"
                onChange={(e) => setNombre(e.target.value)}
                type="text"
              />
            </div>
            <div className='col-md-6'>
              <label className='form-label h6'>Last Name:</label>
              <input
                className='form-control'
                value={lastname}
                required
                name="lastname"
                onChange={(e) => setLastName(e.target.value)}
                type="text"
              />

            </div>
            <label className='form-label h6'>Email:</label>
            <input
              className='form-control'
              value={email}
              required
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              type="email"
            />
            <label className='form-label h6'>Message:</label>
            <textarea
              className='form-control'
              required
              value={message}
              name='message'
              onChange={(e) => setBody(e.target.value)}
            ></textarea>
            <label className='form-label h6'>Reason for Contact:</label>
            <select
              className='form-select form-control'
              required
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            >
              <option value='General Inquiry'>General Inquiry</option>
              <option value='Feedback or Suggestions'>Feedback or Suggestions</option>
              <option value='Job or Career Opportunity'>Job or Career Opportunity</option>
              <option value='Add a Recommendation'>Add a Recommendation</option>
              <option value='Report a Bug or Issue'>Report a Bug or Issue</option>
            </select>
            <div>
              <button type='button' className='btn btn-primary mb-3'>Contact Silvia</button>
            </div>
          </form>
        </div>

      </div>
    </div>
  );
}

export default Contact;