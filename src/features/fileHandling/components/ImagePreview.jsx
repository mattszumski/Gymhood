import { ImagePreviewContainer } from "./styled/ImagePreviewContainer.styled";

const ImagePreview = ({ imageFile, handleRemove }) => {
  const handleClick = (event) => {
    handleRemove(imageFile.tempId);
  };

  return (
    <ImagePreviewContainer>
      <img src={imageFile.src} />
      <div class="overlay">
        <div class="text">
          <button onClick={handleClick}>Delete</button>
        </div>
      </div>
    </ImagePreviewContainer>
  );
};

export default ImagePreview;
