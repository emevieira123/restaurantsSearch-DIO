import styled from 'styled-components';

export const Container = styled.aside`
  background: ${(props) => props.theme.colors.background};
  width: 360px;
  height: 100vh;
  overflow-y: auto;
`;

export const Search = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #fff;
  padding: 16px;

  img
  {
    margin-bottom: 10px;
  }
`;
