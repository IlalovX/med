import { useTranslation } from "react-i18next";

function Educational({ title }: { title: string }) {
  const { t } = useTranslation("education");
  return (
    <div>
      <h2>{t(title)}</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque, a
        officiis consectetur unde atque ipsum, magnam aspernatur dicta deserunt,
        architecto fugit ex voluptas? Iste dignissimos beatae nam, nulla
        excepturi alias quaerat quia voluptates culpa magnam nesciunt nemo,
        dolore eaque impedit? Omnis inventore molestias tempora nihil doloremque
        blanditiis debitis quas eum?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque, a
        officiis consectetur unde atque ipsum, magnam aspernatur dicta deserunt,
        architecto fugit ex voluptas? Iste dignissimos beatae nam, nulla
        excepturi alias quaerat quia voluptates culpa magnam nesciunt nemo,
        dolore eaque impedit? Omnis inventore molestias tempora nihil doloremque
        blanditiis debitis quas eum?
      </p>
    </div>
  );
}

export default Educational;
