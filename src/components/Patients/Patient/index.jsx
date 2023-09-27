import PropTypes from "prop-types";

const Patient = ({ patient, setPatient, deletePatientOnSubmit }) => {
  const { id, nombre, propietario, email, fecha, sintomas } = patient;

  const handleDeletePatient = () => {
    const respuesta = confirm('Deseas eliminar')

    if(respuesta){
      deletePatientOnSubmit(id)
    }
  }

  return (
    <div className="m-4 bg-white shadow-md px-5 py-10 rounded-xl">
      <p className=" font-bold mb-3 text-gray-700 uppercase">
        {/*eslint-disable-next-line react/prop-types*/}
        Nombre: <span className="font-normal normal-case">{nombre}</span>
      </p>
      <p className=" font-bold mb-3 text-gray-700 uppercase">
        Propietario:{" "}
        <span className="font-normal normal-case">{propietario}</span>
      </p>
      <p className=" font-bold mb-3 text-gray-700 uppercase">
        Email: <span className="font-normal normal-case">{email}</span>
      </p>
      <p className=" font-bold mb-3 text-gray-700 uppercase">
        Fecha Creación: <span className="font-normal normal-case">{fecha}</span>
      </p>
      <p className=" font-bold mb-3 text-gray-700 uppercase">
        Sintomas: <span className="font-normal normal-case">{sintomas}</span>
      </p>
      <div className="flex justify-between mt-10">
        <input
          type="button"
          className="bg-green-600 text-white rounded-md uppercase py-2 px-10 cursor-pointer hover:bg-green-800"
          value="Editar"
          onClick={() => setPatient(patient)}
        />
        <input
          type="button"
          className="bg-red-600 text-white rounded-md uppercase py-2 px-10 cursor-pointer hover:bg-red-800"
          value="Eliminar"
          onClick={handleDeletePatient}
        />
      </div>
    </div>
  );
};

Patient.propTypes = {
  patient: PropTypes.object.isRequired,
  setPatient: PropTypes.func.isRequired,
  deletePatientOnSubmit: PropTypes.func.isRequired,
};

export default Patient;
