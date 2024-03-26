import { useTranslation } from "react-i18next";

function Research({ title }: { title: string }) {
  const { t } = useTranslation("education");
  return (
    <div>
      <h2>{t(title)}</h2>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum, iusto
        ea! Similique deleniti voluptatem nam asperiores aut, tempora ullam
        nihil voluptas magnam, dignissimos consequuntur nobis commodi quibusdam
        dolor, numquam atque ab rerum qui voluptate dolorem earum possimus.
        Provident ea similique sed, rem praesentium eius, tempore cumque rerum
        eum ex quae.
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum, iusto
        ea! Similique deleniti voluptatem nam asperiores aut, tempora ullam
        nihil voluptas magnam, dignissimos consequuntur nobis commodi quibusdam
        dolor, numquam atque ab rerum qui voluptate dolorem earum possimus.
        Provident ea similique sed, rem praesentium eius, tempore cumque rerum
        eum ex quae.
      </p>
    </div>
  );
}

export default Research;
