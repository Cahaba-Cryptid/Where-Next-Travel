import * as React from 'react';
import { json } from '../utils/api';
import { useState, useEffect } from 'react';
// import BlogCard from './BlogCard';
import Calendar from 'react-calendar';
import { RouteComponentProps } from 'react-router';
import { User } from '../utils/api';

export interface IBlogsProps extends RouteComponentProps {
    id: number,
    name: string,
    content: string,
    _created: Date
}

const Blogs: React.SFC<IBlogsProps> = props => {

    const [blogs, setBlogs] = useState<IBlogsProps[]>([]);
    const [content, setContent] = useState('');
    const [dateOfEvent, SetDateOfEvent] = useState(new Date());
    const [name, setName] = useState('');

    const getBlogs = async () => {
        let r = await fetch('/api/blogs');
        let blogs = await r.json();
        setBlogs(blogs)
        // let sessions = await json('/api/session', 'GET');
        // setSessions(sessions);
    }

    useEffect(() => {
        getBlogs();
    }, []);

    const eventChange = (dateOfEvent: Date) => {
        SetDateOfEvent(dateOfEvent);
    }

    const addSession = async (e: React.MouseEvent) => {
        e.preventDefault();
        let newSession = {
            name,
            content,
            dateOfEvent
        };
        try {
            let data = await json('/api/sessions/', 'POST', newSession)
            getBlogs();
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        if (!User || User.userid === null || User.role !== 'admin') {
            props.history.replace('/login');
        }
    }, []);

    return (
        <>
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

                        <button className="btn btn-primary" onClick={e => addSession(e)}>Submit Session</button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Blogs;

