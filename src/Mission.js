import React from "react";
import "./AddressBook.css";

const addresses = [
  {
    town: "Albany",
    streetAddress: "7 Washington Sq, Albany, NY 12205",
    state: "NY",
  },
  {
    town: "Binghamton",
    streetAddress: "185 Franklin st, Boston, MA 13903",
    state: "MA",
  },
  {
    town: "Buffalo",
    streetAddress: "64 Court St, Buffalo, NY 14202",
    state: "NY",
  },
  {
    town: "Harrisburg",
    streetAddress: "2360 Vartan Way, Harrisburg, PA 17110",
    state: "PA",
  },
  {
    town: "Pittsburgh",
    streetAddress: "611 William Penn Pl, Pittsburgh, PA 15219",
    state: "PA",
  },
  {
    town: "Philadelphia",
    streetAddress: "1818 Market St, Philadelphia, PA 19103",
    state: "PA",
  },
  {
    town: "Newark",
    streetAddress: "540 Broad St, Newark, NJ 07102",
    state: "NJ",
  },
  {
    town: "Jersey City",
    streetAddress: "111 Town Square Pl, Jersey City, NJ 07310",
    state: "NJ",
  },
  {
    town: "Trenton",
    streetAddress: "207 West State Street, Trenton, NJ 08608",
    state: "NJ",
  },
];

function Mission() {
  return (
    <div>
      <h1>Verizon C.O Addresses</h1>
      <table>
        <thead>
          <tr>
            <th>Town</th>
            <th>Street Address</th>
            <th>State</th>
          </tr>
        </thead>
        <tbody>
          {addresses.map((address, index) => (
            <tr key={index}>
              <td>{address.town}</td>
              <td>{address.streetAddress}</td>
              <td>{address.state}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Mission;
