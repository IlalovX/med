import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import { PathEnums } from "./enums/Enums";
import { PathNames } from "./consts/Consts";

const MainLayout = lazy(() => import("../layouts/MainLayout"));

const Home = lazy(() => import("../pages/users-pages/home/Home"));
const Auth = lazy(() => import("../pages/users-pages/auth/Auth"));
const Symbols = lazy(() => import("../pages/users-pages/symbols/Symbols"));
const Contacts = lazy(() => import("../pages/users-pages/contacts/Contacts"));
const Information = lazy(() => import("../pages/users-pages/information/Information"));
const Sitemap = lazy(() => import("../pages/users-pages/sitemap/Sitemap"));
const StructureUniversity = lazy(
  () => import("../pages/users-pages/structure-university/StructureUniversity")
);
const InstituteStatute = lazy(
  () => import("../pages/users-pages/institute-statute/InstituteStatute")
);
const InstituteCertificates = lazy(
  () => import("../pages/users-pages/institute-certificates/InstituteCertificates")
);
const InternalRegulations = lazy(
  () => import("../pages/users-pages/internal-regulations/InternalRegulations")
);
const EducationalBuildings = lazy(
  () => import("../pages/users-pages/educational-buildings/EducationalBuildings")
);
const LaboratoryRoom = lazy(
  () => import("../pages/users-pages/laboratory-room/LaboratoryRoom")
);
const LifeStudents = lazy(() => import("../pages/users-pages/life-students/LifeStudents"));
const AcademicCouncilStatue = lazy(
  () => import("../pages/users-pages/academic-council-statue/AcademicCouncilStatue")
);
const AcademicCouncilMembers = lazy(
  () => import("../pages/users-pages/academic-council-members/AcademicCouncilMembers")
);
const AcademicCouncilAgenda = lazy(
  () => import("../pages/users-pages/academic-council-agenda/AcademicCouncilAgenda")
);
const AcademicCouncilHandouts = lazy(
  () => import("../pages/users-pages/academic-council-handouts/AcademicCouncilHandouts")
);
const AcademicCouncilResolutions = lazy(
  () =>
    import("../pages/users-pages/academic-council-resolutions/AcademicCouncilResolutions")
);

