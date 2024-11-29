export enum ButtonHierarchyEnum {
  PRIMARY = "PRIMARY",
  SECONDARY = "SECONDARY",
  LINK = "LINK",
}

export enum ButtonVariantEnum {
  PRIMARY = "PRIMARY",
  DESTRUCTIVE = "DESTRUCTIVE",
  GRAY = "GRAY",
  SUCCESS = "SUCCESS",
  VIOLET = "VIOLET",
}

export enum ButtonSizesEnum {
  LARGE = "LARGE",
  MEDIUM = "MEDIUM",
  "SMALL" = "SMALL",
}

export interface LoaderPropsType {
  height?: number;
  width?: number;
  color?: string;
  radius?: number;
}

export interface ButtonsPropsType {
  hierarchy: ButtonHierarchyEnum;
  colorVariant: ButtonVariantEnum;
  size: ButtonSizesEnum;
  leftIcon?: React.ReactElement;
  rightIcon?: React.ReactElement;
  isLoading: boolean;
  disable?: boolean;
}

export interface ButtonVariantsType {
  primary: string;
  destructive: string;
  gray: string;
  success: string;
  violet: string;
}
export interface ButtonStyleType {
  primary: {
    style: string;
    variants: ButtonVariantsType;
  };
  secondary: {
    style: string;
    variants: ButtonVariantsType;
  };
  link: {
    style: string;
    variants: ButtonVariantsType;
  };
}
export interface ButtonSizesType {
  large: string;
  medium: string;
  small: string;
}
