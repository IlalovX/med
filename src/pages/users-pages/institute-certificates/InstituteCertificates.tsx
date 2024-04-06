import Certificate1 from "../../../assets/images/certificates/Rectangle 239.png";
import Certificate2 from "../../../assets/images/certificates/Rectangle 240.png";

function InstituteCertificates() {
  return (
    <div className="container mx-auto p-5 space-y-5">
      <h1 className="text-2xl sm:text-4xl mb-10 font-bold">
        Институтские лицензии и свидетельства об аккредитации
      </h1>
      <img src={Certificate1} className="w-full max-h-[600px]" />
      <img src={Certificate2} className="w-full h-[600px]" />
    </div>
  );
}

export default InstituteCertificates;