const AboutDocuments = lazy(
  () => import("../pages/users-pages/about-documents/AboutDocuments")
);
const MinistryOrder = lazy(
  () => import("../pages/users-pages/ministry-orders/MinistryOrder")
);
const StatePrograms = lazy(
  () => import("../pages/users-pages/state-programs/StatePrograms")
);
const Management = lazy(() => import("../pages/users-pages/management/Management"));
const ManagementDetail = lazy(
  () => import("../pages/users-pages/management-detail/ManagementDetail")
);
const AboutMedicalFaculty = lazy(
  () => import("../pages/users-pages/about-medical-faculty/AboutMedicalFaculty")
);
const QualificationMedicalFaculty = lazy(
  () =>
    import("../pages/users-pages/qualification-medical-faculty/QualificationMedicalFaculty")
);
const HistoryMedicalFaculty = lazy(
  () => import("../pages/users-pages/history-medical-faculty/HistoryMedicalFaculty")
);
const StructureMedicalFaculty = lazy(
  () => import("../pages/users-pages/structure-medical-faculty/StructureMedicalFaculty")
);
const CouncilMedicalFaculty = lazy(
  () => import("../pages/users-pages/council-medical-faculty/CouncilMedicalFaculty")
);
const DepartmentMedicalFaculty = lazy(
  () => import("../pages/users-pages/departments-medical-faculty/DepartmentsMedicalFaculty")
);
const MethodologicalMedicalFaculty = lazy(
  () =>
    import(
      "../pages/users-pages/methodological-medical-faculty/MethodologicalMedicalFaculty"
    )
);
const StudentScientificSocietyMedicalFaculty = lazy(
  () =>
    import(
      "../pages/users-pages/student-scientific-society-medical-faculty/StudentScientificSocietyMedicalFaculty"
    )
);
const ResearchWorkMedicalFaculty = lazy(
  () =>
    import("../pages/users-pages/research-work-medical-faculty/ResearchWorkMedicalFaculty")
);
const AboutDepartment = lazy(
  () => import("../pages/users-pages/about-department/AboutDepartment")
);
const HistoryDepartment = lazy(
  () => import("../pages/users-pages/history-department/HistoryDepartment")
);
const StructureDepartment = lazy(
  () => import("../pages/users-pages/structure-department/StructureDepartment")
);
const ScientificDepartment = lazy(
  () =>
    import("../pages/users-pages/scientific-circles-department/ScientificCirclesDepartment")
);
const ResearchDepartment = lazy(
  () => import("../pages/users-pages/research-work-department/ResearchWorkDeparment")
);
const SpiritualDepartment = lazy(
  () =>
    import(
      "../pages/users-pages/spiritual-and-enlightening-department/SpiritualAndEnlighteningDepartment"
    )
);
const MethodologicalDepartment = lazy(
  () => import("../pages/users-pages/methodological-department/MethodologicalDepartment")
);
const InternationalDepartment = lazy(
  () =>
    import(
      "../pages/users-pages/international-partnership-department/InternationalPartnershipDepartment"
    )
);
const EducationQualityDepartment = lazy(
  () =>
    import("../pages/users-pages/education-quality-department/EducationQualityDepartment")
);
const EducationDepartment = lazy(
  () => import("../pages/users-pages/education-department/EducationDepartment")
);
const MasterDepartment = lazy(
  () => import("../pages/users-pages/master-department/MasterDepartment")
);
const ClinicalResidencyDepartment = lazy(
  () =>
    import(
      "../pages/users-pages/clinical-residency-department//ClinicalResidencyDepartment"
    )
);
const InternationalRelationsDepartment = lazy(
  () =>
    import(
      "../pages/users-pages/international-relations-department/InternationalRealtioonsDepartment"
    )
);
const ScientificResearchDepartment = lazy(
  () =>
    import(
      "../pages/users-pages/scientific-research-department/ScientificResearchDepartment"
    )
);
const GiftedStudents = lazy(
  () => import("../pages/users-pages/gifteds-students/GiftedsStudents")
);
const TalentedStudents = lazy(
  () => import("../pages/users-pages/talented-students/TalentedStudents")
);
const Accounting = lazy(() => import("../pages/users-pages/accounting/Accounting"));
const Marketing = lazy(() => import("../pages/users-pages/marketing/Marketing"));
const PlanningFinance = lazy(
  () => import("../pages/users-pages/planning-finance-department/PlanningFinanceDepartment")
);
const InfoResourceCenter = lazy(
  () => import("../pages/users-pages/information-resource-center/InfoResourceCenter")
);
const InfoTechonologiesCenter = lazy(
  () =>
    import("../pages/users-pages/information-technologies-center/InfoTechnologiesCenter")
);
const YouthUnionCenter = lazy(
  () => import("../pages/users-pages/youth-union-center/YouthUnionCenter")
);
const WomenCommitteeCenter = lazy(
  () => import("../pages/users-pages/women-committee-department/WomenCommitteeDepartment")
);
const CommunicationDevelopmentCenter = lazy(
  () =>
    import(
      "../pages/users-pages/communication-development-center/CommunicationDevelopmentCenter"
    )
);
const SpiritualityEnglightmentDepartments = lazy(
  () =>
    import(
      "../pages/users-pages/spirituality-enlightenment-department/SpiritualityEnglightmentDepartment"
    )
);
const PressSecretary = lazy(
  () => import("../pages/users-pages/press-secretary/PressSecretary")
);
const HumanResourcesDepartment = lazy(
  () => import("../pages/users-pages/human-resource-department/HumanResourceDepartment")
);
const ChancelleryDepartment = lazy(
  () => import("../pages/users-pages/chancellery-department/ChancelleryDepartment")
);
const ComplianceControl = lazy(
  () => import("../pages/users-pages/compliance-control/ComplianceControl")
);
const ArchiveDepartment = lazy(
  () => import("../pages/users-pages/archive-department/ArchiveDepartment")
);
const LegalServicesDepartment = lazy(
  () => import("../pages/users-pages/legal-services-department/LegalServicesDepartment")
);
const Psychologist = lazy(() => import("../pages/users-pages/psychologist/Psychologits"));
const UnionCommittee = lazy(
  () => import("../pages/users-pages/union-committee/UnionCommittee")
);
const SimulationCenter = lazy(
  () => import("../pages/users-pages/simulation-center/SimulationCenter")
);
const HistorySimulationCenter = lazy(
  () => import("../pages/users-pages/history-simulation-center/HistorySimulationCenter")
);
const DirectorsSimulationCenter = lazy(
  () => import("../pages/users-pages/director-simulation-center/DirectorSimulationCenter")
);

