import React from 'react';

import { Container, Children, CloseIcon } from './Card.styles';

import { AiOutlineClose } from 'react-icons/ai';

const Card = ({ children }) => {
  const goHome = () => (window.location.href = '/');

  return (
    <Container role='dialog' aria-modal='true' tabIndex={-1}>
      <CloseIcon>
        <AiOutlineClose aria-label='close' onClick={goHome} />
      </CloseIcon>
      <Children>{children}</Children>
    </Container>
  );
};

export default Card;
