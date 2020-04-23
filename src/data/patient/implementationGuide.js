/// http://hl7.org/fhir/implementationguide.html

const ImplementationGuide = {
    "resourceType" : "ImplementationGuide",
    // from Resource: id, meta, implicitRules, and language
    // from DomainResource: text, contained, extension, and modifierExtension
    "url" : "<uri>", // R!  Canonical identifier for this implementation guide, represented as a URI (globally unique)
    "version" : "<string>", // Business version of the implementation guide
    "name" : "<string>", // C? R!  Name for this implementation guide (computer friendly)
    "title" : "<string>", // Name for this implementation guide (human friendly)
    "status" : "<code>", // R!  draft | active | retired | unknown
    "experimental" : false, // For testing purposes, not real usage
    "date" : "<dateTime>", // Date last changed
    "publisher" : "<string>", // Name of the publisher (organization or individual)
    "contact" : [{ ContactDetail }], // Contact details for the publisher
    "description" : "<markdown>", // Natural language description of the implementation guide
    "useContext" : [{ UsageContext }], // The context that the content is intended to support
    "jurisdiction" : [{ CodeableConcept }], // Intended jurisdiction for implementation guide (if applicable)
    "copyright" : "<markdown>", // Use and/or publishing restrictions
    "packageId" : "<id>", // R!  NPM Package name for IG
    "license" : "<code>", // SPDX license code for this IG (or not-open-source)
    "fhirVersion" : ["<code>"], // R!  FHIR Version(s) this Implementation Guide targets
    "dependsOn" : [{ // Another Implementation guide this depends on
      "uri" : { canonical(ImplementationGuide) }, // R!  Identity of the IG that this depends on
      "packageId" : "<id>", // NPM Package name for IG this depends on
      "version" : "<string>" // Version of the IG
    }],
    "global" : [{ // Profiles that apply globally
      "type" : "<code>", // R!  Type this profile applies to
      "profile" : { canonical(StructureDefinition) } // R!  Profile that all resources must conform to
    }],
    "definition" : { // Information needed to build the IG
      "grouping" : [{ // Grouping used to present related resources in the IG
        "name" : "<string>", // R!  Descriptive name for the package
        "description" : "<string>" // Human readable text describing the package
      }],
      "resource" : [{ // R!  Resource in the implementation guide
        "reference" : { Reference(Any) }, // R!  Location of the resource
        "fhirVersion" : ["<code>"], // Versions this applies to (if different to IG)
        "name" : "<string>", // Human Name for the resource
        "description" : "<string>", // Reason why included in guide
        // example[x]: Is an example/What is this an example of?. One of these 2:
        "exampleBoolean" : false,
        "exampleCanonical" : { canonical(StructureDefinition) },
        "groupingId" : "<id>" // Grouping this is part of
      }],
      "page" : { // Page/Section in the Guide
        // name[x]: Where to find that page. One of these 2:
        "nameUrl" : "<url>",
        "nameReference" : { Reference(Binary) },
        "title" : "<string>", // R!  Short title shown for navigational assistance
        "generation" : "<code>", // R!  html | markdown | xml | generated
        "page" : [{ Content }] // as for ImplementationGuide.definition.page Nested Pages / Sections
      },
      "parameter" : [{ // Defines how IG is built by tools
        "code" : "<code>", // R!  apply | path-resource | path-pages | path-tx-cache | expansion-parameter | rule-broken-links | generate-xml | generate-json | generate-turtle | html-template
        "value" : "<string>" // R!  Value for named type
      }],
      "template" : [{ // A template for building resources
        "code" : "<code>", // R!  Type of template specified
        "source" : "<string>", // R!  The source location for the template
        "scope" : "<string>" // The scope in which the template applies
      }]
    },
    "manifest" : { // Information about an assembled IG
      "rendering" : "<url>", // Location of rendered implementation guide
      "resource" : [{ // R!  Resource in the implementation guide
        "reference" : { Reference(Any) }, // R!  Location of the resource
        // example[x]: Is an example/What is this an example of?. One of these 2:
        "exampleBoolean" : false,
        "exampleCanonical" : { canonical(StructureDefinition) },
        "relativePath" : "<url>" // Relative path for page in IG
      }],
      "page" : [{ // HTML page within the parent IG
        "name" : "<string>", // R!  HTML page name
        "title" : "<string>", // Title of the page, for references
        "anchor" : ["<string>"] // Anchor available on the page
      }],
      "image" : ["<string>"], // Image within the IG
      "other" : ["<string>"] // Additional linkable file in IG
    }
}

export default ImplementationGuide