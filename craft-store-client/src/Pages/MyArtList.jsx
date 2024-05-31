import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const MyArtList = () => {
    const {user} = useContext(AuthContext) || {}
    // console.log(user);

    const [item, setItem] = useState([])
    const [control, setControl] = useState(false)

    useEffect(()=>{
        fetch(`https://craft-store-server-self.vercel.app/${user?.email}`)
        .then(res=>res.json())
       .then((data)=>{
        // console.log(data);
        setItem(data)
       })
    },[user,control])


    const handleDelete = (_id) =>{
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
          
      fetch(`https://craft-store-server-self.vercel.app/delete/${_id}`, {
        method: "DELETE",
      })
      .then((res)=>res.json())
      .then((data)=>{
       if(data.deletedCount > 0){
        Swal.fire({
          title: "Deleted!",
          text: "Your Coffee has been deleted.",
          icon: "success"
        });

setControl(!control)
       }
      })

        }
      }
      )


    }
    return (
        <div className="max-w-6xl mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold text-center mb-8">
          <span className="text-red-500">Your </span> 
          <span className="text-yellow-500">Art </span> 
          <span className="text-green-500">& </span> 
          <span className="text-blue-500">Craft </span> 
          <span className="text-purple-500">List</span>
        </h2>
        <p className="text-lg text-center text-gray-700 mb-6">Browse through the items you have added to your <span className="text-red-500">art</span> & <span className="text-green-500">craft</span> list.</p>
        {/* Add your art & craft list components here */}
       <div className="">
       <div className="b grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center">
            {
                item?.map(p=><div key={p._id}>       <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img className="h-[300px]" src={p.photo} alt="Shoes" /></figure>
                <div className="card-body">
                  <h2 className="card-title">
                    {p.item_name}
                    <div className="badge">Price: {p.price}</div>
                    <div className="badge ">Stock status: {p.stock}</div>
                  </h2>
                  <h1>{short_description}</h1>
                  <p>customariztion: {p.customariztion}</p>
                  <p>rating: {rating}</p>
                  <div className="card-actions justify-end">
                  <Link to={`/products/${p._id}`}><div className="badge badge-outline btn">Update</div></Link> 
                    <button onClick={()=>handleDelete(p._id)} className="badge badge-outline btn">Delete</button>
                  </div>
                </div>
              </div></div>)

              
            }
       
        </div>
       </div>
      </div>
    );
};

export default MyArtList;