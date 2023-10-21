import { useDispatch, useSelector } from "react-redux";
import classes from "./App.module.css";
import List from "./Components/List/List";
import InputField from "./Components/List/InputField";
import { leftToRight, rightToLeft } from "./Components/Store/ListAction";

function App() {
  const leftCartData = useSelector((state) => state.left);
  const rightCartData = useSelector((state) => state.right);
  const dispatch = useDispatch()
  return (
    <div>
      <h1>
        <center>List Swapper</center>
      </h1>
      <div className={classes.AppOuter}>
        <div className={classes.leftContainer}>
          <div className={classes.containerInner}>
            <div>
              <center>Task Pending</center>
            </div>
            {leftCartData.map((data) => {
              return (
                <List
                  key={data.id}
                  checked={data.checked}
                  id={data.id}
                  taskPending = {data.taskPending}
                  data={data.task}
                ></List>
              );
            })}
          </div>
        </div>
        <div className={classes.buttonOuter}>
          <button style={{ marginBottom: "100px" }} onClick={()=> {
            dispatch(leftToRight(leftCartData))
          }}>
            <i className="fa-solid fa-arrow-right-long fa-2xl"></i>
          </button>
          <button onClick={() => {
            dispatch(rightToLeft(rightCartData))
          }}>
            <i className="fa-solid fa-arrow-left-long fa-2xl"></i>
          </button>
        </div>
        <div className={classes.rightContainer}>
          <div className={classes.containerInner}>
            <div>
              <center>Task Completed</center>
            </div>
            {rightCartData.map((data) => {
              return (
                <List
                  key={data.id}
                  checked={data.checked}
                  id={data.id}
                  data={data.task}
                  taskPending={data.taskPending}
                ></List>
              );
            })}
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <center>
        <InputField />
      </center>
    </div>
  );
}

export default App;
