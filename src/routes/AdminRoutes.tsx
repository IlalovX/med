import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import { AdminPathNames } from "./consts/AdminConsts";
import { AdminPathEnums } from "./enums/AdminEnums";

const Admin = lazy(() => import("../pages/admin-pages/admin/Admin"));
const AdminEdit = lazy(
  () => import("../pages/admin-pages/admin-edit/AdminEdit")
);
const AdminUser = lazy(
  () => import("../pages/admin-pages/admin-users/AdminUsers")
);
const AdminUsersDetail = lazy(
  () => import("../pages/admin-pages/admin-users-detail/AdminUsersDetail")
);
const AdminUsersAdd = lazy(
  () => import("../pages/admin-pages/admin-users-add/AdminUsersAdd")
);
const AdminUsersEdit = lazy(
  () => import("../pages/admin-pages/admin-users-edit/AdminUsersEdit")
);
const AdminNews = lazy(
  () => import("../pages/admin-pages/admin-news/AdminNews")
);
const AdminNewsDetail = lazy(
  () => import("../pages/admin-pages/admin-news-detail/AdminNewsDetail")
);
const AdminNewsAdd = lazy(
  () => import("../pages/admin-pages/admin-news-add/AdminNewsAdd")
);
const AdminNewsEdit = lazy(
  () => import("../pages/admin-pages/admin-news-edit/AdminNewsEdit")
);
const AdminAdverts = lazy(
  () => import("../pages/admin-pages/admin-adverts/AdminAdverts")
);
const AdminAdvertsDetail = lazy(
  () => import("../pages/admin-pages/admin-adverts-detail/AdminAdvertsDetail")
);
const AdminAdvertsAdd = lazy(
  () => import("../pages/admin-pages/admin-adverts-add/AdminAdvertsAdd")
);
const AdminAdvertsEdit = lazy(
  () => import("../pages/admin-pages/admin-adverts-edit/AdminAdvertsEdit")
);
const AdminPhotoGallery = lazy(
  () => import("../pages/admin-pages/admin-photo-gallery/AdminPhotoGallery")
);
const AdminAboutInstitute = lazy(
  () => import("../pages/admin-pages/admin-about-institute/AdminAboutInstitute")
);
const AdminInfoInstitute = lazy(
  () => import("../pages/admin-pages/admin-information-institute/Information")
);
const AdminStructureInstitute = lazy(
  () =>
    import("../pages/admin-pages/admin-structure-institute/StructureInstitute")
);
const AdminStatuteInstitute = lazy(
  () => import("../pages/admin-pages/admin-statute-institute/InstituteStatute")
);
const AdminCertificatesInstitute = lazy(
  () =>
    import(
      "../pages/admin-pages/admin-certificates-institute/InstituteCertificates"
    )
);
const AdminRegulationsInstitute = lazy(
  () =>
    import(
      "../pages/admin-pages/admin-regulations-institute/InternalRegulations"
    )
);
const AdminEducationalInstitute = lazy(
  () =>
    import(
      "../pages/admin-pages/admin-educational-institute/EducationalBuildings"
    )
);
const AdminLaboratoryInstitute = lazy(
  () => import("../pages/admin-pages/admin-laboratory-institute/LaboratoryRoom")
);
const AdminStudentsInstitute = lazy(
  () => import("../pages/admin-pages/admin-students-institute/LifeStudents")
);

