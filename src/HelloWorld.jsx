export const HelloWorld = ({ bienvenue, sante, color, background }) => {
  return (
    <div>
      <h1>{bienvenue}</h1>
      <h2 style={{ color: color, backgroundColor: background }}>{sante}</h2>
    </div>
  );
};
