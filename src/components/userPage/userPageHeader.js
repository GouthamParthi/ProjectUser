const UserPageHeader = ({ currentUserData, layoutOf, handleOpenModal }) => {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <h5 style={{ marginTop: "13px" }}>
        <strong>{layoutOf}</strong>
      </h5>
      <div style={{ marginTop: "6px" }}>
        {currentUserData ? (
          <>
            <img
              src={currentUserData.profilepicture}
              className="user-profile"
            />

            <button onClick={handleOpenModal} className="username-button">
              {currentUserData.name}
            </button>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default UserPageHeader;
