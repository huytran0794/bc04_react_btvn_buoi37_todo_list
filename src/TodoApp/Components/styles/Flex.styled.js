import styled from "styled-components";

const Flex = styled.div`
  display: flex;
  align-items: center;

  & > div,
  & > ul {
    flex: 1;
  }

  flex-direction: ${({ layout }) => layout || "row"};

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
    text-align: center;
  }
`;

const FlexAllCenter = styled(Flex)`
  justify-content: center;
`;

export { Flex, FlexAllCenter };
