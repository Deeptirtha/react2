import React, { useState } from 'react';
import "./form.css"

function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");
  const [mobile, setMobile] = useState(0);


  return (
    <div className='form'>
      <form
        onSubmit={() => {
          alert("Form submitted Successfully")
        }}
      >
        <div className='item'>
          <label>Name</label>
          <input value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className='item'>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
    
        <form action="" method="" className='vb'>
        <label >Gender</label>
        <select>
            <option value={gender} onChange={(e) => setGender(e.target.value)}>Male</option>
            <option value={gender} onChange={(e) => setGender(e.target.value)}>Female</option>
            <option value={gender} onChange={(e) =>setGender(e.target.value)}>Other</option>
        </select>
   </form>



        <div className='item'>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className='item'>
          <label>Mobile</label>
          <input
            type="tel"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
          />
        </div>
        <button type="submit" className='sub'>Submit</button>
      </form>

    </div>
  );
}

export default Form;