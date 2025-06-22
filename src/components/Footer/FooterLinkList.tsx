import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import TextLink from '../UI/Link/TextLink';

interface FooterLinkListProps {
  links: Array<{ label: string; url: string }>;
}

const StyledLinkList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(1)};
`;

const FooterLinkList: React.FC<FooterLinkListProps> = ({ links }) => {
  const { t } = useTranslation();
  return (
    <StyledLinkList>
      {links.map((link) => (
        <li key={link.url}>
          <TextLink href={t(link.url)} target="_blank" rel="noopener noreferrer">
            {link.label}
          </TextLink>
        </li>
      ))}
    </StyledLinkList>
  );
};

export default FooterLinkList; 