// import "./App.css";
// import { Section } from "./Section";
import React from "react";
import { ToggleButton } from "./ByeWorld";

function App() {
  return (
    <div>
      <ToggleButton />
    </div>
  );
}

export default App;

import { HelloWorld } from "./HelloWorld";
import { Paragraphe } from "./Paragraphe";
import { ByeWorld, Description, Titreh3 } from "./ByeWorld";

export const App = () => {
  return (
    <div>
      <HelloWorld bienvenue="Bienvenue mon jeune ami" />
      <HelloWorld
        sante="Comment vas-tu aujourd'hui ?"
        color="cyan"
        background="red"
      />
      <Paragraphe message="Je suis un petit paragraphe en props" color="blue" />
      <Paragraphe message="Je suis le props numéro 2" color="green" />
      <Paragraphe message="Et moi le numéro 3" color="red" />
      <ByeWorld bye="Je te dis Bye bye" color="salmon" />
      <ByeWorld bye="Je te dis au revoir" color="pink" />
      <ByeWorld bye="Je te dis bisous" color="yellowgreen" />
      <ByeWorld bye="Si tu me fais du sale" color="white" background="grey" />
      <ByeWorld bye="bye bye" />
      <Titreh3 />
      <Description descripte="Je décris ce que je fais, là j'ai fais plusieurs composants pour apprendre, puis on pratique, mieux on apprend" />
    </div>
  );
};
