import styled from "styled-components";

const CompleteButton = styled.label`
  height: 30px;
  font-weight: 400;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 170px;
  align-self: center;
  /* letter-spacing: 1px; */
  border-radius: 10px;
  border: none;
  background-color: #208a16;
  color: white;
  font-family: "Roboto", sans-serif;
  font-weight: 600;
  letter-spacing: 1.2px;
`;
export default function ImageUploader({ setPostImage }) {
  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };
  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertToBase64(file);
    setPostImage(base64);
  };

  return (
    <div>
      <form>
        <input
          type="file"
          label="Image"
          id="files"
          accept=".jpeg, .png, .jpg"
          onChange={(e) => handleFileUpload(e)}
          style={{ display: "none" }}
        />
        <CompleteButton for="files">Select image</CompleteButton>
      </form>
    </div>
  );
}
