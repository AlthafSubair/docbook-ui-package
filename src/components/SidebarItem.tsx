import React, { ComponentType } from "react";
import { RailButton } from "./RailButton";

export interface SidebarMenuItem {
  id: string;
  label: string;
  path?: string;
  icon: ComponentType<{ className?: string }>;
  badge?: string | number;
}

export interface SidebarItemProps {
  item: SidebarMenuItem;
  isActive: boolean;
  isCollapsed: boolean;
  onClick: (item: SidebarMenuItem) => void;
  className?: string;
}

export const SidebarItem: React.FC<SidebarItemProps> = ({
  item,
  isActive,
  isCollapsed,
  onClick,
  className = "",
}) => {
  const Icon = item.icon;

  if (isCollapsed) {
    return (
      <RailButton
        icon={item.icon}
        label={item.label}
        isActive={isActive}
        badge={item.badge}
        onClick={() => onClick(item)}
        className={className}
      />
    );
  }

  return (
    <button
      type="button"
      onClick={() => onClick(item)}
      className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-2xl transition-all duration-200 cursor-pointer group select-none text-left ${
        isActive
          ? "bg-[image:var(--button-gradient)] text-white shadow-xs shadow-primary/20 font-semibold"
          : "text-slate-600 hover:bg-slate-100/80 hover:text-primary font-medium"
      } ${className}`.trim()}
    >
      <div className="flex items-center gap-3 min-w-0">
        <Icon
          className={`size-4.5 shrink-0 transition-transform ${
            isActive
              ? "stroke-[2.2] text-white"
              : "stroke-2 text-slate-500 group-hover:text-primary group-hover:scale-105"
          }`}
        />
        <span className="text-sm truncate">{item.label}</span>
      </div>

      {item.badge !== undefined && (
        <span
          className={`px-2 py-0.5 rounded-full text-[11px] font-bold ${
            isActive
              ? "bg-white text-primary"
              : "bg-slate-100 text-slate-600 group-hover:bg-primary/10 group-hover:text-primary"
          }`}
        >
          {item.badge}
        </span>
      )}
    </button>
  );
};

export default SidebarItem;
