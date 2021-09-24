import React from "react";
import { Formik, Form } from "formik";
import { Input } from "@chakra-ui/input";
import { Wrapper } from "../components/Wrapper";
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
} from "@chakra-ui/form-control";
import { InputField } from "../components/InputField";
import { Box } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";

interface registerProps {}

const Register: React.FC<registerProps> = ({}) => {
  return (
    <Wrapper variant="small">
      <Formik
        initialValues={{ username: "", password: "" }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ values, handleChange }) => (
          <Form>
            <InputField
              name="username"
              placeholder="username"
              lable="Username"
            />
            <Box mt={4}>
              <InputField
                name="password"
                placeholder="password"
                lable="Password"
                type="password"
              />
            </Box>
            <Box textAlign="center">
              <Button mt={4} colorScheme="teal" type="submit">
                Register
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    </Wrapper>
  );
};

export default Register;
