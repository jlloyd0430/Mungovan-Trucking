import React, { useState } from "react";
import "./AddressBook.css";

  
  const addresses = [
    
  {
    town: "Acton",
    streetAddress: "42 Massachusetts ave",
    state: "MA",
    zip: "01720",
  },
  {
    town: "Amesbury",
    streetAddress: "13 pleasant st",
    state: "MA",
    zip: "01913",
  },
  {
    town: "Amherst",
    streetAddress: "20 fearing st",
    state: "MA",
    zip: "01002",
  },
  {
    town: "Andover",
    streetAddress: "27 elm st",
    state: "MA",
    zip: "01810",
  },
  {
    town: "Arlington",
    streetAddress: "67 pleasant st",
    state: "MA",
    zip: "02476",
  },
  {
    town: "Ashburnham",
    streetAddress: "pleasant st",
    state: "MA",
    zip: "01430",
  },
  {
    town: "Ashby",
    streetAddress: "south rd",
    state: "MA",
    zip: "01431",
  },
  {
    town: "Ashfield",
    streetAddress: "268 main st",
    state: "MA",
    zip: "01330",
  },
  {
    town: "Ashland",
    streetAddress: "366 main st",
    state: "MA",
    zip: "01721",
  },
  {
    town: "Assonet",
    streetAddress: "main st",
    state: "MA",
    zip: "02702",
  },
  {
    town: "Athol",
    streetAddress: "58 riverbend st",
    state: "MA",
    zip: "01331",
  },
  {
    town: "Attleboro",
    streetAddress: "39 bank st",
    state: "MA",
    zip: "02703",
  },
  {
    town: "Auburn",
    streetAddress: "leicester & garden st",
    state: "MA",
    zip: "01501",
  },
  {
    town: "Ayer",
    streetAddress: "26 pleasant st",
    state: "MA",
    zip: "01432",
  },
  {
    town: "Adams",
    streetAddress: "20 Maple st",
    state: "MA",
    zip: "01220",
  },
  {
    town: "Barnstable",
    streetAddress: "3240 main st",
    state: "MA",
    zip: "02630",
  },
  {
    town: "Barre",
    streetAddress: "james st",
    state: "MA",
    zip: "01005",
  },
  {
    town: "Bass river",
    streetAddress: "45 station ave",
    state: "MA",
    zip: "02664",
  },
  {
    town: "Becket",
    streetAddress: "washington st",
    state: "MA",
    zip: "01223",
  },
  {
    town: "Bedford",
    streetAddress: "70 page rd",
    state: "MA",
    zip: "01730",
  },
  {
    town: "Belchertown",
    streetAddress: "35 jabish st",
    state: "MA",
    zip: "01007",
  },
  {
    town: "Belmont",
    streetAddress: "115 Leonard St",
    state: "MA",
    zip: "02478",
  },
  {
    town: "Berlin",
    streetAddress: "Highland St",
    state: "MA",
    zip: "01503",
  },
  {
    town: "Bernardston",
    streetAddress: "23 Church St",
    state: "MA",
    zip: "01337",
  },
  {
    town: "Beverly",
    streetAddress: "15 Elliot St",
    state: "MA",
    zip: "01915",
  },
  {
    town: "Billerica",
    streetAddress: "9 Andover Rd",
    state: "MA",
    zip: "01821",
  },
  {
    town: "Blandford",
    streetAddress: "4 Glasgow Rd",
    state: "MA",
    zip: "01008",
  },
  {
    town: "Bolton",
    streetAddress: "760 Main St",
    state: "MA",
    zip: "01740",
  },
  {
    town: "Boston",
    streetAddress: "6 Harrison Ave",
    state: "MA",
    zip: "02111",
  },
  {
town: "Boston",
streetAddress: "185 Franklin st",
state: "MA",
zip: "02110",
},
{
town: "Boston",
streetAddress: "41 Belvedere st",
state: "MA",
zip: "02115",
},
{
town: "Boston",
streetAddress: "6 Bowdoin sq",
state: "MA",
zip: "02114",
},
{
town: "Boylston",
streetAddress: "472 Main st",
state: "MA",
zip: "01505",
},
{
town: "Braintree",
streetAddress: "44w washington st",
state: "MA",
zip: "02184",
},
{
town: "Breckwood park",
streetAddress: "1070 Wilbraham rd",
state: "MA",
zip: "01109",
},
{
town: "Brewster",
streetAddress: "US hwy rt 6a",
state: "MA",
zip: "02631",
},
{
town: "Bridgewater",
streetAddress: "10 church st",
state: "MA",
zip: "02324",
},
{
town: "Brighton",
streetAddress: "12 wirt st",
state: "MA",
zip: "02135",
},
{
town: "Brimfield",
streetAddress: "warren rd",
state: "MA",
zip: "01010",
},
{
town: "Brockton",
streetAddress: "180 court st",
state: "MA",
zip: "02302",
},
{
town: "Brockton",
streetAddress: "65 crescent st",
state: "MA",
zip: "02301",
},
{
town: "Brookline",
streetAddress: "41 Marion st",
state: "MA",
zip: "02446",
},
{
town: "Bryantville",
streetAddress: "union st",
state: "MA",
zip: "02327",
},
{
town: "Burlington",
streetAddress: "1 bedford st",
state: "MA",
zip: "01803",
},
{
town: "Buzzards Bay",
streetAddress: "11 perry ave",
state: "MA",
zip: "02532",
},
{
town: "Cambridge",
streetAddress: "10 ware st",
state: "MA",
zip: "02138",
},
{
town: "Cambridge",
streetAddress: "210 bent st",
state: "MA",
zip: "02141",
},
  {
    town: "Canton",
    streetAddress: "825 Washington st",
    state: "MA",
    zip: "02021",
  },
  {
    town: "Carver",
    streetAddress: "112 main st",
    state: "MA",
    zip: "02330",
  },
  {
    town: "Cataumet",
    streetAddress: "depot rd",
    state: "MA",
    zip: "02534",
  },
  {
    town: "Charlamont",
    streetAddress: "South st",
    state: "MA",
    zip: "01339",
  },
  {
    town: "Charlton",
    streetAddress: "N Main st",
    state: "MA",
    zip: "01507",
  },
  {
    town: "Chatam",
    streetAddress: "Old harbor rd",
    state: "MA",
    zip: "02633",
  },
  {
    town: "Chelmsford",
    streetAddress: "20 North rd",
    state: "MA",
    zip: "01863",
  },
  {
    town: "Chelsea",
    streetAddress: "1 city hall ave",
    state: "MA",
    zip: "02150",
  },
  {
    town: "Chester",
    streetAddress: "Mullen ave",
    state: "MA",
    zip: "01011",
  },
  {
    town: "Chesterfield",
    streetAddress: "South & Bryant st",
    state: "MA",
    zip: "01012",
  },
  {
    town: "Chicopee",
    streetAddress: "29 riverview ter",
    state: "MA",
    zip: "01020",
  },
  {
    town: "Chicopee",
    streetAddress: "1790 Westover rd",
    state: "MA",
    zip: "01022",
  },
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
  {
    town: "Dighton",
    streetAddress: "2075 Elm St",
    state: "MA",
    zip: "02715",
  },
  {
    town: "Dorchester",
    streetAddress: "175 Adams St",
    state: "MA",
    zip: "02122",
  },
  {
    town: "Dracut",
    streetAddress: "1212 Mammoth Rd",
    state: "MA",
    zip: "01826",
  },
  {
    town: "Duxbury",
    streetAddress: "59 Chestnut St",
    state: "MA",
    zip: "02332",
  },
  {
    town: "East Boston",
    streetAddress: "40 Saratoga St",
    state: "MA",
    zip: "02128",
  },
  {
    town: "East Bridgewater",
    streetAddress: "Bedford St",
    state: "MA",
    zip: "02333",
  },
  {
    town: "East Douglas",
    streetAddress: "Main St",
    state: "MA",
    zip: "01516",
  },
  {
    town: "East Longmeadow",
    streetAddress: "14 Pleasant St",
    state: "MA",
    zip: "01028",
  },
  {
    town: "East Hampton",
    streetAddress: "6 Railroad St",
    state: "MA",
    zip: "01027",
  },
  {
    town: "Easton",
    streetAddress: "64 N Main St",
    state: "MA",
    zip: "02356",
  },
  {
    town: "Edgartown",
    streetAddress: "Peases Point Way",
    state: "MA",
    zip: "02539",
  },
  {
    town: "Essex",
    streetAddress: "Spring St",
    state: "MA",
    zip: "01929",
  },
  {
    town: "Fall River",
    streetAddress: "328 N Main St",
    state: "MA",
    zip: "02720",
  },
  {
    town: "Falmouth",
    streetAddress: "Main St & Gifford St",
    state: "MA",
    zip: "02540",
  },
  {
    town: "Fitchburg",
    streetAddress: "676 Main St",
    state: "MA",
    zip: "01420",
  },
  {
    town: "Foxboro",
    streetAddress: "13 Cocasset St",
    state: "MA",
    zip: "02035",
  },
  {
    town: "Framingham",
    streetAddress: "141 Union Ave",
    state: "MA",
    zip: "01702",
  },
  {
    town: "Franklin",
    streetAddress: "Main St & Crescent St",
    state: "MA",
    zip: "02038",
  },
  {
    town: "Gardner",
    streetAddress: "43 West St",
    state: "MA",
    zip: "01440",
  },
  {
    town: "Georgetown",
    streetAddress: "Winter St",
    state: "MA",
    zip: "01833",
  },
  {
    town: "Gilbertville",
    streetAddress: "Highland Ter",
    state: "MA",
    zip: "01031",
  },
  {
     town: "Gloucester",
    streetAddress: "13 Elm St",
    state: "MA",
    zip: "01930",
  },
  {
     town: "Grafton",
    streetAddress: "worcester St",
    state: "MA",
    zip: "01519",
  },
  {
    town: "Granville",
    streetAddress: "w granville rd",
    state: "MA",
    zip: "01034",
  },
  {
    town: "Great Barrington",
    streetAddress: "75 school st",
    state: "MA",
    zip: "01230",
  },
  {
    town: "Greendale",
    streetAddress: "summerhill ave",
    state: "MA",
    zip: "01606",
  },
  {
    town: "Greenfield",
    streetAddress: "11 church st",
    state: "MA",
    zip: "01301",
  },
  {
    town: "Groton",
    streetAddress: "17 hollis st",
    state: "MA",
    zip: "01450",
  },
  {
    town: "Hamilton",
    streetAddress: "willow st",
    state: "MA",
    zip: "01982",
  },
  {
    town: "Hampden",
    streetAddress: "585 main st",
    state: "MA",
    zip: "01036",
  },
  {
    town: "Hanover",
    streetAddress: "319 columbia rd",
    state: "MA",
    zip: "02339",
  },
  {
    town: "Harvard",
    streetAddress: "littleton rd",
    state: "MA",
    zip: "01451",
  },
  {
    town: "Harwich",
    streetAddress: "721 main st",
    state: "MA",
    zip: "02645",
  },
  {
    town: "Hatfield",
    streetAddress: "chestnut st",
    state: "MA",
    zip: "01038",
  },
  {
    town: "Haverhill",
    streetAddress: "33 winter st",
    state: "MA",
    zip: "01830",
  },
  {
    town: "Hingam",
    streetAddress: "30 green st",
    state: "MA",
    zip: "02043",
  },
  {
    town: "Hinsdale",
    streetAddress: "South st",
    state: "MA",
    zip: "01235",
  },
  {
    town: "Holden",
    streetAddress: "6 holt rd",
    state: "MA",
    zip: "01520",
  },
  {
    town: "Holliston",
    streetAddress: "12 charles st",
    state: "MA",
    zip: "01746",
  },
  {
    town: "Holyoke",
    streetAddress: "322 maple st",
    state: "MA",
    zip: "01040",
  },
  {
    town: "Hopkington",
    streetAddress: "hayden rowe & Fenton st",
    state: "MA",
    zip: "01748",
  },
  {
    town: "Housatonic",
    streetAddress: "Main st & cottage st",
    state: "MA",
    zip: "01236",
  },
  {
    town: "Hubbardston",
    streetAddress: "main st",
    state: "MA",
    zip: "01452",
  },
  {
    town: "Hudson",
    streetAddress: "felton st & Russel st",
    state: "MA",
    zip: "01749",
  },
  {
    town: "Huntington",
    streetAddress: "Main st",
    state: "MA",
    zip: "01050",
  },
  {
    town: "Hyde Park",
    streetAddress: "50 Harvard Ave",
    state: "MA",
    zip: "02136",
  },
  {
    town: "Indian Orchard",
    streetAddress: "Rapalus St & Ludlow Ave",
    state: "MA",
    zip: "01151",
  },
  {
    town: "Ipswich",
    streetAddress: "79 County Rd",
    state: "MA",
    zip: "01938",
  },
  {
    town: "Kingston",
    streetAddress: "Summer St & Linden St",
    state: "MA",
    zip: "02364",
  },
  {
    town: "Lawrence",
    streetAddress: "425 Canal St",
    state: "MA",
    zip: "01840",
  },
  {
    town: "Lee",
    streetAddress: "47 High St",
    state: "MA",
    zip: "01238",
  },
  {
    town: "Leicester",
    streetAddress: "Grove St",
    state: "MA",
    zip: "01524",
  },
  {
    town: "Lenox",
    streetAddress: "60 Walker St",
    state: "MA",
    zip: "01240",
  },
  {
    town: "Leominster",
    streetAddress: "2 School St",
    state: "MA",
    zip: "01453",
  }
];

