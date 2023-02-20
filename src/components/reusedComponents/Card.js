import "./Card.css";
import { Link } from "react-router-dom";

import HomeRowDetails from "./homeRowDetails";
const Card = ({ fullUserList, hiddenElements, hiddenForModal }) => {
  return (
    <>
      <div
        style={
          !hiddenElements
            ? {
                backgroundColor: "rgb(255, 255, 255)",
                borderRadius: "20px",
                boxShadow: "0px 10px 5px rgb(167, 164, 164)",
                overflow: " hidden",
                margin: "10px",
                width: "33rem",
                height: "36rem"
              }
            : {
                paddingLeft: "10px",
                backgroundColor: "rgb(255, 255, 255)"
              }
        }
      >
        <div className={!hiddenElements ? "card-title" : "cardChatTitle"}>
          <h3>Select an acount</h3>
        </div>
        {fullUserList ? (
          <div
            style={hiddenElements ? { margin: "0" } : null}
            className="usernames"
          >
            {/* {user.profilepicture} "user.name"*/}

            {fullUserList.map((user) => {
              return (
                <>
                  <HomeRowDetails
                    user={user}
                    hiddenElements={hiddenElements}
                    hiddenForModal={hiddenForModal}
                    key={user.id}
                  />
                  {!hiddenElements ? (
                    <hr
                      style={{
                        width: "90%"
                      }}
                    />
                  ) : null}
                </>
              );
            })}
          </div>
        ) : (
          <h2>Loading....</h2>
        )}
      </div>
    </>
  );
};

export default Card;
