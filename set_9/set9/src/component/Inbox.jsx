import React, { useContext } from "react";
import { EmailContext } from "../context/Email";
import { Link, useNavigate } from "react-router-dom";

const Inbox = () => {
  const { receivedEmail = [], read = 0, unread = 0, handleMarkAsRead } = useContext(EmailContext);
  const navigate = useNavigate();

  if (!receivedEmail) {
    return <div>Loading...</div>;
  }

  function handleIndividual(id) {
    navigate(`/email/${id}`);
  }

  return (
    <div>
      <h2>Inbox</h2>
      <h3>Read Emails: {read}</h3>
      <h3>Unread Emails: {unread}</h3>
      {receivedEmail.map((email) => (
        <div key={email.id} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div onClick={() => handleIndividual(email.id)} style={{ cursor: 'pointer' }}>
            {email.subject}
          </div>
          {!email.read && <button onClick={() => handleMarkAsRead(email.id)}>Mark as Read</button>}
        </div>
      ))}
    </div>
  );
};

export default Inbox;
