import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import { PathEnums } from "./enums/Enums";
import { PathNames } from "./consts/Consts";

const MainLayout = lazy(() => import("../layout/MainLayout"));

const Home = lazy(() => import("../pages/home/Home"));
const Auth = lazy(() => import("../pages/auth/Auth"));
const Symbols = lazy(() => import("../pages/symbols/Symbols"));
const Information = lazy(() => import("../pages/information/Information"));
const Sitemap = lazy(() => import("../pages/sitemap/Sitemap"));
const StructureUniversity = lazy(
  () => import("../pages/structure-university/StructureUniversity")
);
const InstituteStatute = lazy(
  () => import("../pages/institute-statute/InstituteStatute")
);
const InstituteCertificates = lazy(
  () => import("../pages/institute-certificates/InstituteCertificates")
);
const InternalRegulations = lazy(
  () => import("../pages/internal-regulations/InternalRegulations")
);
const EducationalBuildings = lazy(
  () => import("../pages/educational-buildings/EducationalBuildings")
);
const LaboratoryRoom = lazy(
  () => import("../pages/laboratory-room/LaboratoryRoom")
);
const LifeStudents = lazy(() => import("../pages/life-students/LifeStudents"));
const AcademicCouncilStatue = lazy(
  () => import("../pages/academic-council-statue/AcademicCouncilStatue")
);
const AcademicCouncilMembers = lazy(
  () => import("../pages/academic-council-members/AcademicCouncilMembers")
);
const AcademicCouncilAgenda = lazy(
  () => import("../pages/academic-council-agenda/AcademicCouncilAgenda")
);
const AcademicCouncilHandouts = lazy(
  () => import("../pages/academic-council-handouts/AcademicCouncilHandouts")
);
const AcademicCouncilResolutions = lazy(
  () =>
    import("../pages/academic-council-resolutions/AcademicCouncilResolutions")
);
const Laws = lazy(() => import("../pages/laws/Laws"));
const GovermentDecisionsPrograms = lazy(
  () =>
    import("../pages/goverment-decisions-programs/GovermentDecisionsPrograms")
);
const GovermentPrograms = lazy(
  () => import("../pages/goverment-programs/GovermentPrograms")
);
const Management = lazy(() => import("../pages/management/Management"));
const ManagementDetail = lazy(
  () => import("../pages/management-detail/ManagementDetail")
);
const AboutMedicalFaculty = lazy(
  () => import("../pages/about-medical-faculty/AboutMedicalFaculty")
);
const QualificationMedicalFaculty = lazy(
  () =>
    import("../pages/qualification-medical-faculty/QualificationMedicalFaculty")
);
const HistoryMedicalFaculty = lazy(
  () => import("../pages/history-medical-faculty/HistoryMedicalFaculty")
);
const StructureMedicalFaculty = lazy(
  () => import("../pages/structure-medical-faculty/StructureMedicalFaculty")
);
const CouncilMedicalFaculty = lazy(
  () => import("../pages/council-medical-faculty/CouncilMedicalFaculty")
);
const DepartmentMedicalFaculty = lazy(
  () => import("../pages/departments-medical-faculty/DepartmentsMedicalFaculty")
);
const MethodologicalMedicalFaculty = lazy(
  () =>
    import(
      "../pages/methodological-medical-faculty/MethodologicalMedicalFaculty"
    )
);
const StudentScientificSocietyMedicalFaculty = lazy(
  () =>
    import(
      "../pages/student-scientific-society-medical-faculty/StudentScientificSocietyMedicalFaculty"
    )
);
const ResearchWorkMedicalFaculty = lazy(
  () =>
    import("../pages/research-work-medical-faculty/ResearchWorkMedicalFaculty")
);
const AboutDepartment = lazy(
  () => import("../pages/about-department/AboutDepartment")
);
const HistoryDeparment = lazy(
  () => import("../pages/history-department/HistoryDepartment")
);
const StructureDepartment = lazy(
  () => import("../pages/structure-department/StructureDepartment")
);
const ScientificDepartment = lazy(
  () =>
    import("../pages/scientific-circles-department/ScientificCirclesDepartment")
);
const ResearchDepartment = lazy(
  () => import("../pages/research-work-department/ResearchWorkDeparment")
);
const SpiritualDepartment = lazy(
  () =>
    import(
      "../pages/spiritual-and-enlightening-department/SpiritualAndEnlighteningDepartment"
    )
);
const MethodologicalDepartment = lazy(
  () => import("../pages/methodological-department/MethodologicalDepartment")
);
const InternationalDepartment = lazy(
  () =>
    import(
      "../pages/international-partnership-department/InternationalPartnershipDepartment"
    )
);

