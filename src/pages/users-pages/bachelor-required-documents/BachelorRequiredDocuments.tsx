import img from "../../../assets/images/image 34.png";
function BachelorRequiredDocuments() {
  return (
    <div className="container mx-auto p-5 space-y-5">
      <h1 className="text-2xl sm:text-4xl font-bold">
        Перечень необходимых документов
      </h1>
      <p className="text-xl sm:text-2xl">
        Вопрос интересующий многих: Какие именно требуются документы для сдачи в
        ВУЗ? ОТВЕТ: В процессе сдачи документов в ВУЗ требуются следующие
        документы: Паспорт Свидетельство или диплом ( документ об окончании
        учебного заведения) Документ, представляющий какую-либо привилегию (если
        имеется) ПОМНИТЕ: С Вас не требуется подлинник или сканер документов. Вы
        должны будете внести в онлайн систему лишь только данные документов.
      </p>
      <img src={img} className="w-full min-h-[150px] max-h-[450px]" />
    </div>
  );
}

export default BachelorRequiredDocuments;
