import React, { useState } from "react";

import {AiOutlineArrowUp} from "react-icons/ai";
import{AiOutlineArrowDown} from "react-icons/ai";
const Header = ({ headers, onSorting }) => {
    const [sortingField, setSortingField] = useState("");
    const [sortingOrder, setSortingOrder] = useState("asc");

    const onSortingChange = (field) => {
        const order =
            field === sortingField && sortingOrder === "asc" ? "desc" : "asc";

        setSortingField(field);
        setSortingOrder(order);
        onSorting(field, order);
    };

    return (
        <thead>
            <tr>
                {headers.map(({ name, field, sortable }) => (
                    <th
                        key={name}
                        onClick={() =>
                            sortable ? onSortingChange(field) : null
                        }
                    >
                        {name}

                        {sortingField && sortingField === field && (
                           
                                    sortingOrder === "asc"
                                        ? <AiOutlineArrowUp/>
                                        : <AiOutlineArrowDown/>
                            
                        )}
                    </th>
                ))}
            </tr>
        </thead>
    );
};

export default Header;