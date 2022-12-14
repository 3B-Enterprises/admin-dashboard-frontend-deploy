import React from 'react'

export const CardInfo = ({ total }) => {
  return (
    <div className='border rounded-3xl shadow-md shadow-slate-300 text-center w-1/3 h-60 mt-5 mx-auto'>
      <div className='mx-auto my-14'>
        <h1 className='text-orange-600 font-bold text-8xl text-center'>{total}</h1>
        <h2 className='text-orange-600 text-2xl text-center'>Niños en total</h2>
      </div>

    </div>
  )
}
