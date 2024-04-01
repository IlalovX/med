import img from "../../assets/images/Rectangle 5.png";
function MemoMag() {
  return (
    <div className="container mx-auto p-5 space-y-5">
      <h1 className="text-2xl sm:text-4xl font-bold">Памятка абитуриента</h1>
      <p className="text-xl sm:text-2xl">
         С 1 июля 2023 года начался процесс онлайн-регистрации документов для
        поступления на специальности магистратуры высших учебных заведений
        республики.   Процесс приёма документов для поступления на специальности
        магистратуры государственных высших учебных заведений на
        2023/2024 учебный год продолжится до 30 июля (30 июля включительно)
        через официальный сайт министерства по адресу magistr.edu.uz.
          Напоминаем, что начиная с 2022/2023 учебного года приём в магистратуру
        осуществляется на основании среднего балла диплома бакалавра абитуриента
        и балла соответствующего национального или международного сертификата об
        уровне знаний иностранного языка, строго соблюдая последовательность
        баллов. Дополнительных испытаний проводиться не будет.   В этой связи
        лица, имеющие национальные или международные сертификаты о знаний
        иностранного языка соответствующего уровня, смогут участвовать в
        конкурсах по специальностям магистратуры и послевузовского образования.
      </p>
      <img src={img} className="w-full min-h-[160px] max-h-[600px]" />
    </div>
  );
}

export default MemoMag;
