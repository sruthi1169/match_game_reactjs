import './index.css'

const MatchGameTabItems = props => {
  const {eachTab, updateTabId, isActive} = props
  const {tabId, displayText} = eachTab
  const onChangeTabId = () => {
    updateTabId(tabId)
  }

  const activeStyle = isActive ? 'activeTab' : null
  return (
    <li className="container-tabItems">
      <button
        onClick={onChangeTabId}
        className={`tab-btn ${activeStyle}`}
        type="button"
      >
        <h1 className="tab-text">{displayText}</h1>
      </button>
    </li>
  )
}
export default MatchGameTabItems
