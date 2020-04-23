// http://build.fhir.org/extensibility.html

const Reference = {
    // from Element: extension
    "reference" : "<string>", // C? Literal reference, Relative, internal or absolute URL
    "type" : "<uri>", // Type the reference refers to (e.g. "Patient")
    "identifier" : { Identifier }, // Logical reference, when literal reference is not known
    "display" : "<string>" // Text alternative for the resource
}

export default Reference