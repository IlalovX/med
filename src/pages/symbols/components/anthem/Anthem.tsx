function Anthem({
  title,
  law,
  author,
  text,
}: {
  title: string;
  law: string;
  author: string;
  text: string;
}) {
  return (
    <div className="container mx-auto py-7 space-y-10">
      <h1 className="text-5xl font-bold text-center">{title}</h1>
      <h2 className="text-3xl">{law}</h2>
      <h3 className="text-3xl font-bold text-end">{author}</h3>
      <pre className="text-3xl">{text}</pre>
    </div>
  );
}

export default Anthem;
