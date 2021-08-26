import Header from "./Header";
import ProjectDescription from "./ProjectDescription";
import {  useDispatch } from "react-redux";



const Home = () => {

    return (
        <div>
          <Header />
          <ProjectDescription />
        </div>
      );
}
 
export default Home;