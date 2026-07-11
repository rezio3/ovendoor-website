import "./StartView.scss";

const StartView = () => {
  return (
    <div className="start-view-wrapper">
      <h2 className="text-yellow" style={{ fontSize: 32, fontWeight: 400 }}>
        JAKOŚĆ NA PIERWSZYM MIEJSCU!
      </h2>
      <h1
        className="text-yellow"
        style={{ fontSize: 32, fontWeight: 700, marginTop: 4 }}
      >
        PIZZA PROSTO Z PIECA
      </h1>
      <span
        style={{
          fontWeight: 600,
          fontSize: 22,
          letterSpacing: 1,
          marginTop: 16,
        }}
      >
        Zapraszamy codziennie w godzinach 12:00 - 21:00.
      </span>
    </div>
  );
};

export default StartView;
