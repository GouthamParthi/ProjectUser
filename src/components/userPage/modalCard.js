import React, { useState } from "react";
import { Link } from "react-router-dom";
import Card from "../reusedComponents/Card";
import "./modalCard.css";

function ModalCard({
  showModal,
  currentUserData,
  fullUserList,
  hiddenElements
}) {
  return (
    <div>
      {showModal && (
        <div
          style={{
            backgroundColor: "rgb(255, 255, 255)",
            borderRadius: "20px",
            boxShadow: "0px 10px 5px rgb(167, 164, 164)",
            overflow: " hidden",
            margin: "10px",
            height: "auto",
            position: "absolute",
            right: "20px"
          }}
        >
          <img
            src={currentUserData.profilepicture}
            style={{ width: "10vh" }}
            className="user-profile"
          />
          <h5>
            <strong>{currentUserData.name}</strong>
          </h5>
          <p>{currentUserData.email}</p>
          <Card
            fullUserList={fullUserList}
            hiddenElements={hiddenElements}
            hiddenForModal
          />
          <Link to="/">
            <button
              style={{
                borderRadius: "20px",
                color: "white",
                width: "90px",
                height: "30px",
                background: "red",
                border: "0"
              }}
            >
              SignOut
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default ModalCard;
