import React from 'react';

export const Job = ({date, place, type}) => (
    <tr>
        <td>
            {date}
        </td>
        <td>
            {place}
        </td>
        <td>
            {type}
        </td>
    </tr>	
)