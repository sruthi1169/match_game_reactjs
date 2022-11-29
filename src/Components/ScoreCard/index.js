import './index.css'

const ScoreCard = props => {
  const {onRest, initialScore} = props
  const onRestGame = () => {
    onRest()
  }
  return (
    <div className="score-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
        alt="trophy"
        className="trophy-img"
      />
      <p className="score-title">YOUR SCORE</p>
      <p className="score-value">{initialScore}</p>
      <button onClick={onRestGame} type="button" className="reset-btn">
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
          alt="reset"
          className="rest-img"
        />
        PLAY AGAIN
      </button>
    </div>
  )
}
export default ScoreCard
