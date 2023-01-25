import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../../constants';


import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  ...delegated
}) => {

  const iconSize = size === 'small' ? 16 : 24;
  const fontSize = size === 'small' ? 1 : 1.5;
  const height = size === 'small' ? 1.5 : 2;

  return (
    <Container>
      <VisuallyHidden>{label}</VisuallyHidden>
      <IconContainer style={{'--size': iconSize +'px'}}>
        <Icon id={icon} size={iconSize}></Icon>
      </IconContainer>
      <NativeInput {...delegated} style={{
        '--width': width + 'px', 
        '--font-size': fontSize +'rem',
        '--height': height +'rem'
      }}></NativeInput>
    </Container>
  );
};

const Container = styled.label`
  position: relative;
  display: block;
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }
`;

const IconContainer = styled.div`
  position: absolute;
  top:0;
  bottom: 0;
  margin: auto 0;
  height: var(--size);
`;

const NativeInput = styled.input`
  width: var(--width);
  height: var(--height);
  font-size: var(--font-size);
  border: none;
  border-bottom: 1px solid ${COLORS.black};
  padding-left: 24px;
  font-weight: 700;
  outline-offset: 3px;
  color: inherit;

  &::placeholder {
    font-weight: 400;
    color: ${COLORS.gray500};
  }
`;

export default IconInput;
