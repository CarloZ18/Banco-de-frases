import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faMinus } from "@fortawesome/free-solid-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import Swal from "sweetalert2";
import $ from "jquery";
import { messages, colors } from "./Data-and-styles/Database";
import {
  TextStyle,
  AuthorStyle,
  ActionStyle,
  TwitterStyle,
  ContainerStyle,
} from "./Data-and-styles/stylescomponent";

export default function TextComponent() {
  const [text, setText] = useState(0);
  const [color, setColor] = useState(0);

  const frases = messages.map((messages) => (
    <div>
      <FontAwesomeIcon icon={faQuoteLeft} style={{ marginRight: "10px" }} />
      {messages.frase}
    </div>
  ));
  const autores = messages.map((messages) => (
    <div>
      <FontAwesomeIcon
        icon={faMinus}
        style={{ fontSize: "10px", marginRight: "10px" }}
      />
      {messages.autor}
    </div>
  ));

  function nuevoQuoteAnimado() {
    if (text === messages.length - 1) {
      $("#text").text(nuevoQuote);
      $("#author").text(nuevoQuote);
    } else {
      $(".quote-text").animate({ opacity: 0 }, 500, function () {
        $(this).animate({ opacity: 1 }, 500);
        $("#text").text(nuevoQuote);
      });

      $(".quote-author").animate({ opacity: 0 }, 500, function () {
        $(this).animate({ opacity: 1 }, 500);
        $("#author").text(nuevoQuote);
      });

      var randomColor = Math.floor(Math.random() * colors.length);
      setColor(randomColor);
    }

    function nuevoQuote() {
      if (text === messages.length - 1) {
        Swal.fire({
          title: "¡Felicidades!",
          text: "Has culminado las frases diarias",
          icon: "success",
        });
        setText(0);
      } else {
        setText(text + 1);
      }
    }
  }

  return (
    <>
      <style>{"body {background-color:" + colors[color] + ";}"};</style>

      <div className="quote-text">
        <TextStyle id="text"> {frases[text]}</TextStyle>
      </div>

      <div className="quote-author">
        <AuthorStyle id="author"> {autores[text]}</AuthorStyle>
      </div>

      <ContainerStyle>
        <a
          id="tweet-quote"
          target="_blank"
          rel="noreferrer"
          href="https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=%22Dream%20big%20and%20dare%20to%20fail.%22%20Norman%20Vaughan"
        >
          <TwitterStyle id="twitter" className="btn btn-default  ">
            <FontAwesomeIcon icon={faTwitter} />
          </TwitterStyle>
        </a>
        {/*Boton de cambio*/}

        <ActionStyle id="new-quote" onClick={nuevoQuoteAnimado}>
          <strong>Nueva frase</strong>
        </ActionStyle>
      </ContainerStyle>
    </>
  );
}


