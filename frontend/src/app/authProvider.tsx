import React from "react";
import { Authenticator } from "@aws-amplify/ui-react";
import { Amplify } from "aws-amplify";
import "@aws-amplify/ui-react/styles.css";

Amplify.configure({
  Auth: {
    Cognito: {
      userPoolId: process.env.NEXT_PUBLIC_COGNITO_USER_POOL_ID || "",
      userPoolClientId:
        process.env.NEXT_PUBLIC_COGNITO_USER_POOL_CLIENT_ID || "",
    },
  },
});

const formFields = {
  signUp: {
    username: {
      order: 1,
      placeholder: "Choose a username",
      label: "Username",
      inputProps: { required: true },
    },
    email: {
      order: 1,
      placeholder: "Enter your email address",
      label: "Email",
      inputProps: { type: "email", required: true },
    },
    password: {
      order: 3,
      placeholder: "Enter your password",
      label: "Password",
      inputProps: { type: "password", required: true },
    },
    confirm_password: {
      order: 4,
      placeholder: "Confirm your password",
      label: "Confirm Password",
      inputProps: { type: "password", required: true },
    },
  },
};

const AuthProvider = ({ children }: any) => {
  return (
    <div className="mt-20">
      <Authenticator formFields={formFields}>
        {({ user }: any) =>
          user ? (
            <div>{children}</div>
          ) : (
            <div>
              <h1>Please sign in below:</h1>
            </div>
          )
        }
      </Authenticator>
    </div>
  );
};

export default AuthProvider;

// import React from "react";
// import { Authenticator } from "@aws-amplify/ui-react";
// import { Amplify } from "aws-amplify";
// import "@aws-amplify/ui-react/styles.css";

// Amplify.configure({
//   Auth: {
//     Cognito: {
//       userPoolId: process.env.NEXT_PUBLIC_COGNITO_USER_POOL_ID || "",
//       userPoolClientId:
//         process.env.NEXT_PUBLIC_COGNITO_USER_POOL_CLIENT_ID || "",
//     },
//   },
// });

// const formFields = {
//   signUp: {
//     username: {
//       order: 1,
//       placeholder: "Choose a username",
//       label: "Username",
//       inputProps: { required: true },
//     },
//     email: {
//       order: 2,
//       placeholder: "Enter your email address",
//       label: "Email",
//       inputProps: { type: "email", required: true },
//     },
//     password: {
//       order: 3,
//       placeholder: "Enter your password",
//       label: "Password",
//       inputProps: { type: "password", required: true },
//     },
//     confirm_password: {
//       order: 4,
//       placeholder: "Confirm your password",
//       label: "Confirm Password",
//       inputProps: { type: "password", required: true },
//     },
//   },
// };

// const AuthProvider = ({ children }: any) => {
//   return (
//     <div className="min-h-screen bg-gray-100 flex items-center justify-center">
//       <div className="w-full max-w-sm p-8 bg-white rounded-lg shadow-lg">
//         <Authenticator formFields={formFields}>
//           {({ user }: any) =>
//             user ? (
//               <div className="text-center">
//                 <h2 className="text-xl font-semibold mb-4">Welcome back, {user.username}!</h2>
//                 <div>{children}</div>
//               </div>
//             ) : (
//               <div>
//                 <h1 className="text-2xl font-semibold mb-6 text-center">
//                   Please sign in below:
//                 </h1>
//                 <div className="space-y-4">
//                   <div>
//                     <label
//                       htmlFor="username"
//                       className="block text-sm font-medium text-gray-700"
//                     >
//                       Username
//                     </label>
//                     <input
//                       id="username"
//                       placeholder="Choose a username"
//                       required
//                       className="mt-1 block w-full px-4 py-2 text-sm border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     />
//                   </div>
//                   <div>
//                     <label
//                       htmlFor="email"
//                       className="block text-sm font-medium text-gray-700"
//                     >
//                       Email
//                     </label>
//                     <input
//                       id="email"
//                       type="email"
//                       placeholder="Enter your email address"
//                       required
//                       className="mt-1 block w-full px-4 py-2 text-sm border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     />
//                   </div>
//                   <div>
//                     <label
//                       htmlFor="password"
//                       className="block text-sm font-medium text-gray-700"
//                     >
//                       Password
//                     </label>
//                     <input
//                       id="password"
//                       type="password"
//                       placeholder="Enter your password"
//                       required
//                       className="mt-1 block w-full px-4 py-2 text-sm border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     />
//                   </div>
//                   <div>
//                     <label
//                       htmlFor="confirm_password"
//                       className="block text-sm font-medium text-gray-700"
//                     >
//                       Confirm Password
//                     </label>
//                     <input
//                       id="confirm_password"
//                       type="password"
//                       placeholder="Confirm your password"
//                       required
//                       className="mt-1 block w-full px-4 py-2 text-sm border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     />
//                   </div>
//                   <button
//                     type="submit"
//                     className="mt-6 w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   >
//                     Sign Up
//                   </button>
//                   <div className="mt-4 text-center">
//                     <p className="text-sm text-gray-500">
//                       Already have an account?{" "}
//                       <a href="#" className="text-blue-500 hover:underline">
//                         Sign in
//                       </a>
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             )
//           }
//         </Authenticator>
//       </div>
//     </div>
//   );
// };

// export default AuthProvider;
