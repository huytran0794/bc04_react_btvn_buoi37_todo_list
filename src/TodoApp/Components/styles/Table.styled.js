import styled from "styled-components";

const StyledTable = styled.table`
  border-collapse: collapse;
  width: 500px;
  margin: 0 auto;
  th,
  td {
    border-collapse: collapse;
    border: 1px solid black;
  }

  thead {
    background-color: ${({ bg }) => bg || "#fff"};
    color: ${({ color }) => color || "#000"};
  }

  th,
  td {
    vertical-align: middle;
    text-align: center;
  }
`;

export { StyledTable };
