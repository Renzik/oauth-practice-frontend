import styled from 'styled-components';

export const Container = styled.div`
  background-color: rgba(255, 255, 255, 0.95);
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0px;
  z-index: 800;
`;

export const Children = styled.div`
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 10px;
  width: 650px;
  height: 575px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  text-align: center;
`;

export const CloseIcon = styled.div`
  position: absolute;
  font-size: 18px;
  left: 69%;
  top: 21%;
  color: grey;

  &:hover {
    cursor: pointer;
  }
`;

export const Description = styled.p`
  color: #fff;
  font-weight: 300;
`;
