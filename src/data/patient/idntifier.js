import CodeableConcept from './codeableConcept'
import Period from './period'

const Identifier = {
    'use' : '<code>',
    'type' : { CodeableConcept },
    'sytem' : '<uri>',
    'value' : '<string>',
    'period' : { Period },
    'assigner' : {  },
    'blocchainkMetadata' : {},
}

export default Identifier

/// use - Applications can assume that an identifier is permanent unless it explicitly says that it is temporary
/// type - This element deals only with general categories of identifiers. It SHOULD not be used for codes that correspond 
// 1..1 with the Identifier.system. Some identifiers may fall into multiple categories due to common usage. Where 
// the system is known, a type is unnecessary because the type is always part of the system definition. However 
// systems often need to handle identifiers where the system is not known.
// There is not a 1:1 relationship between type and system, since many different systems have the same type.
/// system - Identifier.system is always case sensitive.
/// value - 	If the value is a full URI, then the system SHALL be urn:ietf:rfc:3986. The value's primary purpose 
//is computational mapping. As a result, it may be normalized for comparison purposes (e.g. removing non-significant 
// whitespace, dashes, etc.) A value formatted for human display can be conveyed using the Rendered Value extension. 
// Identifier.value is to be treated as case sensitive unless knowledge of the Identifier.system allows the 
// processer to be confident that non-case-sensitive processing is safe.
/// period - Time period during which identifier is/was valid for use.
/// assigner - Organization that issued/manages the identifier. The Identifier.assigner may omit the .reference 
/// element and only contain a .display element reflecting the name or other textual information about the assigning organization.
/// blocchainkMetadata - data for use with the user and their profile on the blockchain.

