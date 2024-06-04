import "./App.css";
import React, { useEffect, useState } from "react";

export function ToggleButton() {
  const [isOn, setIsOn] = useState(false);

  return (
    <button onClick={() => setIsOn(!isOn)} className="button-edited">
      {isOn ? "ON" : "OFF"}
    </button>
  );
}

export function Counter() {
  const [count, setCount] = useState(0);
  {
    /* On a créé une const "count" avec une fonction appelée "setText" qui commencera à 0 avec useState et se mettra à jour à chaque fois que j'appuyerais sur <button> */
  }

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>
        {/* On a créé un bouton pour ajouter 1 et qui sera stocké dans le setCount ce qui actualisera le useState */}
        Incrémenter
      </button>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count - 1)} className="button-edited">
        {/* On a créé un bouton qui retire 1 et qui sera stocké également dans le setCount ce qui actualisera le useState */}
        Décrémenter
      </button>
      {/* On a créé un bouton qui retire 1 et qui sera stocké également dans le setCount ce qui actualisera le useState */}
    </div>
  );
}

export function TextInput() {
  const [text, setText] = useState("");
  {
    /* On a créé une const appelée "text" avec une fonction appelée "setText" et grâce à useState on peut le mettre à jour. Les chaine "" vide c'est pour initialiser "text" pour pouvoir ajouter ce qu'on souhaite à la place */
  }

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)} // On créé un évent "onChange" et est déclenché chaque fois que la valeur de l'input est changé. On utilise une fonction fléchée qui prend un évent (e) et met à jour "text" avec la nouvelle valeur qui sera stockée dans "setText"
      />
      <p>Vous avez tapé : {text}</p>
    </div>
  );
}

export const TextValue = () => {
  const [textValue, setTextValue] = useState("");
  const handleReset = () => {
    setTextValue(""); // On créé un handleReset avec un setTextValue("") avec des chaines vides pour reset le champ de texte
  };

  // useEffect qui affiche une alert si textValue change
  useEffect(() => {
    // if textValue n'est pas vide
    if (textValue !== "") {
      // on lance l'alert
      alert("Vous avez tapé quelque chose!");
    }
  }, [textValue]); // Le tableau de dépendances assure que useEffect surveille bien textValue et si ya un changement dessus, le useEffect s'active

  return (
    <div>
      <input
        type="text"
        value={textValue}
        onChange={(e) => setTextValue(e.target.value)}
      />
      <button onClick={handleReset}>Reset</button>
      {/* Permet de réinitialiser le champs de texte*/}
      <p>Vous avez tapé : {textValue}</p>
    </div>
  );
};

export const CountValue = () => {
  const [count, setCount] = useState(0);
  const handleReset = () => {
    setCount(0);
  };

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Incrémenter</button>
      <button onClick={handleReset}>Reset</button>
      <p>{count}</p>
    </div>
  );
};
