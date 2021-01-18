import React, { useState } from "react";

type Props = {
  contacts: IContact[];
};

const ListContacts: React.FC<Props> = ({ contacts }) => {
    const [cs, setContacts] = useState(contacts);
    const deleteContact = (email: string, e: React.MouseEvent) => {
    const newContacts: IContact[] = contacts.filter((c: IContact) => {
      return c.email !== email;
    });
    console.log("Contacts after delete: ", newContacts);
    setContacts(newContacts);
    localStorage.setItem("contacts", JSON.stringify(newContacts));
  };
  return (
    <div className="contacts">
      <table>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Country</th>
        </tr>
        {cs.map((c: IContact) => {
          console.log("CS: ", cs);
          return (
            <>
              <tr>
                <td>{c.firstName}</td>
                <td>{c.lastName}</td>
                <td>{c.email}</td>
                <td>{c.country}</td>
                <td>
                  <button onClick={(e: React.MouseEvent) => deleteContact(c.email, e)}>
                  delete
                  </button>
                </td>
              </tr>
            </>
          );
        })}
      </table>
    </div>
  );
};

export default ListContacts;
