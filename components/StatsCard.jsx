export default function StatsCard({ title, value, icon: Icon }) {
  return (
    <div className="bg-white/80 backdrop-blur border border-gray-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition">
      <div className="flex items-center gap-4">
        <div className="p-3 rounded-full bg-blue-100 text-blue-600">
          <Icon className="w-6 h-6" />
        </div>
        <div>
          <p className="text-sm text-gray-500">{title}</p>
          <h3 className="text-2xl font-bold text-gray-800">{value}</h3>
        </div>
      </div>
    </div>
  );
}
