import img from "../../assets/images/faculty/Факультет фото (1).png";
function AdvertDetail() {
  return (
    <div className="container mx-auto p-5 space-y-5">
      <h1 className="text-4xl">Иностранные студенты</h1>
      <h2 className="text-xl">19/03/2024</h2>
      <p className="text-xl">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum
        dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipiscing
        elit, sed do eiusmod tempor incididunt ut labore
      </p>
      <p className="text-xl">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum
        dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipiscing
        elit, sed do eiusmod tempor incididunt ut labore
      </p>
      <img src={img} className="w-full object-fill" />
    </div>
  );
}

export default AdvertDetail;
