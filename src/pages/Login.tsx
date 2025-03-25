import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff, Mail, Lock } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

type LoginFormData = z.infer<typeof loginSchema>;

export function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: LoginFormData) => {
    console.log('Login data:', data);
    // Simulate login success
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-amber-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white p-8 rounded-2xl shadow-xl"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-serif font-bold text-amber-900">
              Welcome Back to <span className="text-amber-600">Draping Hub</span>
            </h2>
            <p className="mt-2 text-amber-800">Please sign in to your account</p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-amber-800 mb-1">
                Email Address
              </label>
              <div className="relative">
                <input
                  type="email"
                  {...register('email')}
                  className="w-full px-4 py-2 pl-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500 text-amber-800"
                  placeholder="Enter your email"
                />
                <Mail className="w-5 h-5 text-amber-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
              </div>
              {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-amber-800 mb-1">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  {...register('password')}
                  className="w-full px-4 py-2 pl-10 pr-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500 text-amber-800"
                  placeholder="Enter your password"
                />
                <Lock className="w-5 h-5 text-amber-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-amber-400 hover:text-amber-600"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
              {errors.password && (
                <p className="mt-1 text-sm text-red-500">{errors.password.message}</p>
              )}
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  className="h-4 w-4 text-amber-500 focus:ring-amber-500 border-gray-300 rounded"
                />
                <label className="ml-2 block text-sm text-amber-800">Remember me</label>
              </div>
              <div className="text-sm">
                <Link to="#" className="font-medium text-amber-600 hover:text-amber-700">
                  Forgot password?
                </Link>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 10px rgba(251, 191, 36, 0.3)' }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full bg-amber-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-amber-700 transition-colors shadow-md"
            >
              Sign In
            </motion.button>

            <div className="mt-4 text-center">
              <p className="text-sm text-amber-800">
                Don't have an account?{' '}
                <Link to="/register" className="font-medium text-amber-600 hover:text-amber-700">
                  Sign up
                </Link>
              </p>
            </div>

            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-amber-200"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-amber-800">Or continue with</span>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="button"
                  className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg shadow-sm text-sm font-medium text-amber-800 bg-white hover:bg-amber-50"
                >
                  <img
                    className="h-5 w-5 mr-2"
                    src="https://www.svgrepo.com/show/475656/google-color.svg"
                    alt="Google logo"
                  />
                  Google
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="button"
                  className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg shadow-sm text-sm font-medium text-amber-800 bg-white hover:bg-amber-50"
                >
                  <img
                    className="h-5 w-5 mr-2"
                    src="https://www.svgrepo.com/show/475647/facebook-color.svg"
                    alt="Facebook logo"
                  />
                  Facebook
                </motion.button>
              </div>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
}

export default Login;