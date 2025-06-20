import React from 'react';
import styled from 'styled-components';
import Typography from '../UI/Typography/Typography';
import type { ISocialLink } from '../../types/common';

interface ISocialLinksProps {
  links: ISocialLink[];
}

const StyledSocialLinks = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing(3)};
  margin-top: ${({ theme }) => theme.spacing(4)};
`;

const SocialLinkItem = styled.a`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(1)};
  text-decoration: none;
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.2rem;

  &:hover {
    color: ${({ theme }) => theme.colors.link.neutral.hover};
  }
`;

const SocialLinks: React.FC<ISocialLinksProps> = ({ links }) => {
  return (
    <StyledSocialLinks>
      {links.map((link) => {
        const SocialIconComponent = link.icon;
        return (
          <SocialLinkItem key={link.url} href={link.url} target="_blank" rel="noopener noreferrer" aria-label={link.label}>
            <SocialIconComponent size={24} aria-label={link.label} />
            <Typography variant="p">{link.label}</Typography>
          </SocialLinkItem>
        );
      })}
    </StyledSocialLinks>
  );
};

export default SocialLinks; 