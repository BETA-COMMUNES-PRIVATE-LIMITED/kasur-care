const Card = ({ title, value }) => (
  <div className="bg-white p-5 rounded-xl shadow">
    <h3 className="text-gray-500">{title}</h3>
    <p className="text-2xl font-bold text-blue-600">{value}</p>
  </div>
);

export default function Dashboard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      <Card title="Patients" value="120" />
      <Card title="Doctors" value="35" />
      <Card title="Appointments" value="80" />
      <Card title="Pending" value="12" />
    </div>
  );
}