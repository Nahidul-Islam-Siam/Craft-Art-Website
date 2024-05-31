import landscape from './../assets/1.jpg'
import portrait from './../assets/2.jpg'
import watercolour from './../assets/3.jpg'
import oil from './../assets/4.jpg'
import charcoal from './../assets/5.jpg'
import cartoon from './../assets/6.jpg'

const ArtCraftSection = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h2 className="text-5xl font-bold text-center mb-6">
      
        <span className="text-yellow-500">Art </span> 
        <span className="text-green-500">& </span> 
        <span className="text-blue-500">Craft </span> 
        <span className="text-purple-500">Categories</span>
      </h2>

      <p className="text-lg text-center text-gray-700 mb-6">Browse through our collection of unique handmade items crafted with love and creativity.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {/* Sample items */}
        <div className="bg-blue-200 p-4 rounded-lg shadow-md">
        <img className="w-full h-48 object-cover mb-4 rounded-lg" src={landscape} alt="Item 1" />
          <h3 className="text-xl font-semibold mb-2">Landscape Painting</h3>
         
        </div>
        <div className="bg-green-200 p-4 rounded-lg shadow-md">
        <img className="w-full h-48 object-cover mb-4 rounded-lg" src={portrait} alt="Item 1" />
          <h3 className="text-xl font-semibold mb-2">Portrait Drawing</h3>
        
        </div>
        <div className="bg-yellow-200 p-4 rounded-lg shadow-md">
        <img className="w-full h-48 object-cover mb-4 rounded-lg" src={watercolour} alt="Item 1" />
          <h3 className="text-xl font-semibold mb-2">Watercolour Painting</h3>
          
        </div>
        <div className="bg-pink-200 p-4 rounded-lg shadow-md">
        <img className="w-full h-48 object-cover mb-4 rounded-lg" src={oil} alt="Item 1" />
          <h3 className="text-xl font-semibold mb-2">Oil Painting</h3>
      
        </div>
        {/* Add more items as needed */}
        <div className="bg-orange-200 p-4 rounded-lg shadow-md">
          <img className="w-full h-48 object-cover mb-4 rounded-lg" src={charcoal} alt="Item 5" />
          <h3 className="text-xl font-semibold mb-2">Charcoal Sketching</h3>
        </div>
        <div className="bg-indigo-200 p-4 rounded-lg shadow-md">
          <img className="w-full h-48 object-cover mb-4 rounded-lg" src={cartoon} alt="Item 6" />
          <h3 className="text-xl font-semibold mb-2">Cartoon Drawing</h3>
        </div>
      </div>
    </div>
  );
}

export default ArtCraftSection;
