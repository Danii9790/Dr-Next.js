// "use client";

// import { useState } from "react";
// import { Bot } from "lucide-react"; 

// export default function SupportAgent() {
//   const [open, setOpen] = useState(false);

//   return (
//     <div className="fixed bottom-6 right-6 z-50">
//       {/* Floating Button */}
//       <button
//         onClick={() => setOpen(!open)}
//         className="flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold px-4 py-2 rounded-full shadow-lg hover:scale-105 transition-all duration-300"
//       >
//         <Bot className="w-5 h-5" />
//         Support Agent
//       </button>

//       {/* Iframe Chat Box */}
//       {open && (
//         <div className="mt-4 w-[360px] h-[500px] rounded-lg overflow-hidden shadow-2xl border border-gray-300 bg-white">
//           <iframe
//             src="https://daniyalxdev-appointment-agent.hf.space" // 👈 change this if needed
//             width="100%"
//             height="100%"
//             className="border-none"
//           />
//         </div>
//       )}
//     </div>
//   );
// }

// "use client";

// import { useState } from "react";
// import { Bot, X } from "lucide-react";

// export default function SupportAgent() {
//   const [open, setOpen] = useState(false);

//   return (
//     <div className="fixed bottom-6 right-6 z-50">
//       {/* Floating Button */}
//       <button
//         onClick={() => setOpen(!open)}
//         className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium shadow-md transition-all duration-300 ${
//           open
//             ? "bg-red-500 hover:bg-red-600"
//             : "bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700"
//         } text-white`}
//       >
//         {open ? <X className="w-5 h-5" /> : <Bot className="w-5 h-5" />}
//         {open ? "Close Agent" : "Support Agent"}
//       </button>

//       {/* Iframe Chat Box */}
//       {open && (
//         <div className="mt-4 max-w-xs w-[90vw] sm:w-[360px] h-[500px] rounded-2xl overflow-hidden shadow-2xl border border-gray-300 bg-white animate-fade-in-up">
//           <iframe
//             src="https://daniyalxdev-appointment-agent.hf.space"
//             width="100%"
//             height="100%"
//             className="border-none"
//           />
//         </div>
//       )}
//     </div>
//   );
// }

"use client";

import { useSupportAgent } from "@/context/SupportAgentContext";
import { Bot, X } from "lucide-react";

export default function SupportAgent() {
  const { open, toggle } = useSupportAgent();

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={toggle}
        className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium shadow-md transition-all duration-300 ${
          open
            ? "bg-red-500 hover:bg-red-600"
            : "bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700"
        } text-white`}
      >
        {open ? <X className="w-5 h-5" /> : <Bot className="w-5 h-5" />}
        {open ? "Close Agent" : "Support Agent"}
      </button>

      {open && (
        <div className="mt-4 max-w-xs w-[90vw] sm:w-[360px] h-[500px] rounded-2xl overflow-hidden shadow-2xl border border-gray-300 bg-white animate-fade-in-up">
          <iframe
            src="https://daniyalxdev-testing.hf.space"
            width="100%"
            height="100%"
            className="border-none"
          />
        </div>
      )}
    </div>
  );
}
