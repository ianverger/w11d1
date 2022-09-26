import react from "react"
import { useState } from 'react';
// import Dropdown from 'react-bootstrap/Dropdown';

const Form = () => {

    function validate(values) {
        const errors ={};

        if ()
    }


    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [phoneType, setPhoneType] = useState('');
    const [staff, setStaff] = useState('');
    const [bio, setBio] = useState('');
    const [signup, setSignup] = useState(false);


    const handleSubmit = (e) => {
        e.preventDefault();


        console.log(email);
        console.log(staff);
        console.log(bio);
        console.log(signup);
    };

    return (
    <form onSubmit={handleSubmit}>
        <label htmlFor="name">name</label>
        <input 
            id="name" 
            type="text" 
            placeholder="name" 
            value={name} 
            onChange={e => setName(e.target.value)}
        />
        <label htmlFor="email">email</label>
        <input id="email" 
            type="text" 
            placeholder="email" 
            value={email} 
            onChange={e => setEmail(e.target.value)}
        />
        <label htmlFor="phone">phone</label>
        <input 
            id="phone" 
            type="text" 
            placeholder="phone" 
            value={phone} 
            onChange={e => setPhone(e.target.value)}
        />
        <label htmlFor="phoneType">phoneType</label>
        <select id="phoneType" value={phoneType} onChange={e => setPhoneType(e.target.value)}>
            <option value="home">Home</option>
            <option value="work">Work</option>
            <option value="mobile">Mobile</option>
        </select>
        <label htmlFor="staff">Instructor</label>
        <input 
            type="radio" 
            id="Instructor"
            name="staff"
            value="Instructor" 
            onChange={e => setStaff(e.target.value)}
            />
        <label htmlFor="staff">Student</label>
        <input 
            type="radio" 
            id="Student"
            name="staff"
            value="Student" 
            onChange={e => setStaff(e.target.value)}
        />
        <br></br>
        <label htmlFor="bio">Bio</label>
        <input
            type="textarea"
            id="bio"
            value={bio}
            onChange={e => setBio(e.target.value)}
        />
        <input
            type="checkbox"
            id="signup"
            name="signup"
            value={signup}
            onChange={e => setSignup(!signup)}
        />
        <label htmlFor="signup">Sign up for email notifications!</label>

    <input type={'submit'} value="submit"/>
    </form>
    )
};

export default Form;
