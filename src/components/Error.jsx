// eslint-disable-next-line react/prop-types
const Error = ({mensaje}) => {
  return (
    <p className="text-white bg-red-700 text-center my-5 rounded-md py-2 uppercase font-bold">
      {mensaje}
    </p>
  );
};

export default Error;
