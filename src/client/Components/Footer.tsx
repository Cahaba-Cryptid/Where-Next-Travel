import * as React from 'react';

interface FooterProps {

}

const Footer: React.SFC<FooterProps> = () => {

    return (
        <>
        <footer className="container-fluid d-flex flex-wrap oswald-font w-100 mt-3">
            <h3 className="px-5 py-3">Stay in touch!</h3>
            <input className="input-group-prepend form-control stay-in-touch mt-3" type="email" placeholder="email"/>
            <button className="btn">Submit</button>
        </footer>
        </>
    )
}

export default Footer