import { Link } from "react-router-dom";

const HomeRowDetails = ({ user, hiddenElements, hiddenForModal }) => {
  return (
    <div className="user" key={user.id}>
      <img src={user.profilepicture} className="user-profile" />
      {!hiddenElements || hiddenForModal ? (
        <Link to={`/userpage/profile/${user.id}`}>
          <button className="username-button">{user.name}</button>
        </Link>
      ) : (
        <>
          <button className="username-button">{user.name}</button>
          <div
            style={{
              height: " 5px",
              width: " 5px",
              backgroundColor: "RGB(51 177 107)",
              borderRadius: "50%"
            }}
          ></div>
        </>
      )}
    </div>
  );
};
export default HomeRowDetails;
