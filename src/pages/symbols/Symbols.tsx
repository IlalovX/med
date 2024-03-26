import { useParams } from "react-router-dom";
import { SYMBOLS } from "../../constans/data";
import Emblem from "./components/emblem/Emblem";
import Flag from "./components/flag/Flag";
import Anthem from "./components/anthem/Anthem";

function Symbols() {
  const { pages, symbol } = useParams();
  console.log(pages, symbol);

  if (pages !== undefined && symbol !== undefined) {
    const { title, law, author, text, img } =
      SYMBOLS[pages as keyof typeof SYMBOLS][
        symbol as keyof (typeof SYMBOLS)[keyof typeof SYMBOLS]
      ];

    switch (symbol) {
      case "anthem":
        return <Anthem title={title} law={law} author={author} text={text} />;
      case "emblem":
        return <Emblem title={title} law={law} img={img} text={text} />;
      case "flag":
        return <Flag title={title} law={law} img={img} text={text} />;
      default:
        return null;
    }
  }
}

export default Symbols;
