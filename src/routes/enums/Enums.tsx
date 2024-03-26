export enum PathEnums {
  MAIN = "/",
  AUTH = "/auth/:type",
  ADMIN = "/admin/*",
  ADMIN_USERS = "/users",
  ADMIN_ADD_USER = "/users/add",
  ADMIN_DETAILS_USER = "/users/:id",
  ADMIN_NEWS = "/news/",
  ADMIN_ADD_NEWS = "/news/add",
  ADMIN_DETAILS_NEWS = "/news/:id",
  ADMIN_ADVERTS = "/adverts/",
  ADMIN_ADD_ADVERTS = "/adverts/add",
  ADMIN_DETAILS_ADVERTS = "/adverts/:facultyId/:type?",
  ADMIN_SETTINGS = "/settings",
  SYMBOLS = "/symbols/:pages/:symbol",
  SITEMAP = "/sitemap",
  INFORMATION = "/information",
  STRUCTURE_UNIVERSITY = "/structure_university",
  INSTITUTE_STATUTE = "/institute_statute",
  INSTITUTE_CERTIFICATES = "/institute_certificates",
  INTERNAL_REGULATIONS = "/internal_regulations",
  EDUCATIONAL_BUILDINGS = "/educational_buildings",
  LABORATORY_ROOM = "/laboratory_room",
  LIFE_STUDENTS = "/life_students",
  ACADEMIC_COUNCIL_STATUE = "/academic_council_statue",
  ACADEMIC_COUNCIL_MEMBERS = "/academic_council_members",
  ACADEMIC_COUNCIL_AGENDA = "/academic_council_agenda",
  ACADEMIC_COUNCIL_HANDOUTS = "/academic_council_handouts",
  ACADEMIC_COUNCIL_RESOLUTIONS = "/academic_council_resolutions",
  LAWS = "/laws",
  GOVERMENT_DESCIONS_PROGRAMS = "/government_decisions_programs",
  GOVERMENT_PROGRAMS = "/government_programs",
  MANAGEMENT = "/management",
  MANAGEMENT_DETAIL = "/management/:id",
  ABOUT_MEDICAL_FACULTY = "/about_medical_faculty/:id",
  QUALIFICATION_MEDICAL_FACULTY = "/qualification_medical_faculty/:id",
  HISTORY_MEDICAL_FACULTY = "/history_medical_faculty/:id",
  STRUCTURE_MEDICAL_FACULTY = "/structure_medical_faculty/:id",
  COUNCIL_MEDICAL_FACULTY = "/council_medical_faculty/:id",
  DEPARTMENTS_MEDICAL_FACULTY = "/departments_medical_faculty/:id",
  METHODOLOGICAL_MEDICAL_FACULTY = "/methodological_medical_faculty/:id",
  RESEARCH_WORK_MEDICAL_FACULTY = "/research_work_medical_faculty/:id",
  STUDENT_SCIENTIFIC_SOCIETY_MEDICAL_FACULTY = "/student_scientific_society_medical_faculty/:id",
  ABOUT_DEPARTMENT_MEDICAL_FACULTY = "/about_department_medical_faculty/:faculty",
  HISTORY_DEPARTMENT_MEDICAL_FACULTY = "/history_department_medical_faculty/:faculty",
  STRUCTURE_DEPARTMENT_MEDICAL_FACULTY = "/structure_department_medical_faculty/:faculty",
  SPIRITUAL_DEPARTMENT_MEDICAL_FACULTY = "/spiritual_and_enlightening_department_medical_faculty/:faculty",
  METHODOLOGICAL_DEPARTMENT_MEDICAL_FACULTY = "/methodological_department_medical_faculty/:faculty",
  RESEARCH_WORK_DEPARTMENT_MEDICAL_FACULTY = "/research_work_department_medical_faculty/:faculty",
  STUDENT_SCIENTIFIC_SOCIETY_DEPARTMENT_MEDICAL_FACULTY = "/student_scientific_society_department_medical_faculty/:faculty",
  INTERNATIONAL_PARTNERSHIP_DEPARTMENT_MEDICAL_FACULTY = "/international_partnership_department_medical_faculty/:faculty",
}