function Mission() {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const addressesPerPage = 10; // Change this to the desired number of addresses per page or per scroll.

  const filteredAddresses = addresses.filter((address) => {
    const searchRegex = new RegExp(searchQuery, "i"); // case-insensitive search
    return (
      searchRegex.test(address.town) ||
      searchRegex.test(address.streetAddress) ||
      searchRegex.test(address.state) ||
      searchRegex.test(address.zip)
    );
  }).slice(currentPage * addressesPerPage, (currentPage + 1) * addressesPerPage);

  const totalPages = Math.ceil(filteredAddresses.length / addressesPerPage);

  function handlePrevPage() {
    setCurrentPage((prevPage) => prevPage - 1);
  }

  function handleNextPage() {
    setCurrentPage((prevPage) => prevPage + 1);
  }

  return (
    <div>
      <h1 className="verizon-title">Verizon CO Buildings Addresses</h1>
      <input
        className="searchbar"
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search addresses"
      />
      <div className="table-wrapper">
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
      {currentPage > 0 && (
        <button
          className="pagination-button prev"
          onClick={handlePrevPage}
        >
          Previous
        </button>
      )}
      {currentPage < totalPages - 1 && (
        <button
          className="pagination-button next"
          onClick={handleNextPage}
        >
          Next
        </button>
      )}
    </div>
  );
}

export default Mission;