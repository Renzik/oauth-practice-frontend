import styled from 'styled-components';
import { Text } from '../../Utility-styles/Utility.styles';

export const SignInContainer = styled.div`
  display: flex;
  width: 100vw;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;

  & .emailSignInSubTitleContainer {
    max-width: 315px;
  }

  & .signInWithEmail-title {
    margin: 3% 0 2%;
  }

  & .signInWithEmail-subTitle {
    margin: 2% 0 0;
  }

  & .backToLoginOptionsButton {
    font-size: 14px;
    color: rgb(26, 137, 23);
    outline: none;
    background: none;
    border: none;
    display: flex;
    align-items: center;
    cursor: pointer;
  }
`;

export const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  & .emailSignInSubTitle {
    line-height: 24px;
    font-weight: 300;
  }
`;

export const Title = styled(Text)`
  font-size: 28px;
`;

export const SubTitle = styled(Text)`
  font-size: 16px;
  /* margin: ${({ spacing }) => {
    if (spacing === 'sm') return '2% 0 0 0';
    if (spacing === 'md') return '4% 0 0 0';
    if (spacing === 'bg') return '6% 0 0 0';
  }}; */
`;
