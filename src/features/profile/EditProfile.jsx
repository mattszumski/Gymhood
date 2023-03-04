import { useState, useEffect, useRef } from "react";
import useAuth from "../../hooks/useAuth";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import useToggle from "../../hooks/useToggle";
import EditableFormRow from "../../layouts/EditableFormRow";
import Navbar from "../../layouts/Navbar";

const EditProfile = () => {
  function usePrevious(value) {
    const ref = useRef();
    useEffect(() => {
      ref.current = value;
    });
    return ref.current;
  }
  //get profile
  const [profileData, setProfileData] = useState({});
  const [editMode, setEditMode] = useToggle(false);
  const axiosPrivate = useAxiosPrivate();
  const firstUpdate = useRef(true);
  const { auth } = useAuth();

  useEffect(() => {
    axiosPrivate
      .get(`/user/profile/${auth.userId}`)
      .then((result) => {
        setProfileData(result.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleProfileFieldChange = (event) => {
    const { name, value } = event.target;
    setProfileData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }
    if (!editMode) {
      const { id, gym, city, about, interests } = profileData;
      axiosPrivate
        .patch(`/user/profile/${auth.userId}`, { id, gym, city, about, interests })
        .then((result) => {
          console.log(result);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [editMode]);

  // check if any of the fields has been edited, send request only when any of the fields has been changed
  return (
    <>
      <Navbar />
      <style>
        {`.container {
        display: flex;
        justify-content: center;
        width: 100vw;
        }
        .left {
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          min-width: 15vw;
        }
        .form-row {
          display: flex;
          flex-direction: row;
          justify-content: space-around;
        }
    }`}
      </style>
      <div className="container">
        <div className="left">
          <EditableFormRow name="city" isEdit={editMode} value={profileData.city} changeFunction={handleProfileFieldChange} />
          <EditableFormRow name="gym" isEdit={editMode} value={profileData.gym} changeFunction={handleProfileFieldChange} />
          <EditableFormRow name="about" isEdit={editMode} value={profileData.about} changeFunction={handleProfileFieldChange} />
          <EditableFormRow name="interests" isEdit={editMode} value={profileData.interests} changeFunction={handleProfileFieldChange} />
        </div>
        <div className="right">
          <button onClick={setEditMode}>{editMode ? "Save" : "Edit"}</button>
        </div>
      </div>
    </>
  );
};

export default EditProfile;
