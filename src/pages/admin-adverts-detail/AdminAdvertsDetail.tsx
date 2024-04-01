import { getAdvertDetail } from "./services/queries";

function AdminAdvertsDetail() {
  const { data } = getAdvertDetail();
  return (
    <div className="container mx-auto p-5 space-y-10">
      <h1 className="text-4xl">{data?.header}</h1>
      <h2 className="text-xl">{data?.createdDate}</h2>
      <p className="text-xl">{data?.description}</p>
    </div>
  );
}

export default AdminAdvertsDetail;
