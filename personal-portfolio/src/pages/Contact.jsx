import { useState } from 'react';
import '../stylesheets/Form.css';

function Contact() {
  // Here we set two state variables for firstName and lastName using `useState`
  const [nombre, setNombre] = useState('');
  const [lastname, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setBody] = useState('');
  const [author, setAuthor] = useState('Silvia')

  // const handleInputChange = (e) => {
  //   // Getting the value and name of the input which triggered the change
  //   const { name, value } = e.target;

  //   // Ternary statement that will call either setFirstName or setLastName based on what field the user is typing in
  //   return name === 'firstName' ? setFirstName(value) : setLastName(value);
  // };

  // const handleFormSubmit = (e) => {
  //   // Preventing the default behavior of the form submit (which is to refresh the page)
  //   e.preventDefault();

  //   // Alert the user their first and last name, clear the inputs
  //   alert(`Hello ${firstName} ${lastName}`);
  //   setFirstName('');
  //   setLastName('');
  // };

  return (
    <div className='container mt-4 text-center'>
      <p>Interested in getting in touch? You're welcome to reach out via LinkedIn, GitHub, or email. 
        Alternatively, you can simply fill out the form below to send a message. 
        Excited to connect with you!</p>
      <div className="create">
        <h1>
          Want to connect?
        </h1>
        <form>
          <label>First Name:</label>
          <input
            value={nombre}
            required
            name="nombre"
            onChange={(e) => setNombre(e.target.value)}
            type="text"
          />
          <label>Last Name:</label>
          <input
            value={lastname}
            required
            name="lastname"
            onChange={(e) => setLastName(e.target.value)}
            type="text"
          />
          <label>Email:</label>
          <input
            value={email}
            required
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            type="email"
          />
          <label>Message:</label>
          <textarea
            required
            value={message}
            name='message'
            onChange={(e) => setBody(e.target.value)}
          ></textarea>
          <label>Blog Author:</label>
          <select
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          >
            <option value='General Inquiry'>General Inquiry</option>
            <option value='Feedback or Suggestions'>Feedback or Suggestions</option>
            <option value='Job or Career Opportunity'>Job or Career Opportunity</option>
            <option value='Add a Recommendation'>Add a Recommendation</option>
            <option value='Report a Bug or Issue'>Report a Bug or Issue</option>
          </select>
          <button>Contact Silvia</button>
          <p>{ nombre }</p>
          <p>{ message }</p>
          <p>{ author }</p>
        </form>
      </div>

    </div>
  );
}

export default Contact;
