import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from '@chakra-ui/react';
import React, { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import styles from './Login.module.scss';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { ErrorMessage } from '@hookform/error-message';

const schema = yup
  .object({
    account: yup.string().required(),
    password: yup.string().required(),
  })
  .required();

const Login = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => [setShow(!show)];

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <div>
      <div className={styles.login}>
        <Card className={styles.loginCard}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <CardHeader className={styles.headerText}>
              <Text fontSize="4xl" as="b">
                LOGIN
              </Text>
            </CardHeader>
            <CardBody>
              <div className={styles.accountInput}>
                <FormLabel>
                  <Text as="b">Account</Text>
                </FormLabel>
                <Input
                  type="text"
                  size="lg"
                  placeholder="Enter account"
                  id="inputAccount"
                  as="input"
                  {...register('account')}
                />
                <ErrorMessage errors={errors} name="account" as="p" />
              </div>

              <div className={styles.inputPassword}>
                <FormLabel>
                  <Text as="b">Password</Text>
                </FormLabel>
                <InputGroup size="md">
                  <Input
                    pr="4.5rem"
                    type={show ? 'text' : 'password'}
                    placeholder="Enter password"
                    size="lg"
                    id="inputPassword"
                    as="input"
                    {...register('password')}
                  />
                  <InputRightElement
                    width="4.5rem"
                    className={styles.showPasswordBtn}
                  >
                    <Button h="1.5rem" size="sm" colorScheme='teal' variant='outline' onClick={handleClick}>
                      {show ? 'Hide' : 'Show'}
                    </Button>
                  </InputRightElement>
                </InputGroup>
                <ErrorMessage errors={errors} name="password" as="p" />
              </div>

              <CardFooter className={styles.loginBtn}>
                <Button colorScheme="teal" variant="solid" type="submit">
                  Login
                </Button>
              </CardFooter>
            </CardBody>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default Login;
