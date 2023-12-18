import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Detail from "./Components/Detail";

function App() {
  const [inputText, setInputText] = useState("welcome");
  const [searchresult, setSearchresult] = useState();

  useEffect(() => {
    const Callfun = async () => {
      const response = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${inputText}`
      ).then((response) => response.json());
      setSearchresult(response[0]);
      console.log("searchresult_1", searchresult);
    };
    Callfun();
  }, [inputText]);

  const SearchBardata = (e) => {
    setInputText(e.target.value);
  };

  console.log("searchresult_X", searchresult);

  return (
    <div className="App">
      <Navbar />
      <div className="searchbar">
        <input
          type="search"
          id="search"
          placeholder="Search"
          onChange={SearchBardata}
          value={inputText}
        />
        <button>Search</button>
        <p>Your input: {inputText}</p>
      </div>
      <Detail
        word={searchresult?.word}
        definitions1={searchresult?.meanings[0]?.definitions[0]?.definition}
        definitions2={searchresult?.meanings[0]?.definitions[1]?.definition}
        definitions3={searchresult?.meanings[0]?.definitions[2]?.definition}
        partOfSpeech={searchresult?.meanings[0]?.partOfSpeech}
        phonetics={searchresult?.phonetics[1]?.audio}
      />
    </div>
  );
}

export default App;
