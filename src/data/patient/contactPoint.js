/// http://hl7.org/fhir/contact-point-use
import Period from './period'

const ContactPoint = {
    'system' : '<code>',
    'value' : '<value>',
    'use' : '<code>',
    'rank' : 0, // must be a positve integer
    'period' : { Period }, // todo: ref from period.js
    'blockchainMetadata' : {
        'blockHeight' : '',
        'blockNumber' : '',
        'gasUsed' : ''

    }
}

export default ContactPoint

// system       - Telecommunications form for contact point - what communications system is required to make use of the contact.
// Rule!	      A system is required if a value is provided.	value.empty() or system.exists()
// value        - The actual contact point details, in a form that is meaningful to the designated communication system (i.e. phone number or email address).
//                Additional text data such as phone extension numbers, or notes about use of the contact are sometimes included in the value.
// use          - Identifies the purpose for the contact point.
// Requirements!  Need to track the way a person uses this contact, so a user can choose which is appropriate for their purpose.
//                Applications can assume that a contact is current unless it explicitly says that it is temporary or old.
// rank         - Specify preferred order of use (1 = highest)
//                Note that rank does not necessarily follow the order in which the contacts are represented in the instance.
// period       - Time period when the contact point was/is in use.

// blockchainMetadata - various fields for use on the blockchain/ledger