import img from "../../assets/images/faculty/Факультет фото.png";
import img1 from "../../assets/images/cabinets/Classroom.png";
import img2 from "../../assets/images/cabinets/Graduation.png";
import img3 from "../../assets/images/cabinets/Library.png";
import img4 from "../../assets/images/cabinets/Practice.png";
function PhotoGallery() {
  return (
    <div className="bg-almost-red ">
      <div className="container mx-auto p-5  text-white space-y-5">
        <h1 className="text-4xl">Фотогалерея</h1>
        <div className="flex gap-5">
          <img src={img} className="object-cover" />
          <div className="grid grid-cols-2 gap-5">
            <img src={img1} alt="" />
            <img src={img2} alt="" />
            <img src={img3} alt="" />
            <img src={img4} alt="" />
          </div>
        </div>
        <div className="flex gap-5">
          <div className="grid grid-cols-2 gap-5">
            <img src={img1} alt="" />
            <img src={img2} alt="" />
            <img src={img3} alt="" />
            <img src={img4} alt="" />
          </div>
          <img src={img} className="object-cover" />
        </div>
      </div>
    </div>
  );
}

export default PhotoGallery;
