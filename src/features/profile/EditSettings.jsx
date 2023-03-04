import { useState, useEffect, useRef } from "react";
import useAuth from "../../hooks/useAuth";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import useToggle from "../../hooks/useToggle";
import EditableFormRow from "../../layouts/EditableFormRow";
import Navbar from "../../layouts/Navbar";

const EditSettings = () => {
  //get settings
  const [settingsData, setSettingsData] = useState({});
  const [editMode, setEditMode] = useToggle(false);
  const axiosPrivate = useAxiosPrivate();
  const firstUpdate = useRef(true);
  const { auth } = useAuth();

  useEffect(() => {
    axiosPrivate
      .get(`/user/settings/${auth.userId}`)
      .then((result) => {
        setSettingsData(result.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleSettingsFieldChange = (event) => {
    const { name, value } = event.target;
    setSettingsData((prev) => {
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
      const { id, language } = settingsData;
      axiosPrivate
        .patch(`/user/settings/${auth.userId}`, { id, language })
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
          <EditableFormRow name="language" isEdit={editMode} value={settingsData.language} changeFunction={handleSettingsFieldChange} />
        </div>
        <div className="right">
          <button onClick={setEditMode}>{editMode ? "Save" : "Edit"}</button>
        </div>
      </div>
    </>
  );
};

export default EditSettings;
