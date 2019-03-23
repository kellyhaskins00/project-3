import React from 'react';
import AcceptedIcon from 'react-icons/lib/fa/check';
import PendingIcon from 'react-icons/lib/fa/wrench';
import DeclinedIcon from 'react-icons/lib/fa/close';

// Get percent completed
const getProgress = (total, goal) => {
    return Math.floor((total/goal)*100) + '%';
}

// Object of width of progress bar
const getProgressBarWidth = (width) => {
    return {width};
}

export const JobsCount = ({total, pending, accepted, declined, goal=25}) => (
    <div className="jobs-count">
        <div className="content">
            <div className="total"><h1>{total}</h1>jobs</div>
            <div className="pending"><h3>{pending}</h3><PendingIcon /></div>
            <div className="accepted"><h3>{accepted}</h3><AcceptedIcon /></div>
            <div className="declined"><h3>{declined}</h3><DeclinedIcon /></div>
            <div className="goal"><div className="progress" style={getProgressBarWidth(getProgress(total,goal))}></div> {getProgress(total, goal)}</div>
        </div>
    </div>
)

