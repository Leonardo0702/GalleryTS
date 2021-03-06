import styled from "styled-components";

export const Container = styled.div`
  background-color: #27282f;
  color: #fff;
  min-height: 100vh;
`;

export const Area = styled.div`
  margin: auto;
  max-width: 980px;
  padding: 30px 0;
`;

export const Header = styled.h1`
  margin: 0;
  padding: 0;
  text-align: center;
  margin-bottom: 30px;
`;

export const ScreenWarning = styled.div`
  text-align: center;

  .emoji {
    font-size: 120px;
    margin-bottom: 20px;
  }
`;

export const Photolist = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
`;

export const UploadForm = styled.form`
  background-color: #3d3f43;
  padding: 15px;
  border-radius: 10px;
  margin-bottom: 30px;

  input[type="submit"] {
    background-color: #756df4;
    border: 0;
    width: 120px;
    color: #111;
    font-weight: bold;
    padding: 8px 16px;
    font-size: 18px;
    cursor: pointer;
    border-radius: 10px;
    margin: 0 20px;
  }
  input[type="submit"]:hover {
    opacity: 0.9;
  }

  input[type="file"] {
    background-color: #999;
    border: 0;
    color: #111;
    font-weight: bold;
    padding: 8px 16px;
    font-size: 15px;
    cursor: pointer;
    border-radius: 10px;
    margin: 0 20px;
  }
`;
