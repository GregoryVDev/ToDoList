export const ByeWorld = ({ bye, color, background, weight = 600 }) => {
  return (
    <div>
      <h2
        style={{
          color: color,
          backgroundColor: background,
          fontWeight: weight,
        }}
      >
        {bye}
      </h2>
    </div>
  );
};

export const Titreh3 = () => {
  return (
    <div>
      <h3>Coucou</h3>
    </div>
  );
};
