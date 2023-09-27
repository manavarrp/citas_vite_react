import { useEffect, useState } from "react";
import Error from "../Error";
import PropTypes from "prop-types";

const MainForm = ({ patients, setPatients, patient, setPatient }) => {
  const [nombre, setNombre] = useState("");
  const [propietario, setPropietario] = useState("");
  const [email, setEmail] = useState("");
  const [fecha, setFecha] = useState("");
  const [sintomas, setSintomas] = useState("");
  const [alerta, setAlerta] = useState(false);

  useEffect(() => {
    if(Object.keys(patient).length > 0){
     setNombre(patient.nombre)
     setPropietario(patient.propietario)
     setEmail(patient.email)
     setFecha(patient.fecha)
     setSintomas(patient.sintomas)
    }
  }, [patient]);

  const generatedId = () => {
    const random = Math.random().toString(36).substring(2);
    const fecha = Date.now().toString(36);

    return random + fecha;
  };

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
      sintomas
    };
    //console.log(payload, patients)
    if(patient.id){
      payload.id = patient.id
      console.log(payload)
      console.log(patient)
      const newPatients = patients.map(newPatient => newPatient.id === patient.id ? payload :  newPatient)
      setPatients(newPatients)
      setPatient({})
    }else{
      payload.id = generatedId()
      setPatients([...patients, payload]);
    }
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
            value={nombre}
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
            value={propietario}
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
            value={email}
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
            value={fecha}
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
            value={sintomas}
            onChange={(e) => setSintomas(e.target.value)}
          />
        </div>
        <input
          type="submit"
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all rounded-md"
          value={patient.id ? 'Editar Paciente' : 'Agregar Paciente' }
        />
      </form>
    </div>
  );
};

MainForm.propTypes = {
  patients: PropTypes.array.isRequired,
  patient: PropTypes.object.isRequired,
  setPatients: PropTypes.func.isRequired,
  setPatient: PropTypes.func.isRequired,
};

export default MainForm;
