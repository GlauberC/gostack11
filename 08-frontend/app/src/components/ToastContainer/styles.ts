import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  padding: 30px;
  overflow: hidden;

  @media only screen and (max-width: 600px) {
    padding: 30px 10px 10px 0;
  }
`;
