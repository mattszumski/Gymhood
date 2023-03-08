import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import Navbar from "../../layouts/Navbar";
import ImagePreview from "./components/imagePreview";
import { UploadFormContainer } from "./components/styled/UploadForm.styled";

//TODO:
// Component will be used in several places (profile, posts, adding profile picture(?))
// what parameters will be best for input?
// 1. callback function after sucess
// 2. userId, for sending data
// 3. ???

const UploadPicture = () => {
  const [files, setFiles] = useState([]);
  const axiosPrivate = useAxiosPrivate();

  const fileUploadHandler = (event) => {
    Promise.all(
      Array.from(event.target.files).map(async (file) => {
        file.src = await renderPreview(file);
        file.tempId = uuid();
        return file;
      })
    )
      .then((proccessedImages) => {
        // setFiles(proccessedImages);
        setFiles((prev) => {
          return [...prev, ...proccessedImages];
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const renderPreview = (imageFile) => {
    return new Promise((resolve, reject) => {
      const fr = new FileReader();
      fr.onerror = reject;
      fr.onload = (e) => {
        // resolve((imageFile.src = e.target.result));
        resolve((imageFile.src = fr.result));
      };
      fr.readAsDataURL(imageFile);
    });
  };

  const handleSendFiles = (event) => {
    event.preventDefault();

    const formData = new FormData();
    files.forEach((val) => {
      formData.append("files", val, val.name);
    });

    console.log(formData);

    axiosPrivate.post("/file/", formData, { headers: { "Content-Type": "multipart/form-data" } });
    //TODO: do something when success, give information when error
  };

  const handleRemove = (tempId) => {
    setFiles((prev) => {
      return prev.filter((file) => {
        return file.tempId !== tempId;
      });
    });
  };

  return (
    <div>
      <Navbar />
      <UploadFormContainer>
        <label htmlFor="files">Click to upload</label>
      </UploadFormContainer>
      <input type="file" name="files" id="files" multiple accept="image/jpg, image/jpeg, image/png" onChange={fileUploadHandler} hidden />
      {files.length > 0 &&
        files.map((imageFile) => {
          return <ImagePreview key={imageFile.tempId} imageFile={imageFile} handleRemove={handleRemove} />;
        })}
      <button onClick={handleSendFiles}>Upload</button>
    </div>
  );
};

export default UploadPicture;
