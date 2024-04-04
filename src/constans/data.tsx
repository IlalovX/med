import { NavLink } from "react-router-dom";
import QarFlag from "../assets/svgs/flags/Karakalpakstan-flagpalette.svg?react";
import UzFlag from "../assets/svgs/flags/Uzbekistan-01-1.svg?react";
import UzGerb from "../assets/svgs/gerbs/UzGerb.svg?react";
import {
  HomeOutlined,
  UserOutlined,
  SettingOutlined,
  ProfileOutlined,
  ReconciliationOutlined,
} from "@ant-design/icons";

export const LANGUAGES = [
  {
    title: "russia",
    abbr: "ru",
  },
  {
    title: "english",
    abbr: "en",
  },
  {
    title: "karakalpak",
    abbr: "kaa",
  },
  {
    title: "uzbek",
    abbr: "uz",
  },
];
export const TabsLanguage = [
  "Русский",
  "Каракалпаксикий",
  "Английский",
  "Узбекский",
];

export const ABOUT_INSTITUTE = [
  {
    key: "1-1",
    label: <NavLink to="information">Общая информация</NavLink>,
  },
  {
    key: "1-2",
    label: <NavLink to="structure_university">Структура института</NavLink>,
  },
  {
    key: "1-3",
    label: <NavLink to="institute_statute">Устав института</NavLink>,
  },
  {
    key: "1-4",
    label: (
      <NavLink to="institute_certificates">Институтские сертификатты </NavLink>
    ),
  },
  {
    key: "1-5",
    label: (
      <NavLink to="internal_regulations">
        Правила внутреннего распорядка
      </NavLink>
    ),
  },
  {
    key: "1-6",
    label: <NavLink to="educational_buildings">Учебные здания</NavLink>,
  },
  {
    key: "1-7",
    label: <NavLink to="laboratory_room">Лабораторная комната</NavLink>,
  },
  {
    key: "1-8",
    label: <NavLink to="life_students">Студенческие общежития</NavLink>,
  },
];
export const ADVICE_INSTITUTE = [
  {
    key: "2-1",
    label: (
      <NavLink to="academic_council_statue">Положение об ученом совете</NavLink>
    ),
  },
  {
    key: "2-2",
    label: (
      <NavLink to="academic_council_members">Состав ученого совета</NavLink>
    ),
  },
  {
    key: "2-3",
    label: (
      <NavLink to="academic_council_agenda">
        Повестка для ученого совета
      </NavLink>
    ),
  },
  {
    key: "2-4",
    label: (
      <NavLink to="academic_council_handouts">
        Раздаточные материалы ученого совета
      </NavLink>
    ),
  },
  {
    key: "2-5",
    label: (
      <NavLink to="academic_council_resolutions">
        Постановление ученого совета
      </NavLink>
    ),
  },
];
export const DOCUMENTS = [
  {
    key: "3-1",
    label: <NavLink to="about_documents">Об образовании</NavLink>,
  },
  {
    key: "3-2",
    label: (
      <NavLink
        to="https://president.uz/oz/site/documents?menu_id=144"
        target="_blank"
      >
        Указы и Постановления Президента
      </NavLink>
    ),
  },
  {
    key: "3-3",
    label: (
      <NavLink to="ministry_documents">
        Приказы министерства и решения коллегии
      </NavLink>
    ),
  },
  {
    key: "3-4",
    label: <NavLink to="state_programs">Государственные программы</NavLink>,
  },
];
export const FACULTIES = [
  {
    key: "1-1",
    label: (
      <NavLink to="about_medical_faculty/1">1-медицинский факультет</NavLink>
    ),
  },
  {
    key: "1-2",
    label: (
      <NavLink to="about_medical_faculty/2">2-медицинский факультет</NavLink>
    ),
  },
  {
    key: "1-3",
    label: (
      <NavLink to="about_medical_faculty/3">3-медицинский факультет</NavLink>
    ),
  },
  {
    key: "1-4",
    label: (
      <NavLink to="student_scientific_society_medical_faculty/1">
        Центры и отделы
      </NavLink>
    ),
  },
];
export const DEPARTMENTS = [
  {
    key: "2-1",
    label: (
      <NavLink to="departments_medical_faculty/1">
        Кафедры лечебного факультета №1
      </NavLink>
    ),
  },
  {
    key: "2-2",
    label: (
      <NavLink to="departments_medical_faculty/2">
        Кафедры лечебного факультета №2
      </NavLink>
    ),
  },
  {
    key: "2-3",
    label: (
      <NavLink to="departments_medical_faculty/3">
        Кафедры лечебного факультета №3
      </NavLink>
    ),
  },
];
export const SCIENTIFIC = [
  {
    key: "3-1",
    label: (
      <NavLink to="education_quality_department">
        Отдел контроля качества образования
      </NavLink>
    ),
  },
  {
    key: "3-2",
    label: (
      <NavLink to="education_department">
        Учебно-методическое управление
      </NavLink>
    ),
  },
  {
    key: "3-3",
    label: <NavLink to="master_department">Отдел магистратуры</NavLink>,
  },
  {
    key: "3-4",
    label: (
      <NavLink to="clinical_residency_department">
        Клиническая ординатура
      </NavLink>
    ),
  },
  {
    key: "3-5",
    label: (
      <NavLink to="international_relations_department">
        Отдел международных связей
      </NavLink>
    ),
  },
  {
    key: "3-6",
    label: (
      <NavLink to="scientific_research_department">
        Отдел научных исследований
      </NavLink>
    ),
  },

  {
    key: "3-7",
    label: (
      <NavLink to="gifted_students">
        Отдел по работе с одаренными студентами
      </NavLink>
    ),
  },
  {
    key: "3-8",
    label: (
      <NavLink to="talented_students">Студенческое научное общество</NavLink>
    ),
  },
];
export const FINANCE = [
  {
    key: "4-1",
    label: <NavLink to="accounting">Бухгалтерия</NavLink>,
  },
  {
    key: "4-2",
    label: <NavLink to="marketing">Маркетинг</NavLink>,
  },
  {
    key: "4-3",
    label: (
      <NavLink to="planning_finance_department">
        Отдел планирования и финансов
      </NavLink>
    ),
  },
];
export const CENTERS_ORGANIZATIONS = [
  {
    key: "5-1",
    label: (
      <NavLink to="information_technologies_center">
        Центр цифровых образовательных технологий
      </NavLink>
    ),
  },
  {
    key: "5-2",
    label: (
      <NavLink to="information_resource_center">
        Центр информационных ресурсов
      </NavLink>
    ),
  },
  {
    key: "5-3",
    label: <NavLink to="youth_union_center">Союз молодежи</NavLink>,
  },
  {
    key: "5-4",
    label: <NavLink to="women_committee_department">Женский комитет</NavLink>,
  },
  {
    key: "5-5",
    label: (
      <NavLink to="communication_development_center">
        Центр развития коммуникативной компетенции
      </NavLink>
    ),
  },
];
export const OTHERS_DEPARTMENTS = [
  {
    key: "6-1",
    label: (
      <NavLink to="spirituality_enlightenment_department">
        Отдел по делам молодежи, духовности и просвещения
      </NavLink>
    ),
  },
  {
    key: "6-2",
    label: <NavLink to="press_secretary">Процесс-служба Института</NavLink>,
  },
  {
    key: "6-3",
    label: <NavLink to="human_resource_department">Отдел кадров</NavLink>,
  },
  {
    key: "6-4",
    label: (
      <NavLink to="chancellery_department">Заведующая канцелярией</NavLink>
    ),
  },
  {
    key: "6-5",
    label: <NavLink to="compliance_control">Комплаенс-контроль</NavLink>,
  },
  {
    key: "6-6",
    label: <NavLink to="archive_department">Архив института</NavLink>,
  },
  {
    key: "6-7",
    label: <NavLink to="legal_services_department">Юрист</NavLink>,
  },
  {
    key: "6-8",
    label: <NavLink to="psychologist">Психолог</NavLink>,
  },
  {
    key: "6-9",
    label: <NavLink to="union_committee">Профсоюзы</NavLink>,
  },
];
export const SIMULATIONS_CENTER = [
  {
    key: "7-1",
    label: <NavLink to="simulation_center">Деятельность центра </NavLink>,
  },
  {
    key: "7-2",
    label: <NavLink to="history_simulation_center">История центра</NavLink>,
  },
  {
    key: "7-3",
    label: <NavLink to="director_simulation_center">Сотрудники центра</NavLink>,
  },
  {
    key: "7-4",
    label: <NavLink to="place_admission_office">Контактная информация</NavLink>,
  },
];
export const CENTER_CAREERS = [
  {
    key: "8-1",
    label: <NavLink to="regional_offices">Региональные управления</NavLink>,
  },
  {
    key: "8-2",
    label: <NavLink to="example_contracts">Пример контрактов</NavLink>,
  },
  {
    key: "8-3",
    label: <NavLink to="graduates">Выпускники</NavLink>,
  },
  {
    key: "5-4",
    label: <NavLink to="career_center_faq">Часто задаваемые вопросы</NavLink>,
  },
];
export const STUDENTS_BACHELOR = [
  {
    key: "1-1",
    label: <NavLink to="instruction">Для студентов</NavLink>,
  },
  {
    key: "1-2",
    label: <NavLink to="schedule_sec_bachelor">График проведения ГЭК</NavLink>,
  },
  {
    key: "1-3",
    label: <NavLink to="class_schedule">Расписание занятий</NavLink>,
  },
  {
    key: "1-4",
    label: <NavLink to="learning">Успеваемость</NavLink>,
  },
  {
    key: "1-5",
    label: <NavLink to="attendance">Посещаемость</NavLink>,
  },
  {
    key: "1-6",
    label: <NavLink to="catalog_sciences">Каталог наук</NavLink>,
  },
  {
    key: "1-7",
    label: <NavLink to="same_scholarships">Стипендии</NavLink>,
  },
  {
    key: "1-8",
    label: <NavLink to="life_students">Общежитие</NavLink>,
  },
];
export const STUDENTS_MASTER = [
  {
    key: "2-1",
    label: <NavLink to="learning_mag">Успеваемость</NavLink>,
  },
  {
    key: "2-2",
    label: <NavLink to="mag_class_schedule">Расписания</NavLink>,
  },
  {
    key: "2-3",
    label: <NavLink to="same_scholarships">Стипендии</NavLink>,
  },
  {
    key: "2-4",
    label: (
      <NavLink to="protection_master_dessert">
        Защита магистерских диссертаций
      </NavLink>
    ),
  },
  {
    key: "2-5",
    label: (
      <NavLink to="masters_thesis_topics">
        Темы магистерской диссертации
      </NavLink>
    ),
  },
  {
    key: "2-6",
    label: <NavLink to="schedule_sec_masters">График проведения ГЭК</NavLink>,
  },
];
export const STUDENTS_RESIDENCY = [
  {
    key: "3-1",
    label: <NavLink to="instruction_clinic">Для студентов</NavLink>,
  },
  {
    key: "3-2",
    label: <NavLink to="attendance_clinic">Посещаемость</NavLink>,
  },
  {
    key: "3-3",
    label: <NavLink to="state_exams">Государственные экзамены</NavLink>,
  },
];
export const STUDENTS_INTER = [
  {
    key: "4-1",
    label: <NavLink to="class_schedule_inter">Расписание занятий</NavLink>,
  },
  {
    key: "4-2",
    label: (
      <NavLink to="foreign_students_studying">
        Иностранные студенты, обучающиеся в институте
      </NavLink>
    ),
  },
  {
    key: "4-3",
    label: (
      <NavLink to="amount_payment_international_students">
        Сумма оплаты для иностранных студентов
      </NavLink>
    ),
  },
  {
    key: "4-4",
    label: (
      <NavLink to="information_residence_foreign_students">
        Информация о проживании иностранных студентов
      </NavLink>
    ),
  },
];
export const APPLICANTS_BACHELOR = [
  {
    key: "1-1",
    label: (
      <NavLink to="admissions_committee_news">
        Новости приемной комиссии
      </NavLink>
    ),
  },
  {
    key: "1-2",
    label: <NavLink to="memo">Памятка абитуриента</NavLink>,
  },
  {
    key: "1-3",
    label: <NavLink to="admission_procedure">Процедура приема</NavLink>,
  },
  {
    key: "1-4",
    label: <NavLink to="target_reception">Квоты приема</NavLink>,
  },
  {
    key: "1-5",
    label: (
      <NavLink to="bachelor_required_documents">
        Перечень документов для поступления в вузы
      </NavLink>
    ),
  },
  {
    key: "1-6",
    label: <NavLink to="monitoring_reception">Мониторинг приема</NavLink>,
  },
  {
    key: "1-7",
    label: (
      <NavLink to="place_admission_office">Адрес приемной комиссии</NavLink>
    ),
  },
];
export const APPLICANTS_MASTER = [
  {
    key: "2-1",
    label: <NavLink to="memo_mag">Памятка абитуриента</NavLink>,
  },
  {
    key: "2-2",
    label: <NavLink to="admission_procedure_mag">Процедура приема</NavLink>,
  },
  {
    key: "2-3",
    label: <NavLink to="master_reception_quota">Квоты приема</NavLink>,
  },
  {
    key: "2-4",
    label: (
      <NavLink to="package_accepted_documents">
        Перечень документов для поступления а вузы
      </NavLink>
    ),
  },
  {
    key: "2-5",
    label: (
      <NavLink to="place_admission_office">Адрес приемной комиссии</NavLink>
    ),
  },
  {
    key: "2-6",
    label: <NavLink to="checklist_list">Список контрольных списков</NavLink>,
  },
];
export const APPLICANTS_RESIDENCY = [
  {
    key: "3-1",
    label: <NavLink to="memo_clinic">Памятка абитуриентам</NavLink>,
  },
  {
    key: "3-2",
    label: <NavLink to="clinic_reception_quota">Положения о приеме</NavLink>,
  },
  {
    key: "3-3",
    label: <NavLink to="admission_procedure_int">Квота приема</NavLink>,
  },
  {
    key: "3-4",
    label: (
      <NavLink to="clinic_required_documents">
        Документы для поступления
      </NavLink>
    ),
  },
  {
    key: "3-5",
    label: (
      <NavLink to="place_admission_office">Адрес приёмной комиссии</NavLink>
    ),
  },
];
export const ADMISSION_PROGRAMS = [
  {
    key: "4-1",
    label: <NavLink to="admissions_jt_news">Новости приемной комиссии</NavLink>,
  },
  {
    key: "4-2",
    label: <NavLink to="memo_jt_training">Памятка абитурента</NavLink>,
  },
  {
    key: "4-3",
    label: <NavLink to="jtraining_reception_quota">Квота приема</NavLink>,
  },
  {
    key: "4-4",
    label: (
      <NavLink to="package_accepted_documents_jt">
        Документы для поступления
      </NavLink>
    ),
  },
];
export const PARTNERS_INSTITUTE = [
  {
    key: "1",
    label: <NavLink to="international_partners">Муждународные</NavLink>,
  },
  {
    key: "2",
    label: <NavLink to="republican_partners">Республиканские</NavLink>,
  },
  {
    key: "3",
    label: <NavLink to="treaty">Договора</NavLink>,
  },
  {
    key: "4",
    label: <NavLink to="joint">Совместные</NavLink>,
  },
];
export const NEWS_INSTITUTE = [
  {
    key: "1",
    label: <NavLink to="news">Новости</NavLink>,
  },
  {
    key: "2",
    label: <NavLink to="adverts">Объявления</NavLink>,
  },
  {
    key: "3",
    label: <NavLink to="photo_gallery">Фотогалерея</NavLink>,
  },
];
export const navMenuItems = [
  {
    title: "Институт",
    items: [
      {
        key: "1",
        label: "Об институте",
        children: ABOUT_INSTITUTE,
      },
      {
        key: "2",
        label: "Совет института",
        children: ADVICE_INSTITUTE,
      },
      {
        key: "3",
        label: "Документы",
        children: DOCUMENTS,
      },
      {
        key: 4,
        label: <NavLink to="/management">Руководство</NavLink>,
      },
    ],
  },
  {
    title: "Структура",
    items: [
      {
        key: "1",
        label: "Факультеты",
        children: FACULTIES,
      },
      {
        key: "2",
        label: "Кафедры",
        children: DEPARTMENTS,
      },
      {
        key: "3",
        label: "Научные и учебные отделы",
        children: SCIENTIFIC,
      },
      {
        key: "4",
        label: "Финансовые отделы",
        children: FINANCE,
      },
      {
        key: "5",
        label: "Центры и организации",
        children: CENTERS_ORGANIZATIONS,
      },
      {
        key: "6",
        label: "Другие отделы",
        children: OTHERS_DEPARTMENTS,
      },
      {
        key: "7",
        label: "Учебно-симуляционный центр",
        children: SIMULATIONS_CENTER,
      },
      {
        key: "8",
        label: "Центр карьеры",
        children: CENTER_CAREERS,
      },
    ],
  },
  {
    title: "Студентам",
    items: [
      {
        key: "1",
        label: "Бакалавриат",
        children: STUDENTS_BACHELOR,
      },
      {
        key: "2",
        label: "Магистратура",
        children: STUDENTS_MASTER,
      },
      {
        key: "3",
        label: "Ординатура",
        children: STUDENTS_RESIDENCY,
      },
      {
        key: "4",
        label: "Иностранные студенты",
        children: STUDENTS_INTER,
      },
    ],
  },
  {
    title: "Абитуриентам",
    items: [
      {
        key: "1",
        label: "Бакалавриат",
        children: APPLICANTS_BACHELOR,
      },
      {
        key: "2",
        label: "Магистратура",
        children: APPLICANTS_MASTER,
      },
      {
        key: "3",
        label: "Ординатура",
        children: APPLICANTS_RESIDENCY,
      },
      {
        key: "4",
        label: "Приём на совместные прогаммы",
        children: ADMISSION_PROGRAMS,
      },
    ],
  },
  {
    title: "Новости института",
    items: NEWS_INSTITUTE,
  },
  {
    title: "Партнеры",
    items: PARTNERS_INSTITUTE,
  },
];

