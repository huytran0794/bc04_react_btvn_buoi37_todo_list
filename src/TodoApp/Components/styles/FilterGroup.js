import styled from "styled-components";

const StyledFilterGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
  .search-wrapper {
    height: 100%;
    .search-input {
      padding-right: 2rem;
      padding-left: 1rem;
      height: 100%;
      border-radius: 7px;
      outline: none;
      border: none;
      &:hover,
      &:focus {
        outline: none;
        border: none;
      }

      &:hover,
      &:focus {
        box-shadow: 0 0 0 0 rgba();
      }
    }
    position: relative;
    .btn-search {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      right: 10px;
      cursor: pointer;
      z-index: 1;
      opacity: 0.6;
      transition: 0.4s;
      &:hover {
        opacity: 1;
      }
    }
  }
`;

export { StyledFilterGroup };
