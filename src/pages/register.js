import { useState } from 'react';
import { useAuthStore } from '../store/authStore'; // Zustand or Context API

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const register = useAuthStore((state) => state.register);

  const handleSubmit = (e) => {
    e.preventDefault();
    register(email, password);
  };

  return (
    <div>
      {/* <NavBar /> */}
      <div className="container mx-auto mt-10">
        <h1 className="text-3xl font-bold text-center">Register</h1>
        <form className="max-w-md mx-auto mt-6 p-4 bg-white shadow-md" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2">Email</label>
            <input
              type="email"
              className="w-full p-2 border border-gray-300 rounded"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2">Password</label>
            <input
              type="password"
              className="w-full p-2 border border-gray-300 rounded"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded">Register</button>
        </form>
      </div>
    </div>
  );
}