export const adminNavLinks = [
  {
    key: "1",
    label: (
      <NavLink
        to="/admin"
        className={({ isActive, isPending }) =>
          isPending
            ? "text-almost-admin-grey  flex space-x-5 items-center"
            : isActive
            ? "text-almost-blue flex space-x-5 items-center"
            : "flex space-x-5 items-center"
        }
      >
        <HomeOutlined />
        <span>Dashboard</span>
      </NavLink>
    ),
  },
  {
    key: "2",
    label: (
      <NavLink
        to="/admin/users"
        className={({ isActive, isPending }) =>
          isPending
            ? "text-almost-admin-grey  flex space-x-5 items-center"
            : isActive
            ? "text-almost-blue flex space-x-5 items-center"
            : "flex space-x-5 items-center"
        }
      >
        <UserOutlined />
        <span>Пользователи</span>
      </NavLink>
    ),
  },
  {
    key: "3",
    label: (
      <NavLink
        to="/admin/news"
        className={({ isActive, isPending }) =>
          isPending
            ? "text-almost-admin-grey  flex space-x-5 items-center"
            : isActive
            ? "text-almost-blue flex space-x-5 items-center"
            : "flex space-x-5 items-center"
        }
      >
        <ReconciliationOutlined />
        <span>Новости</span>
      </NavLink>
    ),
  },
  {
    key: "4",
    label: (
      <NavLink
        to="/admin/adverts"
        className={({ isActive, isPending }) =>
          isPending
            ? "text-almost-admin-grey  flex space-x-5 items-center"
            : isActive
            ? "text-almost-blue flex space-x-5 items-center"
            : "flex space-x-5 items-center"
        }
      >
        <ProfileOutlined />
        <span>Объявления</span>
      </NavLink>
    ),
  },
  {
    key: "5",
    label: (
      <NavLink
        to="/admin/photo_gallery"
        className={({ isActive, isPending }) =>
          isPending
            ? "text-almost-admin-grey  flex space-x-5 items-center"
            : isActive
            ? "text-almost-blue flex space-x-5 items-center"
            : "flex space-x-5 items-center"
        }
      >
        <SettingOutlined />
        <span>Фотогалерея</span>
      </NavLink>
    ),
  },
  {
    key: "6",
    label: (
      <NavLink
        to="/admin/about_institute"
        className={({ isActive, isPending }) =>
          isPending
            ? "text-almost-admin-grey  flex space-x-5 items-center"
            : isActive
            ? "text-almost-blue flex space-x-5 items-center"
            : "flex space-x-5 items-center"
        }
      >
        <SettingOutlined />
        <span>Об институте</span>
      </NavLink>
    ),
  },
  {
    key: "7",
    label: (
      <NavLink
        to="/admin/advice_institute"
        className={({ isActive, isPending }) =>
          isPending
            ? "text-almost-admin-grey  flex space-x-5 items-center"
            : isActive
            ? "text-almost-blue flex space-x-5 items-center"
            : "flex space-x-5 items-center"
        }
      >
        <SettingOutlined />
        <span>Совет института</span>
      </NavLink>
    ),
  },
  {
    key: "8",
    label: (
      <NavLink
        to="/admin/documents"
        className={({ isActive, isPending }) =>
          isPending
            ? "text-almost-admin-grey  flex space-x-5 items-center"
            : isActive
            ? "text-almost-blue flex space-x-5 items-center"
            : "flex space-x-5 items-center"
        }
      >
        <SettingOutlined />
        <span>Документы</span>
      </NavLink>
    ),
  },
  {
    key: "9",
    label: (
      <NavLink
        to="/admin/faculties"
        className={({ isActive, isPending }) =>
          isPending
            ? "text-almost-admin-grey  flex space-x-5 items-center"
            : isActive
            ? "text-almost-blue flex space-x-5 items-center"
            : "flex space-x-5 items-center"
        }
      >
        <SettingOutlined />
        <span>Факультеты</span>
      </NavLink>
    ),
  },
  {
    key: "10",
    label: (
      <NavLink
        to="/admin/departments"
        className={({ isActive, isPending }) =>
          isPending
            ? "text-almost-admin-grey  flex space-x-5 items-center"
            : isActive
            ? "text-almost-blue flex space-x-5 items-center"
            : "flex space-x-5 items-center"
        }
      >
        <SettingOutlined />
        <span>Кафедры</span>
      </NavLink>
    ),
  },
  {
    key: "11",
    label: (
      <NavLink
        to="/admin/scientific"
        className={({ isActive, isPending }) =>
          isPending
            ? "text-almost-admin-grey  flex space-x-5 items-center"
            : isActive
            ? "text-almost-blue flex space-x-5 items-center"
            : "flex space-x-5 items-center"
        }
      >
        <SettingOutlined />
        <span>Научные и учебные отделы</span>
      </NavLink>
    ),
  },
  {
    key: "12",
    label: (
      <NavLink
        to="/admin/finance"
        className={({ isActive, isPending }) =>
          isPending
            ? "text-almost-admin-grey  flex space-x-5 items-center"
            : isActive
            ? "text-almost-blue flex space-x-5 items-center"
            : "flex space-x-5 items-center"
        }
      >
        <SettingOutlined />
        <span>Финансовые отделы</span>
      </NavLink>
    ),
  },
  {
    key: "13",
    label: (
      <NavLink
        to="/admin/center_organizations"
        className={({ isActive, isPending }) =>
          isPending
            ? "text-almost-admin-grey  flex space-x-5 items-center"
            : isActive
            ? "text-almost-blue flex space-x-5 items-center"
            : "flex space-x-5 items-center"
        }
      >
        <SettingOutlined />
        <span>Центры и организации</span>
      </NavLink>
    ),
  },
  {
    key: "14",
    label: (
      <NavLink
        to="/admin/others_departments"
        className={({ isActive, isPending }) =>
          isPending
            ? "text-almost-admin-grey  flex space-x-5 items-center"
            : isActive
            ? "text-almost-blue flex space-x-5 items-center"
            : "flex space-x-5 items-center"
        }
      >
        <SettingOutlined />
        <span>Другие отделы</span>
      </NavLink>
    ),
  },
  {
    key: "15",
    label: (
      <NavLink
        to="/admin/simulations_center"
        className={({ isActive, isPending }) =>
          isPending
            ? "text-almost-admin-grey  flex space-x-5 items-center"
            : isActive
            ? "text-almost-blue flex space-x-5 items-center"
            : "flex space-x-5 items-center"
        }
      >
        <SettingOutlined />
        <span>Учебно-симуляционный центр</span>
      </NavLink>
    ),
  },
  {
    key: "16",
    label: (
      <NavLink
        to="/admin/center_careers"
        className={({ isActive, isPending }) =>
          isPending
            ? "text-almost-admin-grey  flex space-x-5 items-center"
            : isActive
            ? "text-almost-blue flex space-x-5 items-center"
            : "flex space-x-5 items-center"
        }
      >
        <SettingOutlined />
        <span>Центр карьеры</span>
      </NavLink>
    ),
  },
  {
    key: "17",
    label: (
      <NavLink
        to="/admin/students_bachelor"
        className={({ isActive, isPending }) =>
          isPending
            ? "text-almost-admin-grey  flex space-x-5 items-center"
            : isActive
            ? "text-almost-blue flex space-x-5 items-center"
            : "flex space-x-5 items-center"
        }
      >
        <SettingOutlined />
        <span>Студентам-Бакалавриата</span>
      </NavLink>
    ),
  },
  {
    key: "18",
    label: (
      <NavLink
        to="/admin/students_master"
        className={({ isActive, isPending }) =>
          isPending
            ? "text-almost-admin-grey  flex space-x-5 items-center"
            : isActive
            ? "text-almost-blue flex space-x-5 items-center"
            : "flex space-x-5 items-center"
        }
      >
        <SettingOutlined />
        <span>Студентам-Магистратуры</span>
      </NavLink>
    ),
  },
  {
    key: "19",
    label: (
      <NavLink
        to="/admin/students_residency"
        className={({ isActive, isPending }) =>
          isPending
            ? "text-almost-admin-grey  flex space-x-5 items-center"
            : isActive
            ? "text-almost-blue flex space-x-5 items-center"
            : "flex space-x-5 items-center"
        }
      >
        <SettingOutlined />
        <span>Студентам-Ординатуры</span>
      </NavLink>
    ),
  },
  {
    key: "20",
    label: (
      <NavLink
        to="/admin/students_inter"
        className={({ isActive, isPending }) =>
          isPending
            ? "text-almost-admin-grey  flex space-x-5 items-center"
            : isActive
            ? "text-almost-blue flex space-x-5 items-center"
            : "flex space-x-5 items-center"
        }
      >
        <SettingOutlined />
        <span>Студентам-Иностранным студентам</span>
      </NavLink>
    ),
  },
  {
    key: "21",
    label: (
      <NavLink
        to="/admin/applicants_bachelor"
        className={({ isActive, isPending }) =>
          isPending
            ? "text-almost-admin-grey  flex space-x-5 items-center"
            : isActive
            ? "text-almost-blue flex space-x-5 items-center"
            : "flex space-x-5 items-center"
        }
      >
        <SettingOutlined />
        <span>Абитуриентам-Бакалавриата</span>
      </NavLink>
    ),
  },
  {
    key: "22",
    label: (
      <NavLink
        to="/admin/bachelor_master"
        className={({ isActive, isPending }) =>
          isPending
            ? "text-almost-admin-grey  flex space-x-5 items-center"
            : isActive
            ? "text-almost-blue flex space-x-5 items-center"
            : "flex space-x-5 items-center"
        }
      >
        <SettingOutlined />
        <span>Абитуриентам-Магистратуры</span>
      </NavLink>
    ),
  },
  {
    key: "23",
    label: (
      <NavLink
        to="/admin/applicants_residency"
        className={({ isActive, isPending }) =>
          isPending
            ? "text-almost-admin-grey  flex space-x-5 items-center"
            : isActive
            ? "text-almost-blue flex space-x-5 items-center"
            : "flex space-x-5 items-center"
        }
      >
        <SettingOutlined />
        <span>Абитуриентам-Ординатуры</span>
      </NavLink>
    ),
  },
  {
    key: "24",
    label: (
      <NavLink
        to="/admin/admission_programs"
        className={({ isActive, isPending }) =>
          isPending
            ? "text-almost-admin-grey  flex space-x-5 items-center"
            : isActive
            ? "text-almost-blue flex space-x-5 items-center"
            : "flex space-x-5 items-center"
        }
      >
        <SettingOutlined />
        <span>Абитуриентам-Приём на совместные прогаммы</span>
      </NavLink>
    ),
  },

  {
    key: "25",
    label: (
      <NavLink
        to="/admin/partners_institute"
        className={({ isActive, isPending }) =>
          isPending
            ? "text-almost-admin-grey  flex space-x-5 items-center"
            : isActive
            ? "text-almost-blue flex space-x-5 items-center"
            : "flex space-x-5 items-center"
        }
      >
        <SettingOutlined />
        <span>Партнеры</span>
      </NavLink>
    ),
  },
];

