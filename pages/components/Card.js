import React from 'react'

export default function Card({product}) {
  return (
    <div className="card card-compact shadow-xl bg-base-100 w-full h-96 flex flex-col">
        <figure className="h-48 overflow-hidden">
             <img
                src={product.image}
                alt="Shoes" 
                className="w-full h-full object-cover" />
        </figure>
        <div className="card-body flex-1 flex flex-col justify-between">
            <div>
                <h2 className="card-title text-sm md:text-base line-clamp-2">{product.title}</h2>
                <p className="text-xs md:text-sm line-clamp-3">{product.description}</p>
            </div>
            <div className="card-actions justify-end mt-auto">
                <button className="btn btn-primary btn-sm">Buy Now</button>
            </div>
        </div>
    </div>
  )
}
