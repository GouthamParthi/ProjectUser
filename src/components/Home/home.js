import { useEffect, useState } from "react";
import axios from "axios";
import Card from "../reusedComponents/Card";
import "./home.css";
//this is home ..>users enters here
const Home = () => {
  const [fullUserList, setfullUserList] = useState();
  // fullUserList consist of full data fetched from api
  const fetchfullUserList = async () => {
    const response = await axios.get("https://panorbit.in/api/users.json");

    setfullUserList(response.data.users);
  };
  useEffect(() => {
    const handlefetch = async () => {
      await fetchfullUserList();
    };
    handlefetch();
  }, []);
  return (
    <div className="home">
      <Card fullUserList={fullUserList} hiddenElements={false} />
      {/*hiddenElements= indicates reusing of card component for chat box with some elements hidden
       */}
    </div>
  );
};

export default Home;
