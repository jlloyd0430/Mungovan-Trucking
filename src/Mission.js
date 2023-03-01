import React, { useState } from "react";
import "./AddressBook.css";

const addresses = [
  {
    town: "Clinton",
    streetAddress: "223 Chestnut st",
    state: "MA",
    zip: "01510",
  },
  {
    town: "Colrain",
    streetAddress: "st hwy Route 112",
    state: "MA",
    zip: "01340",
  },
  {
    town: "Concord",
    streetAddress: "111 Walden St",
    state: "MA",
    zip: "01742",
  },
  {
    town: "Conway",
    streetAddress: "Shelburn rd",
    state: "MA",
    zip: "01341",
  },
  {
    town: "Cummington",
    streetAddress: "Main st",
    state: "MA",
    zip: "01026",
  },
  {
    town: "Dalton",
    streetAddress: "Carson Ave",
    state: "MA",
    zip: "01226",
  },
  {
    town: "Danvers",
    streetAddress: "63 High St",
    state: "MA",
    zip: "01923",
  },
  {
    town: "Dedham",
    streetAddress: "391 Washington st",
    state: "MA",
    zip: "02026",
  },
  {
    town: "Dennis",
    streetAddress: "1139 st hwy 6A",
    state: "MA",
    zip: "02638",
  },
];

function Mission() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredAddresses = addresses.filter((address) => {
    const searchRegex = new RegExp(searchQuery, "i"); // case-insensitive search
    return (
      searchRegex.test(address.town) ||
      searchRegex.test(address.streetAddress) ||
      searchRegex.test(address.state) ||
      searchRegex.test(address.zip)
    );
  });

  return (
    <div>
      <h1>Verizon CO Buildings Addresses</h1>
      <input
        className="searchbar"
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search addresses"
      />
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
          {filteredAddresses.map((address, index) => (
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
