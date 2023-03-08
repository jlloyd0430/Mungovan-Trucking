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
  },
   {
    town: "Lexington",
    streetAddress: "73 Waltham St",
    state: "MA",
    zip: "02421",
  },
  {
    town: "Littleton",
    streetAddress: "King St",
    state: "MA",
    zip: "01460",
  },
  {
    town: "Longmeadow",
    streetAddress: "450 Longmeadow St",
    state: "MA",
    zip: "01106",
  },
  {
    town: "Lowell",
    streetAddress: "115 Appleton St",
    state: "MA",
    zip: "01852",
  },
  {
    town: "Ludlow",
    streetAddress: "131 Winsor St",
    state: "MA",
    zip: "01056",
  },
  {
    town: "Lunenburg",
    streetAddress: "15 School St",
    state: "MA",
    zip: "01462",
  },
  {
    town: "Lynn",
    streetAddress: "21 City Hall Sq",
    state: "MA",
    zip: "01901",
  },
  {
    town: "Lynnfield",
    streetAddress: "Carter Rd",
    state: "MA",
    zip: "01940",
  },
  {
    town: "Malden",
    streetAddress: "5 Elm St",
    state: "MA",
    zip: "02148",
  },
  {
    town: "Manchester",
    streetAddress: "Summer St",
    state: "MA",
    zip: "01944",
  },
  {
    town: "Manomet",
    streetAddress: "Manomet Rd",
    state: "MA",
    zip: "02345",
  },
  {
    town: "Mansfield",
    streetAddress: "Bristol St",
    state: "MA",
    zip: "02048",
  },
  {
    town: "Marblehead",
    streetAddress: "250 Pleasant St",
    state: "MA",
    zip: "01945",
  },
  {
    town: "Marion",
    streetAddress: "Mill St",
    state: "MA",
    zip: "02738",
  },
  {
    town: "Marlborough",
    streetAddress: "2 Maple St",
    state: "MA",
    zip: "01752",
  },
  {
    town: "Marshfield",
    streetAddress: "200 Main St",
    state: "MA",
    zip: "02050",
  },
  {
    town: "Mashpee",
    streetAddress: "Great Neck Rd",
    state: "MA",
    zip: "02649",
  },
  {
    town: "Mettapoisett",
    streetAddress: "Mechanic St, Hammond St",
    state: "MA",
    zip: "02739",
  },
  {
    town: "Maynard",
    streetAddress: "8 Walnut St",
    state: "MA",
    zip: "01754",
  },
  {
    town: "Medfield",
    streetAddress: "Pleasant St",
    state: "MA",
    zip: "02052",
  },
   {
    town: "Medway",
    streetAddress: "292 Village st",
    state: "MA",
    zip: "02053",
  },
  {
    town: "Merrimac",
    streetAddress: "central st",
    state: "MA",
    zip: "01860",
  },
  {
    town: "Middleboro",
    streetAddress: "19 Jackson st",
    state: "MA",
    zip: "02346",
  },
  {
    town: "Milford",
    streetAddress: "9 water st",
    state: "MA",
    zip: "01757",
  },
  {
    town: "Milbury",
    streetAddress: "2 grove st",
    state: "MA",
    zip: "01527",
  },
  {
    town: "Millers Falls",
    streetAddress: "Crescent st",
    state: "MA",
    zip: "01349",
  },
  {
    town: "Millis",
    streetAddress: "821 Main st",
    state: "MA",
    zip: "02054",
  },
  {
    town: "Milton",
    streetAddress: "114 Adams st",
    state: "MA",
    zip: "02186",
  },
  {
    town: "Monson",
    streetAddress: "197 Main st",
    state: "MA",
    zip: "01057",
  },
  {
    town: "Montague",
    streetAddress: "Center st",
    state: "MA",
    zip: "01351",
  },
  {
    town: "Nantucket",
    streetAddress: "3 union st",
    state: "MA",
    zip: "02554",
  },
  {
    town: "Natick",
    streetAddress: "53 E Central st",
    state: "MA",
    zip: "01760",
  },
  {
    town: "Needham",
    streetAddress: "66 pickering st",
    state: "MA",
    zip: "02492",
  },
  {
    town: "New Bedford",
    streetAddress: "Acushnet ave & Elm st",
    state: "MA",
    zip: "02740",
  },
  {
    town: "Newburyport",
    streetAddress: "33 Green st",
    state: "MA",
    zip: "01950",
  },
  {
    town: "Newton",
    streetAddress: "787 Washington st",
    state: "MA",
    zip: "02460",
  },
  {
    town: "North Adams",
    streetAddress: "66 summer st",
    state: "MA",
    zip: "01247",
  },
  {
    town: "North Attleboro",
    streetAddress: "Orne st & East st",
    state: "MA",
    zip: "02760",
  },
  {
    town: "North Brookfield",
    streetAddress: "122 S Main st",
    state: "MA",
    zip: "01535",
  },
  {
    town: "North Chelmsford",
    streetAddress: "30 Groton rd",
    state: "MA",
    zip: "01863",
  },
  {
    town: "North Framingham",
    streetAddress: "Edmands rd",
    state: "MA",
    zip: "01701",
  },
  {
    town: "North Reading",
    streetAddress: "42 Central st",
    state: "MA",
    zip: "01864",
  },
  {
    town: "North Hampton",
    streetAddress: "61 Masonic st",
    state: "MA",
    zip: "01060",
  },
  {
    town: "Northborough",
    streetAddress: "School st",
    state: "MA",
    zip: "01532",
  },
  {
    town: "Northfield",
    streetAddress: "Main st",
    state: "MA",
    zip: "01360",
  },
  {
    town: "Norton",
    streetAddress: "Taunton ave",
    state: "MA",
    zip: "02766",
  },
  {
    town: "Norwell",
    streetAddress: "Main st",
    state: "MA",
    zip: "02061",
  },
  {
    town: "Norwood",
    streetAddress: "85 Vernon st",
    state: "MA",
    zip: "02062",
  },
  {
    town: "Oakham",
    streetAddress: "Rutland rd & ware corner",
    state: "MA",
    zip: "01068",
  },
  {
    town: "Orange",
    streetAddress: "S Main st",
    state: "MA",
    zip: "01364",
  },
  {
    town: "Orleans",
    streetAddress: "Route 6a",
    state: "MA",
    zip: "02653",
  },
  {
    town: "Osterville",
    streetAddress: "73 W Bay rd",
    state: "MA",
    zip: "02655",
  },
  {
    town: "Otis",
    streetAddress: "E Otis rd",
    state: "MA",
    zip: "01253",
  },
  {
    town: "Oxford",
    streetAddress: "Wheelock st",
    state: "MA",
    zip: "01540",
  },
  {
    town: "Palmer",
    streetAddress: "28 pleasant st",
    state: "MA",
    zip: "01069",
  },
  {
    town: "Peabody",
    streetAddress: "28 Central st",
    state: "MA",
    zip: "01960",
  },
  {
    town: "Pepperell",
    streetAddress: "High st",
    state: "MA",
    zip: "01463",
  },
  {
    town: "Petersham",
    streetAddress: "East st",
    state: "MA",
    zip: "01366",
  },
  {
    town: "Pittsfield",
    streetAddress: "24 Federal st",
    state: "MA",
    zip: "01201",
  },
   {
    town: "Plymouth",
    streetAddress: "33 Court st",
    state: "MA",
    zip: "02360",
  },
  {
    town: "Princeton",
    streetAddress: "Boylston ave",
    state: "MA",
    zip: "01541",
  },
  {
    town: "Provincetown",
    streetAddress: "Winslow st",
    state: "MA",
    zip: "02657",
  },
  {
    town: "Quincy",
    streetAddress: "1070 Hancock st",
    state: "MA",
    zip: "02169",
  },
  {
    town: "Randolph",
    streetAddress: "33 Memorial pky",
    state: "MA",
    zip: "02368",
  },
  {
    town: "Reading",
    streetAddress: "15 Linden st",
    state: "MA",
    zip: "01867",
  },
  {
    town: "Rehoboth",
    streetAddress: "Bay state rd",
    state: "MA",
    zip: "02769",
  },
  {
    town: "Revere",
    streetAddress: "196 Beach st",
    state: "MA",
    zip: "02151",
  },
  {
    town: "Rochester",
    streetAddress: "North ave",
    state: "MA",
    zip: "02770",
  },
  {
    town: "Rockland",
    streetAddress: "86 Webster st",
    state: "MA",
    zip: "02370",
  },
  {
    town: "Rockport",
    streetAddress: "64 Main st",
    state: "MA",
    zip: "01966",
  },
  {
    town: "Rowley",
    streetAddress: "11 Hammond st",
    state: "MA",
    zip: "01969",
  },
  {
    town: "Roxbury",
    streetAddress: "26 Waverly st",
    state: "MA",
    zip: "02119",
  },
  {
    town: "Russel",
    streetAddress: "Main st",
    state: "MA",
    zip: "01071",
  },
  {
    town: "Rutland",
    streetAddress: "Maple ave",
    state: "MA",
    zip: "01543",
  },
    {
    town: "Sagamore",
    streetAddress: "Route 6a",
    state: "MA",
    zip: "02561",
  },
  {
    town: "Salem",
    streetAddress: "35 Norman st",
    state: "MA",
    zip: "01970",
  },
  {
    town: "Sandisfield",
    streetAddress: "Otis rd",
    state: "MA",
    zip: "01255",
  },
  {
    town: "Saugus",
    streetAddress: "487 Central st",
    state: "MA",
    zip: "01906",
  },
  {
    town: "Scituate",
    streetAddress: "First Parish rd",
    state: "MA",
    zip: "02066",
  },
  {
    town: "Sharon",
    streetAddress: "High st",
    state: "MA",
    zip: "02067",
  },
  {
    town: "Sheffield",
    streetAddress: "Main st",
    state: "MA",
    zip: "01257",
  },
  {
    town: "Shelburne falls",
    streetAddress: "Cross st",
    state: "MA",
    zip: "01370",
  },
  {
    town: "Shirley",
    streetAddress: "Church st",
    state: "MA",
    zip: "01464",
  },
  {
    town: "Shrewsbury",
    streetAddress: "Grafton st",
    state: "MA",
    zip: "01545",
  },
  {
    town: "Siasconset",
    streetAddress: "Bunker Hill rd",
    state: "MA",
    zip: "02564",
  },
  {
    town: "Somerville",
    streetAddress: "111 Central st",
    state: "MA",
    zip: "02145",
  },
  {
    town: "South Boston",
    streetAddress: "570 E 4th street",
    state: "MA",
    zip: "02127",
  },
  {
    town: "South Deerfield",
    streetAddress: "11 Conway st",
    state: "MA",
    zip: "01373",
  },
  {
    town: "Southbridge",
    streetAddress: "208 Main st",
    state: "MA",
    zip: "01550",
  },
  {
    town: "Southwick",
    streetAddress: "college hwy",
    state: "MA",
    zip: "01077",
  },
  {
    town: "Spencer",
    streetAddress: "15 Mechanic st",
    state: "MA",
    zip: "01562",
  },
  {
    town: "Springfield",
    streetAddress: "295 Worthington st",
    state: "MA",
    zip: "01103",
  },
  {
    town: "Sterling",
    streetAddress: "Bridge st",
    state: "MA",
    zip: "01564",
  },
  {
    town: "Stockbridge",
    streetAddress: "Pine st",
    state: "MA",
    zip: "01262",
  },
  {
    town: "Stoughton",
    streetAddress: "862 Washington st",
    state: "MA",
    zip: "02072",
  },
  {
    town: "Sturbridge",
    streetAddress: "Main st",
    state: "MA",
    zip: "01566",
  },
  {
    town: "Sudbury",
    streetAddress: "100 Boston Post rd",
    state: "MA",
    zip: "01776",
  },
  {
    town: "Taunton",
    streetAddress: "13 Pleasant st",
    state: "MA",
    zip: "02780",
  },
  {
    town: "Templeton",
    streetAddress: "Memorial st",
    state: "MA",
    zip: "01468",
  },
  {
    town: "Tewksbury",
    streetAddress: "6 Robinson ave",
    state: "MA",
    zip: "01876",
  },
  {
    town: "Topsfield",
    streetAddress: "11 Central st",
    state: "MA",
    zip: "01983",
  },
  {
    town: "Townsend",
    streetAddress: "Railroad st",
    state: "MA",
    zip: "01469",
  },
  {
    town: "Turners Falls",
    streetAddress: "Avenue A",
    state: "MA",
    zip: "01376",
  },
  {
    town: "Tyngsboro",
    streetAddress: "Kendall rd",
    state: "MA",
    zip: "01879",
  },
  {
    town: "Upton",
    streetAddress: "Picadilly st",
    state: "MA",
    zip: "01568",
  },
  {
    town: "Uxbridge",
    streetAddress: "Court st",
    state: "MA",
    zip: "01569",
  },
  {
    town: "Vineyard Haven",
    streetAddress: "228 Edgartown rd",
    state: "MA",
    zip: "02568",
  },
  {
    town: "Wakefield",
    streetAddress: "4 Bennet st",
    state: "MA",
    zip: "01880",
  },
  {
    town: "Walpole",
    streetAddress: "School st & Stone st",
    state: "MA",
    zip: "02081",
  },
  {
    town: "Waltham",
    streetAddress: "36 spring st",
    state: "MA",
    zip: "02453",
  },
  {
    town: "Waltham",
    streetAddress: "106 west st",
    state: "MA",
    zip: "02451",
  },
  {
    town: "Ware",
    streetAddress: "15 Bank st",
    state: "MA",
    zip: "01082",
  },
  ];





function Mission() {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const addressesPerPage = 200; // Change this to the desired number of addresses per page or per scroll.

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
      <h1 className="verizon-title">Verizon CO Building Addresses</h1>
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