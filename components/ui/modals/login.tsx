// "use client";

// import React, { useState } from "react";
// import { Input, Modal } from "antd";
// import { UserOutlined } from "@ant-design/icons";
// import Register from "./registr";
// import { Login } from "@/service/auth.service";
// import Notification from "@/utils/notification";
// import { signInValidationSchema } from "@/utils/validation";
// import { useFormik } from "formik";
// import "./style.css";

// const App: React.FC = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const formik = useFormik({
//     initialValues: {
//       email: "",
//       password: "",
//     },
//     validationSchema: signInValidationSchema,
//     onSubmit: async values => {
//       try {
//         const response = await Login(values);
//         if (response && response.status === 200) {
//           Notification({ title: "Login Successful", type: "success" });
//           closeModal();
//         } else {
//           Notification({ title: "Login Failed", type: "error" });
//         }
//       } catch (error) {
//         Notification({ title: "Login Error", type: "error" });
//       }
//     },
//   });

//   const showModal = () => {
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//   };

//   const handleCancel = () => {
//     setIsModalOpen(false);
//   };

//   return (
//     <>
//       <button
//         className="w-[40px] h-[40px] bg-[#F2F2F2] rounded-lg flex items-center justify-center"
//         onClick={showModal}
//       >
//         <UserOutlined />
//       </button>
//       <Modal
//         open={isModalOpen}
//         onOk={formik.handleSubmit}
//         onCancel={handleCancel}
//         okButtonProps={{ className: "custom-ok-button" }}
//         okText="Login"
//         className="p-[25px]"
//       >
//         <form
//           className="p-[25px] flex flex-col gap-3"
//           onSubmit={formik.handleSubmit}
//         >
//           <h1 className="text-[24px] font-medium">Вход в аккаунт</h1>
//           <p className="w-[270px] text-[12px]">
//             Если Вы не зарегистрированы, нажмите кнопку <Register />
//           </p>
//           <div className="form-group">
//             <Input
//               placeholder="Email"
//               name="email"
//               value={formik.values.email}
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//             />
//             {formik.touched.email && formik.errors.email ? (
//               <div style={{ color: "red" }}>{formik.errors.email}</div>
//             ) : null}
//           </div>
//           <div className="form-group">
//             <Input
//               type="password"
//               placeholder="Password"
//               name="password"
//               value={formik.values.password}
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//             />
//             {formik.touched.password && formik.errors.password ? (
//               <div style={{ color: "red" }}>{formik.errors.password}</div>
//             ) : null}
//           </div>
//           <button type="button">Забыли пароль?</button>
//         </form>
//       </Modal>
//     </>
//   );
// };

// export default App;
"use client";

import React, { useState } from "react";
import { Input, Modal } from "antd";
import { UserOutlined } from "@ant-design/icons";
import Register from "./registr";
import { Login } from "@/service/auth.service";
import Notification from "@/utils/notification";
import { signInValidationSchema } from "@/utils/validation";
import { useFormik } from "formik";
import "./style.css";

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: signInValidationSchema,
    onSubmit: async values => {
      try {
        const response = await Login(values);
        if (response && response.status === 200) {
          Notification({ title: "Login Successful", type: "success" });
          closeModal();
        } else {
          Notification({ title: "Login Failed", type: "error" });
        }
      } catch (error) {
        Notification({ title: "Login Error", type: "error" });
      }
    },
  });

  const showModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  // Create a wrapper function for formik.handleSubmit
  const handleOk = () => {
    formik.handleSubmit();
  };

  return (
    <>
      <button
        className="w-[40px] h-[40px] bg-[#F2F2F2] rounded-lg flex items-center justify-center"
        onClick={showModal}
      >
        <UserOutlined />
      </button>
      <Modal
        open={isModalOpen}
        onOk={handleOk} // Use the wrapper function here
        onCancel={handleCancel}
        okButtonProps={{ className: "custom-ok-button" }}
        okText="Login"
        className="p-[25px]"
      >
        <form
          className="p-[25px] flex flex-col gap-3"
          onSubmit={formik.handleSubmit}
        >
          <h1 className="text-[24px] font-medium">Вход в аккаунт</h1>
          <p className="w-[270px] text-[12px]">
            Если Вы не зарегистрированы, нажмите кнопку <Register />
          </p>
          <div className="form-group">
            <Input
              placeholder="Email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.email && formik.errors.email ? (
              <div style={{ color: "red" }}>{formik.errors.email}</div>
            ) : null}
          </div>
          <div className="form-group">
            <Input
              type="password"
              placeholder="Password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.password && formik.errors.password ? (
              <div style={{ color: "red" }}>{formik.errors.password}</div>
            ) : null}
          </div>
          <button type="button">Забыли пароль?</button>
        </form>
      </Modal>
    </>
  );
};

export default App;
