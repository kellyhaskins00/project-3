import React from 'react';

export const AddJob = ({newJob}) => {
    let date, place, type;
    const submit = (e) => {
        e.preventDefault();
        newJob({
            date : date.value,
            place : place.value,
            type : type.value,
        });
        date.value = place.value = type.value = '';
    }

    return (
        <div className="form-container">
            <form onSubmit={submit} className="form black-container">
                <label>
                    <h3>Add a Job</h3>
                    <br />
                    <br />
                    <br />
                </label>
                <label>
                    Date Applied: <br/>
                    <input 
                        id="date"
                        type="date"
                        required
                        ref={(input) => date = input} 
                    />
                </label>
                <label>
                    Company and Job Title: <br />
                    <input
                        id="date"
                        type="text"
                        required
                        ref={(input) => place = input} 
                    />
                </label>
                <label>
                    Type: <br />
                    <select ref={(input) => type = input} >
                        <option value="Accepted">Accepted</option>
                        <option value="Pending">Pending</option>
                        <option value="Declined">Declined</option>
                    </select>
                </label>
                <input type="submit" value="SUBMIT" />
            </form>
        </div>
    );
}