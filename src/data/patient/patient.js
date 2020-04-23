import Identifier from './idntifier'
import CodeableConcept from './codeableConcept'
import ContactPoint from './contactPoint'
import Address from './address'
import HumanName from './humanName'
import Organization from './organization'
import Attachment from './attachment'


const Patient = {
    'resourceType' : 'Patient',
    'meta' : {
        'versionId' : '12',
        'lastUpdated' : '<datetime'
    },
    'id' : '12345', // can be assigned by practitioner
    'identifier' : [{ Identifier }],
    'extension' : [{
        'url' : 'http://example.org/consent#trials',
        'valueCode' : 'renal'
    }],
    'active' : false,
    'name' : [{ HumanName }],
    'telecom' : [{ ContactPoint }],
    'gender' : { 'text' : '<code>'},
    'birthdate' : '<date>',
    // deceased[x]: Indicates if the individual is deceased or not. One of these 2:
    'deceasedBoolean' : false,
    'deceasedDateTime' : '<datetime>',
    'address' : [{ Addrress }],
    'maritalStatus' : { CodeableConcept },
    //multipleBirth[x]: Whether patient is part of a multiple birth. One of these 2:
    'multipleBirthBoolean' : false,
    'multipleBirthInteger' : 0,
    'photo' :  [{ Attachment }],
    'contact' :  [{
        "relationship": [{}],
        "name": '',
        "telecom": [{}],
        "address": {},
        "gender": '<code>',
        "organization": {},
        "period": {}
    }],
    'communication' : [{
        "language": {},
        "preferred": '<code>'
    }],
    'generalPractitioner' : [{ Reference(Organization, Practitioner, PractitionerRole) 
    }],
    'managingOrganization' :  { Reference(Organization) },
    'link' : [{
        "other" : { Reference(Patient, RelatedPerson) },
        "type" : "<code>"
    }],
    'blockchainMetadata' : {
        'blockHeight' : '',
        'blockNumber' : '',
        'gasUsed' : ''
    }
}

export default Patient

//! * R! means rule see http://hl7.org/fhir/patient.html
// from Resource: id, meta, implicitRules, and language
// from DomainResource: text, contained, extension, and modifierExtension
// [{ Identifier }] An identifier for this patient
// <boolean> Whether this patient's record is in active use
// [{ HumanName }] A name associated with the patient
// [{ ContactPoint }] A contact detail for the individual
// "<code>" male | female | other | unknown
// "<date>" The date of birth for the individual
// <boolean>
// <datetime>
// [{ Addrress }] An address for the individual
// { CodeableConcept } Marital (civil) status of a patient
// multipleBirthBoolean <boolean>
// multipleBirthInteger <integer>
// photo [{ Attachment }] Image of the patient
// communication
// relationship [{ CodeableConcept }] The kind of relationship
// name { HumanName } A name associated with the contact person
// telcom [{ ContactPoint }] A name associated with the contact person
// address Address for the contact person
// gender male | female | other | unknown
// organization C? Organization that is associated with the contact
// period // The period during which this contact person or organization is valid to be contacted relating to this patient
// communication R!  replaced-by | replaces | refer | seealso
// language R!  The language which can be used to communicate with the patient about his or her health
// preferred Language preference indicator
// generalPractitioner Patient's nominated primary care provider
// managingOrganization Organization that is the custodian of the patient record
// link Link to another patient resource that concerns the same actual person
// other R!  The other patient or related person resource that the link refers to
// type R!  replaced-by | replaces | refer | seealso

// blockchainMetadata - various fields for use on the blockchain/ledger