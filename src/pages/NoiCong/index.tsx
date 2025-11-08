import Text from "@components/Text";
import { CENTER_ALL_CELLS } from "@constants/table";
import { NOI_1, NOI_CONG_ALL } from "@data/noiCong";
import { mining } from "@data/noiCong/testTools/mining";
import type { TNoiCong } from "@models/noiCong";
import {
  MantineReactTable,
  type MRT_ColumnDef,
  useMantineReactTable,
} from "mantine-react-table";
import { useEffect, useMemo, useState } from "react";

const FILTER_VALUES = {
  ALL: "ALL",
  NOI_1: "NOI_1",
};

const NoiCong = () => {
  const [filter, setFilter] = useState(FILTER_VALUES.ALL);

  const usingData = useMemo(() => {
    switch (filter) {
      case FILTER_VALUES.ALL:
        return NOI_CONG_ALL;
      case FILTER_VALUES.NOI_1:
        return NOI_1;
      default:
        return NOI_CONG_ALL;
    }
  }, []);

  const columns = useMemo<MRT_ColumnDef<TNoiCong>[]>(
    () => [
      {
        accessorKey: "ten",
        accessorFn: (row) => row.ten,
        Cell: ({ row }) => (
          <div className="flex items-center gap-2">
            <img src={row.original.icon} className="rounded-md w-12 h-12" />
            <Text className={`font-medium text-${row.original.colorKey}`}>
              {row.original.ten}
            </Text>
          </div>
        ),
        header: "Tên nội công",
      },
      {
        accessorKey: "tongDiemNgoai",
        accessorFn: (row) => row.detail[row.detail.length - 1].tongDiemNgoai,
        header: "Tổng điểm ngoại",
        ...CENTER_ALL_CELLS,
      },
      {
        accessorKey: "tongDiemNoi",
        accessorFn: (row) => row.detail[row.detail.length - 1].tongDiemNoi,
        header: "Tổng điểm nội",
        ...CENTER_ALL_CELLS,
      },
      {
        accessorKey: "lucTay",
        accessorFn: (row) => row.detail[row.detail.length - 1].lucTay,
        header: "Lực tay",
        ...CENTER_ALL_CELLS,
      },
      {
        accessorKey: "thanPhap",
        accessorFn: (row) => row.detail[row.detail.length - 1].thanPhap,
        header: "Thân pháp",
        ...CENTER_ALL_CELLS,
      },
      {
        accessorKey: "noiTuc",
        accessorFn: (row) => row.detail[row.detail.length - 1].noiTuc,
        header: "Nội tức",
        ...CENTER_ALL_CELLS,
      },
      {
        accessorKey: "canhKhi",
        accessorFn: (row) => row.detail[row.detail.length - 1].canhKhi,
        header: "Canh khí",
        ...CENTER_ALL_CELLS,
      },
      {
        accessorKey: "thePhach",
        accessorFn: (row) => row.detail[row.detail.length - 1].thePhach,
        header: "Thể phách",
        ...CENTER_ALL_CELLS,
      },
      {
        accessorKey: "diemNoiCong",
        accessorFn: (row) => row.detail[row.detail.length - 1].diemNoiCong,
        header: "Điểm nội công",
        ...CENTER_ALL_CELLS,
      },
    ],
    []
  );

  const table = useMantineReactTable<TNoiCong>({
    columns,
    data: usingData,
    enableColumnActions: false,
    enableTopToolbar: false,
    enablePagination: false,
    enableBottomToolbar: false,
    initialState: {
      sorting: [{ id: "diemNoiCong", desc: false }],
    },
  });

  useEffect(() => {
    // fixing();
    mining();
  }, []);

  return (
    <div className="flex flex-col">
      <MantineReactTable table={table} />
    </div>
  );
};

export default NoiCong;
