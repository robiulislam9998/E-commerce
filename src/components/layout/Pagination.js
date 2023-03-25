import React, { useEffect, useState } from "react";

import ReactPaginate from "react-paginate";
import Product from "./Product";

// Example items, to simulate fetching from another resources.
const items = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
  11, 12, 13, 14, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 1, 2, 3, 4, 5,
  6, 7, 8, 9, 10, 11, 12, 13, 14, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
  11, 12, 13, 14, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
];

function Items({ currentItems }) {
  return (
    <>
      {currentItems &&
        currentItems.map((item, index) => (
          <div className="md:w-[49%] lg:w-[32%]">
            <Product key={index} src="assets/p1.png" badge={true} />
          </div>
        ))}
    </>
  );
}

const Pagination = ({ itemsPerPage }) => {
  const [itemOffset, setItemOffset] = useState(0);
  const [itemSelect, setItemSelect] = useState(0);

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    // console.log(
    //   `User requested page number ${event.selected}, which is offset ${newOffset}`
    // );
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setItemSelect(event.selected);
    setItemOffset(newOffset);
  };

  return (
    <>
      <div className="md:flex md:flex-wrap md:justify-between">
        <Items currentItems={currentItems} />
      </div>
      <ReactPaginate
        breakLabel="..."
        nextLabel=""
        onPageChange={handlePageClick}
        pageRangeDisplayed={4}
        pageCount={pageCount}
        previousLabel=""
        previousClassName="hidden"
        previousLinkClassName="page-link"
        nextClassName="hidden"
        pageClassName="inline-block border border-solid border-[#F0F0F0] px-3.5 py-2 font-dm font-regular text-sm"
        // pageLinkClassName="inline-block border border-solid border-[#F0F0F0] px-3.5 py-2 font-dm font-regular text-sm"
        nextLinkClassName="page-link"
        containerClassName="flex flex-wrap gap-y-3.5 md:gap-y-0 gap-x-3.5 mt-12"
        activeClassName="bg-black text-white inline-block border border-solid border-[#F0F0F0] px-3.5 py-2 font-dm font-regular text-sm"
        renderOnZeroPageCount={null}
      />
      <p className=" font-regular mt-2.5 font-dm text-sm text-[#767676] lg:absolute lg:bottom-0 lg:right-0 lg:mt-2.5">
        Products from {itemOffset} to {itemOffset + itemsPerPage} of{" "}
        {items.length}
      </p>
    </>
  );
};

export default Pagination;
