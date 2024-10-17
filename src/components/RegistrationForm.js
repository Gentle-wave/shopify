import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useAuthStore } from '../store/authStore';

export default function RegistrationForm() {
  const register = useAuthStore((state) => state.register);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Required'),
      password: Yup.string().min(6, 'Must be at least 6 characters').required('Required'),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Required'),
    }),
    onSubmit: (values) => {
      register(values.email, values.password);
    },
  });

  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-3xl font-bold text-center">Register</h1>
      <form className="max-w-md mx-auto mt-6 p-4 bg-white shadow-md" onSubmit={formik.handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">Email</label>
          <input
            type="email"
            name="email"
            className="w-full p-2 border border-gray-300 rounded"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.email && formik.errors.email ? (
            <p className="text-red-500 text-sm">{formik.errors.email}</p>
          ) : null}
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">Password</label>
          <input
            type="password"
            name="password"
            className="w-full p-2 border border-gray-300 rounded"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.password && formik.errors.password ? (
            <p className="text-red-500 text-sm">{formik.errors.password}</p>
          ) : null}
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            className="w-full p-2 border border-gray-300 rounded"
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
            <p className="text-red-500 text-sm">{formik.errors.confirmPassword}</p>
          ) : null}
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded w-full"
        >
          Register
        </button>
      </form>
    </div>
  );
}
