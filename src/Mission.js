import React from "react";
import "./AddressBook.css";

const addresses = [
  {
    town: "Albany",
    streetAddress: "7 Washington Sq",
    state: "NY",
    zip: "12205",
  },
  {
    town: "Binghamton",
    streetAddress: "185 Franklin st",
    state: "MA",
    zip: "13903",
  },
  {
    town: "Buffalo",
    streetAddress: "64 Court St",
    state: "NY",
    zip: "14202",
  },
  {
    town: "Harrisburg",
    streetAddress: "2360 Vartan Way",
    state: "PA",
    zip: "17110",
  },
  {
    town: "Pittsburgh",
    streetAddress: "611 William Penn Pl",
    state: "PA",
    zip: "15219",
  },
  {
    town: "Philadelphia",
    streetAddress: "1818 Market St",
    state: "PA",
    zip: "19103",
  },
  {
    town: "Newark",
    streetAddress: "540 Broad St",
    state: "NJ",
    zip: "07102",
  },
  {
    town: "Jersey City",
    streetAddress: "111 Town Square Pl",
    state: "NJ",
    zip: "07310",
  },
  {
    town: "Trenton",
    streetAddress: "207 West State Street",
    state: "NJ",
    zip: "08608",
  },
];

function Mission() {
  return (
    <div>
      <h1>Verizon CO Buildings Addresses</h1>
      <table>
        <thead>
          <tr>
            <th>Town</th>
            <th>Street Address</th>
            <th>State</th>
            <th>Zip</th>
          </tr>
        </thead>
        <tbody>
          {addresses.map((address, index) => (
            <tr key={index}>
              <td>{address.town}</td>
              <td>{address.streetAddress}</td>
              <td>{address.state}</td>
              <td>{address.zip}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Mission;
