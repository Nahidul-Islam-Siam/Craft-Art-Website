import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";

const ProductsDetails = () => {
    const {id} = useParams()
    // console.log(id);
    const [products,setProducts] = useState([])
    const {item_name,subcategory_Name,price,customariztion,short_description,processing_time,stock,email,rating,photo} = products
    useEffect(()=>{
        fetch(`https://craft-store-server-self.vercel.app/singleProducts/${id}`)
        .then(res=>res.json())
        .then(data=>{
           setProducts(data)
        //    console.log(data);
        })
    },[id])






    const handleUpdate = e =>{
        e.preventDefault()
        const form = e.target;
        const item_name = form.item_name.value
        const subcategory_Name = form.subcategory_Name.value
        const price = form.price.value
        const customariztion = form.customariztion.value
        const processing_time = form.processing_time.value
        const stock = form.stock.value
  
   
        const photo = form.photo.value
        const rating = form.rating.value
        const short_description = form.short_description.value
const newCraft = {item_name,subcategory_Name,price,customariztion,short_description,processing_time,stock,email,rating,photo}
console.log(newCraft);
fetch(`https://craft-store-server-self.vercel.app/${id}`,{
    method:"PUT",
    headers:{
        "Content-type":"application/json"
    },
    body:JSON.stringify( newCraft)
})
.then(res=>res.json())
.then(data=>{
  console.log(data);
  if(data.modifiedCount > 0){
    Swal.fire({
      title: 'Success!',
      text: 'Craft Updated Successfully',
      icon: 'success',
      confirmButtonText: 'Cool'
    })
  }
})
    }
    return (
        <div  className='bg-[#F4F3F0] p-24'>
        <h1 className='text-3xl font-extrabold mb-8'> <span className="text-red-500">Please </span>
          <span className="text-yellow-500"> Update</span>
          <span className="text-green-500"> if u wants</span></h1>
        <form 
        onSubmit={handleUpdate}
        >
  {/* form name & quantity  row */}
<div className='md:flex mb-8'>
<div className="form-control  md:w-1/2">
<label className="label">
<span className="label-text">Item Name</span>
</label>
<input type="text" placeholder="Enter Item name" 
name="item_name"
className="input input-bordered w-full "  defaultValue={item_name}/>

</div>
<div className="form-control ml-4  md:w-1/2">
<label className="label">
<span className="label-text">Subcategory Name</span>
</label>
<input type="text" 
name='subcategory_Name'
placeholder="Enter Subcategory Name" className="input input-bordered w-full " defaultValue={subcategory_Name}/>

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
className="input input-bordered w-full " defaultValue={short_description}/>

</div>
<div className="form-control ml-4  md:w-1/2">
<label className="label">
<span className="label-text">Price</span>
</label>
<input type="text" 
name='price'
placeholder="price" className="input input-bordered w-full " defaultValue={price}/>

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
className="input input-bordered w-full " defaultValue={rating}/>

</div>
<div className="form-control ml-4  md:w-1/2">
<label className="label">
<span className="label-text">Customariztion</span>
</label>
<input type="text" 
name='customariztion'
placeholder="yes or no" className="input input-bordered w-full " defaultValue={customariztion}/>
  
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
className="input input-bordered w-full " defaultValue={processing_time}/>

</div>
<div className="form-control ml-4  md:w-1/2">
<label className="label">
<span className="label-text">Stock Status
</span>
</label>
<input type="text" 
name='stock'
placeholder="In stock or Made to Order" className="input input-bordered w-full " defaultValue={stock}/>

</div>
</div>
  {/* form category & details row */}
 
   {/* form Photo url row */}
   <div className='mb-8'>
<div className="form-control  w-full">
<label className="label">
<span className="label-text">Photo URL</span>
</label>
<input type="text" placeholder="Photo URL" 
name="photo"
className="input input-bordered w-full " defaultValue={photo}/>

</div>

</div>

<input className='btn btn-block bg-gray-700 text-white' type="submit" value='Update'/>
</form>
  
    </div>
    );
};

export default ProductsDetails;