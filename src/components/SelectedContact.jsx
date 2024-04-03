import { useState, useEffect } from "react";

export default function SelectedContact({
  selectedContactID,
  setSelectedContactID,
}) {
  const [contact, setContact] = useState(null);
  console.log("SINGLEContact: ", contact);
  useEffect(() => {
    async function fetchContact() {
      try {
        const response = await fetch(
          `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactID}`
        );
        const result = await response.json();
        setContact(result);
      } catch (error) {
        console.error(error);
      }
    }
    fetchContact();
  }, []);

  return (
    <div>
      <h1 style={{ textDecoration: "underline" }}>Contact Details</h1>
      {contact && (
        <div>
          <p>Name: {contact.name}</p>
          <p>Username: {contact.username}</p>
          <p>Email: {contact.email}</p>
          <p>Phone: {contact.phone}</p>
        </div>
      )}
      <button
        onClick={() => {
          setSelectedContactID(null);
        }}
      >
        Go Back
      </button>
    </div>
  );
}
