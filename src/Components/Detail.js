// import { useState } from "react";

const Detail = ({
  word,
  definitions1,
  definitions2,
  definitions3,
  partOfSpeech,
  phonetics,
}) => {
  console.log(phonetics);
  const myTimeout = setTimeout(myGreeting, 300);

  function myGreeting() {
    document.getElementById("audio").innerHTML = `voice:-
      <audio controls>
        <source src=${phonetics} type="audio/ogg"></source>
        <source src=${phonetics} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>`;
  }
  return (
    <div>
      Word:-" {word}" <br />
      definitions 1 :- " {definitions1}" <br />
      definitions 2 :- " {definitions2}" <br />
      definitions 3 :- " {definitions3}" <br />
      Part Of Speech:-" {partOfSpeech}" <br />
      <p id="audio"></p>
      <br />
    </div>
  );
};

export default Detail;
