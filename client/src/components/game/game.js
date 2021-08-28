import { useSelector, useDispatch } from "react-redux";

export default function Game() {
  const dispatch = useDispatch();

  const darkMode = useSelector((state) => state.darkMode);
  const game = useSelector((state) => state.game);

  const handleGameStartStop = (e) => {
    dispatch({
      type: "UPDATE_GAME",
      payload: { ...game, playing: !game.playing },
    });
  };

  return (
    <div className="container text-center">
      <p>
        <span id={`${darkMode ? "section-title-light" : "section-title-dark"}`}>
          Yup, it's a video game
        </span>
        <br />
        <span
          id={`${
            darkMode ? "section-subtitle-light" : "section-subtitle-dark"
          }`}
        >
          Can you you beat the high score?
        </span>
      </p>
      <br />
      <button
        id="btn-medium-width"
        type="button"
        className={`btn btn-outline-secondary btn-lg my-4 ${
          darkMode ? "button-style-light" : "button-style-dark"
        }`}
        onClick={handleGameStartStop}
      >
        Play
      </button>
      <div>
        <table
          id={`${darkMode ? "section-text-light" : "section-text-dark"}`}
          className="table"
        >
          <thead>
            <tr>
              <th scope="col">Rank</th>
              <th scope="col">Player</th>
              <th scope="col">Score</th>
            </tr>
          </thead>
          <tbody>
            {game.leaderBoard.map((item, idx) => (
              <tr key={idx}>
                <th scope="row">{idx + 1}</th>
                <td>{item.player}</td>
                <td>{item.score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
