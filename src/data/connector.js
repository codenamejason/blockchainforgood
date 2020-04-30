import Patient from './patient/patient'

const connectorFunctions = {
    /**
     *  connect to patient data
     * @param {privateKey} patientKey 
     */
    connectToPatientData(patientKey) {
        let patient = new Patient;
        patient.patientKey = patientKey;

         


        this.connectToOracle('', {});


        return patient;
    },
    /**
     * connect to the Oracle of the address passed in.
     * @param {*} oracleAddress 
     * @param {*} dataRequest 
     */
    connectToOracle(oracleAddress, dataRequest) {

        return true;
    }
}

export default connectorFunctions



