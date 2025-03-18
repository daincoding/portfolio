export default function Hero() {
    return (
      <section className="flex flex-col items-center justify-center text-center px-4 py-16 min-h-screen bg-gradient-to-b from-blue-500 to-purple-600 text-white sm:px-10 md:flex-row md:text-left">
        
        {/* Left Side - Text */}
        <div className="md:w-1/2">
          <h1 className="text-3xl font-bold xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
            Welcome to My Portfolio
          </h1>
          <p className="mt-4 text-lg xs:text-xl sm:text-2xl">
            Crafting beautiful web experiences with Next.js & TailwindCSS.
          </p>
          <button className="mt-6 px-6 py-3 bg-white text-blue-500 font-semibold rounded-md shadow-md hover:bg-gray-200 transition">
            Get Started
          </button>
        </div>
  
        {/* Right Side - Image */}
        <div className="mt-8 md:mt-0 md:w-1/2 flex justify-center">
          <img
            src="/hero-image.png"
            alt="Hero"
            className="w-48 xs:w-56 sm:w-64 md:w-72 lg:w-96 transition-transform duration-500 hover:scale-105"
          />
        </div>
  
      </section>
    );
  }