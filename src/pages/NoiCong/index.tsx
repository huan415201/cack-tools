import { mining } from "@data/noiCong/testTools/mining";
import { useEffect, useState } from "react";

import { FILTER_VALUES } from "./constants";
import { FilterChips, NoiCongTable } from "./partial";

const NoiCong = () => {
  const [filter, setFilter] = useState<string>(FILTER_VALUES[0].value);

  useEffect(() => {
    // fixing();
    mining();
  }, []);

  return (
    <div className="flex flex-col gap-4">
      <FilterChips filter={filter} setFilter={setFilter} />
      <NoiCongTable filter={filter} />
    </div>
  );
};

export default NoiCong;
