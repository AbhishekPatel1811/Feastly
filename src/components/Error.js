import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err);
  const { status, statusText, error } = err;
  return (
    <div>
      <h1>Oops!!</h1>
      <h1>Something went wrong</h1>
      <h1>{status + ":" + statusText}</h1>
    </div>
  );
};

export default Error;
