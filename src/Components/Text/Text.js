
import {
  TextStyle,
  AuthorStyle,
  ActionStyle,
  TwitterStyle,
  ContainerStyle
} from "../../data-and-styles/stylescomponent";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faMinus } from "@fortawesome/free-solid-svg-icons";
import { colors } from "../../data-and-styles/database";

export default function MainComponent({ indexColor, frase, autor, onClick }) {
  return (
    <>
     <style>{"body { background-color:" + colors[indexColor] + ";}"}</style>
      <div className="quote-text">
        <TextStyle id="text" indexColor={indexColor}>
          <div>
            <FontAwesomeIcon
              icon={faQuoteLeft}
              style={{ marginRight: "10px" }}
            />
            {frase}
          </div>
        </TextStyle>
      </div>

      <div className="quote-author">
        <AuthorStyle id="author" indexColor={indexColor}>
          <div>
            <FontAwesomeIcon
              icon={faMinus}
              style={{ fontSize: "10px", marginRight: "10px" }}
            />
            {autor}
          </div>
        </AuthorStyle>
      </div>

      <ContainerStyle>
        <a
          id="tweet-quote"
          target="_blank"
          rel="noreferrer"
          href="https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=%22Dream%20big%20and%20dare%20to%20fail.%22%20Norman%20Vaughan"
        >
          <TwitterStyle id="twitter" className="btn btn-default" indexColor={indexColor}>
            <FontAwesomeIcon icon={faTwitter} />
          </TwitterStyle>
        </a>
        <ActionStyle id="new-quote" indexColor={indexColor} onClick={onClick}>
          <strong>Nueva frase</strong>
        </ActionStyle>
      </ContainerStyle>
    </>
  );
}
