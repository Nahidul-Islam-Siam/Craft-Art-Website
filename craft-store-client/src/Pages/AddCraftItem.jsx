import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";

import Swal from 'sweetalert2'
const AddCraftItem = () => {
  const {user} = useContext(AuthContext) || {}
    const handleAddCraft = e =>{
     
      console.log(user.displayName);
        e.preventDefault()
   
        const form = e.target;
        const item_name = form.item_name.value
        const subcategory_Name = form.subcategory_Name.value
        const price = form.price.value
        const customariztion = form.customariztion.value
        const processing_time = form.processing_time.value
        const stock = form.stock.value
        const email = user.email
       
        const photo = form.photo.value
        const rating = form.rating.value
        const short_description = form.short_description.value
const newCraft = {item_name,subcategory_Name,price,customariztion,short_description,processing_time,stock,email,rating,photo}
console.log(newCraft);


fetch(`https://craft-store-server-self.vercel.app/addCraft`, {
  method: 'POST',
  headers:{
    "Content-type":"application/json"
  },
  body:JSON.stringify(newCraft)
  })
  .then(res=>res.json())
  .then(data=>{
   if(data?.insertedId){
   
    Swal.fire({
      title: 'Success!',
      text: 'Added Craft Successfully',
      icon: 'success',
      confirmButtonText: 'Cool'
    })
   }
})
console.log(newCraft);

    }
    return (
        <div  className='bg-[#F4F3F0] p-24'>
        <h1 className='text-3xl font-extrabold mb-8'> <span className="text-red-500">Add</span>
          <span className="text-yellow-500"> Craft</span>
          <span className="text-green-500"> Item</span></h1>
        <form onSubmit={handleAddCraft}>
  {/* form name & quantity  row */}
<div className='md:flex mb-8'>
<div className="form-control  md:w-1/2">
<label className="label">
<span className="label-text">Item Name</span>
</label>
<input type="text" placeholder="Enter Item name" 
name="item_name"
className="input input-bordered w-full " />

</div>
<div className="form-control ml-4  md:w-1/2">
<label className="label">
<span className="label-text">Subcategory Name</span>
</label>
<input type="text" 
name='subcategory_Name'
placeholder="Enter Subcategory Name" className="input input-bordered w-full " />

</div>
</div>
   {/* form description row */}
   <div className='md:flex mb-8'>
<div className="form-control  md:w-1/2">
<label className="label">
<span className="label-text">Short Description
</span>
</label>
<input type="text" placeholder="short description" 
name="short_description"
className="input input-bordered w-full " />

</div>
<div className="form-control ml-4  md:w-1/2">
<label className="label">
<span className="label-text">Price</span>
</label>
<input type="text" 
name='price'
placeholder="price" className="input input-bordered w-full " />

</div>

</div>
   {/* form category & details row */}
   <div className='md:flex mb-8'>
<div className="form-control  md:w-1/2">
<label className="label">
<span className="label-text">Rating
</span>
</label>
<input type="text" placeholder="rating" 
name="rating"
className="input input-bordered w-full " />

</div>
<div className="form-control ml-4  md:w-1/2">
<label className="label">
<span className="label-text">Customariztion</span>
</label>
<input type="text" 
name='customariztion'
placeholder="yes or no" className="input input-bordered w-full " />
  
</div>
</div>
  {/* form category & details row */}
  <div className='md:flex mb-8'>
<div className="form-control  md:w-1/2">
<label className="label">
<span className="label-text">Processing Time</span>
</label>
<input type="text" placeholder="processing time" 
name="processing_time"
className="input input-bordered w-full " />

</div>
<div className="form-control ml-4  md:w-1/2">
<label className="label">
<span className="label-text">Stock Status
</span>
</label>
<input type="text" 
name='stock'
placeholder="In stock or Made to Order" className="input input-bordered w-full " />

</div>
</div>
  {/* form category & details row */}
  {/* <div className='md:flex mb-8'>
<div className="form-control  md:w-1/2">
<label className="label">
<span className="label-text">User Email</span>
</label>
<input type="text" placeholder="user email" 
name="userEmail"
className="input input-bordered w-full " />

</div>
<div className="form-control ml-4  md:w-1/2">
<label className="label">
<span className="label-text">User Name
</span>
</label>
<input type="text" 
name='userName'
placeholder="user name" className="input input-bordered w-full " />

</div>
</div> */}
   {/* form Photo url row */}
   <div className='mb-8'>
<div className="form-control  w-full">
<label className="label">
<span className="label-text">Photo URL</span>
</label>
<input type="text" placeholder="Photo URL" 
name="photo"
className="input input-bordered w-full " />

</div>

</div>

<input className='btn btn-block bg-gray-700 text-white' type="submit" value='Add Craft Item'/>
</form>
  
    </div>
    );
};

export default AddCraftItem;