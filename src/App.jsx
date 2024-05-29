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

export const App = () => {
  return (
    <div>
      <HelloWorld bienvenue="Bienvenue mon jeune ami" />
      <Paragraphe message="Je suis un petit paragraphe en props" />
      <Paragraphe message="Je suis le props numéro 2" />
      <Paragraphe message="Et moi le numéro 3" />
    </div>
  );
};
