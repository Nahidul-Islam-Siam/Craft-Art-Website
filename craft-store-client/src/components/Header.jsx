

const Header = () => {
  return (
    <div className="text-center mx-auto px-4 max-w-4xl mt-5">
      <h1 className="text-4xl lg:text-5xl font-bold mb-8">
        <span className="text-red-600 text-7xl">Welcome</span> 
        <br />
        <br />
        <span className="text-yellow-500">to</span> 
        <br />
        <br />
       <p className="text-7xl"> <span className="text-4xl font-bold text-blue-600">S</span>
      <span className="text-4xl font-bold text-green-600">A</span>
      <span className="text-4xl font-bold text-yellow-600">M</span>
      <span className="text-4xl text-red-600">&</span>
      <span className="text-4xl font-bold text-purple-600">CRAFT</span></p>
      </h1>
      <p className="text-lg lg:text-2xl text-gray-700 mb-6">
        <span className="text-red-600">Explore </span> 
        <span className="text-yellow-500">our </span> 
        <span className="text-green-600">collection </span> 
        <span className="text-blue-600">of </span> 
        <span className="text-purple-600">unique </span> 
        <span className="text-red-600">handmade </span> 
        <span className="text-yellow-500">items</span>
      </p>
    </div>
  );
}

export default Header;
