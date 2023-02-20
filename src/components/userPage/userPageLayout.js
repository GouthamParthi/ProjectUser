import SideBar from "./sideBar";
import UserPageHeader from "./userPageHeader";
import "./userPageLayout.css";
import ModalCard from "./modalCard";
import HomeRowDetails from "../reusedComponents/homeRowDetails";
import UserChat from "./userChat";
import { useState } from "react";
const UserPageLayout = ({
  currentUserData,
  currentPageName,
  userId,
  children,
  layoutOf,
  fullUserList
}) => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(!showModal);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="container userPageLayout">
      <div className="row">
        <div className="col-3" style={{ position: "fixed" }}>
          <SideBar userId={userId} currentPageName={currentPageName} />
        </div>
        <div className="col-9" style={{ marginLeft: "19vw" }}>
          <div className="row">
            <UserPageHeader
              layoutOf={layoutOf}
              currentUserData={currentUserData}
              style={{ position: "sticky", top: "0px" }}
              fullUserList={fullUserList}
              handleOpenModal={handleOpenModal}
              handleCloseModal={handleCloseModal}
            />
          </div>

          <ModalCard
            showModal={showModal}
            fullUserList={fullUserList}
            hiddenElements
            currentUserData={currentUserData}
          />

          <hr
            style={{
              width: "100%"
            }}
          />
          {children}
        </div>
      </div>
      {layoutOf == "Profile" ? <UserChat fullUserList={fullUserList} /> : null}
    </div>
  );
};
export default UserPageLayout;
