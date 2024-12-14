import useTablePagination from "../../hooks/useTablePagination";
import { DataInterface } from "../../interface";
import Pagination from "../Pagination/Pagination";
import "./Table.style.css";
import TableHead from "./TableHead";
import TableRow from "./TableRow";

interface Props {
  data: DataInterface[] | null;
  loading: boolean;
}

function Table({ data, loading }: Props) {
  const { handlePageChange, page, totalPages, rowsPerPage, filteredData } =
    useTablePagination({
      data: data || [],
    });

  return (
    <div className="table-container">
      <table className="styled-table">
        <TableHead />
        <tbody>
          {loading ? (
            <tr>
              <td colSpan={3} style={{ textAlign: "center" }}>
                Loading...
              </td>
            </tr>
          ) : filteredData.length === 0 ? (
            <tr>
              <td colSpan={3} style={{ textAlign: "center" }}>
                No data found
              </td>
            </tr>
          ) : (
            filteredData?.map((item) => (
              <TableRow key={item["s.no"]} item={item} />
            ))
          )}
        </tbody>
      </table>
      {loading || filteredData?.length > 5 ? null : (
        <Pagination
          page={page}
          totalPages={totalPages}
          handlePageChange={handlePageChange}
          rowsPerPage={rowsPerPage}
        />
      )}
    </div>
  );
}

export default Table;
