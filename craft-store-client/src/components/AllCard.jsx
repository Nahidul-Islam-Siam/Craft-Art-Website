import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import { useLoaderData } from "react-router-dom";


const AllCard = () => {
    // const allcard = useLoaderData()
    const [item, setItem] = useState([])
   
    // console.log(allcard);
    useEffect(()=>{
        fetch('https://craft-store-server-self.vercel.app/allcard')
        .then(res => res.json())
        .then(data=>{
            // console.log(data);
            setItem(data)
        })
    },[])
    return (
        <div className="items-center">
            <div className="max-w-6xl mx-auto px-4 py-8">
      <h2 className="text-6xl font-bold text-center mb-4">
        <span className="text-red-500">Art </span> 
        <span className="text-yellow-500">& </span> 
        <span className="text-green-500">Craft </span> 
        <span className="text-blue-500">Items</span>
      </h2>
      <p className="text-xl text-center text-gray-700 mb-6">Discover a trove of artisanal wonders at SnowyArt's Art Craft Items Section. From handmade ceramics to intricate textiles, find treasures to inspire your creativity.</p>
      {/* Add your items here */}
    </div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
{
    item.map(p=>         
        <div key={p._id} className="relative m-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-sky-800 shadow-md">
<a className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl">
<img className="object-cover w-fit" src={p.photo} alt="product image" />
<span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">{p.stock}</span>
</a>
<div className="mt-4 px-5 pb-5">
<a >
  <h5 className="text-xl tracking-tight text-slate-900">{p.item_name}</h5>
</a>
<div className="mt-2 mb-5 flex flex-row items-center justify-between">
  <p>
    <span className="text-3xl font-bold text-slate-900">${p.price}</span>
    <span className="text-sm text-slate-900 line-through">$69</span>
  </p>
  <div className="rating">
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star bg-orange-400" />
  {/* <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" /> */}
</div>
  <div className="flex items-center">
    <span className="mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-black font-semibold">{p.rating}</span>
  </div>
</div>

<Link to={`/viewDetails/${p._id}`}><a href="#" className="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
  
  View Details</a
></Link>
</div>
</div>)
   }
</div>

<div className=" justify-items-center">
<Link to='/allpost'><h1 className="btn btn-lg">View more</h1></Link>
</div>
        </div>
    );
};

export default AllCard;