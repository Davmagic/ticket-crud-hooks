import React, { useState } from "react";
import ticketList from "./data.js";
import TicketTable from "./tables/TicketTable";
import AddTicketForm from "./forms/AddTicketForm";
import EditTicketForm from "./forms/EditTicketForm";

const App = () => {
  const [tickets, setTickets] = useState(ticketList);

  const addTicket = (ticket) => {
    ticket.id = tickets.length + 1;
    setTickets([...tickets, ticket]);
  };

  const deleteTicket = (id) => {
    setTickets(tickets.filter((ticket) => ticket.id !== id));
  };

  const [editing, setEditing] = useState(false);

  const initialTicket = { id: null, name: "", status: false };

  const [currentTicket, setCurrentTicket] = useState(initialTicket);

  const editTicket = (id, ticket) => {
    setEditing(true);
    setCurrentTicket(ticket);
  };

  const updateTicket = (newTicket) => {
    setTickets(
      tickets.map((ticket) => (ticket.id === currentTicket.id ? newTicket : ticket))
    );
    setCurrentTicket(initialTicket);
    setEditing(false);
  };

  return (
    <div className="container">
      <h1>Tickets CRUD con Hooks</h1>
      <div className="row">
        <div className="five columns">
          {editing ? (
            <div>
              <h2>Edit Ticket</h2>
              <EditTicketForm
                currentTicket={currentTicket}
                setEditing={setEditing}
                updateTicket={updateTicket}
              />
            </div>
          ) : (
            <div>
              <h2>Add Ticket</h2>
              <AddTicketForm addTicket={addTicket} />
            </div>
          )}
        </div>
        <div className="seven columns">
          <h2>View Tickets</h2>
          <TicketTable
            tickets={tickets}
            deleteTicket={deleteTicket}
            editTicket={editTicket}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
