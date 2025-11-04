import { useNavigate } from "react-router-dom";
import { createContact } from "../api";
import { useForm } from "react-hook-form";
import type { Resolver } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// derive form field types from the yup schema
type FormValues = yup.InferType<typeof schema>;

const schema = yup.object({
  firstName: yup.string().trim().required("First name is required"),
  lastName: yup.string().trim().required("Last name is required"),
  email: yup.string().trim().required("Email is required").email("Invalid email address"),
  phone: yup.string().required("Phone is required").matches(/^\d{8,15}$/, "Invalid phone number"),
  note: yup.string().optional(),
}).required();

export default function ContactUs() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
  // cast resolver to the proper Resolver type so TS understands the shape
  resolver: yupResolver(schema) as unknown as Resolver<FormValues>,
    defaultValues: { firstName: "", lastName: "", email: "", phone: "", note: "" },
  });

  const onSubmit = async (data: FormValues) => {
    try {
      await createContact({
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        phone: data.phone,
        note: data.note ?? "",
      });
      navigate("/thank-you");
    } catch (err) {
      console.error(err);
      alert("Network error. Please try again.");
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 animate-fade-in">
      <h1 className="text-4xl font-extrabold mb-8 text-green-700 text-center">Contact Us</h1>

      <div className="mb-10 p-6 bg-gradient-to-br from-green-50 to-white rounded-xl border border-green-100 shadow">
        <h2 className="text-2xl font-semibold mb-3 text-gray-700">Company Info</h2>
        <p className="text-gray-600 mb-2">Welcome to OpenAgent. We've been around since 2013, and our vision is to make it easy for people to buy, sell and own property.</p>
        <p className="text-gray-600 mb-2">Here are the different ways you can contact us:</p>
        <ul className="text-gray-600 space-y-1">
          <li><strong>Phone:</strong> 13 24 34</li>
          <li><strong>Email:</strong> support@openagent.com.au</li>
          <li><strong>Postal Address:</strong> PO Box 419, Alexandria NSW 1435</li>
          <li><strong>Contact centre hours of operation:</strong> Monday - Friday 8:30 - 5:00</li>
        </ul>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 space-y-6">
        <div className="flex gap-4">
          <div className="flex-1">
            <input
              {...register("firstName", { required: "First name is required" })}
              placeholder="First Name"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-400 focus:outline-none text-lg"
            />
            {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>}
          </div>

          <div className="flex-1">
            <input
              {...register("lastName", { required: "Last name is required" })}
              placeholder="Last Name"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-400 focus:outline-none text-lg"
            />
            {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName.message}</p>}
          </div>
        </div>

        <div>
          <input
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: { value: /^\S+@\S+\.\S+$/, message: "Invalid email address" },
            })}
            placeholder="Email"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-400 focus:outline-none text-lg"
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
        </div>

        <div>
          <input
            {...register("phone", {
              required: "Phone is required",
              pattern: { value: /^\d{8,15}$/, message: "Invalid phone number" },
            })}
            placeholder="Phone"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-400 focus:outline-none text-lg"
          />
          {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
        </div>

        <div>
          <textarea
            {...register("note")}
            placeholder="Additional Info / Note"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 h-24 focus:ring-2 focus:ring-green-400 focus:outline-none resize-none text-lg"
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-bold text-lg transition-all duration-200 shadow disabled:opacity-60"
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
}
