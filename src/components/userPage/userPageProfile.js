import { useParams, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import ProfileDetails from "./profileDetails";
import UserPageLayout from "./userPageLayout";
const UserPageProfile = () => {
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
    <>
      <UserPageLayout
        children={<ProfileDetails currentUserData={currentUserData} />}
        currentUserData={currentUserData}
        layoutOf="Profile"
        userId={userIdFromRequest.userId}
        currentPageName={currentPageName}
        fullUserList={fullUserList}
      />
    </>
  );
};
export default UserPageProfile;
