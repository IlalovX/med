import { Fragment } from "react";
import PathRoutes from "./routes/Routes";
import AdminPathRoutes from "./routes/AdminRoutes";

function App() {
  return (
    <Fragment>
      <PathRoutes />
      <AdminPathRoutes />
    </Fragment>
  );
}

export default App;