export const NEWS = [
  {
    key: 1,
    title: "new",
    value:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore",
  },
  {
    key: 2,
    title: "new",
    value:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore",
  },
  {
    key: 3,
    title: "new",
    value:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore",
  },
  {
    key: 4,
    title: "new",
    value:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore",
  },
  {
    key: 5,
    title: "new",
    value:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore",
  },
  {
    key: 6,
    title: "new",
    value:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore",
  },
  {
    key: 7,
    title: "new",
    value:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore",
  },
  {
    key: 8,
    title: "new",
    value:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore",
  },
];

export const ADVERTS = [
  {
    key: 1,
    title: "declaration",
    value:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore",
    type: "institute",
  },
  {
    key: 2,
    title: "new",
    value:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore",
    type: "institute",
  },
  {
    key: 3,
    title: "declaration",
    value:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore",
    type: "clinic",
  },
  {
    key: 4,
    title: "new",
    value:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore",
    type: "clinic",
  },
  {
    key: 5,
    title: "declaration",
    value:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore",
    type: "faculties",
  },
  {
    key: 6,
    title: "new",
    value:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore",
    type: "faculties",
  },
  {
    key: 7,
    title: "declaration",
    value:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore",
    type: "faculties",
  },
  {
    key: 8,
    title: "new",
    value:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore",
    type: "faculties",
  },
];

