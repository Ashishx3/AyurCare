export default function PatientProgress() {
  const patients = [
    { name: "Ramesh Kumar", progress: 80 },
    { name: "Anita Sharma", progress: 65 },
    { name: "Suresh Gupta", progress: 50 },
    { name: "Meena Joshi", progress: 90 },
  ];

  return (
    <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-5 shadow-md">
      <h3 className="text-lg font-semibold mb-4 text-pink-300">
        Patient Progress
      </h3>
      <div className="space-y-4">
        {patients.map((p, i) => (
          <div key={i}>
            <div className="flex justify-between mb-1">
              <span>{p.name}</span>
              <span className="text-sm text-gray-300">{p.progress}%</span>
            </div>
            <div className="w-full bg-white/20 rounded-full h-2">
              <div
                className="bg-gradient-to-r from-pink-500 to-purple-500 h-2 rounded-full"
                style={{ width: `${p.progress}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
