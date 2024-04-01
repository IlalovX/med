import { getAdvertDetail } from "../admin-adverts-detail/services/queries";
function AdvertDetail() {
  const { data } = getAdvertDetail();
  return (
    <div className="container mx-auto p-5 space-y-10">
      <h1 className="text-4xl">{data?.header}</h1>
      <h2 className="text-xl">{data?.createdDate}</h2>
      <p className="text-xl">{data?.description}</p>
      <img src={data?.photo} className="w-full object-fill" />
    </div>
  );
}

export default AdvertDetail;
