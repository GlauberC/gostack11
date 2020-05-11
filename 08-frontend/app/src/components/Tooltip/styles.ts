import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  span {
    width: 200px;
    background: #ff9000;
    padding: 8px;
    border-radius: 4px;
    font-size: 12px;
    font-weight: 500;

    position: absolute;
    bottom: calc(100% + 12px);
    left: 50%;
    transform: translateX(-50%);
    opacity: 0;
    transition: opacity 0.4s;
    visibility: hidden;

    color: #312e38;

    @media only screen and (max-width: 600px) {
      transform: translateX(-85%);
    }

    &::before {
      content: '';
      border-style: solid;
      border-color: #ff9000 transparent;
      border-width: 6px 6px 0 6px;
      top: 100%;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);

      @media only screen and (max-width: 600px) {
        left: 87%;
        transform: translateX(-85%);
      }
    }
  }
  &:hover span {
    opacity: 1;
    visibility: visible;
  }
`;
