export default function AssistantWidget() {
  return (
    <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-5 shadow-md">
      <h3 className="text-lg font-semibold mb-4 text-pink-300">
        Assistant
      </h3>
      <div className="bg-white/5 rounded-lg p-3 h-40 text-sm overflow-y-auto">
        <p className="mb-2">
          🤖 Hello Doctor! Need help scheduling a new Panchakarma session?
        </p>
        <p className="text-gray-300">Try: “Schedule a new therapy for Ramesh at 10 AM.”</p>
      </div>
      <input
        type="text"
        placeholder="Ask assistant..."
        className="mt-3 w-full px-3 py-2 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none"
      />
    </div>
  );
}
