import cn from "classnames";
import { ReactNode } from "react";

type ActionButtonProps = {
  href?: string;
  onClick?: () => void;
  icon?: ReactNode;
  children: ReactNode;
  className?: string;
};

const ActionButton = ({
  href,
  onClick,
  icon,
  children,
  className,
}: ActionButtonProps) => {
  const baseClass = cn(
    "btn bg-[#1a73e8] hover:bg-blue-700 border-none text-white",
    "rounded-lg flex items-center font-bold px-6",
    "shadow-lg shadow-blue-100 transition-all active:scale-95",
    className
  );

  if (href) {
    return (
      <a href={href} className={baseClass}>
        {icon && <span className="mr-2">{icon}</span>}
        <span className="">{children}</span>
      </a>
    );
  }

  return (
    <button onClick={onClick} className={baseClass}>
      {icon && <span className="mr-2">{icon}</span>}
      <span className="">{children}</span>
    </button>
  );
};

export default ActionButton;
