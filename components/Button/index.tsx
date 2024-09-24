import { JSX } from "react";

export function Button({
  className,
  ...props
}: JSX.IntrinsicElements["button"]) {
  return (
    <button
      {...props}
      className={
        "dark:bg-white dark:text-black bg-green text-white px-4 rounded-md hover:bg-gunmetal hover:text-white transition-all"
      }
    />
  );
}
