import "./Pagination.style.css";

interface Props {
  page: number;
  totalPages: number;
  handlePageChange: (newPage: number) => void;
  rowsPerPage: number;
}

function Pagination({ page, totalPages, handlePageChange }: Props) {
  return (
    <div>
      <div className="pagination">
        <button
          className={`pagination-button ${page === 0 ? "disabled" : ""}`}
          onClick={() => handlePageChange(0)}
          disabled={page === 0}
        >
          First
        </button>
        <button
          className={`pagination-button ${page === 0 ? "disabled" : ""}`}
          onClick={() => handlePageChange(page - 1)}
          disabled={page === 0}
        >
          Prev
        </button>
        <button
          className={`pagination-button ${
            page === totalPages - 1 ? "disabled" : ""
          }`}
          onClick={() => handlePageChange(page + 1)}
          disabled={page === totalPages - 1}
        >
          Next
        </button>
        <button
          className={`pagination-button ${
            page === totalPages - 1 ? "disabled" : ""
          }`}
          onClick={() => handlePageChange(totalPages - 1)}
          disabled={page === totalPages - 1}
        >
          Last
        </button>
      </div>
    </div>
  );
}

export default Pagination;
