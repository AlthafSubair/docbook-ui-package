import React, { useEffect } from "react";
import { Trash2, AlertTriangle, AlertCircle, X, Loader2 } from "lucide-react";

export type ConfirmModalVariant = "danger" | "warning" | "primary";

export interface ConfirmModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void | Promise<void>;
  title?: string;
  description?: React.ReactNode;
  confirmText?: string;
  cancelText?: string;
  isLoading?: boolean;
  variant?: ConfirmModalVariant;
  icon?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
}

const variantStyles: Record<
  ConfirmModalVariant,
  {
    iconBg: string;
    iconBorder: string;
    iconColor: string;
    confirmButton: string;
    defaultIcon: React.ComponentType<{ className?: string }>;
  }
> = {
  danger: {
    iconBg: "bg-red-50",
    iconBorder: "border-red-100",
    iconColor: "text-red-600",
    confirmButton:
      "bg-linear-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 shadow-md shadow-red-500/25 text-white",
    defaultIcon: Trash2,
  },
  warning: {
    iconBg: "bg-amber-50",
    iconBorder: "border-amber-100",
    iconColor: "text-amber-600",
    confirmButton:
      "bg-linear-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 shadow-md shadow-amber-500/25 text-white",
    defaultIcon: AlertTriangle,
  },
  primary: {
    iconBg: "bg-blue-50",
    iconBorder: "border-blue-100",
    iconColor: "text-primary",
    confirmButton:
      "bg-[image:var(--button-gradient)] shadow-md shadow-primary/25 text-white",
    defaultIcon: AlertCircle,
  },
};

export const ConfirmModal: React.FC<ConfirmModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  title = "Delete Patient Profile?",
  description = "Are you sure you want to delete this profile? This action cannot be undone.",
  confirmText = "Delete Profile",
  cancelText = "Cancel",
  isLoading = false,
  variant = "danger",
  icon,
  children,
  className = "",
}) => {
  // Lock background scroll when open
  useEffect(() => {
    if (!isOpen) return;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    if (!isOpen) return;

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape" && !isLoading) {
        onClose();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, isLoading, onClose]);

  if (!isOpen) return null;

  const currentVariant = variantStyles[variant];
  const DefaultIconComponent = currentVariant.defaultIcon;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="confirm-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget && !isLoading) {
          onClose();
        }
      }}
    >
      <div
        className={`relative w-full max-w-[390px] rounded-3xl bg-white p-6 shadow-[0_25px_70px_-15px_rgba(0,0,0,0.3)] border border-slate-100 flex flex-col gap-4 animate-in zoom-in-95 duration-200 select-none overflow-hidden ${className}`.trim()}
      >
        {/* Subtle decorative top accent line */}
        <div
          className={`absolute top-0 inset-x-0 h-1.5 ${
            variant === "danger"
              ? "bg-linear-to-r from-red-500 via-rose-500 to-red-600"
              : variant === "warning"
                ? "bg-linear-to-r from-amber-400 to-orange-500"
                : "bg-[image:var(--button-gradient)]"
          }`}
        />

        {/* Header row: Icon & Close button */}
        <div className="flex items-start justify-between gap-3 pt-1">
          {/* Variant Icon with soft ambient ring */}
          <div
            className={`size-12 rounded-2xl ${currentVariant.iconBg} ${currentVariant.iconBorder} border flex items-center justify-center shrink-0 shadow-sm`}
          >
            {icon ? (
              <span className={`shrink-0 ${currentVariant.iconColor}`}>{icon}</span>
            ) : (
              <DefaultIconComponent
                className={`size-5 stroke-[2.3] ${currentVariant.iconColor}`}
              />
            )}
          </div>

          {/* Close X Button */}
          <button
            type="button"
            onClick={onClose}
            disabled={isLoading}
            className="size-8 rounded-xl flex items-center justify-center text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer disabled:opacity-40"
            aria-label="Close dialog"
          >
            <X className="size-4" />
          </button>
        </div>

        {/* Text Content */}
        <div className="flex flex-col gap-1.5">
          <h3
            id="confirm-modal-title"
            className="text-lg font-bold text-slate-900 tracking-tight"
          >
            {title}
          </h3>
          {description && (
            <div className="text-sm text-slate-500 leading-relaxed">
              {description}
            </div>
          )}
        </div>

        {/* Optional Custom Content (e.g. Patient info preview) */}
        {children && <div className="py-0.5">{children}</div>}

        {/* Bottom Actions */}
        <div className="flex items-center gap-2.5 pt-2">
          <button
            type="button"
            onClick={onClose}
            disabled={isLoading}
            className="flex-1 h-11 px-4 rounded-xl font-semibold text-sm text-slate-700 bg-slate-100 hover:bg-slate-200 active:scale-[0.98] transition-all cursor-pointer disabled:opacity-50"
          >
            {cancelText}
          </button>

          <button
            type="button"
            onClick={onConfirm}
            disabled={isLoading}
            className={`flex-1 h-11 px-4 rounded-xl font-semibold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60 active:scale-[0.98] ${currentVariant.confirmButton}`}
          >
            {isLoading ? (
              <>
                <Loader2 className="size-4 animate-spin shrink-0" />
                <span>Processing...</span>
              </>
            ) : (
              <span>{confirmText}</span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;
