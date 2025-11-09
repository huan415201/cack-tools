import Text from "@components/Text";
import { NOI_1, NOI_2, NOI_3, NOI_CONG_ALL } from "@data/noiCong";
import type { TNoiCong } from "@models/noiCong";
import { dynamicColor } from "@utils/dynamicColor";
import {
  MantineReactTable,
  type MRT_ColumnDef,
  useMantineReactTable,
} from "mantine-react-table";
import { type FC, useMemo } from "react";

import { FILTER_VALUES } from "../constants";
import type { TNoiCongTableData } from "../types";
import { getHieuUng, getStatClassName } from "../utils";

type TNoiCongTableProps = {
  filter: string;
  selectedLevel: number;
};

const NoiCongTable: FC<TNoiCongTableProps> = ({ filter, selectedLevel }) => {
  const usingData = useMemo(() => {
    let result: TNoiCongTableData[] = [];
    let noiCongList: TNoiCong[] = [];
    switch (filter) {
      case FILTER_VALUES[0].value:
        noiCongList = [...NOI_CONG_ALL];
        break;
      case FILTER_VALUES[1].value:
        noiCongList = [...NOI_1];
        break;
      case FILTER_VALUES[2].value:
        noiCongList = [...NOI_2];
        break;
      case FILTER_VALUES[3].value:
        noiCongList = [...NOI_3];
        break;
    }
    result = noiCongList.map((item) => {
      const noiCongMaxLevel = item.detail.length;
      const detail = item.detail[Math.min(selectedLevel, noiCongMaxLevel) - 1];
      const hieuUng = getHieuUng(item, selectedLevel);
      const highestStat = Math.max(
        detail.lucTay,
        detail.thanPhap,
        detail.noiTuc,
        detail.canhKhi,
        detail.thePhach
      );
      const secondHighestStat = [
        detail.lucTay,
        detail.thanPhap,
        detail.noiTuc,
        detail.canhKhi,
        detail.thePhach,
      ]
        .filter((stat) => stat !== highestStat)
        .reduce((a, b) => Math.max(a, b), 0);
      return {
        ...item,
        detail,
        hieuUng,
        highestStat,
        secondHighestStat,
      };
    });
    return result;
  }, [filter, selectedLevel]);

  const columns = useMemo<MRT_ColumnDef<TNoiCongTableData>[]>(() => {
    return [
      {
        accessorKey: "ten",
        accessorFn: (row) => row.ten,
        Cell: ({ row }) => (
          <div className="flex items-center gap-2">
            <img src={row.original.icon} className="rounded-md w-12 h-12" />
            <Text
              className={`font-medium ${dynamicColor(row.original.colorKey, "text")}`}
            >
              {row.original.ten}
            </Text>
          </div>
        ),
        header: "Tên nội công",
      },
      {
        accessorKey: "tongDiemNgoai",
        accessorFn: (row) => row.detail.tongDiemNgoai || "-",
        header: "Tổng điểm ngoại",
        mantineTableHeadCellProps: { align: "center" },
        mantineTableBodyCellProps: { align: "center" },
      },
      {
        accessorKey: "tongDiemNoi",
        accessorFn: (row) => row.detail.tongDiemNoi || "-",
        header: "Tổng điểm nội",
        mantineTableHeadCellProps: { align: "center" },
        mantineTableBodyCellProps: { align: "center" },
      },
      {
        accessorKey: "hieuUng",
        accessorFn: (row) => (
          <div className="whitespace-pre-wrap">{row.hieuUng || "-"}</div>
        ),
        header: "Hiệu ứng",
        size: 500,
        mantineTableHeadCellProps: { align: "center" },
        mantineTableBodyCellProps: { align: "center" },
      },
      {
        accessorKey: "detail.lucTay",
        accessorFn: (row) => row.detail.lucTay || "-",
        header: "Lực tay",
        mantineTableHeadCellProps: { align: "center" },
        mantineTableBodyCellProps: ({ row }) => ({
          align: "center",
          className: getStatClassName(row.original, "lucTay"),
        }),
      },
      {
        accessorKey: "detail.thanPhap",
        accessorFn: (row) => row.detail.thanPhap || "-",
        header: "Thân pháp",
        mantineTableHeadCellProps: { align: "center" },
        mantineTableBodyCellProps: ({ row }) => ({
          align: "center",
          className: getStatClassName(row.original, "thanPhap"),
        }),
      },
      {
        accessorKey: "detail.noiTuc",
        accessorFn: (row) => row.detail.noiTuc || "-",
        header: "Nội tức",
        mantineTableHeadCellProps: { align: "center" },
        mantineTableBodyCellProps: ({ row }) => ({
          align: "center",
          className: getStatClassName(row.original, "noiTuc"),
        }),
      },
      {
        accessorKey: "detail.canhKhi",
        accessorFn: (row) => row.detail.canhKhi || "-",
        header: "Canh khí",
        mantineTableHeadCellProps: { align: "center" },
        mantineTableBodyCellProps: ({ row }) => ({
          align: "center",
          className: getStatClassName(row.original, "canhKhi"),
        }),
      },
      {
        accessorKey: "detail.thePhach",
        accessorFn: (row) => row.detail.thePhach || "-",
        header: "Thể phách",
        mantineTableHeadCellProps: { align: "center" },
        mantineTableBodyCellProps: ({ row }) => ({
          align: "center",
          className: getStatClassName(row.original, "thePhach"),
        }),
      },
    ];
  }, []);

  const table = useMantineReactTable<TNoiCongTableData>({
    columns,
    data: usingData,
    enableColumnActions: false,
    enableTopToolbar: false,
    enablePagination: false,
    enableBottomToolbar: false,
    initialState: {
      sorting: [{ id: "tongDiemNgoai", desc: true }],
    },
    mantinePaperProps: {
      shadow: "none",
      className: "!border-b-0",
    },
  });

  return <MantineReactTable table={table} />;
};

export default NoiCongTable;
