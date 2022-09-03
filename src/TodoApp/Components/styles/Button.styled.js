import styled from "styled-components";

const StyledBtn = styled.button`
  padding: 0.3rem 0.7rem;
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 7px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  text-transform: capitalize;
  transition: 0.5s;
`;

const StyledBtnClose = styled(StyledBtn)`
  color: grey;
  box-shadow: 0 0 1px 0.5px rgba(255, 255, 255, 0.02);
`;

const StyledBtnCancel = styled(StyledBtnClose)`
  border: 1.2px solid white;
  background-color: grey;
  color: #fff;
  &:hover {
    color: grey;
    background-color: #fff;
    border: 1.2px solid grey;
  }
`;

const StyledBtnSuccess = styled(StyledBtn)`
  color: #fff;
  border: 1px solid white;
  background-color: rgba(0, 123, 255, 0.9);
  box-shadow: 0 0 1px 0.5px rgba(255, 255, 255, 0.02);
  &:hover {
    color: rgba(0, 123, 255, 0.9);
    background-color: #fff;
    border: 1px solid rgba(0, 123, 255, 0.9);
  }
`;

const StyledBtnWithIcon = styled(StyledBtn)`
  background-color: ${({ bg }) => bg || "#fff"};
  color: ${({ color }) => color || "#000"};
  border-radius: 7px;

  .icon {
    font-size: 15px;
    margin-right: 10px;
  }
`;
export {
  StyledBtn,
  StyledBtnClose,
  StyledBtnCancel,
  StyledBtnSuccess,
  StyledBtnWithIcon,
};
