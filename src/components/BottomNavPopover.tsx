import React, { useEffect, ComponentType } from "react";

export interface NavSubItem {
  id: string;
  label: string;
  href?: string;
  icon?: ComponentType<{ className?: string }>;
  badge?: number | string;
  onClick?: () => void;
}

export interface BottomNavPopoverProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  items: NavSubItem[];
  activeSubItemId?: string;
  currentPath?: string;
  onSubItemClick?: (subItem: NavSubItem) => void;
  linkComponent?: React.ElementType;
  isActive?: (pathname: string, href: string) => boolean;
  align?: "left" | "center" | "right";
  className?: string;
}

export const BottomNavPopover: React.FC<BottomNavPopoverProps> = ({
  isOpen,
  onClose,
  items,
  activeSubItemId,
  currentPath = "",
  onSubItemClick,
  linkComponent: LinkComponent = "a",
  isActive,
  align = "right",
  className = "",
}) => {
  // Close on Escape key press
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen || !items || items.length === 0) {
    return null;
  }

  // Determine notch and alignment styles
  const justifyClass =
    align === "left"
      ? "justify-start"
      : align === "center"
      ? "justify-center"
      : "justify-end";

  const notchClass =
    align === "left"
      ? "left-8"
      : align === "center"
      ? "left-1/2 -translate-x-1/2"
      : "right-8";

  return (
    <>
      {/* Soft Dimmed Blur Backdrop */}
      <div
        role="presentation"
        aria-hidden="true"
        onClick={onClose}
        className="fixed inset-0 z-40 bg-slate-900/30 backdrop-blur-xs transition-opacity duration-200"
      />

      {/* Upward Popover Menu Container (Docked smoothly above the bottom dock) */}
      <div
        role="dialog"
        aria-modal="true"
        className={`fixed bottom-[72px] inset-x-0 z-50 px-3 sm:px-4 flex justify-center pointer-events-none ${className}`.trim()}
      >
        <div className={`pointer-events-auto w-full max-w-2xl flex ${justifyClass} relative`}>
          <div className="relative w-64 max-w-[calc(100vw-2rem)] bg-white/95 backdrop-blur-2xl rounded-2xl border-2 border-primary/40 shadow-[0_16px_50px_rgba(16,67,250,0.22),0_4px_16px_rgba(0,0,0,0.06)] p-1.5 flex flex-col gap-1 select-none transition-all duration-200 animate-in fade-in-0 zoom-in-95 slide-in-from-bottom-2">
            
            {/* Clean Action Items List */}
            <div className="flex flex-col gap-1">
              {items.map((subItem) => {
                const Icon = subItem.icon;
                const isSubActive =
                  activeSubItemId !== undefined
                    ? activeSubItemId === subItem.id
                    : subItem.href
                    ? isActive
                      ? isActive(currentPath, subItem.href)
                      : currentPath === subItem.href ||
                        (subItem.href !== "/" && currentPath.startsWith(`${subItem.href}/`))
                    : false;

                const handleClick = () => {
                  subItem.onClick?.();
                  onSubItemClick?.(subItem);
                  onClose();
                };

                const innerContent = (
                  <>
                    <div className="flex items-center gap-2.5 min-w-0">
                      {Icon && (
                        <div
                          className={`size-7 rounded-xl flex items-center justify-center transition-colors ${
                            isSubActive
                              ? "bg-white/20 text-white"
                              : "bg-primary/10 text-primary"
                          }`}
                        >
                          <Icon className="size-4 shrink-0 stroke-[2.2]" />
                        </div>
                      )}
                      <span
                        className={`text-xs tracking-tight truncate ${
                          isSubActive
                            ? "font-bold text-white"
                            : "font-semibold text-slate-700"
                        }`}
                      >
                        {subItem.label}
                      </span>
                    </div>

                    {subItem.badge !== undefined && (
                      <span
                        className={`px-2 py-0.5 rounded-full text-[10px] font-bold shrink-0 shadow-xs ${
                          isSubActive
                            ? "bg-white/25 text-white"
                            : "bg-primary/10 text-primary"
                        }`}
                      >
                        {subItem.badge}
                      </span>
                    )}
                  </>
                );

                if (subItem.href) {
                  return (
                    <LinkComponent
                      key={subItem.id}
                      href={subItem.href}
                      to={subItem.href}
                      onClick={handleClick}
                      className={`w-full flex items-center justify-between p-2 rounded-xl transition-all duration-150 text-left cursor-pointer active:scale-[0.98] ${
                        isSubActive
                          ? "bg-[image:var(--button-gradient)] text-white shadow-xs shadow-primary/25 font-bold"
                          : "text-slate-700 hover:bg-slate-100/80 hover:text-primary active:bg-slate-100"
                      }`}
                    >
                      {innerContent}
                    </LinkComponent>
                  );
                }

                return (
                  <button
                    key={subItem.id}
                    type="button"
                    onClick={handleClick}
                    className={`w-full flex items-center justify-between p-2 rounded-xl transition-all duration-150 text-left cursor-pointer active:scale-[0.98] ${
                      isSubActive
                        ? "bg-[image:var(--button-gradient)] text-white shadow-xs shadow-primary/25 font-bold"
                        : "text-slate-700 hover:bg-slate-100/80 hover:text-primary active:bg-slate-100"
                    }`}
                  >
                    {innerContent}
                  </button>
                );
              })}
            </div>

            {/* Downward Pointer Notch */}
            <div
              className={`absolute -bottom-1.5 ${notchClass} size-3 bg-white border-b-2 border-r-2 border-primary/40 rotate-45 pointer-events-none`}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default BottomNavPopover;
