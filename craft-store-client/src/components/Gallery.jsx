

const Gallery = () => {
    return (
        <div>
		 <div className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 py-12 text-center">
      <h1 className="text-5xl font-extrabold text-white mb-4">
        <span className="text-yellow-300">Our </span> 
        <span className="text-green-300">Gallery</span>
      </h1>
      <p className="text-xl text-white mb-8">
        <span className="text-blue-300">Explore </span> 
        <span className="text-purple-300">our </span> 
        <span className="text-red-300">vibrant </span> 
        <span className="text-yellow-300">and </span> 
        <span className="text-green-300">diverse </span> 
        <span className="text-blue-300">collection </span> 
        <span className="text-purple-300">of </span> 
        <span className="text-red-300">artworks </span> 
        <span className="text-yellow-300">from </span> 
        <span className="text-green-300">talented </span> 
        <span className="text-blue-300">artists </span> 
        <span className="text-purple-300">around </span> 
        <span className="text-red-300">the </span> 
        <span className="text-yellow-300">world </span>
        <span className="text-green-300">.</span>
      </p>
    </div>
            <section className="py-6 dark:bg-gray-100 dark:text-gray-900">
	<div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
		<img src="https://i.ibb.co/HVSkqyD/birmingham-museums-trust-2n0-PVUfm-E7-A-unsplash.jpg" alt="" className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square" />
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://i.ibb.co/Cz5qm7Q/oil.jpg" />
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://i.ibb.co/mNqxndR/Super-Cartoon.jpg" />
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://i.ibb.co/CtGXgRG/arChar.jpg" />
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://i.ibb.co/nzq09gx/Comic.jpg" />
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://i.ibb.co/Fgj96y2/waterfall-land.jpg" />
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://i.ibb.co/c8Ln2LG/charcoal.jpg" />
		{/* <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://i.ibb.co/HVSkqyD/birmingham-museums-trust-2n0-PVUfm-E7-A-unsplash.jpg" /> */}
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://i.ibb.co/Yj2vyBh/154016440-bef59652-f40d-4752-8c62-36688c94c8e6.jpg" />
		
	</div>
</section>
        </div>
    );
};

export default Gallery;