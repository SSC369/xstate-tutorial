import {
  ButtonHierarchyEnum,
  ButtonSizesEnum,
  ButtonVariantEnum,
} from "../types";

export const transformHierarchyEnum = (
  enumValue: ButtonHierarchyEnum
): string => {
  switch (enumValue) {
    case ButtonHierarchyEnum.PRIMARY:
      return "primary";
    case ButtonHierarchyEnum.SECONDARY:
      return "secondary";
    case ButtonHierarchyEnum.LINK:
      return "link";
    default:
      return "";
  }
};

export const transformButtonVariantEnum = (
  enumValue: ButtonVariantEnum
): string => {
  switch (enumValue) {
    case ButtonVariantEnum.PRIMARY:
      return "primary";
    case ButtonVariantEnum.SUCCESS:
      return "success";
    case ButtonVariantEnum.DESTRUCTIVE:
      return "destructive";
    case ButtonVariantEnum.GRAY:
      return "gray";
    case ButtonVariantEnum.VIOLET:
      return "violet";
    default:
      return "";
  }
};

export const transformButtonSizesEnum = (
  enumValue: ButtonSizesEnum
): string => {
  switch (enumValue) {
    case ButtonSizesEnum.LARGE:
      return "large";
    case ButtonSizesEnum.MEDIUM:
      return "medium";
    case ButtonSizesEnum.SMALL:
      return "small";
    default:
      return "";
  }
};