// admin
const Admin = lazy(() => import("../pages/admin/Admin"));
const AdminSettings = lazy(
  () => import("../pages/admin-settings/AdminSettings")
);

// admin-users
const AdminUsers = lazy(() => import("../pages/admin-users/AdminUsers"));
const AdminAddUser = lazy(() => import("../pages/admin-add-user/AddUser"));
const AdminUserDetail = lazy(
  () => import("../pages/admin-user-detail/UserDetail")
);

// admin-news
const AdminNews = lazy(() => import("../pages/admin-news/AdminNews"));
const AdminNewDetail = lazy(
  () => import("../pages/admin-new-detail/NewDetail")
);
const AdminAddNew = lazy(() => import("../pages/admin-add-news/AddNews"));

// admin-adverts
const AdminAdverts = lazy(() => import("../pages/admin-adverts/AdminAdverts"));
const AdminAdvertsDetail = lazy(
  () => import("../pages/admin-advert-detail/AdvertDetail")
);
const AdminAddAdverts = lazy(
  () => import("../pages/admin-add-adverts/AddAdverts")
);

function PathRoutes() {
  return (
    <Routes>
      <Route path={PathNames[PathEnums.MAIN]} element={<MainLayout />}>
        <Route
          index
          element={
            <Suspense>
              <Home />
            </Suspense>
          }
        />
        <Route
          path={PathNames[PathEnums.SYMBOLS]}
          element={
            <Suspense>
              <Symbols />
            </Suspense>
          }
        />
        <Route
          path={PathNames[PathEnums.SITEMAP]}
          element={
            <Suspense>
              <Sitemap />
            </Suspense>
          }
        />
        <Route
          path={PathNames[PathEnums.INFORMATION]}
          element={
            <Suspense>
              <Information />
            </Suspense>
          }
        />
        <Route
          path={PathNames[PathEnums.STRUCTURE_UNIVERSITY]}
          element={
            <Suspense>
              <StructureUniversity />
            </Suspense>
          }
        />
        <Route
          path={PathNames[PathEnums.INSTITUTE_STATUTE]}
          element={
            <Suspense>
              <InstituteStatute />
            </Suspense>
          }
        />
        <Route
          path={PathNames[PathEnums.INSTITUTE_CERTIFICATES]}
          element={
            <Suspense>
              <InstituteCertificates />
            </Suspense>
          }
        />
        <Route
          path={PathNames[PathEnums.INTERNAL_REGULATIONS]}
          element={
            <Suspense>
              <InternalRegulations />
            </Suspense>
          }
        />
        <Route
          path={PathNames[PathEnums.EDUCATIONAL_BUILDINGS]}
          element={
            <Suspense>
              <EducationalBuildings />
            </Suspense>
          }
        />
        <Route
          path={PathNames[PathEnums.LABORATORY_ROOM]}
          element={
            <Suspense>
              <LaboratoryRoom />
            </Suspense>
          }
        />
        <Route
          path={PathNames[PathEnums.LIFE_STUDENTS]}
          element={
            <Suspense>
              <LifeStudents />
            </Suspense>
          }
        />
        <Route
          path={PathNames[PathEnums.ACADEMIC_COUNCIL_STATUE]}
          element={
            <Suspense>
              <AcademicCouncilStatue />
            </Suspense>
          }
        />
        <Route
          path={PathNames[PathEnums.ACADEMIC_COUNCIL_MEMBERS]}
          element={
            <Suspense>
              <AcademicCouncilMembers />
            </Suspense>
          }
        />
        <Route
          path={PathNames[PathEnums.ACADEMIC_COUNCIL_AGENDA]}
          element={
            <Suspense>
              <AcademicCouncilAgenda />
            </Suspense>
          }
        />
        <Route
          path={PathNames[PathEnums.ACADEMIC_COUNCIL_HANDOUTS]}
          element={
            <Suspense>
              <AcademicCouncilHandouts />
            </Suspense>
          }
        />
        <Route
          path={PathNames[PathEnums.ACADEMIC_COUNCIL_RESOLUTIONS]}
          element={
            <Suspense>
              <AcademicCouncilResolutions />
            </Suspense>
          }
        />
        <Route
          path={PathNames[PathEnums.LAWS]}
          element={
            <Suspense>
              <Laws />
            </Suspense>
          }
        />
        <Route
          path={PathNames[PathEnums.GOVERMENT_DESCIONS_PROGRAMS]}
          element={
            <Suspense>
              <GovermentDecisionsPrograms />
            </Suspense>
          }
        />
        <Route
          path={PathNames[PathEnums.GOVERMENT_PROGRAMS]}
          element={
            <Suspense>
              <GovermentPrograms />
            </Suspense>
          }
        />
        <Route
          path={PathNames[PathEnums.MANAGEMENT]}
          element={
            <Suspense>
              <Management />
            </Suspense>
          }
        />
        <Route
          path={PathNames[PathEnums.MANAGEMENT_DETAIL]}
          element={
            <Suspense>
              <ManagementDetail />
            </Suspense>
          }
        />
        <Route
          path={PathNames[PathEnums.ABOUT_MEDICAL_FACULTY]}
          element={
            <Suspense>
              <AboutMedicalFaculty />
            </Suspense>
          }
        />
        <Route
          path={PathNames[PathEnums.QUALIFICATION_MEDICAL_FACULTY]}
          element={
            <Suspense>
              <QualificationMedicalFaculty />
            </Suspense>
          }
        />
        <Route
          path={PathNames[PathEnums.HISTORY_MEDICAL_FACULTY]}
          element={
            <Suspense>
              <HistoryMedicalFaculty />
            </Suspense>
          }
        />
        <Route
          path={PathNames[PathEnums.STRUCTURE_MEDICAL_FACULTY]}
          element={
            <Suspense>
              <StructureMedicalFaculty />
            </Suspense>
          }
        />
        <Route
          path={PathNames[PathEnums.COUNCIL_MEDICAL_FACULTY]}
          element={
            <Suspense>
              <CouncilMedicalFaculty />
            </Suspense>
          }
        />
        <Route
          path={PathNames[PathEnums.DEPARTMENTS_MEDICAL_FACULTY]}
          element={
            <Suspense>
              <DepartmentMedicalFaculty />
            </Suspense>
          }
        />
        <Route
          path={PathNames[PathEnums.METHODOLOGICAL_MEDICAL_FACULTY]}
          element={
            <Suspense>
              <MethodologicalMedicalFaculty />
            </Suspense>
          }
        />
        <Route
          path={PathNames[PathEnums.STUDENT_SCIENTIFIC_SOCIETY_MEDICAL_FACULTY]}
          element={
            <Suspense>
              <StudentScientificSocietyMedicalFaculty />
            </Suspense>
          }
        />
        <Route
          path={PathNames[PathEnums.RESEARCH_WORK_MEDICAL_FACULTY]}
          element={
            <Suspense>
              <ResearchWorkMedicalFaculty />
            </Suspense>
          }
        />
        <Route
          path={PathNames[PathEnums.ABOUT_DEPARTMENT_MEDICAL_FACULTY]}
          element={
            <Suspense>
              <AboutDepartment />
            </Suspense>
          }
        />
        <Route
          path={PathNames[PathEnums.HISTORY_DEPARTMENT_MEDICAL_FACULTY]}
          element={
            <Suspense>
              <HistoryDeparment />
            </Suspense>
          }
        />
        <Route
          path={PathNames[PathEnums.STRUCTURE_DEPARTMENT_MEDICAL_FACULTY]}
          element={
            <Suspense>
              <StructureDepartment />
            </Suspense>
          }
        />
        <Route
          path={
            PathNames[
              PathEnums.STUDENT_SCIENTIFIC_SOCIETY_DEPARTMENT_MEDICAL_FACULTY
            ]
          }
          element={
            <Suspense>
              <ScientificDepartment />
            </Suspense>
          }
        />
        <Route
          path={PathNames[PathEnums.SPIRITUAL_DEPARTMENT_MEDICAL_FACULTY]}
          element={
            <Suspense>
              <SpiritualDepartment />
            </Suspense>
          }
        />
        <Route
          path={PathNames[PathEnums.RESEARCH_WORK_DEPARTMENT_MEDICAL_FACULTY]}
          element={
            <Suspense>
              <ResearchDepartment />
            </Suspense>
          }
        />
        <Route
          path={PathNames[PathEnums.METHODOLOGICAL_DEPARTMENT_MEDICAL_FACULTY]}
          element={
            <Suspense>
              <MethodologicalDepartment />
            </Suspense>
          }
        />
        <Route
          path={
            PathNames[
              PathEnums.INTERNATIONAL_PARTNERSHIP_DEPARTMENT_MEDICAL_FACULTY
            ]
          }
          element={
            <Suspense>
              <InternationalDepartment />
            </Suspense>
          }
        />
      </Route>
      <Route
        path={PathNames[PathEnums.AUTH]}
        element={
          <Suspense>
            <Auth />
          </Suspense>
        }
      />
      <Route
        path={PathNames[PathEnums.ADMIN]}
        element={
          <Suspense>
            <Admin />
          </Suspense>
        }
      >
        <Route
          path={PathNames[PathEnums.ADMIN_USERS]}
          element={
            <Suspense>
              <AdminUsers />
            </Suspense>
          }
        />
        <Route
          path={PathNames[PathEnums.ADMIN_DETAILS_USER]}
          element={
            <Suspense>
              <AdminUserDetail />
            </Suspense>
          }
        />
        <Route
          path={PathNames[PathEnums.ADMIN_ADD_USER]}
          element={
            <Suspense>
              <AdminAddUser />
            </Suspense>
          }
        />
        <Route
          path={PathNames[PathEnums.ADMIN_NEWS]}
          element={
            <Suspense>
              <AdminNews />
            </Suspense>
          }
        />
        <Route
          path={PathNames[PathEnums.ADMIN_ADD_NEWS]}
          element={
            <Suspense>
              <AdminAddNew />
            </Suspense>
          }
        />
        <Route
          path={PathNames[PathEnums.ADMIN_DETAILS_NEWS]}
          element={
            <Suspense>
              <AdminNewDetail />
            </Suspense>
          }
        />
        <Route
          path={PathNames[PathEnums.ADMIN_ADVERTS]}
          element={
            <Suspense>
              <AdminAdverts />
            </Suspense>
          }
        />
        <Route
          path={PathNames[PathEnums.ADMIN_ADD_ADVERTS]}
          element={
            <Suspense>
              <AdminAddAdverts />
            </Suspense>
          }
        />
        <Route
          path={PathNames[PathEnums.ADMIN_DETAILS_ADVERTS]}
          element={
            <Suspense>
              <AdminAdvertsDetail />
            </Suspense>
          }
        />
        <Route
          path={PathNames[PathEnums.ADMIN_SETTINGS]}
          element={
            <Suspense>
              <AdminSettings />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
}

export default PathRoutes;
