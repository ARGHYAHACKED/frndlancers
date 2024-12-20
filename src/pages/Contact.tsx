import React, { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { Sphere } from "@react-three/drei";
import gsap from "gsap";
import { useEffect } from "react";

const Contact: React.FC = () => {
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(
      formRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, delay: 0.5, ease: "power3.out" }
    );
  }, []);

  return (
    <div className="relative min-h-screen bg-gray-900 text-white overflow-hidden">
      {/* 3D Sphere Background */}
      <Canvas className="absolute inset-0">
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Sphere visible args={[1, 64, 64]} scale={3}>
          <meshStandardMaterial
            color="blue"
            wireframe
            wireframeLinewidth={2}
          />
        </Sphere>
      </Canvas>

      {/* Contact Form */}
      <div
        className="relative z-10 flex flex-col items-center justify-center h-full px-4"
        ref={formRef}
      >
        <h1 className="text-4xl font-extrabold mb-4">Contact Us</h1>
        <p className="text-lg mb-8 text-center max-w-2xl">
          We’d love to hear from you! Whether you're an influencer or a brand,
          let's create something amazing together.
        </p>
        <form className="bg-gray-800 bg-opacity-80 shadow-lg rounded-lg p-8 w-full max-w-md space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium">
              Your Name
            </label>
            <input
              id="name"
              type="text"
              className="mt-2 w-full px-4 py-2 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              className="mt-2 w-full px-4 py-2 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium">
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              className="mt-2 w-full px-4 py-2 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Write your message here..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-bold py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
