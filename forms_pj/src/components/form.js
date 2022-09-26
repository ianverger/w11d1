import react from "react"
import { useState } from 'react';
// import Dropdown from 'react-bootstrap/Dropdown';

const Form = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [phoneType, setPhoneType] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    };

    return (
    <form onSubmit={handleSubmit}>
        <label htmlFor="name">name</label>
        <input id="name" 
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
        <input id="phone" 
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

        {/* <DropdownButton id="phoneType" title="Phone Type">
            <Dropdown.Item id="phoneType" value="home">Home</Dropdown.Item>
            <Dropdown.Item id="phoneType" value="work">Work</Dropdown.Item>
            <Dropdown.Item id="phoneType" value="mobile">Mobile</Dropdown.Item>
        </DropdownButton> */}


    <input type={'submit'} value="submit"/>
    </form>
    )
};

export default Form;
