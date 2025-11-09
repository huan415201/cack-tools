import Text from "@components/Text";
import { mining } from "@data/noiCong/testTools/mining";
import { Button, Input } from "@headlessui/react";
import { useEffect, useRef, useState } from "react";

import { FILTER_VALUES } from "./constants";
import { FilterChips, NoiCongTable } from "./partial";

const NoiCong = () => {
  const [filter, setFilter] = useState<string>(FILTER_VALUES[0].value);
  const [selectedLevel, setSelectedLevel] = useState<number>(36);
  const inputRef = useRef<HTMLInputElement>(null);

  const onClickOk = () => {
    const result = Number(inputRef.current?.value);
    if (result) setSelectedLevel(result);
  };

  useEffect(() => {
    // fixing();
    mining();
  }, []);

  return (
    <div className="flex flex-col gap-4">
      <FilterChips filter={filter} setFilter={setFilter} />
      <div className="flex items-center gap-4">
        <Text>Chọn tầng</Text>
        <Input
          defaultValue={36}
          ref={inputRef}
          className="py-2 px-3 border border-border rounded-md w-[100px]"
        />
        <Button onClick={onClickOk}>OK</Button>
      </div>
      <NoiCongTable filter={filter} selectedLevel={selectedLevel} />
    </div>
  );
};

export default NoiCong;
