import React, { useState, useEffect } from 'react';

const EditTicketForm = (props) => {

    useEffect(() => {
        setTicket(props.currentTicket)
    }, [props])

    const [ticket, setTicket] = useState(props.currentTicket);

    const handleChange = e => {
        const { name, value } = e.target;
        setTicket({ ...ticket, [name]: value });
    }
    const hunledStatus = e => {
        setTicket({ ...ticket, status: !ticket.status })
    }

    const handleSubmit = e => {
        e.preventDefault();
        if (ticket.name) props.updateTicket(ticket);
    }

    return (
        <form>
            <label>Name</label>
            <input className="u-full-width" type="text" value={ticket.name} name="name" onChange={handleChange} />
            <label>Status</label>
            {ticket.status ? (<span onClick={hunledStatus} className="button">Done</span>) : (<span onClick={hunledStatus} className="button button-primary">Pending</span>)}
            <br />
            <button className="button-primary" type="submit" onClick={handleSubmit} >Edit Ticket</button>
            <button type="submit" onClick={() => props.setEditing(false)} >Cancel</button>
        </form>
    )
}

export default EditTicketForm;