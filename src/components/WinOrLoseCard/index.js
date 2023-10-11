// Write your code here.
import './index.css'

const loseImage = 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
const winImage = 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'

const WinOrLoseCard = props => {
  const {isWon, onClickPlayAgain, score} = props
  const imageUrl = isWon ? winImage : loseImage
  const gameStatus = isWon ? 'You Won' : 'You Lose'
  const scoreLabel = isWon ? 'Best SCore' : 'Score'

  return (
    <div className="win-or-lose-card">
      <div className="details-card">
        <h1 className="game-status">{gameStatus}</h1>
        <p className="score-label">{scoreLabel}</p>
        <p className="score">{score}/12</p>
        <button
          className="play-again-btn"
          type="button"
          onClick={onClickPlayAgain}
        >
          Play Again
        </button>
      </div>
      <div className="img-section">
        <img src={imageUrl} alt="win or lose" />
      </div>
    </div>
  )
}
export default WinOrLoseCard
