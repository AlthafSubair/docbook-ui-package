import React, { useState, useEffect } from "react";
import { Home, CalendarDays, Users, User } from "lucide-react";
import {
  BottomNavPopover,
  type BottomNavPopoverProps,
  type NavSubItem,
} from "./BottomNavPopover";

export type { NavSubItem };
export { BottomNavPopover };

export interface NavItem {
  id: string;
  label: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  badge?: number | string;
  subItems?: NavSubItem[];
}

export const defaultNavItems: NavItem[] = [
  {
    id: "home",
    label: "Home",
    href: "/clinics",
    icon: Home,
  },
  {
    id: "bookings",
    label: "Bookings",
    href: "/bookings",
    icon: CalendarDays,
    badge: 2,
  },
  {
    id: "patients",
    label: "Patients",
    href: "/patients",
    icon: Users,
  },
  {
    id: "profile",
    label: "Profile",
    href: "/profile",
    icon: User,
  },
];

export const navItems = defaultNavItems;

export const isNavItemActive = (pathname: string | null | undefined, href: string) => {
  if (!pathname) return false;
  if (href === "/clinics") {
    return (
      pathname === "/" ||
      pathname === "/clinics" ||
      pathname.startsWith("/clinics/") ||
      pathname.startsWith("/doctors")
    );
  }
  return pathname === href || pathname.startsWith(`${href}/`);
};

export interface BottomNavProps {
  className?: string;
  items?: NavItem[];
  currentPath?: string;
  visible?: boolean;
  linkComponent?: React.ElementType;
  onItemClick?: (item: NavItem) => void;
  isActive?: (pathname: string, href: string) => boolean;
  activeSubItemId?: string;
  onSubItemClick?: (subItem: NavSubItem, parentItem: NavItem) => void;
}

export interface BottomNavComponent extends React.FC<BottomNavProps> {
  Popover: React.FC<BottomNavPopoverProps>;
}

export const BottomNav: BottomNavComponent = ({
  className = "",
  items = defaultNavItems,
  currentPath,
  visible = true,
  linkComponent: LinkComponent = "a",
  onItemClick,
  isActive,
  activeSubItemId,
  onSubItemClick,
}) => {
  const [clientPath, setClientPath] = useState("");
  const [openPopoverItemId, setOpenPopoverItemId] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setClientPath(window.location.pathname);
    }
  }, []);

  const effectivePath = currentPath !== undefined ? currentPath : clientPath;

  if (!visible) {
    return null;
  }

  // Find active popover item (if any)
  const activePopoverItem = items.find(
    (item) => item.id === openPopoverItemId && item.subItems && item.subItems.length > 0
  );
  const activePopoverIndex = activePopoverItem ? items.indexOf(activePopoverItem) : -1;
  const popoverAlign =
    activePopoverIndex === 0
      ? "left"
      : activePopoverIndex === items.length - 1
      ? "right"
      : "center";

  return (
    <>
      {/* Upward Floating Popover Menu when an item with subItems is toggled */}
      {activePopoverItem && activePopoverItem.subItems && (
        <BottomNavPopover
          isOpen={true}
          onClose={() => setOpenPopoverItemId(null)}
          title={`${activePopoverItem.label} Sections`}
          items={activePopoverItem.subItems}
          activeSubItemId={activeSubItemId}
          currentPath={effectivePath}
          linkComponent={LinkComponent}
          isActive={isActive}
          align={popoverAlign}
          onSubItemClick={(subItem) => {
            onSubItemClick?.(subItem, activePopoverItem);
            setOpenPopoverItemId(null);
          }}
        />
      )}

      {/* Floating Bottom Nav Dock */}
      <nav
        aria-label="Mobile navigation"
        className={`fixed bottom-3 inset-x-0 z-50 pointer-events-none flex justify-center px-3 sm:px-4 lg:hidden ${className}`.trim()}
      >
        <div className="pointer-events-auto flex items-center justify-between w-full max-w-2xl h-14 p-1 rounded-full bg-white/95 backdrop-blur-xl border-2 border-primary/40 shadow-[0_8px_30px_rgba(0,0,255,0.14),0_2px_8px_rgba(0,0,0,0.06)] select-none">
          {items.map((item) => {
            const active = isActive
              ? isActive(effectivePath, item.href)
              : isNavItemActive(effectivePath, item.href);
            const Icon = item.icon;
            const hasSubItems = Boolean(item.subItems && item.subItems.length > 0);

            const handleItemClick = (e: React.MouseEvent) => {
              if (hasSubItems) {
                // Toggle upward popover
                setOpenPopoverItemId((prev) => (prev === item.id ? null : item.id));
                if (active) {
                  // Prevent unnecessary re-navigation when already on the page
                  e.preventDefault();
                }
              } else {
                setOpenPopoverItemId(null);
              }
              onItemClick?.(item);
            };

            return (
              <LinkComponent
                key={item.id}
                href={item.href}
                to={item.href}
                onClick={handleItemClick}
                className={`flex-1 h-full rounded-full flex flex-col items-center justify-center gap-0.5 px-2 relative cursor-pointer transition-all duration-200 group ${
                  active
                    ? "bg-[image:var(--button-gradient)] text-white shadow-[0_2px_8px_rgba(0,0,255,0.35)] scale-[1.01]"
                    : "text-secondary hover:text-primary hover:bg-slate-100/80"
                }`}
              >
                {/* Icon Container with optional notification badge */}
                <div className="relative flex items-center justify-center">
                  <Icon
                    className={`size-5 transition-transform duration-150 ${
                      active
                        ? "stroke-[2.4] text-white"
                        : "stroke-2 text-slate-500 group-hover:text-primary group-hover:scale-105"
                    }`}
                  />

                  {item.badge !== undefined && (
                    <span
                      className={`absolute -top-1 -right-2.5 min-w-[14px] h-[14px] px-1 rounded-full text-[12px] font-black flex items-center justify-center shadow-xs ${
                        active
                          ? "bg-white text-primary"
                          : "bg-[image:var(--button-gradient)] text-white"
                      }`}
                    >
                      {item.badge}
                    </span>
                  )}
                </div>

                {/* Clean, standard label without any text-cramping carets */}
                <span
                  className={`text-[9.5px] leading-none tracking-tight whitespace-nowrap transition-colors ${
                    active
                      ? "font-bold text-white"
                      : "font-medium text-slate-600 group-hover:text-primary"
                  }`}
                >
                  {item.label}
                </span>
              </LinkComponent>
            );
          })}
        </div>
      </nav>
    </>
  );
};

BottomNav.Popover = BottomNavPopover;

export default BottomNav;