const RegionalOffices = lazy(
  () => import("../pages/users-pages/regional-offices/RegionalOffices")
);
const ExampleContracts = lazy(
  () => import("../pages/users-pages/example-contracts/ExampleContracts")
);
const Graduates = lazy(() => import("../pages/users-pages/graduates/Graduates"));
const CareerCenterFaq = lazy(
  () => import("../pages/users-pages/career-center-faq/CareerCenterFaq")
);
const Treaty = lazy(() => import("../pages/users-pages/treaty/Treaty"));
const Joint = lazy(() => import("../pages/users-pages/joint/Joint"));
const InternationalPartners = lazy(
  () => import("../pages/users-pages/international-partners/InternationalPartners")
);
const RepublicanPartners = lazy(
  () => import("../pages/users-pages/republican-partners/RepublicanPartners")
);
const PhotoGallery = lazy(() => import("../pages/users-pages/photo-gallery/PhotoGallery"));
const News = lazy(() => import("../pages/users-pages/news/News"));
const NewsDetail = lazy(() => import("../pages/users-pages/news-detail/NewDetail"));
const Adverts = lazy(() => import("../pages/users-pages/adverts/Adverts"));
const AdvertDetail = lazy(() => import("../pages/users-pages/advert-detail/AdvertDetail"));
const Instruction = lazy(() => import("../pages/users-pages/instruction/Instruction"));
const ScheduleSesBachelor = lazy(
  () => import("../pages/users-pages/schedule-sec-bachelor/ScheduleSesBachelor")
);
const ClassSchedule = lazy(
  () => import("../pages/users-pages/class-schedule/ClassSchedule")
);
const ClassScheduleDetail = lazy(
  () => import("../pages/users-pages/class-schedule-detail/ClassScheduleDetail")
);
const MagClassSchedule = lazy(
  () => import("../pages/users-pages/mag-schedule/MagSchedule")
);
const MagClassScheduleDetail = lazy(
  () => import("../pages/users-pages/mag-schedule-detail/MagScheduleDetail")
);
const Learning = lazy(() => import("../pages/users-pages/learning/Learning"));
const LearningMag = lazy(() => import("../pages/users-pages/learning-mag/LearningMag"));
const Attendance = lazy(() => import("../pages/users-pages/attendance/Attendance"));
const CatalogSciences = lazy(
  () => import("../pages/users-pages/catalog-sciences/CatalogSciences")
);
const SameScholarships = lazy(
  () => import("../pages/users-pages/same-scholarships/SameScholarships")
);
const ProtectionMasterDesert = lazy(
  () => import("../pages/users-pages/protection-master-dessert/ProtectionMasterDesert")
);
const MastersThesisTopics = lazy(
  () => import("../pages/users-pages/masters-thesis-topics/MastersThesisTopics")
);
const ScheduleSecMaster = lazy(
  () => import("../pages/users-pages/schedule-sec-masters/ScheduleSecMaster")
);
const InstructionClinic = lazy(
  () => import("../pages/users-pages/instruction-clinic/InstructionClinic")
);
const AttendanceClinic = lazy(
  () => import("../pages/users-pages/attendance-clinic/AttendanceClinic")
);
const StateExams = lazy(() => import("../pages/users-pages/state-exams/StateExams"));
const ClassScheduleInter = lazy(
  () => import("../pages/users-pages/class-schedule-inter/ClassScheduleInter")
);
const ClassScheduleInterDetail = lazy(
  () => import("../pages/users-pages/class-schedule-inter-detail/ClassScheduleInterDetail")
);
const ForeignStudentsStudying = lazy(
  () => import("../pages/users-pages/foreign-students-studying/ForeignStudentsStudying")
);
const AmountPaymentInternationalStudent = lazy(
  () =>
    import(
      "../pages/users-pages/amount-payment-international-students/AmountPaymentInternationalStudents"
    )
);
const InfoResidenceForeignStudent = lazy(
  () =>
    import(
      "../pages/users-pages/information-residence-foreign-students/InformationResidenceForeignStudents"
    )
);
const AdmissionProcedure = lazy(
  () => import("../pages/users-pages/admission-procedure/AdmissionProcedure")
);

