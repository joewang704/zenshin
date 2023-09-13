import { styled } from "@/styled-system/jsx";

const Input = styled("input", {
  base: {
    // border
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: "base",
    borderRadius: "sm",

    // layout
    backgroundColor: "white",
    padding: "8px",
    minHeight: "48px",
    fontSize: "16px",
    lineHeight: "28px",

    // animations
    transitionDuration: "0.3s",

    _focus: {
      outline: "none",
      boxShadow: "base",
    },
  },
  variants: {
    variant: {
      danger: {
        borderColor: "base.danger",
        _focus: {
          boxShadow: "base.danger",
        },
      },
      success: {
        borderColor: "base.success",
        _focus: {
          boxShadow: "base.success",
        },
      },
    },
  },
});

export default Input;
