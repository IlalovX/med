import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import { PathEnums } from "./enums/Enums";
import { PathNames } from "./consts/Consts";
import { AdminPathName } from "./consts/AdminConsts";
import { AdminPathEnums } from "./enums/AdminEnums";

const AdminLayout = lazy(() => import("../layouts/AdminLayout"));

const Admin = lazy(() => import("../pages/admin/Admin"));

function AdminPathRoutes() {
  return (
    <Routes>
      <Route
        path={AdminPathName[AdminPathEnums.ADMIN]}
        element={
          <Suspense>
            <AdminLayout />
          </Suspense>
        }
      >
        <Route
          index
          element={
            <Suspense>
              <Admin />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
}

export default AdminPathRoutes;
