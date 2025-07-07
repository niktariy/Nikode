// Импорты
import React, { type Ref } from 'react';
import styled, { css, type DefaultTheme } from 'styled-components';
import Typography from '@ui/Typography/Typography';
import { useTranslation } from 'react-i18next';
import { persoanlLinksData } from '@/mock/myLinks.const';
import FooterLinkList from './FooterLinkList';
import { FooterLinkType, FooterLinksSectionName, TypographyVariant, type FooterLinksSectionType } from '@/types/common';

// Стилизация компонентов
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

interface FooterLinksSectionProps {
  $sectionType?: FooterLinksSectionType;
}

// Утилита для медиа-запросов
const getFooterLinksSectionResponsiveStyles = (theme: DefaultTheme, $sectionType?: FooterLinksSectionType) => {
  switch ($sectionType) {
    case FooterLinksSectionName.Copyright:
      return css`
        @media (max-width: ${theme.breakpoints.md}) {
          order: 3;
          margin-top: ${theme.spacing(3)};
        }
      `;
    case FooterLinksSectionName.Articles:
    case FooterLinksSectionName.CodeSamples:
      return css`
        @media (max-width: ${theme.breakpoints.md}) {
          text-align: center;
          ul {
            justify-content: center;
          }
        }
      `;
    default:
      return css``;
  }
};

const FooterLinksSection = styled.div<FooterLinksSectionProps>`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(3)};

  ${({ theme, $sectionType }) => getFooterLinksSectionResponsiveStyles(theme, $sectionType)}
`;

// Основной компонент
interface FooterProps {
  ref?: Ref<HTMLElement>;
}

const Footer: React.FC<FooterProps> = ({ ref }) => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  const articlesLinks = persoanlLinksData.filter(link => link.type === FooterLinkType.Articles);
  const codeSamplesLinks = persoanlLinksData.filter(link => link.type === FooterLinkType.CodeSamples);

  return (
    <StyledFooter ref={ref}>
      <FooterContent className="container">
        <FooterLinksSection $sectionType={FooterLinksSectionName.Copyright}>
          <Typography variant={TypographyVariant.body2}>
            &copy; {currentYear} {t('footer.copyright')}
          </Typography>
        </FooterLinksSection>
        <FooterLinksSection $sectionType={FooterLinksSectionName.Articles}>
          <Typography variant={TypographyVariant.h6}>
            {t('footer.articles_title')}
          </Typography>
          <FooterLinkList links={articlesLinks} />
        </FooterLinksSection>
        <FooterLinksSection $sectionType={FooterLinksSectionName.CodeSamples}>
          <Typography variant={TypographyVariant.h6}>
            {t('footer.code_samples_title')}
          </Typography>
          <FooterLinkList links={codeSamplesLinks} />
        </FooterLinksSection>
      </FooterContent>
    </StyledFooter>
  );
};

export default Footer;
