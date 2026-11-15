import React, { ReactNode } from "react";

export interface TooltipProps {
  content: ReactNode;
  badge?: string | number;
  position?: "right" | "left" | "top" | "bottom";
  className?: string;
  children: ReactNode;
}

export const Tooltip: React.FC<TooltipProps> = ({
  content,
  badge,
  position = "right",
  className = "",
  children,
}) => {
  const getPositionClasses = () => {
    switch (position) {
      case "right":
        return "left-[calc(100%+14px)] top-1/2 -translate-y-1/2 group-hover:translate-x-1";
      case "left":
        return "right-[calc(100%+14px)] top-1/2 -translate-y-1/2 group-hover:-translate-x-1";
      case "top":
        return "bottom-[calc(100%+12px)] left-1/2 -translate-x-1/2 group-hover:-translate-y-1";
      case "bottom":
        return "top-[calc(100%+12px)] left-1/2 -translate-x-1/2 group-hover:translate-y-1";
    }
  };

  const getArrowClasses = () => {
    switch (position) {
      case "right":
        return "-left-1 top-1/2 -translate-y-1/2 border-l border-b";
      case "left":
        return "-right-1 top-1/2 -translate-y-1/2 border-r border-t";
      case "top":
        return "-bottom-1 left-1/2 -translate-x-1/2 border-r border-b";
      case "bottom":
        return "-top-1 left-1/2 -translate-x-1/2 border-l border-t";
    }
  };

  return (
    <div className={`relative group flex items-center justify-center ${className}`.trim()}>
      {children}

      <div
        role="tooltip"
        className={`absolute ${getPositionClasses()} px-3 py-1.5 bg-slate-900/95 backdrop-blur-md text-white text-xs font-semibold rounded-xl shadow-xl shadow-slate-900/20 opacity-0 pointer-events-none group-hover:opacity-100 transition-all duration-200 z-50 whitespace-nowrap flex items-center gap-2 border border-slate-700/60`}
      >
        <span>{content}</span>
        {badge !== undefined && (
          <span className="px-1.5 py-0.5 rounded-full text-[10px] font-bold bg-primary text-white">
            {badge}
          </span>
        )}
        <div
          className={`absolute size-2 bg-slate-900 rotate-45 border-slate-700/60 ${getArrowClasses()}`}
        />
      </div>
    </div>
  );
};

export default Tooltip;
