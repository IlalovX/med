import { NavLink } from "react-router-dom";
import QarGerb from "../assets/svgs/gerbs/QarGerb.svg?react";
import UzGerb from "../assets/svgs/gerbs/Gerb.svg?react";
import QarFlag from "../assets/svgs/flags/QarFlag.svg?react";
import UzFlag from "../assets/svgs/flags/UzFlag.svg?react";

export const navMenuItems = [
  {
    title: "Институт",
    items: [
      {
        key: "1",
        label: "Об институте",
        children: [
          {
            key: "1-1",
            label: <NavLink to="/information">Общая информация</NavLink>,
          },
          {
            key: "1-2",
            label: (
              <NavLink to="/structure_university">Структура института</NavLink>
            ),
          },
          {
            key: "1-3",
            label: <NavLink to="/institute_statute">Устав института</NavLink>,
          },
          {
            key: "1-4",
            label: (
              <NavLink to="/institute_certificates">
                Институтские сертификатты{" "}
              </NavLink>
            ),
          },
          {
            key: "1-5",
            label: (
              <NavLink to="/internal_regulations">
                Правила внутреннего распорядка
              </NavLink>
            ),
          },
          {
            key: "1-6",
            label: (
              <NavLink to="/educational_buildings">Учебные здания</NavLink>
            ),
          },
          {
            key: "1-7",
            label: (
              <NavLink to="/laboratory_room">Лабораторная комната</NavLink>
            ),
          },
          {
            key: "1-6",
            label: (
              <NavLink to="/life_students">Студенческие общедития</NavLink>
            ),
          },
        ],
      },
      {
        key: "2",
        label: "Совет института",
        children: [
          {
            key: "2-1",
            label: (
              <NavLink to="/academic_council_statue">
                Положение об ученом совете
              </NavLink>
            ),
          },
          {
            key: "2-2",
            label: (
              <NavLink to="/academic_council_members">
                Состав ученого совета
              </NavLink>
            ),
          },
          {
            key: "2-3",
            label: (
              <NavLink to="/academic_council_agenda">
                Повестка для ученого совета
              </NavLink>
            ),
          },
          {
            key: "2-4",
            label: (
              <NavLink to="/academic_council_handouts">
                Раздаточные материалы ученого совета
              </NavLink>
            ),
          },
          {
            key: "2-5",
            label: (
              <NavLink to="/academic_council_resolutions">
                Постановление ученого совета
              </NavLink>
            ),
          },
        ],
      },
      {
        key: "3",
        label: "Документы",
        children: [
          {
            key: "3-1",
            label: <NavLink to="/">Об образовании</NavLink>,
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
              <NavLink to="/">Приказы министерства и решения коллегии</NavLink>
            ),
          },
          {
            key: "3-4",
            label: <NavLink to="/">Государственные программы</NavLink>,
          },
        ],
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
        children: [
          {
            key: "1-1",
            label: (
              <NavLink to="/about_medical_faculty/1">
                1-медицинский факультет
              </NavLink>
            ),
          },
          {
            key: "1-2",
            label: (
              <NavLink to="/about_medical_faculty/2">
                2-медицинский факультет
              </NavLink>
            ),
          },
          {
            key: "1-3",
            label: (
              <NavLink to="/about_medical_faculty/3">
                3-медицинский факультет
              </NavLink>
            ),
          },
          {
            key: "1-4",
            label: (
              <NavLink to="/student_scientific_society_medical_faculty/1">
                Центры и отделы
              </NavLink>
            ),
          },
        ],
      },
      {
        key: "2",
        label: "Кафедры",
        children: [
          {
            key: "2-1",
            label: (
              <NavLink to="/departments_medical_faculty/1">
                Кафедры лечебного факультета №1
              </NavLink>
            ),
          },
          {
            key: "2-2",
            label: (
              <NavLink to="/departments_medical_faculty/2">
                Кафедры лечебного факультета №2
              </NavLink>
            ),
          },
          {
            key: "2-3",
            label: (
              <NavLink to="/departments_medical_faculty/3">
                Кафедры лечебного факультета №3
              </NavLink>
            ),
          },
        ],
      },
      {
        key: "3",
        label: "Научные и учебные отделы",
        children: [
          {
            key: "3-1",
            label: (
              <NavLink to="/student_scientific_society_medical_faculty/1">
                Отдел контроля качества образования
              </NavLink>
            ),
          },
          {
            key: "3-2",
            label: (
              <NavLink to="/student_scientific_society_medical_faculty/1">
                Учебно-методическое управление
              </NavLink>
            ),
          },
          {
            key: "3-3",
            label: (
              <NavLink to="/student_scientific_society_medical_faculty/1">
                Отдел магистратуры
              </NavLink>
            ),
          },
          {
            key: "3-4",
            label: (
              <NavLink to="/student_scientific_society_medical_faculty/1">
                Клиническая ординатура
              </NavLink>
            ),
          },
          {
            key: "3-5",
            label: (
              <NavLink to="/student_scientific_society_medical_faculty/1">
                Отдел международных связей
              </NavLink>
            ),
          },
          {
            key: "3-6",
            label: (
              <NavLink to="/student_scientific_society_medical_faculty/1">
                Отдел научных исследований
              </NavLink>
            ),
          },

          {
            key: "3-7",
            label: (
              <NavLink to="/student_scientific_society_medical_faculty/1">
                Отдел по работе с одаренными студентами
              </NavLink>
            ),
          },
          {
            key: "3-8",
            label: (
              <NavLink to="/student_scientific_society_medical_faculty/1">
                Студенческое научное общество
              </NavLink>
            ),
          },
        ],
      },
      {
        key: "4",
        label: "Финансовые отделы",
        children: [
          {
            key: "4-1",
            label: (
              <NavLink to="/student_scientific_society_medical_faculty/1">
                Бухгалтерия
              </NavLink>
            ),
          },
          {
            key: "4-2",
            label: (
              <NavLink to="/student_scientific_society_medical_faculty/1">
                Маркетинг
              </NavLink>
            ),
          },
          {
            key: "4-3",
            label: (
              <NavLink to="/student_scientific_society_medical_faculty/1">
                Отдел планирования и финансов
              </NavLink>
            ),
          },
        ],
      },
      {
        key: "5",
        label: "Центры и организации",
        children: [
          {
            key: "5-1",
            label: (
              <NavLink to="/student_scientific_society_medical_faculty/1">
                Центр цифровых образовательных технологий
              </NavLink>
            ),
          },
          {
            key: "5-2",
            label: (
              <NavLink to="/student_scientific_society_medical_faculty/1">
                Центр информационных ресурсов
              </NavLink>
            ),
          },
          {
            key: "5-3",
            label: (
              <NavLink to="/student_scientific_society_medical_faculty/1">
                Союз молодежи
              </NavLink>
            ),
          },
          {
            key: "5-4",
            label: (
              <NavLink to="/student_scientific_society_medical_faculty/1">
                Женский комитет
              </NavLink>
            ),
          },
          {
            key: "5-5",
            label: (
              <NavLink to="/student_scientific_society_medical_faculty/1">
                Центр развития коммуникативной компетенции
              </NavLink>
            ),
          },
        ],
      },
      {
        key: "6",
        label: "Другие отделы",
        children: [
          {
            key: "6-1",
            label: (
              <NavLink to="/student_scientific_society_medical_faculty/1">
                Отдел по делам молодежи, духовности и просвещения
              </NavLink>
            ),
          },
          {
            key: "6-2",
            label: (
              <NavLink to="/student_scientific_society_medical_faculty/1">
                Процесс-служба Института
              </NavLink>
            ),
          },
          {
            key: "6-3",
            label: (
              <NavLink to="/student_scientific_society_medical_faculty/1">
                Отдел кадров
              </NavLink>
            ),
          },
          {
            key: "6-4",
            label: (
              <NavLink to="/student_scientific_society_medical_faculty/1">
                Заведующая канцелярией
              </NavLink>
            ),
          },
          {
            key: "6-5",
            label: (
              <NavLink to="/student_scientific_society_medical_faculty/1">
                Комплаенс-контроль
              </NavLink>
            ),
          },
          {
            key: "6-6",
            label: (
              <NavLink to="/student_scientific_society_medical_faculty/1">
                Архив института
              </NavLink>
            ),
          },
          {
            key: "6-7",
            label: (
              <NavLink to="/student_scientific_society_medical_faculty/1">
                Юрист
              </NavLink>
            ),
          },
          {
            key: "6-8",
            label: (
              <NavLink to="/student_scientific_society_medical_faculty/1">
                Психолог
              </NavLink>
            ),
          },
          {
            key: "6-9",
            label: (
              <NavLink to="/student_scientific_society_medical_faculty/1">
                Профсоюзы
              </NavLink>
            ),
          },
        ],
      },
      {
        key: "7",
        label: "Учебно-симуляционный центр",
        children: [
          {
            key: "7-1",
            label: (
              <NavLink to="/student_scientific_society_medical_faculty/1">
                Деятельность центра{" "}
              </NavLink>
            ),
          },
          {
            key: "7-2",
            label: (
              <NavLink to="/student_scientific_society_medical_faculty/1">
                История центра
              </NavLink>
            ),
          },
          {
            key: "7-3",
            label: (
              <NavLink to="/student_scientific_society_medical_faculty/1">
                Сотрудники центра
              </NavLink>
            ),
          },
          {
            key: "7-4",
            label: (
              <NavLink to="/student_scientific_society_medical_faculty/1">
                Контактная информация
              </NavLink>
            ),
          },
        ],
      },
      {
        key: "8",
        label: "Центр карьеры",
        children: [
          {
            key: "8-1",
            label: (
              <NavLink to="/student_scientific_society_medical_faculty/1">
                Региональные управления
              </NavLink>
            ),
          },
          {
            key: "8-2",
            label: (
              <NavLink to="/student_scientific_society_medical_faculty/1">
                Пример контрактов
              </NavLink>
            ),
          },
          {
            key: "8-3",
            label: (
              <NavLink to="/student_scientific_society_medical_faculty/1">
                Выпускники
              </NavLink>
            ),
          },
          {
            key: "5-4",
            label: (
              <NavLink to="/student_scientific_society_medical_faculty/1">
                Часто задаваемые вопросы
              </NavLink>
            ),
          },
        ],
      },
    ],
  },
  {
    title: "Студентам",
    items: [
      {
        key: "1",
        label: "Бакалавриат",
        children: [
          {
            key: "1-1",
            label: (
              <NavLink to="/student_scientific_society_medical_faculty/1">
                Для студентов
              </NavLink>
            ),
          },
          {
            key: "1-2",
            label: (
              <NavLink to="/student_scientific_society_medical_faculty/1">
                График проведения ГЭК
              </NavLink>
            ),
          },
          {
            key: "1-3",
            label: (
              <NavLink to="/student_scientific_society_medical_faculty/1">
                Расписание занятий
              </NavLink>
            ),
          },
          {
            key: "1-4",
            label: (
              <NavLink to="/student_scientific_society_medical_faculty/1">
                Успеваемость
              </NavLink>
            ),
          },
          {
            key: "1-5",
            label: (
              <NavLink to="/student_scientific_society_medical_faculty/1">
                Посещаемость
              </NavLink>
            ),
          },
          {
            key: "1-6",
            label: (
              <NavLink to="/student_scientific_society_medical_faculty/1">
                Каталог наук
              </NavLink>
            ),
          },
          {
            key: "1-7",
            label: (
              <NavLink to="/student_scientific_society_medical_faculty/1">
                Стипендии
              </NavLink>
            ),
          },
          {
            key: "1-8",
            label: (
              <NavLink to="/student_scientific_society_medical_faculty/1">
                Общежитие
              </NavLink>
            ),
          },
        ],
      },
      {
        key: "2",
        label: "Магистратура",
        children: [
          {
            key: "2-1",
            label: (
              <NavLink to="/student_scientific_society_medical_faculty/1">
                Успеваемость
              </NavLink>
            ),
          },
          {
            key: "2-2",
            label: (
              <NavLink to="/student_scientific_society_medical_faculty/1">
                Стипендии
              </NavLink>
            ),
          },
          {
            key: "2-3",
            label: (
              <NavLink to="/student_scientific_society_medical_faculty/1">
                Защита магистерских диссертаций
              </NavLink>
            ),
          },
          {
            key: "2-4",
            label: (
              <NavLink to="/student_scientific_society_medical_faculty/1">
                Темы магистерской диссертации
              </NavLink>
            ),
          },
          {
            key: "2-5",
            label: (
              <NavLink to="/student_scientific_society_medical_faculty/1">
                График проведения ГЭК
              </NavLink>
            ),
          },
        ],
      },
      {
        key: "3",
        label: "Ординатура",
        children: [
          {
            key: "3-1",
            label: (
              <NavLink to="/student_scientific_society_medical_faculty/1">
                Для студентов
              </NavLink>
            ),
          },
          {
            key: "3-2",
            label: (
              <NavLink to="/student_scientific_society_medical_faculty/1">
                Посещаемость
              </NavLink>
            ),
          },
          {
            key: "3-3",
            label: (
              <NavLink to="/student_scientific_society_medical_faculty/1">
                Государственные экзамены
              </NavLink>
            ),
          },
        ],
      },
      {
        key: "4",
        label: "Иностранные студенты",
        children: [
          {
            key: "4-1",
            label: (
              <NavLink to="/student_scientific_society_medical_faculty/1">
                Расписание занятий
              </NavLink>
            ),
          },
          {
            key: "4-2",
            label: (
              <NavLink to="/student_scientific_society_medical_faculty/1">
                Иностранные студенты, обучающиеся в институте
              </NavLink>
            ),
          },
          {
            key: "4-3",
            label: (
              <NavLink to="/student_scientific_society_medical_faculty/1">
                Сумма оплаты для иностранных студентов
              </NavLink>
            ),
          },
          {
            key: "4-3",
            label: (
              <NavLink to="/student_scientific_society_medical_faculty/1">
                Информация о проживании иностранных студентов
              </NavLink>
            ),
          },
        ],
      },
    ],
  },
  {
    title: "Абитуриентам",
    items: [
      {
        key: "1",
        label: "Бакалавриат",
        children: [
          {
            key: "1-1",
            label: (
              <NavLink to="/student_scientific_society_medical_faculty/1">
                Новости приемной комиссии
              </NavLink>
            ),
          },
          {
            key: "1-2",
            label: (
              <NavLink to="/student_scientific_society_medical_faculty/1">
                Памятка абитуриента
              </NavLink>
            ),
          },
          {
            key: "1-3",
            label: (
              <NavLink to="/student_scientific_society_medical_faculty/1">
                Процедура приема
              </NavLink>
            ),
          },
          {
            key: "1-4",
            label: (
              <NavLink to="/student_scientific_society_medical_faculty/1">
                Квоты приема
              </NavLink>
            ),
          },
          {
            key: "1-5",
            label: (
              <NavLink to="/student_scientific_society_medical_faculty/1">
                Перечень документов для поступления в вузы
              </NavLink>
            ),
          },
          {
            key: "1-6",
            label: (
              <NavLink to="/student_scientific_society_medical_faculty/1">
                Мониторинг приема
              </NavLink>
            ),
          },
          {
            key: "1-7",
            label: (
              <NavLink to="/student_scientific_society_medical_faculty/1">
                Адрес приемной комиссии
              </NavLink>
            ),
          },
        ],
      },
      {
        key: "2",
        label: "Магистратура",
        children: [
          {
            key: "2-1",
            label: (
              <NavLink to="/student_scientific_society_medical_faculty/1">
                Памятка абитуриента
              </NavLink>
            ),
          },
          {
            key: "2-2",
            label: (
              <NavLink to="/student_scientific_society_medical_faculty/1">
                Процедура приема
              </NavLink>
            ),
          },
          {
            key: "2-3",
            label: (
              <NavLink to="/student_scientific_society_medical_faculty/1">
                Квоты приема
              </NavLink>
            ),
          },
          {
            key: "2-4",
            label: (
              <NavLink to="/student_scientific_society_medical_faculty/1">
                Перечень документов для поступления а вузы
              </NavLink>
            ),
          },
          {
            key: "2-5",
            label: (
              <NavLink to="/student_scientific_society_medical_faculty/1">
                Адрес приемной комиссии
              </NavLink>
            ),
          },
          {
            key: "2-6",
            label: (
              <NavLink to="/student_scientific_society_medical_faculty/1">
                Список контрольных списков
              </NavLink>
            ),
          },
        ],
      },
      {
        key: "3",
        label: "Ординатура",
        children: [
          {
            key: "3-1",
            label: (
              <NavLink to="/student_scientific_society_medical_faculty/1">
                Памятка абитуриентам
              </NavLink>
            ),
          },
          {
            key: "3-2",
            label: (
              <NavLink to="/student_scientific_society_medical_faculty/1">
                Положения о приеме
              </NavLink>
            ),
          },
          {
            key: "3-3",
            label: (
              <NavLink to="/student_scientific_society_medical_faculty/1">
                Положения о приеме
              </NavLink>
            ),
          },
          {
            key: "3-4",
            label: (
              <NavLink to="/student_scientific_society_medical_faculty/1">
                Документы для поступления
              </NavLink>
            ),
          },
          {
            key: "3-5",
            label: (
              <NavLink to="/student_scientific_society_medical_faculty/1">
                Адрес приёмной комиссии
              </NavLink>
            ),
          },
        ],
      },
      {
        key: "4",
        label: "Приём на совместные прогаммы",
        children: [
          {
            key: "4-1",
            label: (
              <NavLink to="/student_scientific_society_medical_faculty/1">
                Новости приемной комиссии
              </NavLink>
            ),
          },
          {
            key: "4-2",
            label: (
              <NavLink to="/student_scientific_society_medical_faculty/1">
                Памятка абитурента
              </NavLink>
            ),
          },
          {
            key: "4-3",
            label: (
              <NavLink to="/student_scientific_society_medical_faculty/1">
                Квота приема
              </NavLink>
            ),
          },
          {
            key: "4-4",
            label: (
              <NavLink to="/student_scientific_society_medical_faculty/1">
                Документы для поступления
              </NavLink>
            ),
          },
        ],
      },
    ],
  },
  {
    title: "Новости института",
    item: [
      {
        key: "1",
        label: "Новости",
      },
      {
        key: "2",
        label: "Объявления",
      },
      {
        key: "3",
        label: "Фотогалерея",
      },
    ],
  },
  {
    title: "Партнеры",
    items: [
      {
        key: "1",
        label: "Муждународные",
      },
      {
        key: "2",
        label: "Республиканские",
      },
      {
        key: "3",
        label: "Договора",
      },
      {
        key: "4",
        label: "Совместные",
      },
    ],
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

export const ADVERT = [
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
      img: <QarGerb className="w-[400px] h-[400px]" />,
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
      img: <UzGerb className="w-[400px] h-[400px]" />,
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
