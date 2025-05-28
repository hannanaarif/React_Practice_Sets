import React, { useContext } from "react";
import { EmailContext } from "../context/Email";
import { useParams } from "react-router-dom";

const Email = () => {
  const { receivedEmail = [] } = useContext(EmailContext);
  const { id } = useParams();
  const emailId = parseInt(id);

  if (!receivedEmail || receivedEmail.length === 0) {
    return <div>Loading...</div>;
  }

  const filteredEmail = receivedEmail.find((email) => email.id === emailId);

  if (!filteredEmail) {
    return <div>Email not found!</div>;
  }

  return (
    <div className="email-detail">
      <h2>Email Details</h2>
      <div>
        <h3>Subject: {filteredEmail.subject}</h3>
        <p><strong>From:</strong> {filteredEmail.sender}</p>
        <p><strong>Content:</strong> {filteredEmail.message}</p>
      </div>
    </div>
  );
};

export default Email;
