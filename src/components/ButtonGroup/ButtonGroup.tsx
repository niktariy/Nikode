import React from 'react';
import styled from 'styled-components';

interface ButtonGroupProps {
  children: React.ReactNode;
  a11y?: Boolean;
}

const StyledGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)};
  margin-top: ${({ theme }) => theme.spacing(3)};
  
  @media (width > ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: row;
    gap: ${({ theme }) => theme.spacing(3)};
  }
`

const ButtonGroup: React.FC<ButtonGroupProps> = ({
  children,
  a11y = false,
}) => {
  return (
    <StyledGroup role={a11y ? 'group' : undefined}>
      {children}
    </StyledGroup>
  );
};

export default ButtonGroup;