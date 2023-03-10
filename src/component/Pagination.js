import React from 'react'

function Pagination({nPages,currentPage,setCurrentPage}) {
    const pageNum=[];

    for(let i=1;i<=nPages;i++){
        pageNum.push(i)
    }
    const nextPage = () => {
        if(currentPage !== nPages) 
            setCurrentPage(currentPage + 1)
    }
    const prevPage = () => {
        if(currentPage !== 1) 
            setCurrentPage(currentPage - 1)
    }
  return (
    <nav>
        <ul className='pagination justify-content-center'>
            <li className='page-item'>
                <a className='page-link'
                onClick={prevPage}
                href='#'
                >Previous</a>
            </li>
            {
                pageNum.map((pNum)=>(
                    <li key={pNum}
                    className={`page-item ${currentPage==pNum?'active':''}`}
                    >
                        <a
                        onClick={()=>setCurrentPage(pNum)}
                        className='page-link'
                        href='#'
                        >{pNum}</a>
                    </li>
                ))
            }
            <li className='page-item'>
                <a className='page-link'
                onClick={nextPage}
                href='#'
                >Next</a>
            </li>
        </ul>
    </nav>
  )
}

export default Pagination