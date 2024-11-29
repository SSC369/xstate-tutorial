import React from "react";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

import Button from "./commonComponents/Button/Button";
import {
  ButtonHierarchyEnum,
  ButtonSizesEnum,
  ButtonVariantEnum,
} from "./types";

const App: React.FC = () => {
  return (
    <div className="flex gap-6 items-center justify-center min-h-dvh">
      <Button
        colorVariant={ButtonVariantEnum.DESTRUCTIVE}
        size={ButtonSizesEnum.SMALL}
        hierarchy={ButtonHierarchyEnum.PRIMARY}
        isLoading={false}
        // icon={<FaArrowRightLong />}
      />

      <Button
        colorVariant={ButtonVariantEnum.VIOLET}
        size={ButtonSizesEnum.MEDIUM}
        hierarchy={ButtonHierarchyEnum.SECONDARY}
        isLoading={false}
        // icon={<FaArrowRightLong />}
      />

      <Button
        colorVariant={ButtonVariantEnum.SUCCESS}
        size={ButtonSizesEnum.MEDIUM}
        hierarchy={ButtonHierarchyEnum.PRIMARY}
        isLoading={false}
        // icon={<FaArrowRightLong />}
      />

      <Button
        colorVariant={ButtonVariantEnum.GRAY}
        size={ButtonSizesEnum.MEDIUM}
        hierarchy={ButtonHierarchyEnum.PRIMARY}
        isLoading={true}
        // icon={<FaArrowRightLong />}
      />

      <Button
        colorVariant={ButtonVariantEnum.VIOLET}
        size={ButtonSizesEnum.SMALL}
        hierarchy={ButtonHierarchyEnum.PRIMARY}
        isLoading={false}
        leftIcon={<FaArrowRightLong />}
      />
      <Button
        colorVariant={ButtonVariantEnum.VIOLET}
        size={ButtonSizesEnum.SMALL}
        hierarchy={ButtonHierarchyEnum.PRIMARY}
        isLoading={false}
        rightIcon={<FaArrowLeftLong />}
      />
    </div>
  );
};

export default App;
