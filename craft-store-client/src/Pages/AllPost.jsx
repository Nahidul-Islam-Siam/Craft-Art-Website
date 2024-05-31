import { Link, useLoaderData } from "react-router-dom";


const AllPost = () => {
    const allpost = useLoaderData()
    console.log(allpost);
    return (
        <div>
            <h1>All Post: {allpost.length}</h1>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Subcatagory</th>
        <th>Price</th>
        <th>Rating</th>
        <th>Customarization</th>
        <th>Stock Status</th>
        <th>Details</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        allpost.map((all,index)=>
            <tr key={all._id}>
        <th>{index+1}</th>
        <td className="">{all.item_name}</td>
        <td>{all.subcategory_Name}</td>
        <td>{all.price}</td>
        <td>{all.rating}</td>
        <td>{all.customariztion}</td>
        <td>{all.stock}</td>
       <Link to='/'><td>Details</td></Link>
      </tr>
        )
      }
    
     
    </tbody>
  </table>
</div>
        </div>
    );
};

export default AllPost;