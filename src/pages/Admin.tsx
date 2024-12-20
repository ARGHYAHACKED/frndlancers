import React, { useRef, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { gsap } from "gsap";

const Admin: React.FC = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    // GSAP Animation for the header
    gsap.fromTo(
      headerRef.current,
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1.5 }
    );

    // GSAP Animation for cards
    gsap.fromTo(
      cardsRef.current,
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        stagger: 0.3,
        delay: 0.5,
      }
    );
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white">
      {/* 3D Background */}
      <Canvas className="absolute inset-0">
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <mesh>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="purple" />
        </mesh>
      </Canvas>

      {/* Main Content */}
      <div className="relative z-10 px-6 py-12">
        {/* Header Section */}
        <div
          ref={headerRef}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold">Admin Dashboard</h1>
          <p className="text-lg text-gray-400 mt-2">
            Manage your influencer campaigns efficiently.
          </p>
        </div>

        {/* Admin Options (Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {["Manage Users", "View Campaigns", "Analytics"].map((text, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el!)}
              className="relative bg-gradient-to-br from-gray-800 to-gray-700 p-6 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
            >
              <h2 className="text-xl font-semibold mb-2">{text}</h2>
              <p className="text-gray-400">
                {text === "Manage Users"
                  ? "Add, remove, or edit users for your platform."
                  : text === "View Campaigns"
                  ? "Monitor and adjust ongoing campaigns."
                  : "Track performance and view detailed analytics."}
              </p>
              <div className="absolute bottom-4 right-4">
                <button className="bg-purple-500 hover:bg-purple-700 text-white px-4 py-2 rounded-md">
                  Open
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Admin;
