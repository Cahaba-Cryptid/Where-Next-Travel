import * as React from 'react';
import { useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { json, SetToken } from '../utils/api';

const Register: React.SFC<IRegisterProps> = props => {

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [name, setName] = useState<string>('');

    const handleRegister = async () => {
        event.preventDefault()
        let newRegRequest = {
            name,
            email
        }
        try {
            let result = await json('/auth/register', 'POST', newRegRequest);
            if (result) {
                props.history.push('/');
            }
        } catch (error) {
            throw (error);
        }

    }

    return (
        <>
            <div className="card row m-3 w-50 shadow">
                <div className="card-body p-1">
                    <p className="m-2">We're still building our site, but you can get in touch with us at katiewherenexttravel@gmail.com. Thank you for your interest!</p>
                </div>
            </div>
        </>
    )

}

export interface IRegisterProps extends RouteComponentProps {
    email: string,
    password: string
};

export default Register;