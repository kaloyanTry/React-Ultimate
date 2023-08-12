import styled, { css } from 'styled-components';

// h1 simple:
// const Heading = styled.h1`
//   font-size: 30px;
//   font-weight: 600;
//   background-color: orangered;
// `;

const Heading = styled.h1`
  ${(props) =>
    props.as === 'h1' &&
    css`
      font-size: 4rem;
      font-weight: 600;
    `};
  ${(props) =>
    props.as === 'h2' &&
    css`
      font-size: 3cqh;
      font-weight: 500;
    `};
  ${(props) =>
    props.as === 'h3' &&
    css`
      font-size: 2rem;
      font-weight: 400;
    `};
`;

export default Heading;
