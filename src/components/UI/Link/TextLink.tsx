import styled from 'styled-components';
import React from 'react';
import { Link } from 'react-router-dom';
import { LinkVariant } from '../../../types/common';

interface TextLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: LinkVariant;
  to?: string;
}

const TextLink = styled(({ to, children, ...props }) =>
  to ? <Link to={to} {...props}>{children}</Link> : <a {...props}>{children}</a>
) <TextLinkProps>`
  color: ${({ theme, variant }) => theme.colors.link[variant || LinkVariant.Primary].default};
  text-decoration: none;
  cursor: pointer;

  &:hover {
    color: ${({ theme, variant }) => theme.colors.link[variant || LinkVariant.Primary].hover};
  }

  &:focus {
    color: ${({ theme, variant }) => theme.colors.link[variant || LinkVariant.Primary].focus};
    outline: none;
  }
`;

export default TextLink; 