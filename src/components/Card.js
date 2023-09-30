import React, { useState } from 'react'
import Modal from './Modal';

export default function Card({ item }) {
    const [active, setActive] = useState(false)
    return (
        <div style={{ flex: '0 0 24%' }} key={item.capsule_serial}>
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

                <div className="p-5">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.capsule_serial} - {item.type}</h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{item.details}</p>
                    <button data-modal-target="defaultModal" data-modal-toggle="defaultModal" className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button" onClick={() => setActive(true)}>
                        Read more
                    </button>
                    {
                        active && <Modal item={item}/>
                    }
                </div>
            </div>

        </div>
    )
}
