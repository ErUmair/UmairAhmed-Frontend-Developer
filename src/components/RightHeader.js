import React from 'react'

export default function RightHeader() {
    return (
        <div>
            <ul
                className="
              px-4
              text-base text-gray-700
              md:flex
              md:justify-between 
              md:pt-0"
            >
                <li>
                    <a className="md:p-4 py-2 block hover:text-purple-400" href="#"
                    >Features</a
                    >
                </li>
                <li>
                    <a className="md:p-4 py-2 block hover:text-purple-400" href="#"
                    >Pricing</a
                    >
                </li>
                <li>
                    <a className="md:p-4 py-2 block hover:text-purple-400" href="#"
                    >Customers</a
                    >
                </li>
                <li>
                    <a className="md:p-4 py-2 block hover:text-purple-400" href="#"
                    >Blog</a
                    >
                </li>
                <li>
                    <a
                        className="md:p-4 py-2 block hover:text-purple-400 text-purple-500"
                        href="#"
                    >Sign Up</a
                    >
                </li>
            </ul>
        </div>
    )
}
