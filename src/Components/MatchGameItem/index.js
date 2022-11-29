import './index.css'

const MatchGameItem = props => {
  const {eachImageDetails, isMatchImage} = props
  const {thumbnailUrl} = eachImageDetails
  const onMatchImage = () => {
    isMatchImage(thumbnailUrl)
  }
  return (
    <li className="container-thumbnails-list">
      <button onClick={onMatchImage} type="button" className="thumbnail-btn">
        <img src={thumbnailUrl} alt="thumbnail" className="thumbnail-image" />
      </button>
    </li>
  )
}
export default MatchGameItem
