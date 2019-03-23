import React from 'react';
import { Link } from 'react-router-dom';
import { Job } from './Job';

export const JobsList = ({match, days}) => { 
    const filter = match.params.filter;
    const jobs = filter ? days.filter( job => job.type === filter) : days;
    return (
        <div className="jobs-list">
            <h3>{filter ? filter : 'All'} Jobs</h3>            
            <table class="table">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Place</th>
                        <th>Type</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        jobs.map((job, i) => 
                            <Job
                                key={i}
                                {...job}
                            />
                        )
                    }
                </tbody>
            </table>
            <div className="filters">
                Filter by:
                <Link to="/list">
                    All
				</Link>
                &#9679;
                <Link to="/list/Accepted">
                    Accepted
				</Link>
                &#9679;
                <Link to="/list/Declined">
                    Declined
				</Link>
                &#9679;
                <Link to="/list/Pending">
                    Pending
				</Link>
            </div>            
        </div>
    )
}