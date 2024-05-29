// import "./App.css";
// import { Section } from "./Section";

// function App() {
//   return (
//     <div>
//       <Section />
//     </div>
//   );
// }

import { HelloWorld } from "./HelloWorld";
import { Paragraphe } from "./Paragraphe";
import { ByeWorld } from "./ByeWorld";

export const App = () => {
  return (
    <div>
      <HelloWorld bienvenue="Bienvenue mon jeune ami" />
      <Paragraphe message="Je suis un petit paragraphe en props" color="blue" />
      <Paragraphe message="Je suis le props numéro 2" color="green" />
      <Paragraphe message="Et moi le numéro 3" color="red" />
      <ByeWorld bye="Je te dis Bye bye" color="salmon" />
      <ByeWorld bye="Je te dis au revoir" color="pink" />
      <ByeWorld bye="Je te dis bisous" color="yellowgreen" />
    </div>
  );
};
