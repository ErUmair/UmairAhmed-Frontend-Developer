import React from 'react'
import useInput from '../customHook/useInput';
import { useDispatch } from 'react-redux';
import { filterCapsule } from '../store/_actions/capsuleAction';

export default function Search() {

    const dispatch = useDispatch();

    const [type, bindType] = useInput('status');
    const [searchBy, bindSearchBy] = useInput('');

    const onClickButton = (event) => {
        event.preventDefault();
        fetch(`https://api.spacexdata.com/v3/capsules?${type}=${searchBy}`)
            .then((res) => res.json())
            .then((data) => {
                dispatch(filterCapsule(data))
            });
    }

    return (
        <div className='m-10'>
            <form>
                <div className="mb-6">
                </div>
                <div className="grid md:grid-cols-2 md:gap-6">
                    <div className="select relative z-0 w-full mb-6 group">
                        <select className='select' {...bindType} defaultValue={'status'}>
                            <option value="status">Status</option>
                            <option value="original_launch">Original Launch</option>
                            <option value="type">Type</option>
                        </select>
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <input type="text" name="floating_last_name" id="floating_last_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required {...bindSearchBy} />
                        <label htmlFor="floating_last_name" className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Search by</label>
                    </div>
                </div>
                <div className="grid md:grid-cols-1 md:gap-6">
                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 " onClick={onClickButton}>Search</button>
                </div>

            </form>


        </div>
    )
}
