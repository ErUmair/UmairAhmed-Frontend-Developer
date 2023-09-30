import React, { useEffect, useMemo, useState } from 'react';
// import data from '../data.json';
import Pagination from './Pagination';
import CardGrid from './CardGrid';
import useFetch from '../customHook/useFetch';

let PageSize = 10;

export default function LandingPage({ data }) {
    const [currentPage, setCurrentPage] = useState(1);
    const [capsulesData] = useFetch("https://api.spacexdata.com/v3/capsules");


    const currentTableData = useMemo(() => {
        if ((data && data?.capsuleData) || capsulesData) {
            const firstPageIndex = (currentPage - 1) * PageSize;
            const lastPageIndex = firstPageIndex + PageSize;
            if ((data && data?.capsuleData)) return data.capsuleData.slice(firstPageIndex, lastPageIndex);
            return capsulesData.slice(firstPageIndex, lastPageIndex);
        }
    }, [data, capsulesData, currentPage]);


    useEffect(() => {
        if (data?.capsuleData?.length) setCurrentPage(1);
    }, [data?.capsuleData])


    return (
        <div className='m-5'>
            {
                (data.capsuleData && data.capsuleData.length > 0) ?
                    <>
                        <CardGrid currentTableData={currentTableData} />
                        <div className='m-5'>
                        <Pagination
                            className="pagination-bar"
                            currentPage={currentPage}
                            totalCount={data.capsuleData.length}
                            pageSize={PageSize}
                            onPageChange={page => setCurrentPage(page)}
                        />
                        </div>
                    </>
                    :
                    capsulesData && capsulesData.length > 0 &&
                    <>
                        <CardGrid currentTableData={currentTableData} />
                        <div className='m-5'>
                        <Pagination
                            className="pagination-bar"
                            currentPage={currentPage}
                            totalCount={capsulesData.length}
                            pageSize={PageSize}
                            onPageChange={page => setCurrentPage(page)}
                        />
                        </div>
                    </>
            }
        </div>
    )
}
