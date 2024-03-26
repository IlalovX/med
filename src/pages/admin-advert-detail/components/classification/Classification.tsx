import { useTranslation } from "react-i18next";
import styles from "./classification.module.scss";

function Classification({ title }: { title: string }) {
  const { t } = useTranslation("education");
  return (
    <div className={styles.classification}>
      <h2>{t(title)}</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
        quibusdam rerum veniam, neque nemo cupiditate dolorem eaque debitis
        minima! Alias amet possimus voluptates qui obcaecati placeat culpa,
        voluptatibus earum provident?5
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
        quibusdam rerum veniam, neque nemo cupiditate dolorem eaque debitis
        minima! Alias amet possimus voluptates qui obcaecati placeat culpa,
        voluptatibus earum provident?5
      </p>
    </div>
  );
}

export default Classification;
