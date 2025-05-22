const AboutQC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-navy-900">
              <span className="block">GET TO KNOW</span>
              <span className="block text-navy-900 font-extrabold">QUEZON CITY</span>
            </h2>
            <p className="text-gray-700 mb-8 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque at mauris mollis, varius urna sed, egestas erat. Integer accumsan justo non ipsum viverra cursus. Curabitur sed velit quis eros aliquet porttitor. Proin ut ante vitae lectus varius rutrum. Fusce ac nisl fermentum, tincidunt odio quis, eleifend tortor. Etiam id ultricies neque, sit amet congue enim. Donec eleifend in lectus eu tempus. Nam fermentum facilisis felis, ut semper augue euismod sed. Cras laoreet, dui eget faucibus pellentesque, odio diam ultrices quam, at fermentum dolor ipsum eu justo.
            </p>
            <button className="bg-navy-900 hover:bg-blue-800 text-white font-bold py-2 px-8 rounded-full transition duration-300">
              LEARN MORE
            </button>
          </div>
          <div className="md:w-2/5">
            <div className="relative w-full">
              <img
                src="/Landing Page Pics/qc logo.png"
                alt="Quezon City Seal"
                className="w-full h-auto max-w-md mx-auto"
              />
              <p className="text-center text-sm mt-2 text-gray-600">Quezon City Seal</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutQC;
