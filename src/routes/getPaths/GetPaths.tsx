export const getRouteMain = () => {
  return "/";
};
export const getRouteAuth = (type: string) => {
  if (type) {
    return `/auth/${type}`;
  }
  return "/auth/:type";
};

export const getRouteSymbols = (pages: string, symbol: string) => {
  if (pages && symbol) {
    return `/symbols/${pages}/${symbol}`;
  }
  return "/symbols/:pages/:symbol";
};

export const getRouteSitemap = () => {
  return "/sitemap";
};
export const getRouteContacts = () => {
  return "/contacts";
};

export const getRouteInformation = () => {
  return "/information";
};

export const getRouteStructureUniversity = () => {
  return "/structure_university";
};

export const getRouteInstituteStatute = () => {
  return "/institute_statute";
};

export const getRouteInstituteCertificates = () => {
  return "/institute_certificates";
};

export const getRouteInternalRegulations = () => {
  return "/internal_regulations";
};

export const getRouteEducationalBuildings = () => {
  return "/educational_buildings";
};
export const getRouteLaboratoryRoom = () => {
  return "/laboratory_room";
};

export const getRouteLifeStudents = () => {
  return "/life_students";
};

export const getRouteAcademicCouncilStatue = () => {
  return "/academic_council_statue";
};

export const getRouteAcademicCouncilMembers = () => {
  return "/academic_council_members";
};

export const getRouteAcademicCouncilAgenda = () => {
  return "/academic_council_agenda";
};

export const getRouteAcademicCouncilHandouts = () => {
  return "/academic_council_handouts";
};

export const getRouteAcademicCouncilResolutions = () => {
  return "/academic_council_resolutions";
};

export const getRouteAboutDocuments = () => {
  return "/about_documents";
};

export const getRouteMinistryDocuments = () => {
  return "/ministry_documents";
};

export const getRouteStatePrograms = () => {
  return "/state_programs";
};

export const getRouteManagement = () => {
  return "/management";
};

export const getRouteManagementDetail = (id: string) => {
  if (id) {
    return `/management/${id}`;
  }
  return "/management/:id";
};

export const getRouteAboutMedicalFaculty = (id: string) => {
  if (id) {
    return `/about_medical_faculty/${id}`;
  }
  return "/about_medical_faculty/:id";
};

export const getRouteQualificationMedicalFaculty = (id: string) => {
  if (id) {
    return `/qualification_medical_faculty/${id}`;
  }
  return "/qualification_medical_faculty/:id";
};

export const getRouteHistoryMedicalFaculty = (id: string) => {
  if (id) {
    return `/history_medical_faculty/${id}`;
  }
  return "/history_medical_faculty/:id";
};

export const getRouteStructureMedicalFaculty = (id: string) => {
  if (id) {
    return `/structure_medical_faculty/${id}`;
  }
  return "/structure_medical_faculty/:id";
};

export const getRouteCouncilMedicalFaculty = (id: string) => {
  if (id) {
    return `/council_medical_faculty/${id}`;
  }
  return "/council_medical_faculty/:id";
};

export const getRouteDepartmentsMedicalFaculty = (id: string) => {
  if (id) {
    return `/departments_medical_faculty/${id}`;
  }
  return "/departments_medical_faculty/:id";
};
export const getRouteMethodologicalMedicalFaculty = (id: string) => {
  if (id) {
    return `/methodological_medical_faculty/${id}`;
  }
  return "/methodological_medical_faculty/:id";
};
export const getRouteStudentScientificSocietyMedicalFaculty = (id: string) => {
  if (id) {
    return `/student_scientific_society_medical_faculty/${id}`;
  }
  return "/student_scientific_society_medical_faculty/:id";
};
export const getRouteResearchWorkMedicalFaculty = (id: string) => {
  if (id) {
    return `/research_work_medical_faculty/${id}`;
  }
  return "/research_work_medical_faculty/:id";
};

export const getRouteAboutDepartmentMedicalFaculty = (faculty: string) => {
  if (faculty) {
    return `/about_department_medical_faculty/${faculty}`;
  }
  return "/about_department_medical_faculty/:faculty";
};

export const getRouteHistoryDepartmentMedicalFaculty = (faculty: string) => {
  if (faculty) {
    return `/history_department_medical_faculty/${faculty}`;
  }
  return "/history_department_medical_faculty/:faculty";
};

export const getRouteStructureDepartmentMedicalFaculty = (faculty: string) => {
  if (faculty) {
    return `/structure_department_medical_faculty/${faculty}`;
  }
  return "/structure_department_medical_faculty/:faculty";
};

