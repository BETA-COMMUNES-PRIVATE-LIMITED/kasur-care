export default function Patients() {
  return (
    <div className="bg-white p-4 rounded-xl shadow">
      <h2 className="text-xl font-bold mb-4">Patients</h2>

      <table className="w-full">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-3 text-left">Name</th>
            <th className="p-3 text-left">Email</th>
            <th className="p-3 text-left">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-t">
            <td className="p-3">Ali Khan</td>
            <td className="p-3">ali@gmail.com</td>
            <td className="p-3 text-green-600">Active</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}