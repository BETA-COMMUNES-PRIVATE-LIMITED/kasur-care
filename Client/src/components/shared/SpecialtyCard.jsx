const SpecialtyCard = ({ img, icon: Icon, title, doctors }) => {
  return (
    <div className="text-center group cursor-pointer">

      {/* Image */}
      <div className="relative w-44 h-56 rounded-2xl overflow-hidden mx-auto">

        <img
          src={img}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
        />

        {/* Overlay circle icon */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-md group-hover:bg-blue-500 transition">
            <Icon className="text-blue-500 group-hover:text-white text-xl" />
          </div>
        </div>

      </div>

      {/* Text */}
      <h3 className="mt-4 text-4xl font-semibold text-gray-800">
        {title}
      </h3>
      <p className="text-gray-500  mt-3 text-lg font-medium">
        {doctors} Doctors
      </p>
    </div>
  );
};

export default SpecialtyCard;