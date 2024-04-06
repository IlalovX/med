export enum AdminPathEnums {
  ADMIN = "/admin/*",
  ADMIN_EDIT = "edit",
  ADMIN_USERS = "users",
  ADMIN_USERS_DETAIL = "users/:id",
  ADMIN_USERS_ADD = "users/add",
  ADMIN_USERS_EDIT = "users/edit/:id",
  ADMIN_NEWS = "news",
  ADMIN_NEWS_ADD = "news/add",
  ADMIN_NEWS_DETAIL = "news/:id",
  ADMIN_NEWS_EDIT = "news/edit/:id",
  ADMIN_ADVERTS = "adverts",
  ADMIN_ADVERTS_ADD = "adverts/add",
  ADMIN_ADVERTS_DETAIL = "adverts/:id",
  ADMIN_ADVERTS_EDIT = "adverts/edit/:id",
  ADMIN_PHOTO_GALLERY = "photo_gallery",
  ADMIN_ABOUT_INSTITUTE = "about_institute",
  ADMIN_INFORMATION_INSTITUTE = "about_institute/information",
  ADMIN_STRUCTURE_INSTITUTE = "about_institute/structure_university",
  ADMIN_STATUTE_INSTITUTE = "about_institute/institute_statute",
  ADMIN_CERTIFICATES_INSTITUTE = "about_institute/institute_certificates",
  ADMIN_REGULATIONS_INSTITUTE = "about_institute/internal_regulations",
  ADMIN_EDUCATIONAL_INSTITUTE = "about_institute/educational_buildings",
  ADMIN_LABORATORY_INSTITUTE = "about_institute/laboratory_room",
  ADMIN_STUDENTS_INSTITUTE = "about_institute/life_students",
  ADMIN_ADVICE_INSTITUTE = "advice_institute/:type?",
  ADMIN_DOCUMENTS = "documents/:type?",
  ADMIN_SCIENTIFIC = "scientific/:type?",
  ADMIN_FACULTIES = "faculties",
  ADMIN_FACULTY = "faculties/about_medical_faculty/:id",
  ADMIN_SCIENTIFIC_FACULTY = "faculties/student_scientific_society_medical_faculty/:id",
  ADMIN_QUALIFICATION_MEDICAL_FACULTY = "faculties/qualification_medical_faculty/:id",
  ADMIN_HISTORY_MEDICAL_FACULTY = "faculties/history_medical_faculty/:id",
  ADMIN_STRUCTURE_MEDICAL_FACULTY = "faculties/structure_medical_faculty/:id",
  ADMIN_COUNCIL_MEDICAL_FACULTY = "faculties/council_medical_faculty/:id",
  ADMIN_METHODOLOGICAL_MEDICAL_FACULTY = "faculties/methodological_medical_faculty/:id",
  ADMIN_RESEARCH_WORK_MEDICAL_FACULTY = "faculties/research_work_medical_faculty/:id",
  ADMIN_DEPARTMENTS = "departments",
  ADMIN_DEPARTMENT_FACULTY = "departments/departments_medical_faculty/:id",
  ADMIN_ABOUT_DEPARTMENT = "about_department_medical_faculty/:department",
  ADMIN_HISTORY_DEPARTMENT = "history_department_medical_faculty/:department",
  ADMIN_STRUCTURE_DEPARTMENT = "structure_department_medical_faculty/:department",
  ADMIN_SPIRITUAL_DEPARTMENT = "spiritual_and_enlightening_department_medical_faculty/:department",
  ADMIN_METHODOLOGICAL_DEPARTMENT = "methodological_department_medical_faculty/:department",
  ADMIN_RESEARCH_DEPARTMENT = "research_work_department_medical_faculty/:department",
  ADMIN_SCIENTIFIC_DEPARTMENT = "student_scientific_society_department_medical_faculty/:department",
  ADMIN_INTERNATIONAL_DEPARTMENT = "international_partnership_department_medical_faculty/:department",
  ADMIN_SETTINGS = "settings",
}
