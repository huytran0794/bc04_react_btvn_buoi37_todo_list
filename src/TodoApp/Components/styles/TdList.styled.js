import styled from "styled-components";

const StyledTdListWrapper = styled.div`
  margin: 3rem auto;
  .todo-list {
    border-radius: 0.6rem;
    overflow: hidden;
    .empty-msg {
      text-align: center;
      color: #fff;
      font-size: 30px;
      font-weight: 500;
    }
  }
  .stat {
    margin-top: 1.2rem;
    padding: 0.5rem 0.8rem;
    background-color: white;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    font-size: 14px;
    .td-counter {
      .text {
        opacity: 0.7;
        .number {
          opacity: 1;
          font-weight: 700;
          font-size: 15px;
        }
        .title {
          text-transform: uppercase;
        }
      }
      .text-all {
        .nb-complete {
          margin-right: 3px;
        }
        .nb-all {
          margin-left: 3px;
          margin-right: 4px;
        }
      }

      .text-complete {
      }

      .text-incomplete {
      }
    }

    .filter-wraper {
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 760;
      .filter-type {
        opacity: 0.6;
        position: relative;
        padding: 0.3rem 0.5rem;
        cursor: pointer;
        text-transform: capitalize;
        letter-spacing: 1px;
        transition: 0.5s;
        &:before {
          content: "";
          position: absolute;
          bottom: -1px;
          left: 0;
          width: 0%;
          height: 3px;
          background-color: #1c3879;
          transition: 0.4s;
        }
        &:hover,
        &.active {
          opacity: 1;
          &:before {
            width: 100%;
          }
        }
      }
    }

    .btn-clear {
      display: flex;
      justify-content: flex-end;
      cursor: pointer;
      text-transform: capitalize;
      position: relative;
      transition: 0.6s;
    }
  }
`;

export { StyledTdListWrapper };
