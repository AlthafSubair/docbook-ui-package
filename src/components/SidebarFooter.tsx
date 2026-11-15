import React, { ComponentType, ReactNode } from "react";
import { Tooltip } from "./Tooltip";

export interface SidebarFooterProps {
  isCollapsed: boolean;
  icon?: ComponentType<{ className?: string }>;
  label?: string;
  badgeText?: string;
  tooltipContent?: ReactNode;
  children?: ReactNode;
  className?: string;
}

export const SidebarFooter: React.FC<SidebarFooterProps> = ({
  isCollapsed,
  icon: FooterIcon,
  label = "Active",
  badgeText = "Ready",
  tooltipContent,
  children,
  className = "",
}) => {
  if (children) {
    return <div className={`pt-2 border-t border-slate-100 ${className}`.trim()}>{children}</div>;
  }

  return (
    <div className={`pt-2 border-t border-slate-100 flex items-center justify-center ${className}`.trim()}>
      {isCollapsed ? (
        <Tooltip content={tooltipContent || label}>
          <div className="size-8 rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-200/60 flex items-center justify-center cursor-default">
            {FooterIcon && <FooterIcon className="size-4" />}
          </div>
        </Tooltip>
      ) : (
        <div className="w-full flex items-center justify-between p-2 rounded-2xl bg-slate-50 border border-slate-200/60 text-xs">
          <div className="flex items-center gap-2 min-w-0">
            <span className="size-2 rounded-full bg-emerald-500 shrink-0 animate-pulse" />
            <span className="font-semibold text-slate-700 truncate">{label}</span>
          </div>
          {badgeText && (
            <span className="text-[10px] font-bold text-primary px-2 py-0.5 rounded-md bg-primary/10">
              {badgeText}
            </span>
          )}
        </div>
      )}
    </div>
  );
};

export default SidebarFooter;
