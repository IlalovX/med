export const getRouteAdmin = () => {
  return "/admin/*";
};

export const getRouteAdminEdit = () => {
  return "edit";
};
export const getRouteAdminUsers = () => {
  return "users";
};

export const getRouteAdminUserDetails = (id: string) => {
  if (id) {
    return `users/${id}`;
  }
  return "users/:id";
};

export const getRouteAdminAddUser = () => {
  return "users/add";
};
export const getRouteAdminEditUser = (id: string) => {
  if (id) {
    return `users/edit/${id}`;
  }
  return "users/edit/:id";
};

export const getRouteAdminNews = () => {
  return "news";
};

export const getRouteAdminNewDetails = (id?: string) => {
  if (id) {
    return `news/${id}`;
  }
  return "news/:id";
};

export const getRouteAdminEditNew = (id: string) => {
  if (id) {
    return `news/edit/${id}`;
  }
  return "news/edit/:id";
};
export const getRouteAdminAddNews = () => {
  return "news/add";
};

export const getRouteAdminAdverts = () => {
  return "adverts";
};

export const getRouteAdminAddAdverts = () => {
  return "adverts/add";
};

export const getRouteAdminAdvertsDetails = (id: string) => {
  if (id) {
    return `adverts/${id}`;
  }
  return "adverts/:id";
};
export const getRouteAdminAdvertsEdit = (id: string) => {
  if (id) {
    return `adverts/edit/${id}`;
  }
  return "adverts/edit/:id";
};

export const getRouteAdminPhotoGallery = () => {
  return "photo_gallery";
};

export const getRouteAdminAboutInstitute = () => {
  return "about_institute";
};

export const getRouteAdminInfoInstitute = () => {
  return "about_institute/information";
};

export const getRouteAdminStructureInstitute = () => {
  return "about_institute/structure_university";
};

export const getRouteAdminStatuteInstitute = () => {
  return "about_institute/institute_statute";
};

export const getRouteAdminCertificateInstitute = () => {
  return "about_institute/institute_certificates";
};

export const getRouteAdminRegulationsInstitute = () => {
  return "about_institute/internal_regulations";
};

export const getRouteAdminEducationalInstitute = () => {
  return "about_institute/educational_buildings";
};

export const getRouteAdminLaboratoryInstitute = () => {
  return "about_institute/laboratory_room";
};

export const getRouteAdminStudentsInstitute = () => {
  return "about_institute/life_students";
};

export const getRouteAdminAdviceInstitute = (type: string) => {
  if (type) {
    return `advice_institute/${type}`;
  }
  return "advice_institute/:type?";
};

export const getRouteAdminDocuments = (type: string) => {
  if (type) {
    return `documents/${type}`;
  }
  return "documents/:type?";
};
export const getRouteAdminScientific = (type: string) => {
  if (type) {
    return `scientific/${type}`;
  }
  return "scientific/:type?";
};
export const getRouteFaculties = () => {
  return "faculties";
};
export const getRouteAdminFaculty = (id: string) => {
  if (id) {
    return `faculties/about_medical_faculty/${id}`;
  }
  return "faculties/about_medical_faculty/:id";
};
export const getRouteAdminScientificFaculty = (id: string) => {
  if (id) {
    return `faculties/student_scientific_society_medical_faculty/${id}`;
  }
  return "faculties/student_scientific_society_medical_faculty/:id";
};
export const getRouteAdminQualificationFaculty = (id: string) => {
  if (id) {
    return `faculties/qualification_medical_faculty/${id}`;
  }
  return "faculties/qualification_medical_faculty/:id";
};
export const getRouteAdminHistoryFaculty = (id: string) => {
  if (id) {
    return `faculties/history_medical_faculty/${id}`;
  }
  return "faculties/history_medical_faculty/:id";
};

export const getRouteAdminStructureFaculty = (id: string) => {
  if (id) {
    return `faculties/structure_medical_faculty/${id}`;
  }
  return "faculties/structure_medical_faculty/:id";
};

export const getRouteAdminCouncilFaculty = (id: string) => {
  if (id) {
    return `faculties/council_medical_faculty/${id}`;
  }
  return "faculties/council_medical_faculty/:id";
};

export const getRouteAdminMethodologicalFaculty = (id: string) => {
  if (id) {
    return `faculties/methodological_medical_faculty/${id}`;
  }
  return "faculties/methodological_medical_faculty/:id";
};

export const getRouteAdminResearchFaculty = (id: string) => {
  if (id) {
    return `faculties/research_work_medical_faculty/${id}`;
  }
  return "faculties/research_work_medical_faculty/:id";
};

export const getRouteAdminDepartments = () => {
  return "departments";
};
export const getRouteAdminDepartmentFaculty = (id: string) => {
  if (id) {
    return `departments/departments_medical_faculty/${id}`;
  }
  return "departments/departments_medical_faculty/:id/:type?";
};
export const getRouteAdminAboutDepartment = (department: string) => {
  if (department) {
    return `about_department_medical_faculty/${department}`;
  }
  return "about_department_medical_faculty/:department";
};
export const getRouteAdminHistoryDepartment = (department: string) => {
  if (department) {
    return `history_department_medical_faculty/${department}`;
  }
  return "history_department_medical_faculty/:department";
};

export const getRouteAdminStructureDepartment = (department: string) => {
  if (department) {
    return `structure_department_medical_faculty/${department}`;
  }
  return "structure_department_medical_faculty/:department";
};

export const getRouteAdminSpiritualDepartment = (department: string) => {
  if (department) {
    return `spiritual_and_enlightening_department_medical_faculty/${department}`;
  }
  return "spiritual_and_enlightening_department_medical_faculty/:department";
};

export const getRouteAdminMethodologicalDepartment = (department: string) => {
  if (department) {
    return `methodological_department_medical_faculty/${department}`;
  }
  return "methodological_department_medical_faculty/:department";
};

export const getRouteAdminResearchDepartment = (department: string) => {
  if (department) {
    return `research_work_department_medical_faculty/${department}`;
  }
  return "research_work_department_medical_faculty/:department";
};

export const getRouteAdminScientificDepartment = (department: string) => {
  if (department) {
    return `student_scientific_society_department_medical_faculty/${department}`;
  }
  return "student_scientific_society_department_medical_faculty/:department";
};

export const getRouteAdminInternationalDepartment = (department: string) => {
  if (department) {
    return `international_partnership_department_medical_faculty/${department}`;
  }
  return "international_partnership_department_medical_faculty/:department";
};
export const getRouteAdminSettings = () => {
  return "settings";
};
