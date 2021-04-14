import React from 'react';
import './Table.css';
import numeral from 'numeral';

function Table({countries}) {
    return (
        <div className="table">
            {
                countries.map(({country, cases}, i) => (// We have destructure it otherwise we have to write country.country so on
                    <tr key={i}>
                        <td>{country}</td>
                        <td>
                            <strong>{numeral(cases).format("000,000")}</strong>
                        </td>
                    </tr>
                ))
            }
        </div>
    )
}

export default Table
