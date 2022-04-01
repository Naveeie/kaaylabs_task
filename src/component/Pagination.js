import React, { useState } from 'react';
import _ from 'lodash'
import UseReducer from '../useReducer/useReducer';

function Pagination({setPaginated,setCurrentPage,pages,currentPage,datas,pageSize}) {

    const handlePagination = (pageNo)=>{
        setCurrentPage(pageNo)
        const startIndex = (pageNo-1)*pageSize
        console.log(pageNo,startIndex);
        const paginatedPost = _(datas).slice(startIndex).take(pageSize).value()
        console.log("Paginated post",paginatedPost)
        setPaginated(paginatedPost)
    } 

    return (  
        <div>
            <nav className='d-flex justify-content-center'>
                            <ul className='pagination'>
                                {pages.map(val=>(
                                    <li className={val===currentPage ? 'page-item active': 'page-item'} style={{cursor:'pointer'}}>
                                        <p className='page-link' onClick={()=>handlePagination(val)}>{val}</p>
                                    </li>
                                ))}
                            </ul>
                </nav>    
                
         </div>
    );
}

export default Pagination;