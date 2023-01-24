/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const HEIGHT = {
  small: '8px',
  medium: '12px',
  large: '16px',
}

const PADDING = {
  small: '0px',
  medium: '0px',
  large: '4px',
}

const ProgressBar = ({ value, size }) => {
  return <Container role="progressbar" 
                    aria-valuenow={value} 
                    aria-valuemin="0" 
                    aria-valuemax="100"
                    style={{'--padding': PADDING[size]}}>
    <VisuallyHidden>{value}%</VisuallyHidden>
    <BarContainer>
      <Bar style={{
        '--width': value +'%',
        '--height': HEIGHT[size],
        }}/>
    </BarContainer>
  </Container>
};

const Container = styled.div`
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0 2px 4px ${COLORS.transparentGray35}
  padding: var(--padding);
`

const BarContainer = styled.div`
  border-radius: 4px;
  overflow: hidden;
`

const Bar = styled.div`
  width: var(--width);
  height: var(--height);
  background-color: ${COLORS.primary};
  border-radius: 4px 0 0 4px;
  
`

export default ProgressBar;
