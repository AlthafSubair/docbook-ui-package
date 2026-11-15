import React, { ComponentType } from "react";
import Tooltip from "./Tooltip";

export interface RailButtonProps {
  icon: ComponentType<{ className?: string }>;
  label: string;
  isActive?: boolean;
  badge?: string | number;
  onClick?: () => void;
  className?: string;
  tooltipPosition?: "right" | "left" | "top" | "bottom";
}

export const RailButton: React.FC<RailButtonProps> = ({
  icon: Icon,
  label,
  isActive = false,
  badge,
  onClick,
  className = "",
  tooltipPosition = "right",
}) => {
  return (
    <Tooltip content={label} badge={badge} position={tooltipPosition}>
      <button
        type="button"
        onClick={onClick}
        aria-label={label}
        className={`size-11 mx-auto rounded-2xl flex items-center justify-center transition-all duration-200 relative cursor-pointer ${
          isActive
            ? "bg-[image:var(--button-gradient)] text-white shadow-md shadow-primary/25 scale-105"
            : "text-slate-500 hover:text-primary hover:bg-slate-100/80"
        } ${className}`.trim()}
      >
        <Icon className="size-5 stroke-[2.2]" />

        {/* Optional notification badge dot on inactive button */}
        {badge !== undefined && !isActive && (
          <span className="absolute top-1.5 right-1.5 size-2 rounded-full bg-primary ring-2 ring-white" />
        )}
      </button>
    </Tooltip>
  );
};

export default RailButton;
