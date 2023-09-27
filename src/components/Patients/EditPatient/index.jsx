import PropTypes from "prop-types";
import { useState } from "react";
import Error from "../../Error";

const EditPatient = ({ patient, setPatients, patients }) => {
  const [nombre, setNombre] = useState("");
  const [propietario, setPropietario] = useState("");
  const [email, setEmail] = useState("");
  const [fecha, setFecha] = useState("");
  const [sintomas, setSintomas] = useState("");
  const [alerta, setAlerta] = useState(false);

  const dataOnSubmit = (e) => {
    e.preventDefault();

    if ([nombre, propietario, email, fecha, sintomas].includes("")) {
      setAlerta(true);
      return;
    }
    setAlerta(false);
    const payload = {
      nombre,
      propietario,
      email,
      fecha,
      sintomas,
    };
    //console.log(payload, patients)
    setPatients([...patients, payload]);
    setNombre("");
    setPropietario("");
    setEmail("");
    setFecha("");
    setSintomas("");
  };
  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
      <p className="text-lg mt-5 text-center mb-10">
        {" "}
        Añade Pacientes y{" "}
        <span className="text-indigo-600 font-bold">Administralo</span>{" "}
      </p>

      <form
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10 mx-4"
        onSubmit={dataOnSubmit}
      >
        {alerta && <Error mensaje="todos los campos son obligatorios" />}
        <div className="mb-5">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="mascota"
          >
            Nombre Mascota
          </label>
          <input
            id="mascota"
            type="text"
            placeholder="Nombre de la mascota"
            className="border-2 w-full p-2 mt-2 placeholder-gray-300 rounded-lg"
            defaultValue={patient.nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="propietario"
          >
            Nombre Propietario
          </label>
          <input
            id="propietario"
            type="text"
            placeholder="Nombre del propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-300 rounded-lg"
            defaultValue={patient.propietario}
            onChange={(e) => setPropietario(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="email"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Email del propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-300 rounded-lg"
            defaultValue={patient.email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="fecha"
          >
            Fecha de Entrada
          </label>
          <input
            id="fecha"
            type="date"
            className="border-2 w-full p-2 mt-2 rounded-lg"
            defaultValue={patient.fecha}
            onChange={(e) => setFecha(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="sintomas"
          >
            Sintomas
          </label>
          <textarea
            id="sintomas"
            placeholder="Describe los sintomas de tu mascota"
            className="border-2 w-full p-2 mt-2 placeholder-gray-300 rounded-lg"
            defaultValue={patient.sintomas}
            onChange={(e) => setSintomas(e.target.value)}
          />
        </div>
        <input
          type="submit"
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all rounded-md"
          value="Agregar Paciente"
        />
      </form>
    </div>
  );
};

EditPatient.propTypes = {
    patient: PropTypes.array.isRequired,
    patients: PropTypes.array.isRequired,
    setPatients:PropTypes.isRequired // Por ejemplo, esperamos que 'patients' sea un array
  };

export default EditPatient;
