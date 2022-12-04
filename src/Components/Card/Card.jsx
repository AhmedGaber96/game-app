import React from 'react'

export default function Card({some}) {
  return (
    <div>

<div className="Card w-100 text-secondary shadow">
                    <img src={some.thumbnail} alt="" className='w-100' />
                    <div className='px-2'>
                    <div className='mt-2 d-flex justify-content-between align-items-center'>
                    <h4 className='card-headerr'>{some.title.split("").splice(0,10).join("")}</h4>
                    <span className='px-2 py-1 rounded-2 three-color text-white small'>Free</span>
                    </div>
                    <p className='m-0 p-0  text-start'>{some.short_description.split("").splice(0,25).join("")}.....</p>
                    <div className='d-flex justify-content-between py-3'>
                      <i className='fas fa-plus-square'></i>
                      <div className='d-flex align-items-center'>
                      <span className='badge genre text-dark me-2 rounded-3'>{some.genre}</span>
                      {some.platform==="Web Browser"?<i className='fas fa-window-maximize'></i>:<i className='fab fa-windows text-muted'></i> }

                      </div>

                    </div>

                    </div>
                    
                    


                </div>
    </div>
  )
}
