import "./styles/App.css";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header style={"Yatzee!!"}></Header>

      <div className="rectangle"></div>
      <div className="divider"></div>

      <div className="rectangle"></div>
      <div className="divider"></div>

      <div className="rectangle"></div>
      <div className="divider"></div>

      <div className="rectangle"></div>
      <div className="divider"></div>

      <div className="rectangle"></div>
      <div className="divider"></div>

      <div className="rectangle"></div>
      <div className="divider"></div>

      <br></br>
      <button>roll dices</button>

      <br></br>
      <br></br>

      <table class="table table-striped">
        <thead>
          <tr>
            <th>spiller</th>
            <th>tilføj spiller</th>
          </tr>
        </thead>
        <tbody>
          <tr>Enere</tr>
          <tr>toere</tr>
          <tr>treere</tr>
          <tr>firere</tr>
          <tr>femmere</tr>
          <tr>seksere</tr>
          <tr>sum</tr>
          <tr>bonus ≥ 67 point</tr>
        </tbody>
      </table>

      <div class="dropdown">
        <button
          type="button"
          class="btn btn-primary dropdown-toggle"
          data-toggle="dropdown"
        >
          rules
        </button>
        <div class="dropdown-menu">
          <h2 class="dropdown-item">Purpose of the game</h2>
          <p class="dropdown-item">
            In Yatzy the objective is to obtain the highest score by throwing 5
            dice. There are 13 rounds in the game, each round every player rolls
            all 5 dice and the roll is scored in one of 13 categories. You must
            score once in each category and each category is scored with
            different sets of die faces. The game ends when all 13 categories
            have been scored.
          </p>
          <h2 class="dropdown-item">Start</h2>

          <p class="dropdown-item">
            {" "}
            One player rolls all the dice. After rolling, they can score the
            current roll or re-roll any or all of the dice. The player may only
            roll the dice a total of 3 times, after which the player must choose
            a category to score in. The turn then proceeds to the next player.
          </p>

          <h2 class="dropdown-item">Scoring</h2>

          <p class="dropdown-item">
            {" "}
            To score combinations of 5 dice select one of the 13 categories and
            write it on the scorecard. Once a box has been scored, it cannot be
            scored again.
          </p>

          <p class="dropdown-item">
            Upper Section Scoring: If a player chooses to score in the upper
            section the score is the total of the specified die faces. Example:
            You roll three 2s, end your turn and score 6 points in the ‘2’
            category. Bonus: If the total of the Upper Scores is 63 or over, add
            a bonus of 50.
          </p>

          <p class="dropdown-item">
            Lower Section Scoring: Pair: 2 dice with the same faces. The score
            is the total of these two die faces. Two pairs: One pair, and
            another pair of dice with different faces from each other. The score
            is the total of these four die faces. Example: 6+6+5+5=22 3 and 4 of
            a Kind: For 3 of a kind, 3 die faces must be the same; for 4 of a
            kind, 4 must be the same. The score is the total of all the 3 or 4
            dice. Small and Large Straight: A straight is a sequence of
            consecutive die faces; a small straight is made up of die faces
            1-2-3-4-5 and scores 15 points; a large straight is made up of die
            faces 2-3-4-5-6 and scores 20 points. Full House: A Full House as in
            poker is a combination of 3 of a kind and 2 of a kind. The score is
            the total of the die faces. Example: 6+6+6+5+5=28
          </p>

          <p class="dropdown-item">
            Yatzy: Yatzy is 5 of a kind and scores 50 points, but you can choose
            to score the roll in other categories instead. Example: You roll
            6-6-6-6-6. You can choose to score this as a Yatzy (50), 4 of a kind
            (24) or in the Upper Section ‘6’ (30). Chance: Roll anything and put
            it into the Chance category, the score is the total of the die
            faces.
          </p>

          <p class="dropdown-item">
            Zero score: If you cannot score a category after your 3 rolls,
            choose any category and mark 0 points to it.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
