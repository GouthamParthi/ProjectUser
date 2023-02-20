import Card from "../reusedComponents/Card";
const UserChat = ({ fullUserList }) => {
  return (
    <div
      className="accordion"
      id="chatAccordion"
      style={{
        width: "18rem",
        float: "right",
        position: "sticky",
        bottom: 0
      }}
    >
      <div className="accordion-item">
        <h2 className="accordion-header" id="chat">
          <button
            className="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne"
            style={{
              position: "relative",
              color: "rgb(255,255,255)",
              backgroundColor: "RGB(44 101 200)",
              borderRadius: "5px",
              height: "40px"
            }}
          >
            Chat
          </button>
        </h2>
        <div
          id="collapseOne"
          className="accordion-collapse collapse show"
          aria-labelledby="chat"
          data-bs-parent="#chatAccordion"
        >
          <div
            className="accordion-body"
            style={{
              padding: "0"
            }}
          >
            {fullUserList ? (
              <div style={{ border: "2px solid RGB(44 101 200)" }}>
                <Card fullUserList={fullUserList} hiddenElements />
              </div>
            ) : (
              <>No Active Chats</>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default UserChat;
