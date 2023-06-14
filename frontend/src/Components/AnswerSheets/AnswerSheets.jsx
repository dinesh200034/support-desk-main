import DragDrop from '../DragDrop'
import classnames from 'classnames'
import { useState } from 'react'
function AnswerSheets({clicked, data}) {
  const classes = classnames('sidebar static max-sm:ml-16');
  const [show, setShow] = useState(false);

  const handleCKick = () => {
    setShow(true);
    console.log("clicked");
  }
  return (
    <div className={`${classes} ${clicked === 'outer' ? 'ml-16 outer' : 'ml-64 inner'}`}>
      {data ? (
        <div className=' flex flex-col items-center justify-center w-full h-full px-10 py-8'>
            <div className='mb-12 text-center  w-full'>
              <p className='text-xl font-bold text-[#191854]'>Select Marking scheme</p>
              <p className='text-lg text-black opacity-60'>Select your marking scheme for previously uploaded answer papers</p>
            </div>
            <div className='px-12  flex flex-row justify-between w-full'>
              <button className="rounded rounded-sm bg-sky-600 w-40 h-9 mr-2 text-white" onClick={handleCKick}>Upload</button>
              <button className="rounded rounded-sm bg-sky-600 w-40 h-9 mr-2 text-white">Filter</button>
              <form className='w-3/4 ' >
                <input className="rounded shadow shadow-gray-600 w-full h-9 p-2 mb-4" type="text" placeholder='Search'/>
              </form>
            </div>
            <div className='w-full px-12 overflow-auto'>
              <table className='w-full'>
                <thead className='bg-[#D9D9D9] sticky'>
                <tr>
                  <th className='text-xl h-8 font-bold opacity-60 w-2/5'>Name</th>
                  <th className='text-xl h-8 font-bold opacity-60 w-2/6'>Date Added</th>
                  <th className='text-xl h-8 font-bold opacity-60 w-3/12'>Select</th>
                </tr>
                </thead>
                <tbody>
                {/* {data.map((item) => (
                      <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.age}</td>
                      </tr>
                    ))} */}
                    <tr>
                      <td className='text-lg px-4 h-8 border-y-2 border-x-2 font-medium opacity-60'>Hello</td>
                      <td className='text-lg px-4 h-8 border-y-2 border-x-4 font-medium opacity-60'>Hello</td>
                      <td className='text-lg px-4 h-8 border-y-2 border-x-2 font-medium opacity-60'>Hello</td>
                    </tr>
                    <tr>
                      <td className='text-lg px-4 h-8 border-y-2 border-x-2 font-medium opacity-60'>Hello</td>
                      <td className='text-lg px-4 h-8 border-y-2 border-x-4 font-medium opacity-60'>Hello</td>
                      <td className='text-lg px-4 h-8 border-y-2 border-x-2 font-medium opacity-60'>Hello</td>
                    </tr>
                    <tr>
                      <td className='text-lg px-4 h-8 border-y-2 border-x-2 font-medium opacity-60'>Hello</td>
                      <td className='text-lg px-4 h-8 border-y-2 border-x-4 font-medium opacity-60'>Hello</td>
                      <td className='text-lg px-4 h-8 border-y-2 border-x-2 font-medium opacity-60'>Hello</td>
                    </tr>
                    <tr>
                      <td className='text-lg px-4 h-8 border-y-2 border-x-2 font-medium opacity-60'>Hello</td>
                      <td className='text-lg px-4 h-8 border-y-2 border-x-4 font-medium opacity-60'>Hello</td>
                      <td className='text-lg px-4 h-8 border-y-2 border-x-2 font-medium opacity-60'>Hello</td>
                    </tr>
                    <tr>
                      <td className='text-lg px-4 h-8 border-y-2 border-x-2 font-medium opacity-60'>Hello</td>
                      <td className='text-lg px-4 h-8 border-y-2 border-x-4 font-medium opacity-60'>Hello</td>
                      <td className='text-lg px-4 h-8 border-y-2 border-x-2 font-medium opacity-60'>Hello</td>
                    </tr>
                    <tr>
                      <td className='text-lg px-4 h-8 border-y-2 border-x-2 font-medium opacity-60'>Hello</td>
                      <td className='text-lg px-4 h-8 border-y-2 border-x-4 font-medium opacity-60'>Hello</td>
                      <td className='text-lg px-4 h-8 border-y-2 border-x-2 font-medium opacity-60'>Hello</td>
                    </tr>
                    <tr>
                      <td className='text-lg px-4 h-8 border-y-2 border-x-2 font-medium opacity-60'>Hello</td>
                      <td className='text-lg px-4 h-8 border-y-2 border-x-4 font-medium opacity-60'>Hello</td>
                      <td className='text-lg px-4 h-8 border-y-2 border-x-2 font-medium opacity-60'>Hello</td>
                    </tr>
                    <tr>
                      <td className='text-lg px-4 h-8 border-y-2 border-x-2 font-medium opacity-60'>Hello</td>
                      <td className='text-lg px-4 h-8 border-y-2 border-x-4 font-medium opacity-60'>Hello</td>
                      <td className='text-lg px-4 h-8 border-y-2 border-x-2 font-medium opacity-60'>Hello</td>
                    </tr>
                    <tr>
                      <td className='text-lg px-4 h-8 border-y-2 border-x-2 font-medium opacity-60'>Hello</td>
                      <td className='text-lg px-4 h-8 border-y-2 border-x-4 font-medium opacity-60'>Hello</td>
                      <td className='text-lg px-4 h-8 border-y-2 border-x-2 font-medium opacity-60'>Hello</td>
                    </tr>
                    <tr>
                      <td className='text-lg px-4 h-8 border-y-2 border-x-2 font-medium opacity-60'>Hello</td>
                      <td className='text-lg px-4 h-8 border-y-2 border-x-4 font-medium opacity-60'>Hello</td>
                      <td className='text-lg px-4 h-8 border-y-2 border-x-2 font-medium opacity-60'>Hello</td>
                    </tr>
                    <tr>
                      <td className='text-lg px-4 h-8 border-y-2 border-x-2 font-medium opacity-60'>Hello</td>
                      <td className='text-lg px-4 h-8 border-y-2 border-x-4 font-medium opacity-60'>Hello</td>
                      <td className='text-lg px-4 h-8 border-y-2 border-x-2 font-medium opacity-60'>Hello</td>
                    </tr>
                    <tr>
                      <td className='text-lg px-4 h-8 border-y-2 border-x-2 font-medium opacity-60'>Hello</td>
                      <td className='text-lg px-4 h-8 border-y-2 border-x-4 font-medium opacity-60'>Hello</td>
                      <td className='text-lg px-4 h-8 border-y-2 border-x-2 font-medium opacity-60'>Hello</td>
                    </tr>
                    <tr>
                      <td className='text-lg px-4 h-8 border-y-2 border-x-2 font-medium opacity-60'>Hello</td>
                      <td className='text-lg px-4 h-8 border-y-2 border-x-4 font-medium opacity-60'>Hello</td>
                      <td className='text-lg px-4 h-8 border-y-2 border-x-2 font-medium opacity-60'>Hello</td>
                    </tr>
                    <tr>
                      <td className='text-lg px-4 h-8 border-y-2 border-x-2 font-medium opacity-60'>Hello</td>
                      <td className='text-lg px-4 h-8 border-y-2 border-x-4 font-medium opacity-60'>Hello</td>
                      <td className='text-lg px-4 h-8 border-y-2 border-x-2 font-medium opacity-60'>Hello</td>
                    </tr>
                    <tr>
                      <td className='text-lg px-4 h-8 border-y-2 border-x-2 font-medium opacity-60'>Hello</td>
                      <td className='text-lg px-4 h-8 border-y-2 border-x-4 font-medium opacity-60'>Hello</td>
                      <td className='text-lg px-4 h-8 border-y-2 border-x-2 font-medium opacity-60'>Hello</td>
                    </tr>
                    <tr>
                      <td className='text-lg px-4 h-8 border-y-2 border-x-2 font-medium opacity-60'>Hello</td>
                      <td className='text-lg px-4 h-8 border-y-2 border-x-4 font-medium opacity-60'>Hello</td>
                      <td className='text-lg px-4 h-8 border-y-2 border-x-2 font-medium opacity-60'>Hello</td>
                    </tr>
                    <tr>
                      <td className='text-lg px-4 h-8 border-y-2 border-x-2 font-medium opacity-60'>Hello</td>
                      <td className='text-lg px-4 h-8 border-y-2 border-x-4 font-medium opacity-60'>Hello</td>
                      <td className='text-lg px-4 h-8 border-y-2 border-x-2 font-medium opacity-60'>Hello</td>
                    </tr>
                    <tr>
                      <td className='text-lg px-4 h-8 border-y-2 border-x-2 font-medium opacity-60'>Hello</td>
                      <td className='text-lg px-4 h-8 border-y-2 border-x-4 font-medium opacity-60'>Hello</td>
                      <td className='text-lg px-4 h-8 border-y-2 border-x-2 font-medium opacity-60'>Hello</td>
                    </tr>
                </tbody>
              </table>
            </div>
        </div>
      ): ( 
        <DragDrop/>
      )}
      {
        show && <DragDrop/>
      }
    </div>
  )
}

export default AnswerSheets
