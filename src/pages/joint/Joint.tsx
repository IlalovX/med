import img from "../../assets/images/image 35.png";

function Joint() {
  return (
    <div className="bg-almost-blue ">
      <div className="container mx-auto space-y-5 p-5">
        <h1 className="text-white text-4xl">Партнеры из России</h1>
        <div className="p-10">
          <img src={img} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Joint;
