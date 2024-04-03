import "./App.css";
import ContactList from "./components/ContactList";
import { useState } from "react";
import SelectedContact from "./components/SelectedContact";
// import { dummyContacts } from "./components/ContactList";

function App() {
  const [selectedContactID, setSelectedContactID] = useState(null);
  return (
    <>
      <div>
        {selectedContactID ? (
          <div>
            <SelectedContact
              setSelectedContactID={setSelectedContactID}
              selectedContactID={selectedContactID}
            />
          </div>
        ) : (
          <ContactList setSelectedContactID={setSelectedContactID} />
        )}
      </div>
    </>
  );
}

export default App;
