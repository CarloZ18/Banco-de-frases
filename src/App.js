import React, { useState } from "react";
import MainLayout from "./Components/Layout/MainLayout";
import "./index.css";
import $ from "jquery";
import { messages, colors } from "./data-and-styles/database";
import Swal from "sweetalert2";
import MainComponent from "./Components/Text/Text";

export default function App() {
  const [indexText, setIndexText] = useState(0);
  const [indexColor, setIndexColor] = useState(0);

  function nuevoQuoteAnimado() {
    if (indexText === messages.length - 1) {
      Swal.fire(
        "¡Felicidades!",
        "Has culminado las frases diarias",
        "success"
      );
      setIndexText(0);
    } else {
      $(".quote-text").animate({ opacity: 0 }, 500, function () {
        $(this).animate({ opacity: 1 }, 500);
        setIndexText(indexText + 1);
      });

      $(".quote-author").animate({ opacity: 0 }, 500, function () {
        $(this).animate({ opacity: 1 }, 500);
        setIndexText(indexText + 1);
      });

      var randomColor = Math.floor(Math.random() * colors.length);
      setIndexColor(randomColor);
    }
  }
  return (
     <MainLayout>
      <MainComponent
        {...{
          indexColor,
          frase: messages[indexText].frase,
          autor: messages[indexText].autor,
          onClick: nuevoQuoteAnimado,
        }}
      />
    </MainLayout>
  );
}
