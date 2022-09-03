import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap');

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: 'Poppins', sans-serif;
    }

    p {
        opacity: 0.6;
        line-height: 1.5;
    }
    ul {
        padding: 0;
    }
    ul, li {
        list-style: none;
    }
    img {
        max-width: 100%;
    }

    .text--uppercase {
        text-transform: uppercase;
    }

    .text--capitalize {
        text-transform: capitalize;
    }

    .text--center {
        text-align: center;
    }

    .text--right {
        text-align: right;
    }

    .flex {
        display: flex;
    }

    .flex-col {
        flex-direction: column;
    }

    .flex-wrap {
        flex-wrap: wrap;
    }

    .flex--center {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .justify-center {
        justify-content: center;
    }

    .justify-between {
        justify-content: space-between;
    }

    .justify-end {
        justify-content: flex-end;
    }

    .align-item-center {
        align-items: center;
    }

    .gap--1 {
        gap: 0.3rem;
    }

    .gap--2 {
        gap: 0.5rem;
    }

    .gap--3 {
        gap: 0.7rem;
    }

    .gap--4 {
        gap: 0.9rem;
    }

    .gap--5 {
        gap: 1.15em;
    }

    .gap--6 {
        gap: 1.2rem;
    }
`;

export { GlobalStyles };
