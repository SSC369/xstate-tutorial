import { ButtonSizesType, ButtonStyleType } from "../../types";

export const buttonStyle: ButtonStyleType = {
  primary: {
    style: "text-white active:ring-4",
    variants: {
      primary: "bg-blue-500 hover:bg-blue-600 active:ring-blue-200",
      destructive: "bg-red-500 hover:bg-red-600 active:ring-red-200",
      gray: "bg-gray-500 hover:bg-gray-600 active:ring-gray-200",
      success: "bg-green-500 hover:bg-green-600 active:ring-green-200",
      violet: "bg-violet-500 hover:bg-violet-600 active:ring-violet-200",
    },
  },
  secondary: {
    style: "bg-white border-2 active:ring-4",
    variants: {
      primary: "border-blue-500 text-blue-600 active:ring-blue-200",
      destructive: "border-red-500 text-red-600 active:ring-red-200",
      gray: "border-gray-500 text-gray-600 active:ring-gray-200",
      success: "border-green-500 text-green-600 active:ring-green-200",
      violet: "border-violet-500 text-violet-600 active:ring-violet-200",
    },
  },
  link: {
    style: "bg-transparent border-b w-fit rounded-none pb-0",
    variants: {
      primary: "text-blue-600 border-b-blue-600",
      destructive: "text-red-600 border-b-red-600",
      gray: "text-gray-600 border-b-gray-600",
      success: "text-green-600 border-b-green-600",
      violet: "text-violet-600 border-b-violet-600",
    },
  },
};

export const buttonSizes: ButtonSizesType = {
  large: "min-w-[320px] min-h-12  rounded-xl text-lg font-semibold",
  medium: "min-w-[200px] min-h-10  rounded-lg text-base font-medium",
  small: "px-5 h-10 rounded text-sm",
};
