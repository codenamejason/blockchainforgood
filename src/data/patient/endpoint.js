import Coding from './coding'
import ContactPoint from './contactPoint'
import Period from './period'
import CodeableConcept from './codeableConcept'
import Organization from './organization'
import Identifier from './idntifier'

const Endpoint = {
    "resourceType" : "Endpoint",
    // from Resource: id, meta, implicitRules, and language
    // from DomainResource: text, contained, extension, and modifierExtension
    "identifier" : [{ Identifier }], // Identifies this endpoint across multiple systems
    "status" : "<code>", // R!  active | suspended | error | off | entered-in-error | test
    "connectionType" : { Coding }, // R!  Protocol/Profile/Standard to be used with this endpoint connection
    "name" : "<string>", // A name that this endpoint can be identified by
    "managingOrganization" : { }, // Organization that manages this endpoint (might not be the organization that exposes the endpoint)
    "contact" : [{ ContactPoint }], // Contact details for source (e.g. troubleshooting)
    "period" : { Period }, // Interval the endpoint is expected to be operational
    "payloadType" : [{ CodeableConcept }], // R!  The type of content that may be used at this endpoint (e.g. XDS Discharge summaries)
    "payloadMimeType" : ["<code>"], // Mimetype to send. If not specified, the content could be anything (including no payload, if the connectionType defined this)
    "address" : "<url>", // R!  The technical base address for connecting to this endpoint
    "header" : ["<string>"] // Usage depends on the channel type
}

export default Endpoint