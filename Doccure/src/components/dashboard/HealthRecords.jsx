import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const HealthRecords = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-5 border border-gray-300">
      
      {/* Header */}
      <h2 className="text-lg font-semibold mb-4">Health Records</h2>

      <div className="grid md:grid-cols-3 gap-6 ">
        
        {/* Left Stats */}
        <div className="space-y-8">
          
          <div className="space-y-2">
            <p className="text-sm text-gray-500">❤️ Heart Rate</p>
            <h3 className="text-xl font-semibold">140 Bpm</h3>
          </div>

          <div className="space-y-2">
            <p className="text-sm text-gray-500">🩸 Glucose Level</p>
            <h3 className="text-xl font-semibold">70 - 90</h3>
          </div>

          <div className="space-y-2">
            <p className="text-sm text-gray-500">🩺 Blood Pressure</p>
            <h3 className="text-xl font-semibold">100 mg/dl</h3>
          </div>

        </div>

        {/* Middle Stats */}
        <div className="space-y-8 border-r border-gray-300">
          
          <div className="space-y-2">
            <p className="text-sm text-gray-500">🌡 Body Temperature</p>
            <h3 className="text-xl font-semibold">37.5 °C</h3>
          </div>

          <div className="space-y-2">
            <p className="text-sm text-gray-500">💨 SpO2</p>
            <h3 className="text-xl font-semibold">96%</h3>
          </div>

          <div>
            <p className="text-sm text-gray-500">⚖ BMI</p>
            <h3 className="text-xl font-semibold">20.1 kg/m²</h3>
          </div>

        </div>

        {/* Right Circle Report */}
        <div className="flex flex-col items-center justify-center">
          
          <div className="w-32 h-40 ">
            <h2 className="text-lg font-medium pb-2">Overall Report</h2>
      <CircularProgressbar
        value={80}
        text={`84%`}
        styles={buildStyles({
          pathColor: "green", 
          textColor: "#111",
          trailColor: "#e5e7eb",
        })}
      />
    </div>

          <p className="text-lg font-medium text-gray-500 mt-2">
            95% Normal Health
          </p>

          <button className="mt-3 px-3 py-2 bg-black text-white rounded-lg text-sm hover:bg-blue-700">
            View Details →
          </button>
        </div>

      </div>
    </div>
  );
};

export default HealthRecords;