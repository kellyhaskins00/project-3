import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Components
import { Nav } from './Nav';
import { JobsCount } from './jobs/JobsCount';
import { AddJob } from './jobs/AddJob';
import { JobsList } from './jobs/JobsList';
import { Error404 } from './Error404';

export class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            allJobs: [
                {
                    place: "Google",
                    date: "2017-01-01",
                    type: "Accepted"
                },
                {
                    place: "Sales Force",
                    date: "2017-04-05",
                    type: "Declined"
                },
                {
                    place: "Microsoft",
                    date: "2017-02-09",
                    type: "Pending"
                }
            ]
        }
        this.addJob = this.addJob.bind(this);
    }

    addJob(newJob) {
        this.setState((prevState) => {
            return {
                allJobs: [
                ...prevState.allJobs,
                newJob
                ]
            }
        });
    }

    countDays(filter) {
        const { allJobs } = this.state;
        return allJobs.filter(job => filter ? job.type === filter : job).length;
    }

    // Switch goes to first matching route
    render () {
        return (
            <div className="app">                
                <Router>
                    <div className="route-container">
                        <Nav />
                        <Switch>
                            <Route exact path="/" render={(props) => (
                                <JobsCount
                                    {...props}
                                    total={this.countDays()}
                                    accepted={this.countDays('Accepted')}
                                    pending={this.countDays('Pending')}
                                    declined={this.countDays('Declined')}
                                />
                            )}>
                            </Route>
                            <Route path="/list/:filter" render={(props) => (
                                <JobsList 
                                    {...props} 
                                    days={this.state.allJobs}
                                /> 
                            )}/>
                            <Route path="/list" render={(props) => (
                                <JobsList
                                    {...props}
                                    days={this.state.allJobs}
                                />
                            )} />
                            <Route path="/add" render={(props) => (
                                <AddJob
                                    {...props}
                                    newJob={this.addJob}
                                />
                            )} />
                            <Route component={Error404} />
                        </Switch>
                    </div>                    
                </Router>                
            </div>
        )
    }
}