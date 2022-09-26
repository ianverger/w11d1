import react from "react"
import { useState, useEffect } from 'react';
// import Dropdown from 'react-bootstrap/Dropdown';

const Form = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [phoneType, setPhoneType] = useState('');
    const [staff, setStaff] = useState('');
    const [bio, setBio] = useState('');
    const [signup, setSignup] = useState(false);
    const [validationErrors, setValidationErrors] = useState([]);
    const [hasSubmitted, setHasSubmitted] = useState(false);

    const isValidEmail = (email) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);


    useEffect(() => {
        const errors = [];
        if (!name.length) errors.push("Please enter Your Name"); 
        if (!email.length || !isValidEmail(email)) errors.push("email incorrectly formatted")
        setValidationErrors(errors)
    }, [name, email])


    //useEffect(callback, [dependencyArray])

    const handleSubmit = (e) => {
        e.preventDefault();
        
        setHasSubmitted(true);
        if (validationErrors.length) return;

        console.log(name);
        console.log(email);
        console.log(staff);
        console.log(bio);
        console.log(signup);
        setHasSubmitted(false);
    };

    return (
    <>
    {hasSubmitted && validationErrors.length > 0 && (
        <div>
            <ul>
                {validationErrors.map(error => (
                    <li key={error}>{error}</li>
                ))}
            </ul>
        </div>
    )}
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
    </>
    )
};

export default Form;
