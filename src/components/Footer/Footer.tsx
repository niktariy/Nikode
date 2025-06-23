import React from 'react';
import styled, { css } from 'styled-components';
import Typography from '../UI/Typography/Typography';
import { useTranslation } from 'react-i18next';
import { socialLinksData } from '../../mock/socialLinks';
import FooterLinkList from './FooterLinkList';
import { SocialLinkType, FooterSectionType } from '../../types/common';

const StyledFooter = styled.footer`
  background-color: ${({ theme }) => theme.colors.header};
  color: ${({ theme }) => theme.colors.text};
  padding: ${({ theme }) => theme.spacing(4)} 0;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  font-family: ${({ theme }) => theme.fonts.monospace};
`;

const FooterContent = styled.div`
  display: grid;
  grid-template-columns: 1fr auto auto;
  gap: ${({ theme }) => theme.spacing(6)};
  align-items: flex-start;
  justify-content: space-between;

  @media (width < ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

interface FooterSectionProps {
  $sectionType?: FooterSectionType;
}

const getFooterSectionResponsiveStyles = (theme: any, $sectionType?: FooterSectionType) => {
  if ($sectionType === FooterSectionType.Copyright) {
    return css`
      @media (max-width: ${theme.breakpoints.md}) {
        order: 3;
        margin-top: ${theme.spacing(3)};
      }
    `;
  } else if ($sectionType === FooterSectionType.Socials || $sectionType === FooterSectionType.Links) {
    return css`
      @media (max-width: ${theme.breakpoints.md}) {
        text-align: center;
        ul {
          justify-content: center;
        }
      }
    `;
  }
  return css``;
};

const FooterSection = styled.div<FooterSectionProps>`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(3)};

  ${({ theme, $sectionType }) => getFooterSectionResponsiveStyles(theme, $sectionType)}
`;

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  const socialMediaLinks = socialLinksData.filter(link => link.type === SocialLinkType.Social);
  const portfolioLinks = socialLinksData.filter(link => link.type === SocialLinkType.Portfolio);

  return (
    <StyledFooter>
      <FooterContent className="container">
        <FooterSection $sectionType={FooterSectionType.Copyright}>
          <Typography variant="body2">
            &copy; {currentYear} {t('footer.copyright')}
          </Typography>
        </FooterSection>
        <FooterSection $sectionType={FooterSectionType.Socials}>
          <Typography variant="h6">
            {t('footer.socials_title')}
          </Typography>
          <FooterLinkList links={socialMediaLinks} />
        </FooterSection>

        <FooterSection $sectionType={FooterSectionType.Links}>
          <Typography variant="h6">
            {t('footer.links_title')}
          </Typography>
          <FooterLinkList links={portfolioLinks} />
        </FooterSection>
      </FooterContent>
    </StyledFooter>
  );
};

export default Footer; 