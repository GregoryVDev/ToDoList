import React, { useState, useEffect } from "react";

export const TitleUpdater = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Count: ${count}`; // Permet de modifier le title du HTML à chaque fois que "count" change
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>{" "}
      {/* Permet d'incrémenter de 1 à chaque fois ce qu'il mettra à jour le title du HTML  */}
    </div>
  );
};

export const DataFetcher = () => {
  const [data, setData] = useState(null); // On fait une initialisation de "data" à "null"

  // On utilise 'fetch' pour récupérer des données de l'API
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json()) // Convertir la réponse en JSON
      .then((data) => setData(data)); // Mettre à jour 'data' avec les données reçues
  }, []); // Tableau de dépendances est vide ce qui veut dire qu'il sera exécuter uniquement une fois lors du rendu de la page

  return (
    <div>
      {data ? ( // On vérifie si la valeur est null
        <pre>{JSON.stringify(data, null, 2)}</pre> // Afficher les données
      ) : (
        "Loading..."
      )}
      {/* Affiche "Loading..." si 'data est encore null */}
    </div>
  );
};

export const WindowWidth = () => {
  const [width, setWidth] = useState(window.innerWidth); // On créé une const avec comme valeur "width". La valeur initiale de "width" est définie sur sa largeur actuelle (la fenêtre du navigateur) avec useState(window.innerWidth)

  useEffect(() => {
    // La fonction handleResize est définie pour mettre à jour la largeur de la page lorsque la fenêtre est redimensionnée.
    const handleResize = () => {
      // On met à jour la largeur en utilisant la valeur actuelle de window.innerWidth
      setWidth(window.innerWidth);
    }; //

    // On ajoute un écouteur d'évenements pour l'événement "resize" (redimensionnement de la fenêtre) qui appel la fonction handleResize lorsque la fenêtre est redimensionnée

    window.addEventListener("resize", handleResize);

    // La fonction 'return' est exécutée quand le composant est démonté

    return () => {
      // La fonction supprime l'écouteur d'évenements pour éviter les fuites de mémoire
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Tableau vide du coup on déclenche uniquement une fois après le rendu de la page

  return (
    <div>
      <p>Window width {width}</p>
    </div>
  );
};

export const Account = () => {
  const [duration, setDuration] = useState(5); // On créé une const duration qui stock "5" setDuration permet de mettre à jour ce qu'il y a dans duration
  const [secondsLeft, setSecondsLeft] = useState(duration); // On créé une autre const appellée secondsLeft qui stock le useState (donc 5) et "setDuration" permet de mettre à jour ce qu'il y a dans secondsLeft

  useEffect(() => {
    setSecondsLeft(duration); // Permet de mettre à jour "setSecondsLeft" avec la valeur actuelle de "duration"
    const timer = setInterval(() => {
      setSecondsLeft((v) => v - 1); // On décrémente secondsLeft de 1
    }, 1000); // On met à jours toutes les 1 secondes

    // On retourne une fonction de nettoyage qui arrête le minuteur quand le composant est démonté ou "duration" a changé
    return () => {
      clearInterval(timer);
    };
  }, [duration]); // Le useEffect se déclenche uniquement quand "duration" change

  return (
    <div className="vstack gap-2">
      <input value={duration} onChange={setDuration} placeholder="Timer..." />
      <p>Décompte : {secondsLeft}</p>
    </div>
  );
};
