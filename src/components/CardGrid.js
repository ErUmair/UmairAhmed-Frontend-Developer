import React from 'react'
import Card from './Card'

export default function CardGrid({ currentTableData }) {
    console.log(currentTableData);
    return (
        <div className='flex flex-wrap gap-5 pt-5 items-stretch'>
            {
                currentTableData && currentTableData.length > 0 && currentTableData.map(item => (
                    <Card item={item} key={item.capsule_serial} />
                ))
            }
        </div>
    )
}
