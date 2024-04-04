import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import { AdminPathNames } from "./consts/AdminConsts";
import { AdminPathEnums } from "./enums/AdminEnums";

const Admin = lazy(() => import("../pages/admin/Admin"));
const AdminEdit = lazy(() => import("../pages/admin-edit/AdminEdit"));
const AdminUser = lazy(() => import("../pages/admin-users/AdminUsers"));
const AdminUsersDetail = lazy(
  () => import("../pages/admin-users-detail/AdminUsersDetail")
);
const AdminUsersAdd = lazy(
  () => import("../pages/admin-users-add/AdminUsersAdd")
);
const AdminUsersEdit = lazy(
  () => import("../pages/admin-users-edit/AdminUsersEdit")
);
const AdminNews = lazy(() => import("../pages/admin-news/AdminNews"));
const AdminNewsDetail = lazy(
  () => import("../pages/admin-news-detail/AdminNewsDetail")
);
const AdminNewsAdd = lazy(() => import("../pages/admin-news-add/AdminNewsAdd"));
const AdminNewsEdit = lazy(
  () => import("../pages/admin-news-edit/AdminNewsEdit")
);
const AdminAdverts = lazy(() => import("../pages/admin-adverts/AdminAdverts"));
const AdminAdvertsDetail = lazy(
  () => import("../pages/admin-adverts-detail/AdminAdvertsDetail")
);
const AdminAdvertsAdd = lazy(
  () => import("../pages/admin-adverts-add/AdminAdvertsAdd")
);
const AdminAdvertsEdit = lazy(
  () => import("../pages/admin-adverts-edit/AdminAdvertsEdit")
);
const AdminPhotoGallery = lazy(
  () => import("../pages/admin-photo-gallery/AdminPhotoGallery")
);
const AdminAboutInstitute = lazy(
  () => import("../pages/admin-about-institute/AdminAboutInstitute")
);
const AdminAdviceInstitute = lazy(
  () => import("../pages/admin-advice-institute/AdminAdviceInstitute")
);
const AdminDocuments = lazy(
  () => import("../pages/admin-documents/AdminDocuments")
);
const AdminFaculties = lazy(
  () => import("../pages/admin-faculties/AdminFaculties")
);
const AdminFaculty = lazy(() => import("../pages/admin-faculty/AdminFaculty"));
const AdminScientificFaculty = lazy(
  () => import("../pages/admin-scientific-faculty/AdminScientificFaculty")
);
const AdminDepartments = lazy(
  () => import("../pages/admin-departments/AdminDepartments")
);
const AdminDepartmentFaculty = lazy(
  () => import("../pages/admin-department-faculty/AdminDepartmentFaculty")
);
const AdminAboutDepartment = lazy(
  () => import("../pages/admin-about-department/AdminAboutDepartment")
);
const AdminHistoryDepartment = lazy(
  () => import("../pages/admin-history-department/AdminHistoryDepartment")
);
const AdminStructureDepartment = lazy(
  () => import("../pages/admin-structure-department/AdminStructureDepartment")
);
const AdminSpiritualDepartment = lazy(
  () => import("../pages/admin-spiritual-department/AdminSpiritualDepartment")
);
const AdminMethodologicalDepartment = lazy(
  () =>
    import(
      "../pages/admin-methodological-department/AdminMethodologicalDepartment"
    )
);
const AdminResearchDepartment = lazy(
  () => import("../pages/admin-research-department/AdminResearchDepartment")
);
const AdminScientificDepartment = lazy(
  () => import("../pages/admin-scientific-department/AdminScientificDepartment")
);
const AdminInternationalDepartment = lazy(
  () =>
    import(
      "../pages/admin-international-department/AdminInternationalDepartment"
    )
);
const AdminScientific = lazy(
  () => import("../pages/admin-scientific/AdminScientific")
);
function AdminPathRoutes() {
  return (
    <Routes>
      <Route
        path={AdminPathNames[AdminPathEnums.ADMIN]}
        element={
          <Suspense>
            <Admin />
          </Suspense>
        }
      >
        <Route
          path={AdminPathNames[AdminPathEnums.ADMIN_EDIT]}
          element={
            <Suspense>
              <AdminEdit />
            </Suspense>
          }
        />
        <Route
          path={AdminPathNames[AdminPathEnums.ADMIN_USERS]}
          element={
            <Suspense>
              <AdminUser />
            </Suspense>
          }
        />

        <Route
          path={AdminPathNames[AdminPathEnums.ADMIN_USERS_DETAIL]}
          element={
            <Suspense>
              <AdminUsersDetail />
            </Suspense>
          }
        />
        <Route
          path={AdminPathNames[AdminPathEnums.ADMIN_USERS_EDIT]}
          element={
            <Suspense>
              <AdminUsersEdit />
            </Suspense>
          }
        />
        <Route
          path={AdminPathNames[AdminPathEnums.ADMIN_USERS_ADD]}
          element={
            <Suspense>
              <AdminUsersAdd />
            </Suspense>
          }
        />

        <Route
          path={AdminPathNames[AdminPathEnums.ADMIN_NEWS]}
          element={
            <Suspense>
              <AdminNews />
            </Suspense>
          }
        />
        <Route
          path={AdminPathNames[AdminPathEnums.ADMIN_NEWS_DETAIL]}
          element={
            <Suspense>
              <AdminNewsDetail />
            </Suspense>
          }
        />
        <Route
          path={AdminPathNames[AdminPathEnums.ADMIN_NEWS_EDIT]}
          element={
            <Suspense>
              <AdminNewsEdit />
            </Suspense>
          }
        />
        <Route
          path={AdminPathNames[AdminPathEnums.ADMIN_NEWS_ADD]}
          element={
            <Suspense>
              <AdminNewsAdd />
            </Suspense>
          }
        />
        <Route
          path={AdminPathNames[AdminPathEnums.ADMIN_ADVERTS]}
          element={
            <Suspense>
              <AdminAdverts />
            </Suspense>
          }
        />
        <Route
          path={AdminPathNames[AdminPathEnums.ADMIN_ADVERTS_DETAIL]}
          element={
            <Suspense>
              <AdminAdvertsDetail />
            </Suspense>
          }
        />
        <Route
          path={AdminPathNames[AdminPathEnums.ADMIN_ADVERTS_ADD]}
          element={
            <Suspense>
              <AdminAdvertsAdd />
            </Suspense>
          }
        />
        <Route
          path={AdminPathNames[AdminPathEnums.ADMIN_ADVERTS_EDIT]}
          element={
            <Suspense>
              <AdminAdvertsEdit />
            </Suspense>
          }
        />
        <Route
          path={AdminPathNames[AdminPathEnums.ADMIN_PHOTO_GALLERY]}
          element={
            <Suspense>
              <AdminPhotoGallery />
            </Suspense>
          }
        />
        <Route
          path={AdminPathNames[AdminPathEnums.ADMIN_ABOUT_INSTITUTE]}
          element={
            <Suspense>
              <AdminAboutInstitute />
            </Suspense>
          }
        />
        <Route
          path={AdminPathNames[AdminPathEnums.ADMIN_ADVICE_INSTITUTE]}
          element={
            <Suspense>
              <AdminAdviceInstitute />
            </Suspense>
          }
        />
        <Route
          path={AdminPathNames[AdminPathEnums.ADMIN_DOCUMENTS]}
          element={
            <Suspense>
              <AdminDocuments />
            </Suspense>
          }
        />
        <Route
          path={AdminPathNames[AdminPathEnums.ADMIN_FACULTIES]}
          element={
            <Suspense>
              <AdminFaculties />
            </Suspense>
          }
        />
        <Route
          path={AdminPathNames[AdminPathEnums.ADMIN_FACULTY]}
          element={
            <Suspense>
              <AdminFaculty />
            </Suspense>
          }
        />
        <Route
          path={AdminPathNames[AdminPathEnums.ADMIN_SCIENTIFIC_FACULTY]}
          element={
            <Suspense>
              <AdminScientificFaculty />
            </Suspense>
          }
        />
        <Route
          path={AdminPathNames[AdminPathEnums.ADMIN_DEPARTMENTS]}
          element={
            <Suspense>
              <AdminDepartments />
            </Suspense>
          }
        />
        <Route
          path={AdminPathNames[AdminPathEnums.ADMIN_DEPARTMENT_FACULTY]}
          element={
            <Suspense>
              <AdminDepartmentFaculty />
            </Suspense>
          }
        />
        <Route
          path={AdminPathNames[AdminPathEnums.ADMIN_ABOUT_DEPARTMENT]}
          element={
            <Suspense>
              <AdminAboutDepartment />
            </Suspense>
          }
        />
        <Route
          path={AdminPathNames[AdminPathEnums.ADMIN_HISTORY_DEPARTMENT]}
          element={
            <Suspense>
              <AdminHistoryDepartment />
            </Suspense>
          }
        />
        <Route
          path={AdminPathNames[AdminPathEnums.ADMIN_STRUCTURE_DEPARTMENT]}
          element={
            <Suspense>
              <AdminStructureDepartment />
            </Suspense>
          }
        />
        <Route
          path={AdminPathNames[AdminPathEnums.ADMIN_SPIRITUAL_DEPARTMENT]}
          element={
            <Suspense>
              <AdminSpiritualDepartment />
            </Suspense>
          }
        />
        <Route
          path={AdminPathNames[AdminPathEnums.ADMIN_METHODOLOGICAL_DEPARTMENT]}
          element={
            <Suspense>
              <AdminMethodologicalDepartment />
            </Suspense>
          }
        />
        <Route
          path={AdminPathNames[AdminPathEnums.ADMIN_RESEARCH_DEPARTMENT]}
          element={
            <Suspense>
              <AdminResearchDepartment />
            </Suspense>
          }
        />
        <Route
          path={AdminPathNames[AdminPathEnums.ADMIN_SCIENTIFIC_DEPARTMENT]}
          element={
            <Suspense>
              <AdminScientificDepartment />
            </Suspense>
          }
        />
        <Route
          path={AdminPathNames[AdminPathEnums.ADMIN_INTERNATIONAL_DEPARTMENT]}
          element={
            <Suspense>
              <AdminInternationalDepartment />
            </Suspense>
          }
        />
        <Route
          path={AdminPathNames[AdminPathEnums.ADMIN_SCIENTIFIC]}
          element={
            <Suspense>
              <AdminScientific />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
}

export default AdminPathRoutes;
