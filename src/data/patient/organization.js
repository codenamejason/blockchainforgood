import Identifier from './idntifier'
import CodeableConcept from './codeableConcept'
import ContactPoint from './contactPoint'
import HumanName from './humanName'
import Endpoint from './endpoint'
import Address from './address'

const Organization = {
    "resourceType" : "Organization",
    // from Resource: id, meta, implicitRules, and language
    // from DomainResource: text, contained, extension, and modifierExtension
    "identifier" : { Identifier }, // C? Identifies this organization  across multiple systems
    "active" : false, // Whether the organization's record is still in active use
    "type" : { CodeableConcept }, // Kind of organization
    "name" : "<string>", // C? Name used for the organization
    "alias" : "<string>", // A list of alternate names that the organization is known as, or was known as in the past
    "telecom" : { ContactPoint }, // C? A contact detail for the organization
    "address" : { Address }, // C? An address for the organization
    "partOf" : {}, // The organization of which this organization forms a part
    "contact" : { // Contact for the organization for a certain purpose
      "purpose" : { CodeableConcept }, // The type of contact
      "name" : { HumanName }, // A name associated with the contact
      "telecom" : [{ ContactPoint }], // Contact details (telephone, email, etc.)  for a contact
      "address" : { Address } // Visiting or postal addresses for the contact
    },
    "endpoint" : {  } // Technical endpoints providing access to services operated for the organization
  }

export default Organization