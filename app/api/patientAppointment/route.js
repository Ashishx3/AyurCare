// let appointments = []; // in-memory store
// export async function GET() {
//   console.log("📡 [API GET] Returning appointments:", appointments);
  
//   return Response.json(appointments);
// }


// export async function POST(req) {
//   const newAppt = await req.json();
//   const apptWithId = {
//     id: Date.now(),
//     status: "Pending",
//     ...newAppt,
//   };
//   appointments.push(apptWithId);

//  console.log("📝 New appointment received:", newAppt);
//   console.log("✅ [API POST] Added appointment:", apptWithId);
//   console.log("📡 [API Current Store]:", appointments);

//   return Response.json(apptWithId, { status: 201 });
// }
