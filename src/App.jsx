import { useEffect, useState } from "react";
import MainForm from "./components/forms/MainForm";
import Header from "./components/layouts/Header";
import Patients from "./components/Patients";

function App() {
  const initialState = () => JSON.parse(localStorage.getItem("patients")) || [];
  const [patients, setPatients] = useState(initialState);
  const [patient, setPatient] = useState({});

  useEffect(() => {
    localStorage.setItem("patients", JSON.stringify(patients));
  }, [patients]);

  const deletePatientOnSubmit = (id) => {
    console.log("eliminando", id);
    const newPatients = patients.filter((newPatient) => newPatient.id !== id);
    setPatients(newPatients);
  };
  // console.log(patients)
  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12 md:flex">
        <MainForm
          patients={patients}
          setPatients={setPatients}
          patient={patient}
          setPatient={setPatient}
        />
        <Patients
          patients={patients}
          setPatient={setPatient}
          deletePatientOnSubmit={deletePatientOnSubmit}
        />
      </div>
    </div>
  );
}

export default App;
