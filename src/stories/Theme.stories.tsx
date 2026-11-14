import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { themeColors, brand } from "../theme";

const ColorSwatch = ({ name, value, bg }: { name: string; value: string; bg?: string }) => (
  <div className="flex flex-col gap-1.5 p-3 rounded-xl border border-slate-200 bg-white shadow-2xs">
    <div
      className="w-full h-14 rounded-lg border border-slate-200/60"
      style={{ background: bg || value }}
    />
    <span className="text-xs font-bold text-slate-800">{name}</span>
    <span className="text-[11px] font-mono text-slate-500 truncate">{value}</span>
  </div>
);

const ThemeShowcase: React.FC = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto flex flex-col gap-8 bg-slate-50/50 rounded-2xl border border-slate-200">
      <div>
        <h1 className="text-2xl font-extrabold text-slate-900">
          Doc<span className="bg-[image:var(--button-gradient)] bg-clip-text text-transparent">Book</span> Design Theme
        </h1>
        <p className="text-xs text-slate-500 mt-1">
          Color tokens, brand gradients, and CSS variables for DocBook UI
        </p>
      </div>

      {/* Brand Gradient Demo */}
      <div className="flex flex-col gap-2">
        <h2 className="text-sm font-bold text-slate-700">Brand Gradient</h2>
        <div className="h-20 rounded-xl bg-[image:var(--button-gradient)] flex items-center justify-center text-white font-bold text-lg shadow-sm">
          {brand.name} Gradient Button / Accent
        </div>
      </div>

      {/* Palette Swatches */}
      <div className="flex flex-col gap-2">
        <h2 className="text-sm font-bold text-slate-700">Color Palette Tokens</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          <ColorSwatch name="Primary" value={themeColors.primary} />
          <ColorSwatch name="Primary Dark" value={themeColors.primaryDark} />
          <ColorSwatch name="Secondary Text" value={themeColors.secondary} />
          <ColorSwatch name="Tertiary Text" value={themeColors.tertiary} />
          <ColorSwatch name="Border Default" value={themeColors.borderDefault} />
          <ColorSwatch name="Background" value={themeColors.background} />
          <ColorSwatch name="Foreground" value={themeColors.foreground} />
          <ColorSwatch name="Button Gradient" value="100deg Blue to Dark Blue" bg={themeColors.buttonGradient} />
        </div>
      </div>

      {/* Typography Preview */}
      <div className="flex flex-col gap-3 p-4 rounded-xl bg-white border border-slate-200">
        <h2 className="text-sm font-bold text-slate-700">Typography Scale</h2>
        <h1 className="text-2xl font-bold text-primary-dark">Primary Dark Title (H1)</h1>
        <h2 className="text-xl font-bold text-slate-800">Section Header (H2)</h2>
        <p className="text-sm text-secondary-text">Secondary body text paragraph for descriptions and labels.</p>
        <p className="text-xs text-tertiary-text">Tertiary subtle captions, timestamps, and helper text.</p>
      </div>
    </div>
  );
};

const meta: Meta<typeof ThemeShowcase> = {
  title: "Design System/Theme",
  component: ThemeShowcase,
  parameters: {
    layout: "padded",
  },
};

export default meta;
type Story = StoryObj<typeof ThemeShowcase>;

export const Default: Story = {};
