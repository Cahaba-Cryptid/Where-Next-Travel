import * as React from 'react';
import { json } from '../utils/api';
import { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import { RouteComponentProps } from 'react-router';
import { User } from '../utils/api';

export interface ITravelForm extends RouteComponentProps {

}

const TravelForm: React.SFC<ITravelForm> = props => {

    const [name, setName] = useState('');
    const [email, setEmail] =useState('');
    const [dateFlex, setDateFlex] = useState('');
    const [startDate, setStartDate] = useState(new Date());
    const [nights, setNights] = useState('');
    const [locations, setLocations] = useState('');
    const [budget, setBudget] = useState('');
    const [participants, setParticipants] = useState('');
    const [travelReason, setTravelReason] = useState('');
    const [favTravelMem, setFavTravelMem] = useState('');
    const [concerns, setConcerns] = useState('');
    const [travelInterests, setInterests] = useState('');
    const [accomodation, setAccomodation] = useState('');
    const [prefActivities, setPrefActivities] = useState('');
    const [allergies, setAllergies] = useState('');
    const [comments, setComments] = useState('');

const addNewTrip = async (e: React.MouseEvent) => {
    e.preventDefault();
    let newForm= {
        name,
        email,
        startDate,
        //Is the start date flexible
        dateFlex,
        //How many nights
        nights,
        //Must do locations
        locations,
        budget,
        //How many people will be going
        participants,
        //Why did you want to do on your trip (i.e. museums, food, drinks, landmarks, etc.)?
        travelReason,
        //Favorite travel memory
        favTravelMem,
        //What concerns do you have about travelling (i.e. must fly first-class, hates large crowds, etc.)?
        concerns,
        //What do you like to do and see?
        travelInterests,
        //Preferences for accomodation (AirBnB, hotels, camping)
        accomodation,
        //prefered activities
        prefActivities,
        allergies,
        //misc comments
        comments
    };
    try {
        let data = await json('/api/sessions/', 'POST', newForm)
    } catch (error) {
        console.log(error);
    }
};

    return (
<div className="container row d-flex">
                <div className="col-md-12 flex-column-reverse justify-content-end border-right border-dark">
                    <h3>We're so exited to get you started! Please fill out this trip scoping questionnaire and we will be in touch as soon as we can!</h3>
                    <form>
                        <section className="form-group">
                            Select a Date:
                            <Calendar onChange={eventChange} value={dateOfEvent} />
                        </section>
                        <section>
                            <p>Is this date flexible?</p>
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <div className="input-group-text">
                                        <input type="radio" >Yes</input>
                                    </div>
                                </div>
                                <div className="input-group-text">
                                        <input type="radio" aria-label="Radio button for following text input">No</input>
                                    </div>
                                <input type="text" className="form-control" aria-label="Text input with radio button"></input>
                            </div>
                        </section>
                        <section className="form-group">
                            <textarea className="form-control" cols={10} rows={1} placeholder="Name" onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => setName(event.target.value)} />
                        </section>
                        <section className="form-group">
                            <textarea className="form-control" cols={10} rows={10} placeholder="Details" onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => setContent(event.target.value)} />
                        </section>
                        <button className="btn btn-primary" onClick={e => addNewTrip(e)}>Submit Session</button>
                    </form>
                </div>
            </div>
    );

}


export default TravelForm;