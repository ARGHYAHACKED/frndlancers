import React, { useRef, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { Box } from "@react-three/drei";
import {gsap} from "gsap";

const FreelancerCard: React.FC<{ name: string; role: string }> = ({ name, role }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(
      cardRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, delay: 0.5, ease: "power3.out" }
    );
  }, []);

  return (
    <div
      ref={cardRef}
      className="bg-gray-800 text-white p-6 rounded-lg shadow-lg hover:scale-105 transform transition"
    >
      <div className="flex items-center space-x-4 mb-4">
        <div className="w-16 h-16 bg-gray-700 rounded-full"></div>
        <div>
          <h2 className="text-lg font-bold">{name}</h2>
          <p className="text-sm text-gray-400">{role}</p>
        </div>
      </div>
      <p className="text-gray-300 text-sm">
        Experienced in creating impactful content and driving results for brands.
      </p>
      <button className="mt-4 px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition">
        Hire Me
      </button>
    </div>
  );
};

const HireFreelancer: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-r from-gray-900 to-gray-700 text-white overflow-hidden">
      <Canvas className="absolute inset-0">
        <ambientLight intensity={0.5} />
        <Box args={[1, 1, 1]} scale={2}>
          <meshStandardMaterial color="blue" />
        </Box>
      </Canvas>
      <div className="relative z-10 flex flex-col items-center px-4 py-8">
        <h1 className="text-4xl font-bold mb-6">Hire a Freelancer</h1>
        <p className="text-lg mb-12 max-w-2xl text-center">
          Discover top influencers who can help elevate your brand to the next level.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl">
          {["John Doe", "Jane Smith", "Alex Johnson"].map((name, index) => (
            <FreelancerCard key={index} name={name} role="Influencer" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HireFreelancer;
