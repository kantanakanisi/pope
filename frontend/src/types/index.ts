type DeviceSizeType = "xss" | "xs" | "sm" | "md" | "lg" | "xl";

interface AvatarDropdownItem {
  name: string;
  icon: string;
  link: string;
}

interface VerticalCardType {
  data: {
    title: string;
    buttonText: string;
  }[];
  title: string;
  icon: string;
}

interface HorizontalCardType {
  title: string;
  icon: string;
}

export {
  DeviceSizeType,
  AvatarDropdownItem,
  VerticalCardType,
  HorizontalCardType,
};
