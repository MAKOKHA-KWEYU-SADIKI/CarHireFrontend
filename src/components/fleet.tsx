
import img4 from '../assets/bmw2.png'
import img5 from '../assets/bmw3.png'
import img6 from '../assets/gen3.png'
import img7 from '../assets/gen1.png'
import img8 from '../assets/mercedes1.png'
import img1 from '../assets/bmw1.png';
import img2 from '../assets/audi1.png';
import img3 from '../assets/audi2.png';

function Fleet() {
  const vehicles = [
    {
      id: 1,
      image: img1,
      model: 'BMW 5 Series',
      year: '2023',
      engine: '3.0L V6',
      fuel: 'Petrol',
    },
    {
      id: 2,
      image: img2,
      model: 'Audi A4',
      year: '2022',
      engine: '2.0L I4',
      fuel: 'Diesel',
    },
    {
      id: 3,
      image: img3,
      model: 'Audi Q7',
      year: '2021',
      engine: '3.0L V6',
      fuel: 'Hybrid',
    },
    {
      id: 4,
      image: img4,
      model: 'Mercedes-Benz E-Class',
      year: '2022',
      engine: '2.0L I4',
      fuel: 'Petrol',
    },
    {
      id: 5,
      image: img5,
      model: 'Tesla Model S',
      year: '2023',
      engine: 'Electric',
      fuel: 'Electric',
    },
    {
      id: 6,
      image: img6,
      model: 'Ford Mustang',
      year: '2021',
      engine: '5.0L V8',
      fuel: 'Petrol',
    },
    {
      id: 7,
      image: img7,
      model: 'Chevrolet Camaro',
      year: '2022',
      engine: '2.0L I4',
      fuel: 'Petrol',
    },
    {
      id: 8,
      image: img8,
      model: 'Porsche 911',
      year: '2023',
      engine: '3.0L V6',
      fuel: 'Petrol',
    },
  ];

  return (
    <div className="fleet bg-gray-100 py-12">
      <div className="container mx-auto">
        {/* <h2 className="text-4xl font-bold text-center mb-8">Our Fleet</h2> */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {vehicles.map((vehicle) => (
            <div key={vehicle.id} className="card bg-white shadow-md rounded-lg p-4 flex flex-col items-center">
              <img src={vehicle.image} alt={vehicle.model} className="w-full h-32 object-cover rounded-lg mb-4" />
              <div className="text-center mb-4">
                <h3 className="text-xl font-semibold mb-2">{vehicle.model}</h3>
                <p className="text-gray-700 mb-1"><strong>Year:</strong> {vehicle.year}</p>
                <p className="text-gray-700 mb-1"><strong>Engine:</strong> {vehicle.engine}</p>
                <p className="text-gray-700"><strong>Fuel:</strong> {vehicle.fuel}</p>
              </div>
             <a href="http://localhost:5173/login"> <button className="btn btn-primary mx-auto">Book Now</button></a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Fleet;
