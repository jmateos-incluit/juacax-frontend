import * as Yup from "yup";

export const registroSchema = Yup.object().shape({
  email: Yup.string()
    .email("El email no es válido")
    .required("El campo email es obligatorio"),
});
