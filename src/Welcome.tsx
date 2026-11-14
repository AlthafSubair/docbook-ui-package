import React from "react";

export interface WelcomeProps {
  title?: string;
  subtitle?: string;
}

export const Welcome: React.FC<WelcomeProps> = ({
  title = "DocBook UI Component Library",
  subtitle = "Storybook workspace for DocBook UI components",
}) => {
  return (
    <div className="p-8 max-w-xl mx-auto rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col gap-3">
      <div className="flex items-center gap-2">
        <div className="size-8 rounded-xl bg-[image:var(--button-gradient)] flex items-center justify-center text-white font-bold text-sm">
          DB
        </div>
        <h1 className="text-xl font-bold text-slate-900">{title}</h1>
      </div>
      <p className="text-sm text-slate-600">{subtitle}</p>
      <div className="mt-2 text-xs text-primary font-semibold bg-primary/10 px-3 py-2 rounded-lg border border-primary/20">
        Ready for migrating components one by one.
      </div>
    </div>
  );
};

export default Welcome;
