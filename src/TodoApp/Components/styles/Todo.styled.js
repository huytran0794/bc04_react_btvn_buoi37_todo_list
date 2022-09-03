import styled from "styled-components";

const StyledTodo = styled.li`
  background-color: white;
  box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.5);
  padding: 0.5rem 0.8rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  color: rgba(0, 0, 0, 0.3);
  transition: 0.5s;
  &:hover {
    color: #000;
    box-shadow: 0px 0px 7px 1px rgba(0, 0, 0, 0.5);
  }
`;

const StyledTdStatus = styled.div`
  .cb-wrapper {
    --size: 1.2rem;
    width: var(--size);
    height: var(--size);
    border: 1px solid grey;
    border-radius: 50%;
    padding: 10px;
    cursor: pointer;
    position: relative;
    background-clip: padding-box;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 10px;

    &:hover {
      border: 1px solid black;
    }

    .cb-input {
      display: none;
    }

    .icon-check {
      font-size: 0.76rem;
      font-weight: 700;
      color: green;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 1;
      pointer-events: none;
      opacity: 0;
      transition: 0.6s;
    }

    .cb-input:checked + .icon-check {
      opacity: 1;
    }
  }
`;

const StyledTdAction = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: 15px;

  color: ${({ color }) => color || "#a6abd8;"};
  transition: 0.5s;

  .btn {
    outline: none;
    border: none;
    transition: 0.5s;
    i {
      font-size: 16px;
      font-weight: 600;
    }
  }

  .btn-edit:hover {
    color: #f2d388;
  }
  .btn-delete:hover {
    color: #d63447;
  }
`;

const StyledTdDetail = styled.div`
  .td-name {
    font-size: 19px;
    font-weight: 700;
    letter-spacing: 0.2px;
    position: relative;
    &:before {
      content: "";
      display: block;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: 0;
      width: 117%;
      height: 2.5px;
      background-color: black;
      ${({ completed }) => (completed && `opacity: 1;`) || `opacity: 0;`};
      transition: 0.5s;
    }
  }
`;
export { StyledTodo, StyledTdStatus, StyledTdAction, StyledTdDetail };
