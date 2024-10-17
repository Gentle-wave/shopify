import { useState, useEffect } from 'react';

export default function Home() {
  const images = [
    '../assets/pexels-asphotograpy-94843.jpg',
    '../assets/pexels-cottonbro-6686455.jpg',
    '../assets/pexels-garrettmorrow-682933.jpg',
    '../assets/pexels-markus-winkler-1430818-3812433.jpg',
    '../assets/pexels-martabranco-1395305.jpg',
    '../assets/pexels-n-voitkevich-6214471.jpg',
  ];

  const [currentImage, setCurrentImage] = useState(0);

  // Switch images every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="container mx-auto mt-10">
      {/* Hero Section with Carousel */}
      <div className="relative h-96 bg-gray-200 rounded-lg overflow-hidden shadow-lg">
        <img
          src={images[currentImage]}
          alt="ecommerce carousel"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-white text-4xl font-bold">Welcome to ShopMagic</h1>
        </div>
      </div>

      {/* Write-up Section */}
      <div className="text-center mt-10 px-6">
        <h2 className="text-3xl font-bold mb-4">Discover the Best Products</h2>
        <p className="text-gray-600 text-lg mb-6">
          ShopMagic is your one-stop destination for the latest and greatest in fashion, electronics, and accessories. We bring you a carefully curated collection of top products from around the world, all at unbeatable prices.
        </p>
        <p className="text-gray-600 text-lg">
          Whether you're looking for the latest gadgets, stylish clothing, or must-have accessories, ShopMagic has something for everyone. Our easy-to-use platform ensures a seamless shopping experience from start to finish.
        </p>
      </div>

      {/* Featured Section */}
      <div className="mt-16">
        <h3 className="text-2xl font-bold text-center mb-8">Our Featured Collections</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <img
              src="../assets/pexels-garrettmorrow-682933.jpg"
              alt="fashion"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h4 className="text-xl font-bold">Latest Fashion</h4>
              <p className="text-gray-600 mt-2">
                Stay on trend with our newest fashion collections for men and women.
              </p>
            </div>
          </div>
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <img
              src="https://source.unsplash.com/400x400/?gadgets,technology"
              alt="gadgets"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h4 className="text-xl font-bold">Tech Gadgets</h4>
              <p className="text-gray-600 mt-2">
                Discover cutting-edge technology with our range of gadgets and electronics.
              </p>
            </div>
          </div>
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <img
              src="https://source.unsplash.com/400x400/?jewelry,accessories"
              alt="accessories"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h4 className="text-xl font-bold">Accessories</h4>
              <p className="text-gray-600 mt-2">
                Add the finishing touches to your outfit with our stylish accessories.
              </p>
            </div>
          </div>
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <img
              src="https://source.unsplash.com/400x400/?shoes,fashion"
              alt="shoes"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h4 className="text-xl font-bold">Footwear</h4>
              <p className="text-gray-600 mt-2">
                Step up your style game with our range of fashionable footwear.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
