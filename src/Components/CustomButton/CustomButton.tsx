import React from 'react';

import { Button } from './CustomButton.styles';

interface Props {
  imageUrl?: string;
  name?: string;
  onClick: () => any;
  children: any;
}

const CustomButton = ({ imageUrl, name, onClick, children }: Props, otherProps: any) => {
  return (
    <Button onClick={onClick} {...otherProps}>
      {imageUrl && <img src={imageUrl} alt={`${name} Logo`} />}
      <p>{children}</p>
    </Button>
  );
};

export default CustomButton;
