import React, { useState } from "react";
import ReactDom from "react-dom";
import useAxiosPrivate from "../../../hooks/useAxiosPrivate";
import useInputState from "../../../hooks/useInputState";
import { Modal } from "../../../components/styled/Modal.styled";
import { Overlay } from "../../../components/styled/Overlay.styled";
import { PostCreationModal } from "./styled/CreatePostModal.styled";
import UploadPicture from "../../fileHandling/UploadPicture";

const CreatePostModal = (props) => {
  const { refreshFn, closeFn } = props;
  const [text, setText, resetText] = useInputState("");
  const [files, setFiles] = useState([]);
  const axiosPrivate = useAxiosPrivate();

  const handleCreatePost = (event) => {
    console.log(files);
    console.log(text);
    // return;
    const formData = new FormData();
    formData.append("text", text);
    files.forEach((val) => {
      formData.append("files", val, val.name);
    });

    axiosPrivate
      .post("/post/", formData, { headers: { "Content-Type": "multipart/form-data" } })
      .then((result) => {
        resetText();
        refreshFn(true);
      })
      .catch((error) => {
        console.log(error);
      });
    //TODO: do something when success, give information when error
    // axiosPrivate
    //   .post("/post/", { text })
    //   .then((result) => {
    //     resetText();
    //     refreshFn(true);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  };

  return ReactDom.createPortal(
    <>
      <Overlay onClick={closeFn} />
      <Modal>
        <PostCreationModal>
          <div>
            <h4>Add new post</h4>
          </div>
          <div>
            <textarea placeholder="What's on your mind?" onChange={setText} value={text}></textarea>
          </div>
          <div>
            <UploadPicture files={files} setFiles={setFiles} multiple={true} />
          </div>
          <div>
            <button disabled={!text && !files.length} onClick={handleCreatePost}>
              Add post
            </button>
          </div>
        </PostCreationModal>
      </Modal>
    </>,
    document.getElementById("portal")
  );
};

export default CreatePostModal;
