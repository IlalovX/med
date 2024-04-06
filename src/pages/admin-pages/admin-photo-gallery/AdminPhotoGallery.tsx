import { useState, ChangeEvent } from "react";
function AdminPhotoGallery() {
  const [file, setFile] = useState<File | null>(null);
  console.log(file);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };
  return (
    <div className="container mx-auto p-5 space-y-5">
      <div className="flex justify-between  items-center gap-5 ">
        <div className="flex items-center justify-center bg-white h-36 w-full">
          <input type="file" onChange={handleFileChange} />
        </div>
        <div className="grid grid-cols-2 gap-5">
          <div className="flex items-center justify-center bg-white w-full h-32">
            <input type="file" onChange={handleFileChange} />
          </div>
          <div className="flex items-center justify-center bg-white w-full h-32">
            <input type="file" onChange={handleFileChange} />
          </div>
          <div className="flex items-center justify-center bg-white w-full h-32">
            <input type="file" onChange={handleFileChange} />
          </div>
          <div className="flex items-center justify-center bg-white w-full h-32">
            <input type="file" onChange={handleFileChange} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminPhotoGallery;
