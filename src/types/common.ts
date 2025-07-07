import React from 'react';
import type { IconType } from '@icons-pack/react-simple-icons';
import type { LucideIcon } from 'lucide-react';
import type { IconName } from '../utils/iconMapping';

/**
 * Общий тип для функциональных компонентов, основанных на SVG.
 *
 * Позволяет создавать функциональные компоненты SVG, обеспечивающие правильную типизацию атрибутов SVG
 * и возможность добавления собственных свойств (prop'ов) для конкретной ситуации.
 *
 * ### Примеры использования:
 *
 * #### Специальный дополнительный тип для отдельных компонентов:
 *
 * ```ts
 * // types.ts
 * export type MyCustomSvgProps = {
 *   color?: string;
 *   width?: number;
 *   height?: number;
 * };
 *
 * // ExampleSvgComponent.tsx
 * const ExampleSvgComponent: SVGComponentType<MyCustomSvgProps> = ({ color, width, height, ...rest }) => {
 *   return (
 *     <svg width={width} height={height} viewBox="..." fill="none" {...rest}>
 *       ...
 *     </svg>
 *   );
 * };
 * ```
 *
 * @template P Параметры (props), специфические для данного SVG-компонента. Пустые по умолчанию.
 */
export type SVGComponentType<P = object> = React.FC<React.SVGProps<SVGSVGElement> & P>;

/**
 * Перечисление вариантов шрифтов и заголовков.
 *
 * Используется для выбора стилей текста и заголовков.
 *
 * Возможные варианты:
 * - h1-h6: Заголовки разного уровня
 * - body1-body2: Основной текст различных уровней
 */
export enum TypographyVariant {
  h1 = 'h1',
  h2 = 'h2',
  h3 = 'h3',
  h4 = 'h4',
  h5 = 'h5',
  h6 = 'h6',
  body1 = 'body1',
  body2 = 'body2',
}

/**
 * Стили оформления текста.
 *
 * Определённые стили текста для выделения важных фрагментов или подписей.
 *
 * Возможные варианты:
 * - Accent: Акцентированный шрифт
 * - Caption: Подпись или подпись к изображению
 */
export enum TypographyStyle {
  Accent = 'accent',
  Caption = 'caption',
}

/**
 * Варианты кнопок.
 *
 * Описывают различные виды кнопок для UI.
 *
 * Возможные варианты:
 * - filled: Заполненный фон кнопки
 * - outlined: Контурная кнопка
 * - outlinedQuiet: Контурная тихая кнопка (без акцента)
 */
export enum ButtonVariant {
  Filled = 'filled',
  Outlined = 'outlined',
  OutlinedQuiet = 'outlinedQuiet'
}

/**
 * Размеры кнопок.
 *
 * Устанавливают размеры кнопок.
 *
 * Возможные варианты:
 * - small: Маленькая кнопка
 * - medium: Средняя кнопка
 * - large: Большая кнопка
 */
export enum ButtonSize {
  Small = 'small',
  Medium = 'medium',
  Large = 'large'
}

/**
 * Интерфейс иконки.
 *
 * Свойства, используемые для отображения иконок в SVG-компонентах.
 *
 * @property size Размер иконки
 * @property style Дополнительные стили
 */
export interface IIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  style?: React.CSSProperties;
}

/**
 * Тип иконки.
 *
 * Представляет допустимые типы иконок, используемых в проекте.
 *
 * Может быть либо компонентом Lucide, простым значком, либо функцией, принимающей props иконки.
 */
export type GlobalIconType = LucideIcon | IconType | React.FC<IIconProps>;

export const FooterLinksSectionName = {
  Copyright: 'copyright',
  Articles: 'personalLinks',
  CodeSamples: 'professionalLinks',
} as const;

/**
 * Тип секции футера.
 *
 * Категории секций футера сайта.
 *
 * Возможные варианты:
 * - copyright: Информация об авторских правах
 * - personalLinks: Cоциальные сети (напр. Instagram)
 * - professionalLinks: Примеры кода и статьи (напр. CodePen, Medium)
 */
export type FooterLinksSectionType = typeof FooterLinksSectionName[keyof typeof FooterLinksSectionName];

/**
 * Вариант ссылок.
 *
 * Применяется для задания цвета и стилистики ссылок.
 *
 * Возможные варианты:
 * - primary: Основная ссылка
 * - accent: Акцентная ссылка
 * - neutral: Обычная нейтральная ссылка
 */
export enum LinkVariant {
  Primary = 'primary',
  Accent = 'accent',
  Neutral = 'neutral',
}

/**
 * Маршрут страницы.
 *
 * Содержит метаданные маршрута для навигации.
 *
 * @property id Уникальный идентификатор маршрута (опционально)
 * @property path Адрес пути
 * @property label Название маршрута
 * @property element Элемент представления
 */
export interface IRouteItem {
  id?: string;
  path: string;
  label: string;
  element: React.ReactNode;
}

/**
 * Типы ссылок в футере.
 *
 * Определяет категории ссылок.
 */
export enum FooterLinkType {
  Articles = 'articles',
  CodeSamples = 'codeSamples',
}

/**
 * Элемент ссылки в футере.
 *
 * Информация о ссылке социальной сети или портфолио.
 *
 * @property url Адрес ссылки
 * @property icon Иконка (опционально)
 * @property label Текстовое обозначение ссылки
 * @property type Тип ссылки (социальная сеть / портфолио)
 */
export interface IPersonalLink {
  url: string;
  icon?: GlobalIconType | null;
  label: string;
  type: FooterLinkType;
}

/**
 * Навык.
 *
 * Модель описания навыков, применяемых в профиле.
 *
 * @property title Название навыка
 * @property description Описание навыка
 * @property additionalClassName Дополнительный класс CSS (опционально)
 * @property icon Имя иконки (опционально)
 */
export interface ISkillItem {
  title: string;
  description: string;
  additionalClassName?: string;
  icon?: IconName;
}

/**
 * Локализованная запись навыка.
 *
 * Расширяет базовые поля навыка ключом локализации.
 *
 * @property key Ключевое значение для перевода
 */
export interface ISkillTranslatedItem extends ISkillItem {
  key: string;
}

/**
 * Категория навыков.
 *
 * Группа навыков, объединённых общим названием.
 *
 * @property title Название группы навыков
 * @property key Уникальное ключевое значение
 * @property items Массив навыков
 */
export interface ISkillCategory {
  title: string;
  key: string;
  items: ISkillItem[];
}

/**
 * Тип размера иллюстраций.
 *
 * Доступные размеры иллюстраций: маленький ('small') и обычный ('default').
 */
export type IllustrationSizeType = 'small' | 'default';