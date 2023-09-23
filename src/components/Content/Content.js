 
import "./Content.css";
import Dashboard from "../Dashboard/Dashboard";
import UseBar from "../../Hooks/UseBar";

const Content = () => {
  const [newValue] = UseBar(); 
 console.log(newValue);
  return (
    <div className={`${newValue ? 'content_container_2' : 'content_container_1'}`}>
      <Dashboard></Dashboard>
    </div>
  );
};

export default Content;
