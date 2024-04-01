import { getNewsDetail } from "../admin-news-detail/services/queries";
function NewDetail() {
  const { data } = getNewsDetail();

  return (
    <div className="container mx-auto p-5 space-y-5">
      <h1 className="text-4xl">{data?.header}</h1>
      <h2 className="text-xl">{data?.createdDate}</h2>
      <p className="text-xl">{data?.description}</p>
      <img src={data?.photo} className="w-full object-fill" />
    </div>
  );
}

export default NewDetail;
