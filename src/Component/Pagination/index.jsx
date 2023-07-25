import React, { useEffect, useState, useMemo } from "react";
import Pagination from "react-bootstrap/Pagination";
import 'bootstrap/dist/css/bootstrap.min.css';

const PaginationComponent = ({
    total = 0,
    itemsPerPage = 10,
    currentPage = 1,
    onPageChange
}) => {
    const [totalPages, setTotalPages] = useState(0);

    useEffect(() => {
        if (total > 0 && itemsPerPage > 0)
            setTotalPages(Math.ceil(total / itemsPerPage));
    }, [total, itemsPerPage]);

    const paginationItems = useMemo(() => {
        const pages = [];

        for (let i = 1; i <= totalPages; i++) {
            pages.push(
                <Pagination.Item
                    key={i}
                    active={i === currentPage}
                    onClick={() => onPageChange(i)}
                >
                    {i}
                </Pagination.Item>
            );
        }

        return pages;
    }, [totalPages, currentPage]);

    if (totalPages === 0) return null;

    return (
        <Pagination>
            <ul className="pagination">
             <li className='page-item' >
            <a href='#!' className='page-link'  onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1} >Prev</a>

          </li>
            
            {paginationItems}
           
            <li className='page-item'>
            <a href='#!' className='page-link'  onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}>Next</a>

          </li>
          </ul>
        </Pagination>
    );
};

export default PaginationComponent;