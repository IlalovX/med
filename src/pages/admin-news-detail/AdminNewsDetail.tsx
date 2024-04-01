import { getNewsDetail } from "./services/queries";

function AdminNewsDetail() {
  const { data } = getNewsDetail();
  return (
    <div className="container mx-auto p-5 space-y-5">
      <h1 className="text-4xl font-bold">{data?.header}</h1>
      <h2>{data?.createdDate}</h2>
      <p>{data?.description}</p>
    </div>
  );
}

export default AdminNewsDetail;
