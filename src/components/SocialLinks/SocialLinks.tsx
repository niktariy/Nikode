import React from 'react';
import styled from 'styled-components';
import { persoanlLinksData } from '../../mock/myLinks.const';
import TextLink from '../UI/Link/TextLink';
import { LinkVariant } from '../../types/common';

const StyledSocialList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing(3)};
  list-style: none;
  margin-bottom: ${({ theme }) => theme.spacing(3)};
`;

const SocialLinkItem = styled(TextLink)`
  align-items: center;
  padding: 0.5em;
  border-radius: ${({theme}) => theme.radii.round};
  background-color: ${({theme}) => theme.colors.button.fab};
  font-size: 7vmin;
  z-index: ${({theme}) => theme.zIndex.default};
  transition-property: color, background-color;

  &:hover, &:focus {
    color: ${({ theme }) => theme.colors.button.defaultText};
  }
  
  @media (width > ${({ theme }) => theme.breakpoints.md}) {
    font-size: 3em;
  }

  @media (prefers-reduced-motion: no-preference) {
    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: ${({ theme }) => theme.colors.link.neutral.default};
      border-radius: inherit;
      z-index: ${({theme}) => theme.zIndex.above};
      scale: 0;
      transition-property: scale;
      transition-duration: inherit;
      transition-timing-function: inherit;
    }

    &:hover, &:focus {
      outline: 0 solid transparent;
      &::after {
        scale: 1.25;
      }
    }

    &:focus::after {
      background-color: ${({ theme }) => theme.colors.link.neutral.focus};
    }
  }

  @media (prefers-reduced-motion:reduce) {
    color: ${({ theme }) => theme.colors.text};
    background-color: ${({ theme }) => theme.colors.shadow.flat};

    &:hover {
      background-color: ${({ theme }) => theme.colors.link.neutral.hover};
    }

    &:focus {
      background-color: ${({ theme }) => theme.colors.link.neutral.focus};
    }
  }
`;

const SocialLinks: React.FC = () => {
  return (
    <StyledSocialList>
      {persoanlLinksData.map((link, index) => {
        const SocialIconComponent = link.icon;
        return (
          <li key={index + link.label }>
            <SocialLinkItem href={link.url} target="_blank" rel="noopener noreferrer" showUnderline={false} variant={LinkVariant.Neutral} aria-label={link.label} title={link.label}>
              {SocialIconComponent && <SocialIconComponent size='0.875em' aria-label={link.label} />}
            </SocialLinkItem>
          </li>
        );
      })}
    </StyledSocialList>
  );
};

export default SocialLinks;