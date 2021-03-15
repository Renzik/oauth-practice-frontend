import styled, { css } from 'styled-components';

const subColor = 'grey';
const mainColor = 'black';

const shrinkLabel = css`
  top: -20px;
  font-size: 12px;
  font-family: 'Poppins';
  color: ${mainColor};
`;

export const Group = styled.div`
  position: relative;
  margin: 35px 0;

  input[type='password'] {
    letter-spacing: 0.3em;
  }
`;

export const FormInputContainer = styled.input`
  background: none;
  background-color: white;
  color: ${mainColor};
  font-size: 14px;
  padding: 10px 0px 10px 0px;
  display: block;
  width: 100%;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid ${subColor};
  /* margin: 25px 0; */

  &:focus {
    outline: none;
  }

  &:focus ~ label {
    ${shrinkLabel}
  }
`;

export const FormInputLabel = styled.label`
  color: ${subColor};
  font-size: 16px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 300ms ease all;

  &.shrink {
    ${shrinkLabel}
  }
`;
