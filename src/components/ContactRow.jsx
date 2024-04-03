export default function ContactRow({ contact, setSelectedContactID }) {
  return (
    <tr
      onClick={() => {
        setSelectedContactID(contact.id);
      }}
    >
      <td>{contact.name}</td>
      <td>{contact.email}</td>
      <td>{contact.phone}</td>
      <td>{contact.id}</td>
    </tr>
  );
}
