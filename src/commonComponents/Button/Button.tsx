import React from "react";

import Loader from "../Loader/Loader";
import {
  ButtonSizesType,
  ButtonsPropsType,
  ButtonStyleType,
  ButtonVariantsType,
} from "../../types";
import {
  transformButtonSizesEnum,
  transformButtonVariantEnum,
  transformHierarchyEnum,
} from "../../utils/transformEnumToString";
import { buttonSizes, buttonStyle } from "./styles";

const Button: React.FC<ButtonsPropsType> = ({
  hierarchy,
  colorVariant,
  size,
  isLoading,
  leftIcon,
  disable,
  rightIcon,
}) => {
  const hierarchyKey = transformHierarchyEnum(hierarchy);
  const sizeKey = transformButtonSizesEnum(size);
  const variantKey = transformButtonVariantEnum(colorVariant);

  const buttonHierarchy = buttonStyle[hierarchyKey as keyof ButtonStyleType];
  const buttonSize = buttonSizes[sizeKey as keyof ButtonSizesType];
  const variant =
    buttonHierarchy.variants[variantKey as keyof ButtonVariantsType];

  const renderButtonContent = () => {
    if (isLoading) {
      return <Loader />;
    }
    return (
      <>
        {rightIcon}
        <p>Submit</p>
        {leftIcon}
      </>
    );
  };

  return (
    <button
      className={`${buttonSize} ${buttonHierarchy.style} ${variant} ${
        disable && "opacity-50 cursor-not-allowed"
      } flex justify-center items-center gap-2`}
    >
      {renderButtonContent()}
    </button>
  );
};

export default Button;
