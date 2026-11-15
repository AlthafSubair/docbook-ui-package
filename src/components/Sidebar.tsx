import React, { useState, useEffect, ComponentType, ReactNode } from "react";
import SidebarHeader, { SidebarHeaderProps } from "./SidebarHeader";
import SidebarItem, { SidebarMenuItem, SidebarItemProps } from "./SidebarItem";
import SidebarFooter, { SidebarFooterProps } from "./SidebarFooter";

export interface SidebarProps {
  items: SidebarMenuItem[];
  activeItemId?: string;
  onSelect?: (itemId: string, item: SidebarMenuItem) => void;
  headerIcon?: ComponentType<{ className?: string }>;
  title?: string;
  subtitle?: string;
  footerIcon?: ComponentType<{ className?: string }>;
  footerLabel?: string;
  footerBadgeText?: string;
  footerTooltip?: ReactNode;
  storageKey?: string;
  defaultCollapsed?: boolean;
  collapsedWidth?: string;
  expandedWidth?: string;
  className?: string;
  children?: ReactNode;
}

export interface SidebarComponent extends React.FC<SidebarProps> {
  Header: React.FC<SidebarHeaderProps>;
  Item: React.FC<SidebarItemProps>;
  Footer: React.FC<SidebarFooterProps>;
}

export const Sidebar: SidebarComponent = ({
  items,
  activeItemId: controlledActiveId,
  onSelect,
  headerIcon,
  title = "Console",
  subtitle = "Settings",
  footerIcon,
  footerLabel = "Admin Active",
  footerBadgeText = "Ready",
  footerTooltip = "Admin Active",
  storageKey = "docbook_sidebar_collapsed",
  defaultCollapsed = false,
  collapsedWidth = "w-[72px]",
  expandedWidth = "w-64 xl:w-72",
  className = "",
  children,
}) => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem(storageKey);
      if (saved !== null) return saved === "true";
    }
    return defaultCollapsed;
  });

  const [activeItem, setActiveItem] = useState<string>(() => {
    return controlledActiveId || (items && items[0] ? items[0].id : "");
  });

  useEffect(() => {
    if (controlledActiveId !== undefined) {
      setActiveItem(controlledActiveId);
    }
  }, [controlledActiveId]);

  const toggleCollapse = () => {
    setIsCollapsed((prev) => {
      const next = !prev;
      try {
        localStorage.setItem(storageKey, String(next));
      } catch {}
      return next;
    });
  };

  const handleItemClick = (item: SidebarMenuItem) => {
    setActiveItem(item.id);
    onSelect?.(item.id, item);
  };

  return (
    <aside
      aria-label="Navigation Sidebar"
      className={`relative select-none transition-all duration-300 ease-in-out shrink-0 h-full ${
        isCollapsed ? collapsedWidth : expandedWidth
      } ${className}`.trim()}
    >
      <div
        className={`h-full bg-white/95 backdrop-blur-xl border-2 border-primary/50 shadow-[0_8px_30px_rgba(0,0,255,0.12),0_2px_8px_rgba(0,0,0,0.04)] rounded-[28px] p-3 flex flex-col justify-between transition-[width,border-color,box-shadow] duration-200 ${
          isCollapsed ? "overflow-visible" : "overflow-hidden"
        }`}
      >
        <div
          className={`flex-1 flex flex-col gap-3 ${
            isCollapsed ? "overflow-visible" : "overflow-y-auto custom-scrollbar"
          }`}
        >
          {/* Header */}
          <SidebarHeader
            isCollapsed={isCollapsed}
            onToggleCollapse={toggleCollapse}
            icon={headerIcon}
            title={title}
            subtitle={subtitle}
          />

          {/* Collapsed Divider */}
          {isCollapsed && <div className="w-8 h-px bg-slate-200/80 mx-auto my-0.5" />}

          {/* Navigation Items (if items prop provided) */}
          {items && items.length > 0 && (
            <nav className="flex flex-col gap-1.5 px-0.5 pt-1">
              {items.map((item) => (
                <SidebarItem
                  key={item.id}
                  item={item}
                  isActive={activeItem === item.id}
                  isCollapsed={isCollapsed}
                  onClick={handleItemClick}
                />
              ))}
            </nav>
          )}

          {/* Custom Children slot if any */}
          {children}
        </div>

        {/* Footer */}
        <SidebarFooter
          isCollapsed={isCollapsed}
          icon={footerIcon}
          label={footerLabel}
          badgeText={footerBadgeText}
          tooltipContent={footerTooltip}
        />
      </div>
    </aside>
  );
};

Sidebar.Header = SidebarHeader;
Sidebar.Item = SidebarItem;
Sidebar.Footer = SidebarFooter;

export default Sidebar;
