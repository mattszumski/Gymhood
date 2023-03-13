import styled from "styled-components";

export const SearchBarContainer = styled.div`
  .search-form {
    color: #fff;
    display: flex;
    justify-content: space-around;
    align-items: center;

    input {
      outline: none;
      background-color: var(--bg-accent);
      border: none;
      padding: 0.25rem 0.5rem;
      color: #fff;
      margin-left: 0.25rem;
      font-size: 0.75rem;
    }

    button {
      background-color: var(--bg-accent);
      border: none;
      padding: 0.25rem 0.5rem;
      color: #fff;
      margin-left: 0.25rem;
      font-size: 0.75rem;
      transition: filter 500ms;

      :hover {
        filter: brightness(1.3);
      }
    }
  }
`;