const AdmissionProcudereInt = lazy(
  () => import("../pages/users-pages/admission-procedure-int/AdmissionProcedureInt")
);
const AdmissionProcedureMag = lazy(
  () => import("../pages/users-pages/admission-procedure-mag/AdmissionProcedureMag")
);
const AdmissionCommitteeNews = lazy(
  () => import("../pages/users-pages/admissions-committee-news/AdmissionsCommitteeNews")
);
const BachelorRequiredDocuments = lazy(
  () => import("../pages/users-pages/bachelor-required-documents/BachelorRequiredDocuments")
);
const ChecklistList = lazy(
  () => import("../pages/users-pages/checklist-list/ChecklistList")
);
const ClinicReceptionQuota = lazy(
  () => import("../pages/users-pages/clinic-reception-quota/ClinicReceptionQuota")
);
const ClinicRequiredDocuments = lazy(
  () => import("../pages/users-pages/clinic-required-documents/ClinicRequiredDocuments")
);
const JtrainingReceptionQuota = lazy(
  () => import("../pages/users-pages/jtraining-reception-quota/JtrainingReceptionQuota")
);
const MasterReceptionQuota = lazy(
  () => import("../pages/users-pages/master-reception-quota/MasterReceptionQuota")
);
const Memo = lazy(() => import("../pages/users-pages/memo/Memo"));
const MemoClinic = lazy(() => import("../pages/users-pages/memo-clinic/MemoClinic"));
const MemoJtTraining = lazy(
  () => import("../pages/users-pages/memo-jt-training/MemoJtTraining")
);
const MemoMag = lazy(() => import("../pages/users-pages/memo-mag/MemoMag"));
const MonitoringReception = lazy(
  () => import("../pages/users-pages/monitoring-reception/MonitoringReception")
);
const PackageAcceptedDocuments = lazy(
  () => import("../pages/users-pages/package-accepted-documents/PackageAcceptedDocuments")
);

