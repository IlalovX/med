import { useTranslation } from "react-i18next";

function Department({ title }: { title: string }) {
  const { t } = useTranslation("education");
  return (
    <div>
      <h2>{t(title)}</h2>
    </div>
  );
}

export default Department;