const AdminAdviceInstitute = lazy(
  () =>
    import("../pages/admin-pages/admin-advice-institute/AdminAdviceInstitute")
);
const AdminDocuments = lazy(
  () => import("../pages/admin-pages/admin-documents/AdminDocuments")
);
const AdminFaculties = lazy(
  () => import("../pages/admin-pages/admin-faculties/AdminFaculties")
);
const AdminFaculty = lazy(
  () => import("../pages/admin-pages/admin-faculty/AdminFaculty")
);
const AdminScientificFaculty = lazy(
  () =>
    import("../pages/admin-pages/admin-faculty-scientific/FacultyScientific")
);
const AdminQualificationFaculty = lazy(
  () =>
    import(
      "../pages/admin-pages/admin-faculty-qualification/FacultyQualification"
    )
);
const AdminHistoryFaculty = lazy(
  () => import("../pages/admin-pages/admin-faculty-history/FacultyHistory")
);
const AdminStructureFaculty = lazy(
  () => import("../pages/admin-pages/admin-faculty-structure/FacultyStructure")
);
const AdminCouncilFaculty = lazy(
  () => import("../pages/admin-pages/admin-faculty-council/FacultyCouncil")
);
const AdminMethodologicalFaculty = lazy(
  () =>
    import(
      "../pages/admin-pages/admin-faculty-methodological/FacultyMethodological"
    )
);
const AdminResearchFaculty = lazy(
  () => import("../pages/admin-pages/admin-faculty-research/FacultyResearch")
);
const AdminDepartments = lazy(
  () => import("../pages/admin-pages/admin-departments/AdminDepartments")
);
const AdminDepartmentFaculty = lazy(
  () =>
    import(
      "../pages/admin-pages/admin-department-faculty/AdminDepartmentFaculty"
    )
);
const AdminAboutDepartment = lazy(
  () =>
    import("../pages/admin-pages/admin-about-department/AdminAboutDepartment")
);
const AdminHistoryDepartment = lazy(
  () =>
    import(
      "../pages/admin-pages/admin-history-department/AdminHistoryDepartment"
    )
);
const AdminStructureDepartment = lazy(
  () =>
    import(
      "../pages/admin-pages/admin-structure-department/AdminStructureDepartment"
    )
);
const AdminSpiritualDepartment = lazy(
  () =>
    import(
      "../pages/admin-pages/admin-spiritual-department/AdminSpiritualDepartment"
    )
);
const AdminMethodologicalDepartment = lazy(
  () =>
    import(
      "../pages/admin-pages/admin-methodological-department/AdminMethodologicalDepartment"
    )
);
const AdminResearchDepartment = lazy(
  () =>
    import(
      "../pages/admin-pages/admin-research-department/AdminResearchDepartment"
    )
);
const AdminScientificDepartment = lazy(
  () =>
    import(
      "../pages/admin-pages/admin-scientific-department/AdminScientificDepartment"
    )
);
const AdminInternationalDepartment = lazy(
  () =>
    import(
      "../pages/admin-pages/admin-international-department/AdminInternationalDepartment"
    )
);
const AdminScientific = lazy(
  () => import("../pages/admin-pages/admin-scientific/AdminScientific")
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
          path={AdminPathNames[AdminPathEnums.ADMIN_INFORMATION_INSTITUTE]}
          element={
            <Suspense>
              <AdminInfoInstitute />
            </Suspense>
          }
        />
        <Route
          path={AdminPathNames[AdminPathEnums.ADMIN_STATUTE_INSTITUTE]}
          element={
            <Suspense>
              <AdminStatuteInstitute />
            </Suspense>
          }
        />
        <Route
          path={AdminPathNames[AdminPathEnums.ADMIN_STRUCTURE_INSTITUTE]}
          element={
            <Suspense>
              <AdminStructureInstitute />
            </Suspense>
          }
        />
        <Route
          path={AdminPathNames[AdminPathEnums.ADMIN_CERTIFICATES_INSTITUTE]}
          element={
            <Suspense>
              <AdminCertificatesInstitute />
            </Suspense>
          }
        />
        <Route
          path={AdminPathNames[AdminPathEnums.ADMIN_REGULATIONS_INSTITUTE]}
          element={
            <Suspense>
              <AdminRegulationsInstitute />
            </Suspense>
          }
        />
        <Route
          path={AdminPathNames[AdminPathEnums.ADMIN_EDUCATIONAL_INSTITUTE]}
          element={
            <Suspense>
              <AdminEducationalInstitute />
            </Suspense>
          }
        />
        <Route
          path={AdminPathNames[AdminPathEnums.ADMIN_LABORATORY_INSTITUTE]}
          element={
            <Suspense>
              <AdminLaboratoryInstitute />
            </Suspense>
          }
        />
        <Route
          path={AdminPathNames[AdminPathEnums.ADMIN_STUDENTS_INSTITUTE]}
          element={
            <Suspense>
              <AdminStudentsInstitute />
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
          path={
            AdminPathNames[AdminPathEnums.ADMIN_QUALIFICATION_MEDICAL_FACULTY]
          }
          element={
            <Suspense>
              <AdminQualificationFaculty />
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
          path={
            AdminPathNames[AdminPathEnums.ADMIN_QUALIFICATION_MEDICAL_FACULTY]
          }
          element={
            <Suspense>
              <AdminQualificationFaculty />
            </Suspense>
          }
        />
        <Route
          path={AdminPathNames[AdminPathEnums.ADMIN_HISTORY_MEDICAL_FACULTY]}
          element={
            <Suspense>
              <AdminHistoryFaculty />
            </Suspense>
          }
        />
        <Route
          path={AdminPathNames[AdminPathEnums.ADMIN_STRUCTURE_MEDICAL_FACULTY]}
          element={
            <Suspense>
              <AdminStructureFaculty />
            </Suspense>
          }
        />
        <Route
          path={AdminPathNames[AdminPathEnums.ADMIN_COUNCIL_MEDICAL_FACULTY]}
          element={
            <Suspense>
              <AdminCouncilFaculty />
            </Suspense>
          }
        />
        <Route
          path={
            AdminPathNames[AdminPathEnums.ADMIN_RESEARCH_WORK_MEDICAL_FACULTY]
          }
          element={
            <Suspense>
              <AdminResearchFaculty />
            </Suspense>
          }
        />
        <Route
          path={
            AdminPathNames[AdminPathEnums.ADMIN_METHODOLOGICAL_MEDICAL_FACULTY]
          }
          element={
            <Suspense>
              <AdminMethodologicalFaculty />
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
