import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { CountryDropdown } from "../components/CountryDropdown";
import { getCountryList, type Country } from "../utils/phoneUtils";

const meta: Meta<typeof CountryDropdown> = {
  title: "Components/CountryDropdown",
  component: CountryDropdown,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof CountryDropdown>;

export const Default: Story = {
  render: () => {
    const countries = getCountryList();
    const [selected, setSelected] = useState<Country>(
      countries.find((c) => c.code === "IN") || countries[0]
    );

    return (
      <div className="max-w-xs p-8">
        <div className="flex items-center border border-slate-200 rounded-xl p-2">
          <CountryDropdown
            id="story-country"
            country={selected.code}
            countries={countries}
            onSelect={setSelected}
          />
          <span className="ml-3 text-sm text-slate-500">Selected: {selected.name}</span>
        </div>
      </div>
    );
  },
};
