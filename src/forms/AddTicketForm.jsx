import React, { useState } from 'react';

const AddTicketForm = (props) => {

    const initTicket = { id: null, name: '', status: false };

    const [ticket, setTicket] = useState(initTicket);

    const handleChange = e => {
        const { name, value } = e.target;
        setTicket({ ...ticket, [name]: value });
    }
    const hunledStatus = e => {
        setTicket({ ...ticket, status: !ticket.status })
    }

    const handleSubmit = e => {
        e.preventDefault();
        if (ticket.name) {
            handleChange(e, props.addTicket(ticket));
        }
    }

    return (
        <form>
            <label>Description</label>
            <input className="u-full-width" type="text" value={ticket.name} name="name" onChange={handleChange} />
            <label>Status</label>
            {ticket.status ? (<span onClick={hunledStatus} className="button">Done</span>) : (<span onClick={hunledStatus} className="button button-primary">Pending</span>)}
            <br />
            <button className="button-primary" type="submit" onClick={handleSubmit} >Add Ticket</button>
        </form>
    )
}

export default AddTicketForm;