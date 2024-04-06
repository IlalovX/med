function Flag({
  title,
  law,
  text,
  img,
}: {
  title: string;
  law: string;
  text: string;
  img: any;
}) {
  return (
    <div className="container mx-auto p-10">
      <div className="flex  justify-between space-x-16 mb-10">
        <div className="flex items-center justify-center h-[290px]">{img}</div>
        <div className="flex flex-col justify-evenly ">
          <h1 className="text-3xl font-bold">{title}</h1>
          <h2 className="text-3xl">{law}</h2>
        </div>
      </div>
      <p className="text-3xl">{text}</p>
    </div>
  );
}

export default Flag;