export const getRouteSpiritualDepartment = (faculty: string) => {
  if (faculty) {
    return `/spiritual_and_enlightening_department_medical_faculty/${faculty}`;
  }
  return "/spiritual_and_enlightening_department_medical_faculty/:faculty";
};

export const getRouteMethodologicalDepartmentMedicalFaculty = (
  faculty: string
) => {
  if (faculty) {
    return `/methodological_department_medical_faculty/${faculty}`;
  }
  return "/methodological_department_medical_faculty/:faculty";
};

export const getRouteResearchWorkDepartmentMedicalFaculty = (
  faculty: string
) => {
  if (faculty) {
    return `/research_work_department_medical_faculty/${faculty}`;
  }
  return "/research_work_department_medical_faculty/:faculty";
};

export const getRouteStudentScientificSocietyDepartmentMedicalFaculty = (
  faculty: string
) => {
  if (faculty) {
    return `/student_scientific_society_department_medical_faculty/${faculty}`;
  }
  return "/student_scientific_society_department_medical_faculty/:faculty";
};

export const getRouteInternationalPartnershipDepartmentMedicalFaculty = (
  faculty: string
) => {
  if (faculty) {
    return `/international_partnership_department_medical_faculty/${faculty}`;
  }
  return "/international_partnership_department_medical_faculty/:faculty";
};

export const getRouteEducationEqualityDepartment = () => {
  return "/education_quality_department";
};
export const getRouteEducationDepartment = () => {
  return "/education_department";
};
export const getRouteMastersDepartment = () => {
  return "/master_department";
};
export const getRouteClinicalResidencyDepartment = () => {
  return "/clinical_residency_department";
};
export const getRouteInternationalRelationsDepartment = () => {
  return "/international_relations_department";
};
export const getRouteScientificResearchDepartment = () => {
  return "/scientific_research_department";
};
export const getRouteGiftedStudents = () => {
  return "/gifted_students";
};
export const getRouteTalentedStudents = () => {
  return "/talented_students";
};
export const getRouteAccounting = () => {
  return "/accounting";
};
export const getRouteMarketing = () => {
  return "/marketing";
};
export const getRoutePlanningFinanceDepartment = () => {
  return "/planning_finance_department";
};
export const getRouteInformationTechnologiesCenter = () => {
  return "/information_technologies_center";
};
export const getRouteInformationResourceCenter = () => {
  return "/information_resource_center";
};
export const getRouteYouthUnionCenter = () => {
  return "/youth_union_center";
};
export const getRouteWomenCommitteeDepartment = () => {
  return "/women_committee_department";
};
export const getRouteCommunicationDevelopmentCenter = () => {
  return "/communication_development_center";
};
export const getRouteSpiritualityEnlightenmentDepartment = () => {
  return "/spirituality_enlightenment_department";
};
export const getRoutePressSecretary = () => {
  return "/press_secretary";
};
export const getRouteHumanResourceDepartment = () => {
  return "/human_resource_department";
};
export const getRouteChancelleryDepartment = () => {
  return "/chancellery_department";
};
export const getRouteComplianceControl = () => {
  return "/compliance_control";
};
export const getRouteArchiveDepartment = () => {
  return "/archive_department";
};
export const getRouteLegalServicesDepartment = () => {
  return "/legal_services_department";
};
export const getRoutePsychologist = () => {
  return "/psychologist";
};
export const getRouteUnionCommittee = () => {
  return "/union_committee";
};
export const getRouteSimulationCenter = () => {
  return "/simulation_center";
};
export const getRouteHistorySimulationCenter = () => {
  return "/history_simulation_center";
};
export const getRouteDirectorSimulationCenter = () => {
  return "/director_simulation_center";
};

