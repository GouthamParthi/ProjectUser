import ComingSoon from "../reusedComponents/ComingSoon";
import UserPageLayout from "./userPageLayout";
import axios from "axios";
import { useParams, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
const UserPagePosts = () => {
  const userIdFromRequest = useParams();
  const [fullUserList, setFullUserList] = useState();
  const [currentUserData, setcurrentUserData] = useState();
  const currentPageName = useLocation().pathname.split("/")[2];
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
      layoutOf="Posts"
      children={<ComingSoon />}
      currentUserData={currentUserData}
      userId={userIdFromRequest.userId}
      currentPageName={currentPageName}
      fullUserList={fullUserList}
    />
  );
};
export default UserPagePosts;
