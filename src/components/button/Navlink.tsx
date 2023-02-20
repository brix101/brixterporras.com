import React, { FC } from "react";

export interface ButtonProps
  extends React.DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
    React.AriaAttributes {}

type Props = ButtonProps & {
  isLoading?: boolean;
  isSmall?: boolean;
};

const Navlink: FC<Props> = (props) => {
  const { isLoading, isSmall, children, ...rest } = props;

  return (
    <button
      className="flex h-10 items-center rounded-lg border border-sky-200 py-2.5 px-5 font-medium uppercase text-gray-900  hover:border-sky-500 disabled:text-gray-400  dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
      {...rest}
    >
      {children}
    </button>
  );
};

export default Navlink;
