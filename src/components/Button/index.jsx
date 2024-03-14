import React from "react";
import PropTypes from "prop-types";

const shapes = {
  round: "rounded-[11px]",
};
const variants = {
  outline: {
    black_900: "border-black-900 border border-solid shadow-xs text-gray-900_02",
  },
};
const sizes = {
  xs: "h-[70px] px-[31px] text-[22px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  variant = "outline",
  size = "xs",
  color = "black_900",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex items-center justify-center self-end text-center cursor-pointer text-gray-900_02 tracking-[7.94px] text-[22.68px] font-bold border-black-900 border border-solid shadow-xs min-w-[189px] rounded-[11px] ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["xs"]),
  variant: PropTypes.oneOf(["outline"]),
  color: PropTypes.oneOf(["black_900"]),
};

export { Button };
