import Period from './period'

const Address = {
    // from Element: extension
    "use" : "<code>", // home | work | temp | old | billing - purpose of this address
    "type" : "<code>", // postal | physical | both
    "text" : "<string>", // Text representation of the address
    "line" : ["<string>"], // Street name, number, direction & P.O. Box etc.
    "city" : "<string>", // Name of city, town etc.
    "district" : "<string>", // District name (aka county)
    "state" : "<string>", // Sub-unit of country (abbreviations ok)
    "postalCode" : "<string>", // Postal code for area
    "country" : "<string>", // Country (e.g. can be ISO 3166 2 or 3 letter code)
    "period" : { Period } // Time period when address was/is in use
  }

export default Address