export const getRouteRegionalOffices = () => {
  return "/regional_offices";
};
export const getRouteExampleContracts = () => {
  return "/example_contracts";
};
export const getRouteGraduates = () => {
  return "/graduates";
};
export const getRouteCareerCenterFaq = () => {
  return "/career_center_faq";
};
export const getRouteInstruction = () => {
  return "/instruction";
};
export const getRouteScheduleSecBachelor = () => {
  return "/schedule_sec_bachelor";
};
export const getRouteClassSchedule = () => {
  return "/class_schedule";
};
export const getRouteClassScheduleDetail = (faculty: string, id: string) => {
  if (faculty && id) {
    return `/class_schedule/${faculty}/${id}`;
  }
  return "/class_schedule/:faculty/:id";
};
export const getRouteMagClassSchedule = () => {
  return "/mag_class_schedule";
};
export const getRouteMagClassScheduleDetail = (faculty: string, id: string) => {
  if (faculty && id) {
    return `/mag_class_schedule/${faculty}/${id}`;
  }
  return "/mag_class_schedule/:faculty/:id";
};
export const getRouteLearning = () => {
  return "/learning";
};
export const getRouteAttendance = () => {
  return "/attendance";
};
export const getRouteCatalogueSciences = () => {
  return "/catalog_sciences";
};
export const getRouteSameScholarships = () => {
  return "/same_scholarships";
};
export const getRouteLearningMag = () => {
  return "/learning_mag";
};
export const getRouteProtectionMasterDessert = () => {
  return "/protection_master_dessert";
};
export const getRouteMastersThesisTopics = () => {
  return "/masters_thesis_topics";
};
export const getRouteScheduleSecMasters = () => {
  return "/schedule_sec_masters";
};
export const getRouteInstructionClinic = () => {
  return "/instruction_clinic";
};
export const getRouteAttendanceClinic = () => {
  return "/attendance_clinic";
};
export const getRouteStateExams = () => {
  return "/state_exams";
};
export const getRouteClassScheduleInter = () => {
  return "/class_schedule_inter";
};
export const getRouteClassScheduleInterDetail = (
  faculty: string,
  id: string
) => {
  if (faculty && id) {
    return `/class_schedule_inter/${faculty}/${id}`;
  }
  return "/class_schedule_inter/:faculty/:id";
};
export const getRouteForeignStudentsStudying = () => {
  return "/foreign_students_studying";
};
export const getRouteAmountPaymentInternationalStudents = () => {
  return "/amount_payment_international_students";
};
export const getRouteInformationResidenceForeignStudents = () => {
  return "/information_residence_foreign_students";
};
export const getRouteAdmissionsCommitteeNews = () => {
  return "/admissions_committee_news";
};
export const getRouteMemo = () => {
  return "/memo";
};
export const getRouteAdmissionProcedure = () => {
  return "/admission_procedure";
};
export const getRouteTargetReception = () => {
  return "/target_reception";
};
export const getRouteBachelorRequiredDocuments = () => {
  return "/bachelor_required_documents";
};
export const getRouteMonitoringReception = () => {
  return "/monitoring_reception";
};
export const getRoutePlaceAdmissionOffice = () => {
  return "/place_admission_office";
};
export const getRouteChecklistList = () => {
  return "/checklist_list";
};
export const getRouteMemoMag = () => {
  return "/memo_mag";
};
export const getRouteAdmissionProcedureMag = () => {
  return "/admission_procedure_mag";
};
export const getRouteMasterReceptionQuota = () => {
  return "/master_reception_quota";
};
export const getRoutePackageAcceptedDocuments = () => {
  return "/package_accepted_documents";
};
export const getRouteRectorsAppeal = () => {
  return "/rectors_appeal";
};
export const getRouteAdmissionProcedureInt = () => {
  return "/admission_procedure_int";
};
export const getRouteFaq = () => {
  return "/faq";
};
export const getRouteMemoClinic = () => {
  return "/memo_clinic";
};

export const getRouteClinicReceptionQuota = () => {
  return "/clinic_reception_quota";
};
export const getRouteClinicRequiredDocuments = () => {
  return "/clinic_required_documents";
};

export const getRouteAdmissionsJtNews = () => {
  return "/admissions_jt_news";
};
export const getRouteMemoJtTraining = () => {
  return "/memo_jt_training";
};
export const getRouteJtrainingReceptionQuota = () => {
  return "/jtraining_reception_quota";
};
export const getRoutePackageAcceptedDocumentsJt = () => {
  return "/package_accepted_documents_jt";
};
export const getRouteNews = () => {
  return "/news";
};
export const getRouteNewDetail = (id: string) => {
  if (id) {
    return `/news/${id}`;
  }
  return "/news/:id";
};
export const getRouteAdverts = () => {
  return "/adverts";
};
export const getRouteAdvertsDetail = (id: string) => {
  if (id) {
    return `/adverts/${id}`;
  }
  return "/adverts/:id";
};
export const getRoutePhotoGallery = () => {
  return "/photo_gallery";
};
export const getRouteInternationalPartners = () => {
  return "/international_partners";
};
export const getRouteRepublicanPartners = () => {
  return "/republican_partners";
};
export const getRouteTreaty = () => {
  return "/treaty";
};
export const getRouteJoint = () => {
  return "/joint";
};
