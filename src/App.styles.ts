import styled from "styled-components";

export const Container = styled.div`
  background-color:#27282F;
  color: #fff;
  min-height:100vh;
  margin: 0;
  padding: 0;
`;
export const Area = styled.div`
  margin:auto;
  max-width:980px;
  padding:30px;

`;
export const Header = styled.h1`
  margin: 0;
  padding: 0;
  text-align:center;
  margin-bottom:30px ;
`;

export const ScreenWarning = styled.div`
  text-align:center;

  .emoji{
    font-size:50px;
    margin-bottom:30px ;
  }
`;

export const PhotoList = styled.div`
  display:grid;
  grid-template-columns:repeat(4,1fr);
  gap:10px;
  align-items:;
`;

export const UploadForm = styled.form`
  background: #3d3f43;
  padding: 15px;
  border-radius:10px;
  margin-bottom:30px;

  input[type=submit]{
    background: #756df4;
    border: 0;
    color: #fff;
    padding: 8px 16px;
    font-size: 15px;
    border-radius: 10px;
    margin: 0 20px;
    cursor:pointer;

    &:hover{
      opacity:.9;
    }
  }
`;
