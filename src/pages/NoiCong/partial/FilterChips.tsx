import Chip from "@components/Chip";
import type { TOption } from "@models/common";
import type { FC } from "react";

import { FILTER_VALUES } from "../constants";

type TFilterChipsProps = {
  filter: string;
  setFilter: (value: string) => void;
};

const FilterChips: FC<TFilterChipsProps> = ({ filter, setFilter }) => {
  const renderChip = (option: TOption) => {
    const selected = filter === option.value;
    return (
      <Chip
        key={option.value}
        onClick={() => setFilter(option.value)}
        isActive={selected}
      >
        {option.label}
      </Chip>
    );
  };

  return (
    <div className="flex items-center gap-4">
      {FILTER_VALUES.map(renderChip)}
    </div>
  );
};

export default FilterChips;
