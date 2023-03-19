import { OtherProfileBox } from "./styled/OtherProfileBox.styled";
import defaultProfilePic from "../../../assets/default-profile-pic-t.png";
import getConst from "../../../utils/getConsts";
import { NavLink } from "react-router-dom";

const FriendBox = (props) => {
  const { userId, username, firstname, lastname, imgPath } = props.userData;
  return (
    <OtherProfileBox>
      <div className="profile-inner-box">
        <div>
          <NavLink to={`/profile/${userId}`}>
            <img src={imgPath ? getConst("BASE_URL") + imgPath : defaultProfilePic} width="150px" />
          </NavLink>
        </div>
        <h5>{username}</h5>
        {(firstname || lastname) && (
          <h6>
            {firstname} {lastname}
          </h6>
        )}
      </div>
    </OtherProfileBox>
  );
};

export default FriendBox;
