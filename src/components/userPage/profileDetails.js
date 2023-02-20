import LazyLoad from "react-lazyload";
import "./profileDetails.css";
// {
//   "id": 1,
//   "name": "Leanne Graham",
//   "username": "Bret",
//   "email": "Sincere@april.biz",
//   "profilepicture": "https://panorbit.in/wp-content/uploads/2019/hotlink-ok/1001.jpeg",
//   "address": {
//       "street": "Kulas Light",
//       "suite": "Apt. 556",
//       "city": "Gwenborough",
//       "zipcode": "92998-3874",
//       "geo": {
//           "lat": "-37.3159",
//           "lng": "81.1496"
//       }
//   },
//   "phone": "1-770-736-8031 x56442",
//   "website": "hildegard.org",
//   "company": {
//       "name": "Romaguera-Crona",
//       "catchPhrase": "Multi-layered client-server neural-net",
//       "bs": "harness real-time e-markets"
//   }
const ProfileDetails = ({ currentUserData }) => {
  return (
    <>
      {currentUserData ? (
        <div className="row profileDetails">
          <div className="col-lg-4 ">
            <>
              <img
                src={currentUserData.profilepicture}
                style={{ width: "25vh" }}
                className="user-profile"
              />
              <h5>
                <strong>{currentUserData.name}</strong>
              </h5>
              <p>
                UserName:<strong>{currentUserData.username}</strong>
              </p>
              <p>
                email:<strong>{currentUserData.email}</strong>
              </p>
              <p>
                Phone:<strong>{currentUserData.phone}</strong>
              </p>
              <p>
                Website:<strong>{currentUserData.website}</strong>
              </p>
              <hr />
              <header className="header">Company</header>
              <p>
                Name:<strong>{currentUserData.company.name}</strong>
              </p>
              <p>
                catchPhrase:
                <strong>{currentUserData.company.catchPhrase}</strong>
              </p>
              <p>
                bs:<strong>{currentUserData.company.bs}</strong>
              </p>
            </>
          </div>
          <div className="col-lg-1 " id="verticalLine"></div>
          <div className="col-lg-7 ">
            <header className="header"> Address</header>
            <p>
              Street:<strong>{currentUserData.address.street}</strong>
            </p>
            <p>
              Suite:<strong>{currentUserData.address.suite}</strong>
            </p>
            <p>
              City:<strong>{currentUserData.address.city}</strong>
            </p>
            <p>
              Zipcode:<strong>{currentUserData.address.zipcode}</strong>
            </p>
            <LazyLoad>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15554.844779785295!2d77.5952535!3d12.9262745!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x10eefde49e9fd94!2sPanorbit!5e0!3m2!1sen!2sin!4v1676744503764!5m2!1sen!2sin"
                width="100%"
                height="350"
                style={{ borderRadius: "20px" }}
                loading="lazy"
              ></iframe>
            </LazyLoad>
          </div>
        </div>
      ) : null}
    </>
  );
};
export default ProfileDetails;
