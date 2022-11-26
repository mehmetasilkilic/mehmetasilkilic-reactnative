import styled from "styled-components/native";

type VariantsProps = {
  titleSmall: any;
  titleSmallInverse: any;
  titleLarge: any;
  titleMedium: any;
  hint: any;
  success: any;
  error: any;
  caption: any;
  label: any;
  labelWhite: any;
};

const defaultTextStyles = (theme: any): string => `
    font-family: ${theme.fonts.heading};
    font-weight: ${theme.fontWeights.regular};
    color: ${theme.colors.text.primary};
    flex-wrap: wrap;
    margin-top: 0px;
    margin-bottom: 0px;
`;

const titleLarge = (theme: any): string => `
    font-size: ${theme.fontSizes.h4};
    font-weight: ${theme.fontWeights.bold};
    color: ${theme.colors.text.primary};
`;

const titleMedium = (theme: any): string => `
    font-size: ${theme.fontSizes.h5};
    font-weight: ${theme.fontWeights.bold};
    color: ${theme.colors.text.primary};
`;

const titleSmall = (theme: any): string => `
    font-size: ${theme.fontSizes.title};
    color: ${theme.colors.text.primary};
`;

const titleSmallInverse = (theme: any): string => `
    font-size: ${theme.fontSizes.title};
    color: ${theme.colors.text.inverse};
`;

const hint = (theme: any): string => `
    font-size: ${theme.fontSizes.button};
    color: ${theme.colors.text.disabled};
`;

const success = (theme: any): string => `
    color: ${theme.colors.text.success};
    font-size: ${theme.fontSizes.button};
`;

const error = (theme: any): string => `
    color: ${theme.colors.text.error};
    font-size: ${theme.fontSizes.button};
`;

const caption = (theme: any): string => `
    color: ${theme.colors.text.disabled};
    font-size: ${theme.fontSizes.caption};
`;

const label = (theme: any): string => `
    font-size: ${theme.fontSizes.body};
`;

const labelWhite = (theme: any): string => `
    font-size: ${theme.fontSizes.body};
    color: ${theme.colors.text.white};
`;

const variants: VariantsProps = {
  titleSmall,
  titleSmallInverse,
  titleLarge,
  titleMedium,
  hint,
  success,
  error,
  caption,
  label,
  labelWhite,
};

type TextProps = {
  variant: any;
};

export const Text = styled.Text<TextProps>`
  ${({ theme }) => defaultTextStyles(theme)}
  ${({ variant, theme }) => variants[variant as keyof VariantsProps](theme)}
`;

Text.defaultProps = {
  variant: "label",
};
