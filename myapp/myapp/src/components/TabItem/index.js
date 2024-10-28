import "./index.css";

const TabItem = (props) => {
  const { tabDetails ,updateTabId,isActive} = props;
  const { tabId,displayText } = tabDetails;
  const activeTabClassName=isActive ? "active-tab-btn":"";
  const onClickTabItem=()=>{
  updateTabId(tabId) 
  }
  return (
    <div>
      <button onClick={onClickTabItem} className={`button ${activeTabClassName}`}>{displayText}</button>
      </div>
  );
};

export default TabItem;
