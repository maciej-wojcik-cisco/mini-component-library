import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../../constants';
import Icon from '../Icon';

import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Container>
      <NativeSelect value={value} onChange={onChange}>
        {children}
      </NativeSelect>
      <PresentationSelect>
        <span>{displayedValue}</span>
        <Icon id="chevron-down" strokeWidth={1} size={24}></Icon>
      </PresentationSelect>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  width: max-content;
`

const NativeSelect = styled.select`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  appearance: none;
  opacity: 0;
`

const PresentationSelect = styled.div`
  border-radius: 8px;
  padding: 12px 16px;
  color: ${COLORS.gray700};
  background-color: ${COLORS.transparentGray15};
  font-size: 16px;
  display: flex;
  align-items:center;
  justify-content: space-between;

  span { 
    margin-right: 12px;
    display: block;
  }

  ${NativeSelect}:focus + & {
    outline: 5px auto -webkit-focus-ring-color;
  }
`

export default Select;
