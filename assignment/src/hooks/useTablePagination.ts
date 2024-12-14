import { useCallback, useMemo, useState } from "react";
import { DataInterface } from "../interface";

interface Props {
  data: DataInterface[] | null;
}

function useTablePagination({ data }: Props) {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const totalPages = Math.ceil((data?.length ?? 0) / rowsPerPage);

  const handlePageChange = useCallback((newPage: number) => {
    setPage(newPage);
  }, []);

  const filteredData = useMemo(() => {
    const start = page * rowsPerPage;
    const end = start + rowsPerPage;
    return data?.slice(start, end) ?? [];
  }, [data, page, rowsPerPage]);

  return {
    page,
    totalPages,
    rowsPerPage,
    handlePageChange,
    filteredData,
  };
}

export default useTablePagination;
