import {
  Box,
  Typography,
  Container,
  TextField,
  CssBaseline,
  Button,
  Divider,
} from "@mui/material/";
import { Formik } from "formik";
import axios from "axios";
import Logo from "../../components/Logo";
import { registroSchema } from "../../schemas/registroSchema";

export default function Registro() {
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Logo />
        <Divider />
        <Typography component="h1" variant="h5">
          Registro
        </Typography>
        <Formik
          initialValues={{ email: "" }}
          onSubmit={async (values) => {
            await axios
              .get("https://localhost:7291/api/security/getCode")
              .then(async (res) => {
                const codigo = res.data;

                await axios
                  .post(
                    "https://localhost:7291/api/Usuario?email=" +
                      values.email +
                      "&code=" +
                      codigo
                  )
                  .then((res) => {
                    const respuesta = res.data;
                    if (respuesta.resultado) {
                      alert(respuesta.mensaje);
                    } else {
                      alert(respuesta.mensaje);
                    }
                  });
              });
          }}
          validationSchema={registroSchema}
        >
          {({
            handleSubmit,
            handleChange,
            handleBlur,
            errors,
            touched,
            isSubmitting,
            values,
          }) => (
            <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={
                  touched.email && Boolean(errors.email) ? errors.email : ""
                }
                error={touched.email && Boolean(errors.email)}
                autoFocus
                disabled={isSubmitting}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                disabled={isSubmitting}
              >
                Registrate
              </Button>
            </Box>
          )}
        </Formik>
      </Box>
    </Container>
  );
}
