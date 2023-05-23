import React from 'react'
import {
  PaginateContainer,
  PageNumber
} from './StyledComponents/StyledPaginate'

export default function Paginate({ currentPage, totalPages, onPageChange }) {
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) onPageChange(page)
  }

  const renderPageNumbers = () => {
    const pageNumbers = []
    const visiblePageCount = 5
    let startPage = Math.max(1, currentPage - Math.floor(visiblePageCount / 2))
    let endPage = startPage + visiblePageCount - 1

    if (endPage > totalPages) {
      endPage = totalPages
      startPage = Math.max(1, endPage - visiblePageCount + 1)
    }

    for (let page = startPage; page <= endPage; page++) {
      pageNumbers.push(
        <PageNumber key={page} onClick={() => handlePageChange(page)}>
          {page}
        </PageNumber>
      )
    }
    return pageNumbers
  }

  return (
    <div>
      <PaginateContainer>
        <PageNumber onClick={() => handlePageChange(1)}>First</PageNumber>
        <PageNumber onClick={() => handlePageChange(currentPage - 1)}>
          Prev
        </PageNumber>
        {renderPageNumbers()}
        <PageNumber onClick={() => handlePageChange(currentPage + 1)}>
          Next
        </PageNumber>
        <PageNumber onClick={() => handlePageChange(totalPages)}>
          Last
        </PageNumber>
      </PaginateContainer>
    </div>
  )
}