export const FILTERS_TYPE = ["institute", "faculties", "clinic"];

export const STRUCTURE = [
  {
    name: "Esther Howard",
    profession: "Декан лечебного факультета №1",
    phone: "+998901234567",
    email: "esther@gmail.com",
    time: "Понедельник-Суббота: 08:30-17:00",
  },
  {
    name: "Jane Cooper",
    profession: "Заместитель декана",
    phone: "+998901234567",
    email: "esther@gmail.com",
    time: "Понедельник-Суббота: 08:30-17:00",
  },
  {
    name: "Cameron Williamson",
    profession: "Заместитель декана",
    phone: "+998901234567",
    email: "esther@gmail.com",
    time: "Понедельник-Суббота: 08:30-17:00",
  },
  {
    name: "Guy Hawkins",
    profession: "Заместитель декана",
    phone: "+998901234567",
    email: "esther@gmail.com",
    time: "Понедельник-Суббота: 08:30-17:00",
  },
];

export const SYMBOLS = {
  kaa: {
    anthem: {
      title: "Государственный Гимн Республики Каракалпакстан",
      img: "",
      law: `Закон о «Государственном гимне Республики Каракалпакстан» был принят 24 декабря 1993 года на XIV сессии Верховного Совета Республики Каракалпакстан.`,
      author: `Музыка Н.Мухаммеддинова
Слова И.Юсупова`,
      text: `Жайхун жагасында оскен бай терек,
Туби бир шакасы мын болар демек,
Сен сондай саялы, куяшлы елсен,
Тынышлык хам ыгбал сендеги тилек.
 
Припев:
Дийхан баба напеси бар жеринде,
Жуусан анкып, кийик кашар шолинде,
«Каракалпакстан» деген атынды,
Ауладлар адиулер журек торинде.
 
Айдын келешекке шакырар заман,
Мартлик мийнет, билим жеткизер оган,
Халкын бар азамат, дос хам мехрибан,
Еркин жайнап–жасна, манги бол аман.
 
Припев:
Дийхан баба напеси бар жеринде,
Жуусан анкып, кийик кашар шолинде,
«Каракалпакстан» деген атынды,
Ауладлар адиулер журек торинде.`,
    },
    emblem: {
      title: "Государственный Герб Республики Каракалпакстан",
      author: "",
      law: `Закон «О государственном гербе 
Республики Каракалпакстан» был принят 
9 апреля 1993 года на 12-м заседании Верховного Совета Республики Каракалпакстан.`,
      img: (
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/8/87/Emblem_of_Karakalpakstan.svg"
          className="w-[400px] h-[400px]"
        />
      ),
      text: ` Государственный герб Республики Каракалпакстан означает государственный суверенитет Республики Каракалпакстан. На гербе изображено восходящее над тёмно-синими горами, рекой Аму-Дарья и морем Арал золотое солнце. Венок из веток хлопчатника и пшеницы перевязан лентами национальных цветов Узбекистана и Каракалпакстана, на нижнем перехвате ленты надпись: "КАРАКАЛПАКСТАН" красными буквами; в верхней части герба расположена голубая восьмиконечная звезда с золотой окантовкой, выражающая единство народов, и серебряными полумесяцем и звездой в сердцевине, являющими священными символами мусульман. 
  На переднем плане - птица счастья Хумо серебристого цвета, являющаяся символом богатства, благородства и самоотверженности. На заднем плане расположена гора-крепость цвета охры Шылпык, которая является одной из древнейших культур каракалпакского народа, символом древности культуры и самобытности народов Каракалпакстана.`,
    },
    flag: {
      title: "Государственный Флаг Республики Каракалпакстан",
      author: "",
      law: `Закон «О государственном флаге Республики Каракалпакстан» был принят 14 декабря 1992 года на 11-й сессии Верховного Совета Республики Каракалпакстан.`,
      img: <QarFlag className="w-[408px] h-[220px]" />,
      text: `  Государственный флаг Республики Каракалпакстан является символом государственного суверенитета Республики Каракалпакстан.
Государственный флаг Республики Каракалпакстан представляет собой прямоугольное полотнище, состоящее из трёх горизонтальных полос голубого, желтого и зелёного цветов. Полосу желтого цвета отделяют белые и красные каёмки.
  Голубой цвет флага является символом воды и весны. Желтый цвет указывает на то, что большая часть Каракалпакстана состоит из пустынь. Зеленый цвет является признаком обновления природы, духовности, доверия и солнца. Полумесяц ​​является священным воплощением мусульман, образ пяти звезд является символом жизни и доверия пяти самых древних городов Каракалпакстана. Государственный флаг Республики Каракалпакстан представляет Республику Каракалпакстан на международной арене: при визитах официальных делегаций Республики Каракалпакстан в зарубежные страны, в международных организациях, на конференциях, всемирных выставках, на спортивных соревнованиях.
  Государственный флаг Республики Каракалпакстан равен флагам других стран на международной арене.
Граждане Республики Каракалпакстан, а также другие жители, проживающие здесь, должны уважать Государственный флаг Республики Каракалпакстан.`,
    },
  },
  uz: {
    anthem: {
      title: "Государственный Гимн Республики Узбекистан",
      img: "",
      law: "Закон «О государственном гимне Республики Узбекистан» был принят 10 декабря 1992 года на одиннадцатой сессии Верховного Совета Республики Узбекистан.",
      author: "Музыка Мутала Бурханова",
      text: `Серқуёш ҳур ўлкам, элга бахт, нажот,
Сен ўзинг дўстларга йўлдош, меҳрибон!
Яшнагай то абад илму фан, ижод,
Шуҳратинг порласин токи бор жаҳон!
 
Припев:
Олтин бу водийлар - жон Ўзбекистон,
Аждодлар мардона руҳи сенга ёр!
Улуғ халқ қудрати жўш урган замон,
Оламни маҳлиё айлаган диёр!
 
Бағри кенг ўзбекнинг ўчмас иймони,
Эркин, ёш авлодлар сенга зўр қанот!
Истиқлол машъали тинчлик посбони,
Хақсевар, она юрт, мангу бўл обод!  
Припев:
Олтин бу водийлар - жон Ўзбекистон,
Аждодлар мардона руҳи сенга ёр!
Улуғ халқ қудрати жўш урган замон,
Оламни маҳлиё айлаган диёр!`,
    },
    emblem: {
      title: "Государственный Герб Республики Узбекистан",
      author: "",
      law: `Закон Республики Узбекистан принят 
2 июля 1992 г. на Х сессии Олий Мажлиса Республики Узбекистан "О Государственном гербе Республики Узбекистан".`,
      img: <UzGerb />,
      text: `  Государственный герб Республики Узбекистан представляет собой изображение восходящего солнца цветущей долиной. Слева – колосья пшеницы, справа – венок из веток хлопчатника с раскрытыми коробочками хлопка.
  В верхней части герба изображена восьмиконечная звезда, символизирующая единство народа. Внутри восьмиконечника полумесяц и звезда – священные символы веры.
  В центре герба расположена легендарная птица Хумо с распростертыми крыльями, которая символизирует счастье и самоотверженность.
  В нижней части герба в основании венка, символизирующей Государственный флаг республики, золотыми буквами нанесена надпись «Узбекистон».`,
    },
    flag: {
      title: "Государственный Флаг Республики Узбекистан",
      author: "",
      law: `Закон Республики Узбекистан
«О государственном флаге Республики Узбекистан» на внеочередной VII сессии Верховного Совета Республики Узбекистан 18 ноября 1991 г.`,
      img: <UzFlag className="w-[408px] h-[220px]" />,
      text: `Государственный флаг и его изображение символизируют историческую связь с древними государствами на территории Узбекистана и вобрали в себя национально-культурные традиции узбекского народа.   Голубой цвет на флаге является символом вечной жизни и неба. На языке символов это означает добро, мудрость, честность, славы и верности.   Белый цвет на флаге – священный символ мира и спокойствия, а также чистоты помыслов и побуждений, стремления к внутренней красоте.   Зеленый цвет – символ обновления природы. У многих народов цвет является символом молодости, надежды и радости.   Красные линии – символ жизненных сил.   Изображение молодого месяца связано с нашими историческими традициями. В то же время символизирует обретенную независимость.   Звезды имеют сакральное значение. 12 звезд на флаге неразрывно связаны с историческими традициями и верой наших отцов.`,
    },
  },
};
