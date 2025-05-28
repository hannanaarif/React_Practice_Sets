import { useContext } from "react";
import { EmailContext } from "../context/Email";

const Sent = () => {
  const { sentEmail = [] } = useContext(EmailContext);

  if (!sentEmail) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Sent</h2>
      {sentEmail.map((email) => (
        <h3 key={email.id}>{email.subject}</h3>
      ))}
    </div>
  );
};

export default Sent;
