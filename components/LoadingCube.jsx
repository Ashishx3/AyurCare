// "use client";

// import { useEffect } from "react";
// import "@/styles/cube.css";

// export default function CubePopup() {
//   useEffect(() => {
//     document.body.style.overflow = "hidden";
//     return () => {
//       document.body.style.overflow = "auto";
//     };
//   }, []);

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
//       <div className="p-8 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl flex flex-col items-center">
//         <div className="container scale-75">
//           <div className="box">
//             <div className="cube"></div>
//           </div>
//         </div>

//         {/* Loading Text */}
//         <p className="mt-12 text-lg font-semibold text-cyan-300 tracking-widest">
//           Loading...
//         </p>
//       </div>
//     </div>
//   );
// }

"use client";

import { useEffect } from "react";
import "@/styles/cube.css";

export default function CubePopup() {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="p-8 rounded-3xl flex flex-col items-center">
        <div className="container scale-75">
          <div className="box">
            <div className="cube"></div>
          </div>
        </div>

        {/* Loading Text */}
        <p className="mt-12 text-lg font-semibold text-cyan-300 tracking-widest">
          Loading...
        </p>
      </div>
    </div>
  );
}
  