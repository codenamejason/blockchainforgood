import Coding from './coding'


const CodeableConcept = {
    // from Element: extension
    "coding" : [{ Coding }], // Code defined by a terminology system
    "text" : "<string>" // Plain text representation of the concept
}


export default CodeableConcept