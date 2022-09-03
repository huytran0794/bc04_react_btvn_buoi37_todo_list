import styled from "styled-components";

const StyledModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  transition: 0.5s;
  .modal-wrapper {
    min-height: calc(100% - 80px);
  }
  .modal-content {
    border-radius: 10px;
    border: 1px solid #24222275;
    background-color: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    max-height: 100%;
    ${({ hasForm }) => (hasForm && `overflow:visible;`) || `overflow: hidden`};
  }
  .modal-header,
  .modal-body,
  .modal-footer {
    flex: 1 1 auto;
  }
  .modal-header {
    border-bottom: 1px solid #ccc;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 15px;
    .title {
      font-weight: 600;
      text-transform: capitalize;
      opacity: 0.76;
    }
    .btn-close {
      border: none;
      outline: none;
      padding: 5px 15px;
      background-color: transparent;
      font-size: 1.3rem;
      font-weight: 700;
      &:hover {
        color: black;
      }
    }
  }

  .modal-body {
    padding: 10px 15px;
    ${({ hasForm }) => (hasForm && `overflow:visible;`) || `overflow-y: auto;`};
    &::-webkit-scrollbar {
      background-color: #fff;
      width: 17px;
    }
    &::-webkit-scrollbar-track {
      background-color: #fff;
    }
    &::-webkit-scrollbar-thumb {
      background-color: #babac0;
      border-radius: 16px;
      border: 4px solid #fff;
    }
  }

  .modal-footer {
    border-top: 1px solid #ccc;
    padding: 0.7rem 0.4rem;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 1.2rem;
  }

  @media (min-width: 992px) {
    .modal-wrapper {
      min-width: 960px;
    }
  }

  @media (min-width: 768px) {
    .modal-wrapper {
      min-width: 720px;
    }
  }
`;

const StyledModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
`;

export { StyledModal, StyledModalOverlay };
