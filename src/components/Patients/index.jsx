import Patient from "./Patient";
import PropTypes from "prop-types";

const Patients = ({ patients, setPatient, deletePatientOnSubmit }) => {
  return (
    <>
      {patients.length > 0 ? (
        <>
          <div className="md:w-1/2 lg:w-3/5 h-screen md:overflow-y-scroll">
            <h2 className="font-black text-3xl text-center">
              Listado Pacientes
            </h2>
            <p className="text-xl mt-5 text-center mb-10">
              Administa tus{" "}
              <span className="text-indigo-600 font-bold ">
                Pacientes y Citas
              </span>
            </p>
            {patients.map((patient) => (
              <Patient key={patient.id} patient={patient} setPatient={setPatient} deletePatientOnSubmit={deletePatientOnSubmit}/>
            ))}
          </div>
        </>
      ) : (
        <>
        <div className="md:w-1/2 lg:w-3/5 h-screen md:overflow-y-scroll">
          <h2 className="font-black text-3xl text-center">No hay pacientes</h2>
          <p className="text-xl mt-5 text-center mb-10">
            Comienza agregando pacientes{" "}
            <span className="text-indigo-600 font-bold ">
              y apareceran en esta lugar
            </span>
          </p>
          </div>
        </>
      )}
    </>
  );
};
Patients.propTypes = {
  patients: PropTypes.array.isRequired,
  setPatient:PropTypes.func.isRequired, // Por ejemplo, esperamos que 'patients' sea un array
  deletePatientOnSubmit:PropTypes.func.isRequired // Por ejemplo, esperamos que 'patients' sea un array
};

export default Patients;
