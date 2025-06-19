import React from 'react';
import styled from 'styled-components';
import Typography from '../UI/Typography/Typography';

interface SocialLinkProps {
  url: string;
  icon: string;
  label: string;
}

interface SocialLinksProps {
  links: SocialLinkProps[];
}

const StyledSocialLinks = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing(3)};
  margin-top: ${({ theme }) => theme.spacing(4)};
`;

const SocialLinkItem = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.2rem;

  &:hover {
    color: ${({ theme }) => theme.colors.link.neutral.hover};
  }
`;

const SocialIcon = styled.img`
  width: 24px;
  height: 24px;
  margin-right: ${({ theme }) => theme.spacing(1)};
`;

const SocialLinks: React.FC<SocialLinksProps> = ({ links }) => {
  return (
    <StyledSocialLinks>
      {links.map((link) => (
        <SocialLinkItem key={link.url} href={link.url} target="_blank" rel="noopener noreferrer" aria-label={link.label}>
          <SocialIcon src={link.icon} alt={link.label} />
          <Typography variant="p">{link.label}</Typography>
        </SocialLinkItem>
      ))}
    </StyledSocialLinks>
  );
};

export default SocialLinks; 