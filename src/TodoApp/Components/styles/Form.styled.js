import styled from "styled-components";

const StyledForm = styled.form`
  --spacing: 0.5rem;

  .status-select {
    display: block;
    .icon.--circle {
      width: 10px;
      height: 10px;
      border-radius: 50%;
    }

    .icon.--green {
      background-color: rgba(77, 215, 120, 1);
    }

    .icon.--blue {
      background-color: rgba(81, 133, 252, 1);
    }
  }
`;

const StyledInput = styled.input`
  border: 0;
  outline: none;
  display: block;
  width: 100%;
  padding: 0.5rem 0.8rem;
  border: 1px solid rgba(204, 204, 204, 1);
  border-radius: 6px;
  font-size: var(--fs);
  opacity: 0.7;
  transition: 0.5s;
  color: #3b3838;
  font-family: "Poppins", sans-serif;
  &:hover {
    border: 1px solid #80bdff;
    opacity: 0.9;
  }

  &:focus {
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
    border: 1px solid #80bdff;
    opacity: 0.9;
  }

  &::placeholder {
    font-weight: 500;
  }
`;

const StyledFormGroup = styled.div`
  padding: var(--spacing);
  .group-title,
  label.group-title {
    font-size: var(--fs);
    font-weight: 500;
    display: inline-block;
    margin-bottom: calc(var(--spacing) + 0.3rem);
    text-transform: capitalize;
    opacity: 0.86;
    transition: 0.8s;
  }
`;

const StyledFormGroupMulti = styled(StyledFormGroup)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export { StyledForm, StyledInput, StyledFormGroup, StyledFormGroupMulti };
