import { useTranslation } from "react-i18next";

function Council({ title }: { title: string }) {
  const { t } = useTranslation("education");
  return (
    <div>
      <h2>{t(title)}</h2>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere
        accusantium consequatur repudiandae sequi, quisquam labore sunt eligendi
        autem voluptatem incidunt quia officiis distinctio, tempore perspiciatis
        at quibusdam quas mollitia reprehenderit aut consequuntur. Blanditiis
        quasi, a illum veniam, dicta et, error laudantium placeat culpa aliquam
        id totam earum quos recusandae porro.
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere
        accusantium consequatur repudiandae sequi, quisquam labore sunt eligendi
        autem voluptatem incidunt quia officiis distinctio, tempore perspiciatis
        at quibusdam quas mollitia reprehenderit aut consequuntur. Blanditiis
        quasi, a illum veniam, dicta et, error laudantium placeat culpa aliquam
        id totam earum quos recusandae porro.
      </p>
    </div>
  );
}

export default Council;
