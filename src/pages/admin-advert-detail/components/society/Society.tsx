import { useTranslation } from "react-i18next";

function Society({ title }: { title: string }) {
  const { t } = useTranslation("education");
  return (
    <div>
      <h2>{t(title)}</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas accusamus
        expedita voluptas vel voluptatem? Repellat debitis ex, culpa ratione quo
        voluptates laboriosam, itaque cum enim esse, facilis nisi laudantium
        ipsum delectus doloremque a perspiciatis molestiae. Architecto, vero
        nesciunt ipsam tempore in, totam consequatur voluptas, doloremque animi
        maxime sit dolores modi.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas accusamus
        expedita voluptas vel voluptatem? Repellat debitis ex, culpa ratione quo
        voluptates laboriosam, itaque cum enim esse, facilis nisi laudantium
        ipsum delectus doloremque a perspiciatis molestiae. Architecto, vero
        nesciunt ipsam tempore in, totam consequatur voluptas, doloremque animi
        maxime sit dolores modi.
      </p>
    </div>
  );
}

export default Society;
