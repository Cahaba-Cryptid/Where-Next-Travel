import * as React from 'react';
import { IBlogsProps } from "./Blogs"
import moment from 'moment';

//This component maps through all blog posts in the DB to display them with a title and a date created.

export interface IBlogCardProps { blogs: IBlogsProps[] }

const SeshCard: React.SFC<IBlogCardProps> = props => {

    return (
        <>
            <div className="row">
                <main className="col-md-12 d-flex flex-row justify-content-center flex-wrap">
                    {props.blogs.map(blog => (
                        <div key={blog.id} className="col-md-3 card m-4 shadow border border-light float-right">
                            <div className="card-body">
                                <h3>{blog.title}</h3>
                                {/* <p className="card-text">Blog Details: {blog.content}</p> */}
                                <p>Created: {moment(blog._created).format('MMMM Do, YYYY')}</p>
                                {/* <Link className="btn btn-success my-2" to={`/blog/${blog.id}`}>View Full Blog</Link> */}
                            </div>
                        </div>
                    ))}
                </main>
            </div>
        </>
    );
}

export default SeshCard;