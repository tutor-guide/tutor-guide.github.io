import { useRouteError } from "react-router-dom";



export default function ErrorPage
() {
  const error = useRouteError();
  console.log(error)

  return (
    <>
      <h1>Oops! An unexpected error has occurred.</h1>
      {/* <p><i>{error.statusText || error.message}</i></p> */}
    </>
  );
}

