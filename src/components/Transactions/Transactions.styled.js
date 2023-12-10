import styled from 'styled-components';

export const Table = styled.table`
  width: 400px;
  margin: auto;
  box-shadow: 4px 4px 4px silver;
  border-radius: 4px;
`;
export const Head = styled.thead`
  height: 30px;
  background-color: #00bcd5;
`;

export const Row = styled.tr`
  text-align: center;
  // align-items: center;
  height: 25px;
`;
export const Cell = styled.td`
  vertical-align: middle;
  border: solid 2px #b4bcc5;

  span {
    width: 100%;
    display: block;
    text-transform: capitalize;
    text-align: start;
    padding-left: 20px;
  }
`;
