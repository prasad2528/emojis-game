import './index.css'

const NavBar = props => {
  const {currentScore, isGameInProgress, topScore} = props
  return (
    <nav className="nav-container">
      <div className="score-container">
        <div className="image-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
            alt="emoji logo"
          />
          <h1 className="heading">Emoji Game</h1>
        </div>
        {isGameInProgress && (
          <div className="score-card">
            <p>Score: {currentScore}</p>
            <p>Top Score: {topScore}</p>
          </div>
        )}
      </div>
    </nav>
  )
}
export default NavBar
