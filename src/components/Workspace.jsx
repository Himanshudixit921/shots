import styles from "./workspace.module.css";
import CanvasBar from "./CanvasBar";
import SideBar from "./SideBar";
const RightBar = () => {
  return (
    <div className={styles.workspacecontainer}>
      <div className={styles.CanvasBarContainer} id="CanvasBarContainer">
        <CanvasBar />
      </div>
      <div className={styles.SideBarContainer}>
        <SideBar />
      </div>
    </div>
  );
};

export default RightBar;
