import img from "../../assets/images/image 33.png";
function ForeignStudentsStudying() {
  return (
    <div className="container mx-auto p-5 space-y-5">
      <h1 className="text-2xl sm:text-4xl font-bold">
        Иностранные студенты, обучающиеся в институте
      </h1>
      <p className="text-xl sm:text-2xl">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum
        dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipiscing
        elit, sed do eiusmod tempor incididunt ut labore{" "}
      </p>
      <img src={img} className="w-full min-h-[300px] max-h-[750px]" />
    </div>
  );
}

export default ForeignStudentsStudying;
