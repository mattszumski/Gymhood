import React, { useState } from "react";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import Navbar from "../../layouts/Navbar";

const UploadPicture = () => {
  const [files, setFiles] = useState([]);
  const axiosPrivate = useAxiosPrivate();

  const fileUploadHandler = (event) => {
    Promise.all(
      Array.from(event.target.files).map(async (file) => {
        file.src = await renderPreview(file);
        return file;
      })
    )
      .then((proccessedImages) => {
        setFiles(proccessedImages);
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
  };

  const handleLoad = (event) => {
    console.log("Loading");
    console.log(event);
  };
  return (
    <div>
      <Navbar />
      <label htmlFor="files">
        <div style={{ border: "1px solid black", width: "300px", padding: "1rem" }}>Upload files</div>
      </label>
      <input type="file" name="files" id="files" multiple accept="image/jpg, image/jpeg, image/png" onChange={fileUploadHandler} hidden />
      {files.length > 0 &&
        files.map((imageFile) => {
          return (
            <div style={{ display: "flex", flexDirection: "column" }}>
              <img src={imageFile.src} width="300" /> Filename: {imageFile.name}
              <button>Delete</button>
            </div>
          );
        })}
      <button onClick={handleSendFiles}>Upload</button>
      {/* <img src={`http://localhost:4000/media/photo.png`} width="300" onLoad={handleLoad} /> */}
    </div>
  );
};

export default UploadPicture;