const PackageAcceptedDocumentsJt = lazy(
  () =>
    import("../pages/users-pages/package-accepted-documents-jt/PackageAcceptedDocumentsJt")
);
const PlaceAdmissionOffice = lazy(
  () => import("../pages/users-pages/place-admission-office/PlaceAdmissionOffice")
);
const RectorsAppeal = lazy(
  () => import("../pages/users-pages/rectors-appeal/RectorsAppeal")
);
const TargetReception = lazy(
  () => import("../pages/users-pages/target-reception/TargetReception")
);
const AdmissionsJtNews = lazy(
  () => import("../pages/users-pages/admissions-jt-news/AdmissionsJtNews")
);
const Faq = lazy(() => import("../pages/users-pages/faq/Faq"));
function PathRoutes() {
  return (
    <Routes>
      <Route
        path={PathNames[PathEnums.MAIN]}
        element={
          <Suspense>
            <MainLayout />
          </Suspense>
        }
      >
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
          path={PathNames[PathEnums.CONTACTS]}
          element={
            <Suspense>
              <Contacts />
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
          path={PathNames[PathEnums.ABOUT_DOCUMENTS]}
          element={
            <Suspense>
              <AboutDocuments />
            </Suspense>
          }
        />
        <Route
          path={PathNames[PathEnums.MINISTRY_ORDER]}
          element={
            <Suspense>
              <MinistryOrder />
            </Suspense>
          }
        />
        <Route
          path={PathNames[PathEnums.STATE_PROGRAMS]}
          element={
            <Suspense>
              <StatePrograms />
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
              <HistoryDepartment />
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
        <Route
          path={PathNames[PathEnums.EDUCATION_QUALITY_DEPARTMENT]}
          element={
            <Suspense>
              <EducationQualityDepartment />
            </Suspense>
          }
        />
        <Route
          path={PathNames[PathEnums.EDUCATION_DEPARTMENT]}
          element={
            <Suspense>
              <EducationDepartment />
            </Suspense>
          }
        />
        <Route
          path={PathNames[PathEnums.MASTERS_DEPARTMENT]}
          element={
            <Suspense>
              <MasterDepartment />
            </Suspense>
          }
        />
        <Route
          path={PathNames[PathEnums.CLINICAL_RESIDENCY_DEPARTMENT]}
          element={
            <Suspense>
              <ClinicalResidencyDepartment />
            </Suspense>
          }
        />
        <Route
          path={PathNames[PathEnums.INTERNATIONAL_RELATIONS_DEPARTMENT]}
          element={
            <Suspense>
              <InternationalRelationsDepartment />
            </Suspense>
          }
        />
        <Route
          path={PathNames[PathEnums.SCIENTIFIC_RESEARCH_DEPARTMENT]}
          element={
            <Suspense>
              <ScientificResearchDepartment />
            </Suspense>
          }
        />
        <Route
          path={PathNames[PathEnums.GIFTED_STUDENTS]}
          element={
            <Suspense>
              <GiftedStudents />
            </Suspense>
          }
        />
        <Route
          path={PathNames[PathEnums.TALENTED_STUDENTS]}
          element={
            <Suspense>
              <TalentedStudents />
            </Suspense>
          }
        />
        <Route
          path={PathNames[PathEnums.ACCOUNTING]}
          element={
            <Suspense>
              <Accounting />
            </Suspense>
          }
        />
        <Route
          path={PathNames[PathEnums.MARKETING]}
          element={
            <Suspense>
              <Marketing />
            </Suspense>
          }
        />
        <Route
          path={PathNames[PathEnums.PLANNING_FINANCE_DEPARTMENT]}
          element={
            <Suspense>
              <PlanningFinance />
            </Suspense>
          }
        />
        <Route
          path={PathNames[PathEnums.INFORMATION_TECHNOLOGIES_CENTER]}
          element={
            <Suspense>
              <InfoTechonologiesCenter />
            </Suspense>
          }
        />
        <Route
          path={PathNames[PathEnums.INFORMATION_RESOURCE_CENTER]}
          element={
            <Suspense>
              <InfoResourceCenter />
            </Suspense>
          }
        />
        <Route
          path={PathNames[PathEnums.YOUTH_UNION_CENTER]}
          element={
            <Suspense>
              <YouthUnionCenter />
            </Suspense>
          }
        />
        <Route
          path={PathNames[PathEnums.WOMEN_COMMITTEE_DEPARTMENT]}
          element={
            <Suspense>
              <WomenCommitteeCenter />
            </Suspense>
          }
        />
        <Route
          path={PathNames[PathEnums.COMMUNICATION_DEVELOPMENT_CENTER]}
          element={
            <Suspense>
              <CommunicationDevelopmentCenter />
            </Suspense>
          }
        />
        <Route
          path={PathNames[PathEnums.SPIRITUALITY_ENLIGHTENMENT_DEPARTMENT]}
          element={
            <Suspense>
              <SpiritualityEnglightmentDepartments />
            </Suspense>
          }
        />
        <Route
          path={PathNames[PathEnums.PRESS_SECRETARY]}
          element={
            <Suspense>
              <PressSecretary />
            </Suspense>
          }
        />
        <Route
          path={PathNames[PathEnums.HUMAN_RESOURCE_DEPARTMENT]}
          element={
            <Suspense>
              <HumanResourcesDepartment />
            </Suspense>
          }
        />
        <Route
          path={PathNames[PathEnums.CHANCELLERY_DEPARTMENT]}
          element={
            <Suspense>
              <ChancelleryDepartment />
            </Suspense>
          }
        />
        <Route
          path={PathNames[PathEnums.COMPLIANCE_CONTROL]}
          element={
            <Suspense>
              <ComplianceControl />
            </Suspense>
          }
        />
        <Route
          path={PathNames[PathEnums.ARCHIVE_DEPARTMENT]}
          element={
            <Suspense>
              <ArchiveDepartment />
            </Suspense>
          }
        />
        <Route
          path={PathNames[PathEnums.LEGAL_SERVICES_DEPARTMENT]}
          element={
            <Suspense>
              <LegalServicesDepartment />
            </Suspense>
          }
        />
        <Route
          path={PathNames[PathEnums.PSYCHOLOGIST]}
          element={
            <Suspense>
              <Psychologist />
            </Suspense>
          }
        />
        <Route
          path={PathNames[PathEnums.UNION_COMMITTEE]}
          element={
            <Suspense>
              <UnionCommittee />
            </Suspense>
          }
        />
        <Route
          path={PathNames[PathEnums.SIMULATION_CENTER]}
          element={
            <Suspense>
              <SimulationCenter />
            </Suspense>
          }
        />
        <Route
          path={PathNames[PathEnums.HISTORY_SIMULATION_CENTER]}
          element={
            <Suspense>
              <HistorySimulationCenter />
            </Suspense>
          }
        />
        <Route
          path={PathNames[PathEnums.DIRECTOR_SIMULATION_CENTER]}
          element={
            <Suspense>
              <DirectorsSimulationCenter />
            </Suspense>
          }
        />

        <Route
          path={PathNames[PathEnums.REGIONAL_OFFICES]}
          element={
            <Suspense>
              <RegionalOffices />
            </Suspense>
          }
        />
        <Route
          path={PathNames[PathEnums.EXAMPLE_CONTRACTS]}
          element={
            <Suspense>
              <ExampleContracts />
            </Suspense>
          }
        />
        <Route
          path={PathNames[PathEnums.GRADUATES]}
          element={
            <Suspense>
              <Graduates />
            </Suspense>
          }
        />
        <Route
          path={PathNames[PathEnums.CAREER_CENTER_FAQ]}
          element={
            <Suspense>
              <CareerCenterFaq />
            </Suspense>
          }
        />
        <Route
          path={PathNames[PathEnums.TREATY]}
          element={
            <Suspense>
              <Treaty />
            </Suspense>
          }
        />
        <Route
          path={PathNames[PathEnums.JOINT]}
          element={
            <Suspense>
              <Joint />
            </Suspense>
          }
        />
        <Route
          path={PathNames[PathEnums.INTERNATIONAL_PARTNERS]}
          element={
            <Suspense>
              <InternationalPartners />
            </Suspense>
          }
        />
        <Route
          path={PathNames[PathEnums.REPUBLICAN_PARTNERS]}
          element={
            <Suspense>
              <RepublicanPartners />
            </Suspense>
          }
        />
        <Route
          path={PathNames[PathEnums.PHOTO_GALLERY]}
          element={
            <Suspense>
              <PhotoGallery />
            </Suspense>
          }
        />
        <Route
          path={PathNames[PathEnums.NEWS]}
          element={
            <Suspense>
              <News />
            </Suspense>
          }
        />
        <Route
          path={PathNames[PathEnums.NEWS_DETAIL]}
          element={
            <Suspense>
              <NewsDetail />
            </Suspense>
          }
        />
        <Route
          path={PathNames[PathEnums.ADVERTS]}
          element={
            <Suspense>
              <Adverts />
            </Suspense>
          }
        />
        <Route
          path={PathNames[PathEnums.ADVERTS_DETAIL]}
          element={
            <Suspense>
              <AdvertDetail />
            </Suspense>
          }
        />
        <Route
          path={PathNames[PathEnums.INSTRUCTION]}
          element={
            <Suspense>
              <Instruction />
            </Suspense>
          }
        />
        <Route
          path={PathNames[PathEnums.SCHEDULE_SEC_BACHELOR]}
          element={
            <Suspense>
              <ScheduleSesBachelor />
            </Suspense>
          }
        />
        <Route
          path={PathNames[PathEnums.CLASS_SCHEDULE]}
          element={
            <Suspense>
              <ClassSchedule />
            </Suspense>
          }
        />
        <Route
          path={PathNames[PathEnums.CLASS_SCHEDULE_DETAIL]}
          element={
            <Suspense>
              <ClassScheduleDetail />
            </Suspense>
          }
        />
        <Route
          path={PathNames[PathEnums.MAG_CLASS_SCHEDULE]}
          element={
            <Suspense>
              <MagClassSchedule />
            </Suspense>
          }
        />
        <Route
          path={PathNames[PathEnums.MAG_CLASS_SCHEDULE_DETAIL]}
          element={
            <Suspense>
              <MagClassScheduleDetail />
            </Suspense>
          }
        />
        <Route
          path={PathNames[PathEnums.LEARNING]}
          element={
            <Suspense>
              <Learning />
            </Suspense>
          }
        />
        <Route
          path={PathNames[PathEnums.LEARNING_MAG]}
          element={
            <Suspense>
              <LearningMag />
            </Suspense>
          }
        />
        <Route
          path={PathNames[PathEnums.ATTENDANCE]}
          element={
            <Suspense>
              <Attendance />
            </Suspense>
          }
        />
        <Route
          path={PathNames[PathEnums.CATALOGUE_SCIENCES]}
          element={
            <Suspense>
              <CatalogSciences />
            </Suspense>
          }
        />
        <Route
          path={PathNames[PathEnums.SAME_SCHOLARSHIPS]}
          element={
            <Suspense>
              <SameScholarships />
            </Suspense>
          }
        />
        <Route
          path={PathNames[PathEnums.PROTECTION_MASTER_DESSERT]}
          element={
            <Suspense>
              <ProtectionMasterDesert />
            </Suspense>
          }
        />
        <Route
          path={PathNames[PathEnums.MASTERS_THESIS_TOPICS]}
          element={
            <Suspense>
              <MastersThesisTopics />
            </Suspense>
          }
        />
        <Route
          path={PathNames[PathEnums.SCHEDULE_SEC_MASTERS]}
          element={
            <Suspense>
              <ScheduleSecMaster />
            </Suspense>
          }
        />
        <Route
          path={PathNames[PathEnums.INSTRUCTION_CLINIC]}
          element={
            <Suspense>
              <InstructionClinic />
            </Suspense>
          }
        />
        <Route
          path={PathNames[PathEnums.ATTENDANCE_CLINIC]}
          element={
            <Suspense>
              <AttendanceClinic />
            </Suspense>
          }
        />
        <Route
          path={PathNames[PathEnums.STATE_EXAMS]}
          element={
            <Suspense>
              <StateExams />
            </Suspense>
          }
        />
        <Route
          path={PathNames[PathEnums.CLASS_SCHEDULE_INTER]}
          element={
            <Suspense>
              <ClassScheduleInter />
            </Suspense>
          }
        />
        <Route
          path={PathNames[PathEnums.CLASS_SCHEDULE_INTER_DETAIL]}
          element={
            <Suspense>
              <ClassScheduleInterDetail />
            </Suspense>
          }
        />
        <Route
          path={PathNames[PathEnums.FOREIGN_STUDENTS_STUDYING]}
          element={
            <Suspense>
              <ForeignStudentsStudying />
            </Suspense>
          }
        />
        <Route
          path={PathNames[PathEnums.AMOUNT_PAYMENT_INTERNATIONAL_STUDENTS]}
          element={
            <Suspense>
              <AmountPaymentInternationalStudent />
            </Suspense>
          }
        />
        <Route
          path={PathNames[PathEnums.INFORMATION_RESIDENCE_FOREIGN_STUDENTS]}
          element={
            <Suspense>
              <InfoResidenceForeignStudent />
            </Suspense>
          }
        />
        <Route
          path={PathNames[PathEnums.ADMISSIONS_COMMITTEE_NEWS]}
          element={
            <Suspense>
              <AdmissionCommitteeNews />
            </Suspense>
          }
        />
        <Route
          path={PathNames[PathEnums.MEMO]}
          element={
            <Suspense>
              <Memo />
            </Suspense>
          }
        />
        <Route
          path={PathNames[PathEnums.ADMISSION_PROCEDURE]}
          element={
            <Suspense>
              <AdmissionProcedure />
            </Suspense>
          }
        />
        <Route
          path={PathNames[PathEnums.TARGET_RECEPTION]}
          element={
            <Suspense>
              <TargetReception />
            </Suspense>
          }
        />
        <Route
          path={PathNames[PathEnums.BACHELOR_REQUIRED_DOCUMENTS]}
          element={
            <Suspense>
              <BachelorRequiredDocuments />
            </Suspense>
          }
        />
        <Route
          path={PathNames[PathEnums.MONITORING_RECEPTION]}
          element={
            <Suspense>
              <MonitoringReception />
            </Suspense>
          }
        />
        <Route
          path={PathNames[PathEnums.PLACE_ADMISSION_OFFICE]}
          element={
            <Suspense>
              <PlaceAdmissionOffice />
            </Suspense>
          }
        />
        <Route
          path={PathNames[PathEnums.CHECKLIST_LIST]}
          element={
            <Suspense>
              <ChecklistList />
            </Suspense>
          }
        />
        <Route
          path={PathNames[PathEnums.MEMO_MAG]}
          element={
            <Suspense>
              <MemoMag />
            </Suspense>
          }
        />
        <Route
          path={PathNames[PathEnums.ADMISSION_PROCEDURE_MAG]}
          element={
            <Suspense>
              <AdmissionProcedureMag />
            </Suspense>
          }
        />
        <Route
          path={PathNames[PathEnums.MASTER_RECEPTION_QUOTA]}
          element={
            <Suspense>
              <MasterReceptionQuota />
            </Suspense>
          }
        />
        <Route
          path={PathNames[PathEnums.PACKAGE_ACCEPTED_DOCUMENTS]}
          element={
            <Suspense>
              <PackageAcceptedDocuments />
            </Suspense>
          }
        />
        <Route
          path={PathNames[PathEnums.RECTORS_APPEAL]}
          element={
            <Suspense>
              <RectorsAppeal />
            </Suspense>
          }
        />
        <Route
          path={PathNames[PathEnums.ADMISSION_PROCEDURE_INT]}
          element={
            <Suspense>
              <AdmissionProcudereInt />
            </Suspense>
          }
        />
        <Route
          path={PathNames[PathEnums.MEMO_CLINIC]}
          element={
            <Suspense>
              <MemoClinic />
            </Suspense>
          }
        />

        <Route
          path={PathNames[PathEnums.CLINIC_RECEPTION_QUOTA]}
          element={
            <Suspense>
              <ClinicReceptionQuota />
            </Suspense>
          }
        />
        <Route
          path={PathNames[PathEnums.CLINIC_REQUIRED_DOCUMENTS]}
          element={
            <Suspense>
              <ClinicRequiredDocuments />
            </Suspense>
          }
        />

        <Route
          path={PathNames[PathEnums.ADMISSIONS_JT_NEWS]}
          element={
            <Suspense>
              <AdmissionsJtNews />
            </Suspense>
          }
        />
        <Route
          path={PathNames[PathEnums.MEMO_JT_TRAINING]}
          element={
            <Suspense>
              <MemoJtTraining />
            </Suspense>
          }
        />
        <Route
          path={PathNames[PathEnums.JTRAINING_RECEPTION_QUOTA]}
          element={
            <Suspense>
              <JtrainingReceptionQuota />
            </Suspense>
          }
        />
        <Route
          path={PathNames[PathEnums.PACKAGE_ACCEPTED_DOCUMENTS_JT]}
          element={
            <Suspense>
              <PackageAcceptedDocumentsJt />
            </Suspense>
          }
        />
        <Route
          path={PathNames[PathEnums.FAQ]}
          element={
            <Suspense>
              <Faq />
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
    </Routes>
  );
}

export default PathRoutes;
