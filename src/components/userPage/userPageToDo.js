import ComingSoon from "../reusedComponents/ComingSoon";
import UserPageLayout from "./userPageLayout";
import axios from "axios";
import { useParams, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
const UserPageToDo = () => {
  const userIdFromRequest = useParams();
  const [fullUserList, setFullUserList] = useState();
  // https://something.com/userPage/todo/userId
  const currentPageName = useLocation().pathname.split("/")[2];
  //currentUrlPathName=>/userPage/todo/userId split the string an get index 2 of currentPage to get todo

  const [currentUserData, setcurrentUserData] = useState();
  const fetchUserList = async () => {
    const response = await axios.get("https://panorbit.in/api/users.json");
    setFullUserList(response.data.users);
    const filteredUser = response.data.users.filter((user) => {
      return user.id == userIdFromRequest.userId;
    });
    setcurrentUserData(...filteredUser);
  };
  useEffect(() => {
    const handlefetch = async () => {
      await fetchUserList();
    };
    handlefetch();
  }, [userIdFromRequest.userId]);
  return (
    <UserPageLayout
      layoutOf="ToDo"
      children={<ComingSoon />}
      currentUserData={currentUserData}
      userId={userIdFromRequest.userId}
      currentPageName={currentPageName}
      fullUserList={fullUserList}
    />
  );
};
export default UserPageToDo;
