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
    const [email, setEmail] = useState('');
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

    const eventChange = (startDate: Date) => {
        setStartDate(startDate);
    }

    const addNewTrip = async (e: React.MouseEvent) => {
        e.preventDefault();
        let newForm = {
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
            <div className="col-md-12 card shadow">
                <h3>We're so exited to get you started! Please fill out this trip scoping questionnaire and we will be in touch as soon as we can!</h3>
                <form>
                    <section className="form-group">
                        Select a Date:
                            {/* <Calendar onChange={eventChange} value={dateOfEvent} /> */}
                    </section>
                    <section>
                        <p>Is this date flexible?</p>
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <div className="input-group">
                                    <input type="radio" />
                                </div>
                                <input type="radio" aria-label="Radio button for following text input" />
                            </div>
                        </div>
                    </section>

                    <p>Full name:</p>
                    <section className="form-group">
                        <textarea className="form-control" cols={10} rows={1} placeholder="Name" onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => setName(event.target.value)} />
                    </section>

                    <p>Email:</p>
                    <section className="form-group">
                        <textarea className="form-control email" cols={10} rows={1} placeholder="Email" onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => setEmail(event.target.value)} />
                    </section>

                    <p>Start Date</p>
                    {/* Will need different target for calendar to work */}
                    {/* <section className="form-group">
                        <textarea className="form-control" cols={10} rows={1} placeholder="Start Date" onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => setStartDate(event.target.value)} />
                    </section> */}

                    <p>Number of nights</p>
                    <section className="form-group">
                        <textarea className="form-control" cols={10} rows={1} placeholder="Number of nights" onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => setName(event.target.value)} />
                    </section>

                    <p>Location</p>
                    <section className="form-group">
                        <textarea className="form-control" cols={10} rows={1} placeholder="Name" onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => setName(event.target.value)} />
                    </section>

                    <p>What is your budget for the whole trip (airfare, accommodations, food, experiences)?</p>
                    <section className="form-group">
                        <textarea className="form-control" cols={10} rows={1} placeholder="What is your budget?" onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => setName(event.target.value)} />
                    </section>

                    <p>Is this a solo trip? If not, who will be traveling with you? (Names and ages, please!)</p>
                    <section className="form-group">
                        <textarea className="form-control" cols={10} rows={1} placeholder="Who is going?" onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => setName(event.target.value)} />
                    </section>

                    <p>What the reason for your trip? What experience(s) do you hope to have?</p>
                    <section className="form-group">
                        <textarea className="form-control" cols={10} rows={1} placeholder="" onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => setName(event.target.value)} />
                    </section>

                    <p>Tell me about your favorite travel memory.</p>
                    <section className="form-group">
                        <textarea className="form-control" cols={10} rows={1} placeholder="What is your favorite travel memory?" onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => setName(event.target.value)} />
                    </section>

                    <p>What concerns do you have about travel? Or what are your pain points when traveling?</p>
                    <section className="form-group">
                        <textarea className="form-control" cols={10} rows={1} placeholder="Concerns" onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => setName(event.target.value)} />
                    </section>

                    <p>Travel Style/Interests (check all that apply and add your own!)</p>
                    {/* check boxes */}


                    <p>For accommodations, what kind of person are you?</p>
                    {/* check boxes */}


                    <p>Are there any sites/experiences offered that you absolutely have to visit/do?</p>
                    {/* short answer */}


                    <p>Any allergies or dietary restrictions?</p>
                    {/* short answer */}


                    <section className="form-group">
                        <textarea className="form-control" cols={10} rows={10} placeholder="Details" onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => setComments(event.target.value)} />
                    </section>
                    <button className="btn btn-primary" onClick={e => addNewTrip(e)}>Submit Session</button>
                </form>
            </div>
        </div>
    );

}


export default TravelForm;