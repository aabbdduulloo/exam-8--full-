import * as Yup from "yup";

// ============== Auth ============ //
export const signInValidationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().matches(
    /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/,
    "Password must be at least 6 characters  and contain at least one uppercase"
  ),
});
