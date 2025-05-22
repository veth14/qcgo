import DestinationCard from './DestinationCard';

const DestinationShowcase = () => {
  const destinations = [
    {
      id: 1,
      image: '/Landing Page Pics/gateway.jpg',
      title: 'Gateway Mall',
      location: 'General Aguinaldo Ave, Cubao, Quezon City, Metro Manila',
      to: '/destinations/gateway-mall'
    },
    {
      id: 2,
      image: '/Landing Page Pics/quezon_city_memorial_circle.jpg',
      title: 'Quezon Memorial',
      location: 'Elliptical Rd, Diliman, Quezon City, Metro Manila',
      to: '/destinations/quezon-memorial-circle'
    },
    {
      id: 3,
      image: '/Landing Page Pics/eastwood.png',
      title: 'Eastwood City',
      location: 'Libis, Quezon City, Metro Manila',
      to: '/destinations/eastwood-city'
    }
  ];

  return (
    <section className="relative">
      {/* Hero Section with Background */}
      <div className="relative h-[70vh]">
        <div className="absolute inset-0 z-0">
          <img
            src="/Landing Page Pics/circle.png"
            alt="Quezon City Background"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>

        <div className="relative z-10 flex flex-col items-start justify-center h-full px-8 md:px-16 lg:px-24">
          <div className="max-w-3xl">
            <h1 className="mb-4 text-6xl font-bold leading-tight tracking-wide text-white md:text-7xl">
              EXPLORE<br />QUEZON CITY
            </h1>
            <p className="mb-8 text-xl text-white/90">
              Where Culture, Nature, and Adventure Meet
            </p>
          </div>
        </div>
      </div>

      {/* Destination Cards - Positioned to overlap with hero section */}
      <div className="container px-4 mx-auto" style={{ marginTop: '-100px' }}>
        <div className="relative z-20 grid grid-cols-1 gap-6 md:grid-cols-3">
          {destinations.map((destination) => (
            <DestinationCard
              key={destination.id}
              image={destination.image}
              title={destination.title}
              location={destination.location}
              to={destination.to}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DestinationShowcase;
