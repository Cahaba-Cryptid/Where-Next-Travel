import * as React from 'react';

export interface IAboutMe {

}

const AboutMe: React.SFC<IAboutMe> = props => {

    return (
        <>
        <h1>Hi, I'm Katie!</h1>

        <p>This is where stuff about me will appear! I'm pretty awesome!</p>
        </>
    );
}

export default AboutMe;