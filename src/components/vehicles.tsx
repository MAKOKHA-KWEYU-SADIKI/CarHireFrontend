import img1 from '../assets/bmw1.png';
import img2 from '../assets/audi1.png';
import img3 from '../assets/audi2.png';
import img4 from '../assets/bmw2.png';
import img5 from '../assets/bmw3.png';
import img6 from '../assets/gen3.png';
import img7 from '../assets/gen1.png';
import img8 from '../assets/mercedes1.png';
import Navbar from './navbar';
import Footer from './footer';
function Vehicle() {
  const vehicles = [
    {
      id: 1,
      vehicle_id: 'V001',
      image: img1,
      model: 'BMW 5 Series',
      year: '2023',
      engine: '3.0L V6',
      fuel: 'Petrol',
      acquisition_date: '2023-01-15',
      depreciation_rate: 0.1,
      current_value: 45000,
      maintenance_cost: 1500,
    },
    {
      id: 2,
      vehicle_id: 'V002',
      image: img2,
      model: 'Audi A4',
      year: '2022',
      engine: '2.0L I4',
      fuel: 'Diesel',
      acquisition_date: '2022-05-20',
      depreciation_rate: 0.12,
      current_value: 38000,
      maintenance_cost: 1200,
    },
    {
      id: 3,
      vehicle_id: 'V003',
      image: img3,
      model: 'Audi Q7',
      year: '2021',
      engine: '3.0L V6',
      fuel: 'Hybrid',
      acquisition_date: '2021-09-10',
      depreciation_rate: 0.15,
      current_value: 42000,
      maintenance_cost: 1300,
    },
    {
      id: 4,
      vehicle_id: 'V004',
      image: img4,
      model: 'Mercedes-Benz E-Class',
      year: '2022',
      engine: '2.0L I4',
      fuel: 'Petrol',
      acquisition_date: '2022-02-28',
      depreciation_rate: 0.11,
      current_value: 48000,
      maintenance_cost: 1600,
    },
    {
      id: 5,
      vehicle_id: 'V005',
      image: img5,
      model: 'Tesla Model S',
      year: '2023',
      engine: 'Electric',
      fuel: 'Electric',
      acquisition_date: '2023-03-15',
      depreciation_rate: 0.08,
      current_value: 60000,
      maintenance_cost: 2000,
    },
    {
      id: 6,
      vehicle_id: 'V006',
      image: img6,
      model: 'Ford Mustang',
      year: '2021',
      engine: '5.0L V8',
      fuel: 'Petrol',
      acquisition_date: '2021-06-05',
      depreciation_rate: 0.14,
      current_value: 35000,
      maintenance_cost: 1100,
    },
    {
      id: 7,
      vehicle_id: 'V007',
      image: img7,
      model: 'Chevrolet Camaro',
      year: '2022',
      engine: '2.0L I4',
      fuel: 'Petrol',
      acquisition_date: '2022-11-20',
      depreciation_rate: 0.13,
      current_value: 40000,
      maintenance_cost: 1400,
    },
    {
      id: 8,
      vehicle_id: 'V008',
      image: img8,
      model: 'Porsche 911',
      year: '2023',
      engine: '3.0L V6',
      fuel: 'Petrol',
      acquisition_date: '2023-07-10',
      depreciation_rate: 0.09,
      current_value: 58000,
      maintenance_cost: 1800,
    },
  ];

  return (
   <div>
    <Navbar/>
     <div className="fleet bg-gray-100 py-12">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8">Our Fleet</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {vehicles.map((vehicle) => (
            <div key={vehicle.id} className="card bg-white shadow-md rounded-lg p-4 flex flex-col items-center">
              <img src={vehicle.image} alt={vehicle.model} className="w-full h-32 object-cover rounded-lg mb-4" />
              <div className="text-center mb-4">
                <h3 className="text-xl font-semibold mb-2">{vehicle.model}</h3>
                <p className="text-gray-700 mb-1"><strong>Year:</strong> {vehicle.year}</p>
                <p className="text-gray-700 mb-1"><strong>Engine:</strong> {vehicle.engine}</p>
                <p className="text-gray-700 mb-1"><strong>Acquisition Date:</strong> {vehicle.acquisition_date}</p>
                <p className="text-gray-700 mb-1"><strong>Depreciation Rate:</strong> {vehicle.depreciation_rate}</p>
                <p className="text-gray-700 mb-1"><strong>Current Value:</strong> ${vehicle.current_value.toLocaleString()}</p>
                <p className="text-gray-700"><strong>Maintenance Cost:</strong> ${vehicle.maintenance_cost.toLocaleString()}</p>
              </div>
              <a href="http://localhost:5173/register"><button className="btn btn-primary mx-auto">Book Now</button></a>
              
            </div>
          ))}
        </div>
      </div>
    </div>
    <Footer/>
   </div>
  );
}

export default Vehicle;
