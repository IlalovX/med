import { useTranslation } from "react-i18next";

import styles from "./structure.module.scss";
// import { STRUCTURE } from "../../../../constans/db";
const STRUCTURE = [
  {
    name: "Esther Howard",
    profession: "Декан лечебного факультета №1",
    img: "../../../../../public/images/faculties_structure/graduation (3).png",
    phone: "+998901234567",
    email: "esther@gmail.com",
    time: "Понедельник-Суббота: 08:30-17:00",
  },
  {
    name: "Jane Cooper",
    profession: "Заместитель декана",
    img: "../../../../../public/images/faculties_structure/graduation (2).png",
    phone: "+998901234567",
    email: "esther@gmail.com",
    time: "Понедельник-Суббота: 08:30-17:00",
  },
  {
    name: "Cameron Williamson",
    profession: "Заместитель декана",
    img: "../../../../../public/images/faculties_structure/graduation (1).png",
    phone: "+998901234567",
    email: "esther@gmail.com",
    time: "Понедельник-Суббота: 08:30-17:00",
  },
  {
    name: "Guy Hawkins",
    profession: "Заместитель декана",
    img: "../../../../../public/images/faculties_structure/graduation.png",
    phone: "+998901234567",
    email: "esther@gmail.com",
    time: "Понедельник-Суббота: 08:30-17:00",
  },
];

function Structure({ title }: { title: string }) {
  const { t } = useTranslation("education");
  return (
    <div className={styles.structure}>
      <h2>{t(title)}</h2>
      <div className={styles.cards_container}>
        {STRUCTURE.map((item, index) => (
          <div className={styles.card} key={index}>
            <img src={item.img} />
            <div className={styles.text}>
              <div>
                <h3>{item.name}</h3>
                <h4>{item.profession}</h4>
              </div>
              <ul>
                <li>
                  <span>Время приема:</span>
                  {item.time}
                </li>
                <li>
                  <span>Телефон:</span>
                  {item.phone}
                </li>
                <li>
                  <span>Email:</span>
                  {item.email}
                </li>
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Structure;
