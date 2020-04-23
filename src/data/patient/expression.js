import ContactPoint from './contactPoint'

const Expression = {
    // from Element: extension
    "name" : "<string>", // Name of an individual to contact
    "telecom" : [{ ContactPoint }] // Contact details for individual or organization
}

export default Expression