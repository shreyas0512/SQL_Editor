import React from "react";

function Pagination({ currentPage, totalPages,length, onPageChange }) {

  return (
    <div className="mt-4">
    <button
      onClick={() => paginate(currentPage - 1)}
      className={`mx-1 px-3 py-2 rounded-md ${
        currentPage === 1 ? "bg-white" : "bg-[#271BB1] text-white"
      }`}
    >
      Prev
    </button>
    <button
      onClick={() => paginate(currentPage + 1)}
      className={`mx-1 px-3 py-2 rounded-md ${
        currentPage === Math.ceil(length / rowsPerPage)
          ? "bg-white "
          : "bg-[#271BB1] text-white"
      }`}
    >
      Next
    </button>
  </div>
  );
}

export default Pagination;