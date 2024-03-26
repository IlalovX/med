export const getRouteMain = () => {
  return "/";
};
export const getRouteAuth = (type: string) => {
  if (type) {
    return `/auth/${type}`;
  }
  return "/auth/:type";
};

export const getRouteAdmin = () => {
  return "/admin";
};

export const getRouteAdminUsers = () => {
  return "/admin/users";
};

export const getRouteAdminUserDetails = (id: string) => {
  if (id) {
    return `/admin/users/${id}`;
  }
  return "/admin/users/:id";
};

export const getRouteAdminAddUser = () => {
  return "/admin/users/add";
};

export const getRouteAdminNews = () => {
  return "/admin/news";
};

export const getRouteAdminNewDetails = (id?: string) => {
  if (id) {
    return `/admin/news/${id}`;
  }
  return "/admin/news/:id";
};

export const getRouteAdminAddNews = () => {
  return "/admin/news/add";
};

export const getRouteAdminAdverts = () => {
  return "/admin/adverts";
};

export const getRouteAdminAddAdverts = () => {
  return "/admin/adverts/add";
};

export const getRouteAdminAdvertsDetails = (
  facultyId: string,
  type: string
) => {
  if (facultyId && type) {
    return `/admin/adverts/${facultyId}/${type}`;
  } else if (facultyId) {
    return `/admin/adverts/${facultyId}`;
  }
  return "/admin/adverts/:facultyId/:type?";
};
export const getRouteAdminSettings = () => {
  return "/admin/settings";
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
export const getRouteLaws = () => {
  return "/laws";
};

export const getRouteGovermentDecisionsPrograms = () => {
  return "/government_decisions_programs";
};

export const getRouteGovermentPrograms = () => {
  return "/government_programs";
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
