import Rector from "../../assets/images/management/РекторFull.png";
function ManagementDetail() {
  return (
    <div className="container mx-auto  py-5">
      <h1 className="text-3xl mb-10">Ректор института</h1>
      <div className="grid grid-cols-[60%_40%] gap-x-10">
        <img src={Rector} className="w-full " />
        <div className="border border-black rounded-lg py-5 px-2">
          <h2 className="text-4xl font-bold">Орал Атаниязова</h2>
          <h3 className="text-3xl mb-10">Профессор</h3>
          <p className="text-2xl">Телефон: +998 (91) 123-45-67</p>
          <p className="text-2xl">Почта: Info@gmail.com</p>
        </div>
      </div>
      <p className="text-2xl my-5">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum
        dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipiscing
        elit, sed do eiusmod tempor incididunt ut labore{" "}
      </p>
      <p className="text-2xl my-5">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum
        dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipiscing
        elit, sed do eiusmod tempor incididunt ut labore{" "}
      </p>
    </div>
  );
}

export default ManagementDetail;
