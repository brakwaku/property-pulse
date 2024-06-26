import PropertyCard from '@/components/PropertyCard';
import { fetchProperties } from '@/utils/requests';

const PropertiesPage = async () => {
  const properties = await fetchProperties();

  // Sort properties by date in ascending order
  properties.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  return (
    <section className="px-4 py-6">
      <div className="container-xl lg:container m-auto px-4 py-6">
        { properties.length === 0 ? (
          <div className="text-center">
            <h2 className="text-2xl font-bold">No properties found</h2>
            <p className="mt-2">There are no properties available at the moment.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
        )}
        
      </div>
    </section>
  );
};

export default PropertiesPage;
