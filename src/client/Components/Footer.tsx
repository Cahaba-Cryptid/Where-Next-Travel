import * as React from 'react';
import { useState } from 'react';
import { json } from '../utils/api';

interface FooterProps {
    email: string,
    name: string
};

const Footer: React.SFC<FooterProps> = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    // Need Modal to show the email has been submitted
    const addEmail = async (e: React.MouseEvent) => {
        e.preventDefault()

        let newMailList = {
            name,
            email
        }
        try {
            let data =  await json('/api/email-list', 'POST', newMailList)
        } catch (error) {
            console.log(error)
        }
        
    }

    return (
        <>
        <footer className="container-fluid d-flex flex-wrap oswald-font w-100 mt-3">
            <h3 className="px-5 py-3">Stay in touch!</h3>
            <input className="input-group-prepend form-control stay-in-touch mt-3" type="email" placeholder="Email" onChange={(event: React.ChangeEvent<HTMLInputElement>) => setEmail(event.target.value)}/>
            <input className="input-group-prepend form-control stay-in-touch mt-3" type="text" placeholder="Name" onChange={(event: React.ChangeEvent<HTMLInputElement>) => setName(event.target.value)}/>
            <button className="btn " onClick={e => addEmail(e)}>Submit</button>
        </footer>
        </>
    )
}

export default Footer