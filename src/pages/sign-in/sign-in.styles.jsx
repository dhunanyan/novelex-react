import styled from "styled-components";

export const SignInPageContainer = styled.div`
  max-width: 1300px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;
