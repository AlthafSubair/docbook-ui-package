import React, { ComponentType } from "react";
import { PanelLeftClose, PanelLeftOpen } from "lucide-react";
import { Tooltip } from "./Tooltip";

export interface SidebarHeaderProps {
  isCollapsed: boolean;
  onToggleCollapse: () => void;
  icon?: ComponentType<{ className?: string }>;
  title?: string;
  subtitle?: string;
  expandTooltip?: string;
  collapseTooltip?: string;
  className?: string;
}

export const SidebarHeader: React.FC<SidebarHeaderProps> = ({
  isCollapsed,
  onToggleCollapse,
  icon: HeaderIcon,
  title = "Console",
  subtitle = "Settings",
  expandTooltip = "Expand sidebar",
  collapseTooltip = "Collapse sidebar",
  className = "",
}) => {
  return (
    <div className={`pt-1 px-1 ${className}`.trim()}>
      {isCollapsed ? (
        <Tooltip content={expandTooltip}>
          <button
            type="button"
            onClick={onToggleCollapse}
            className="size-11 mx-auto rounded-2xl bg-primary/10 text-primary hover:bg-primary/20 hover:scale-105 active:scale-95 transition-all flex items-center justify-center cursor-pointer"
            aria-label={expandTooltip}
          >
            <PanelLeftOpen className="size-5 stroke-[2.2] transition-transform group-hover:scale-110" />
          </button>
        </Tooltip>
      ) : (
        <div className="flex items-center justify-between w-full pb-3 border-b border-slate-100">
          <div className="flex items-center gap-2.5 min-w-0">
            {HeaderIcon && (
              <div className="size-9 rounded-2xl bg-[image:var(--button-gradient)] text-white shadow-xs shadow-primary/25 flex items-center justify-center shrink-0">
                <HeaderIcon className="size-4.5 stroke-[2.2]" />
              </div>
            )}
            <div className="flex flex-col min-w-0">
              <span className="font-extrabold text-sm tracking-tight text-slate-900 leading-none truncate">
                {title}
              </span>
              {subtitle && (
                <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider mt-1 truncate">
                  {subtitle}
                </span>
              )}
            </div>
          </div>

          <button
            type="button"
            onClick={onToggleCollapse}
            className="size-8 rounded-xl flex items-center justify-center text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer shrink-0"
            title={collapseTooltip}
            aria-label={collapseTooltip}
          >
            <PanelLeftClose className="size-4.5 stroke-[2.2]" />
          </button>
        </div>
      )}
    </div>
  );
};

export default SidebarHeader;
