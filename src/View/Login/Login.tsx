import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  FormControl,
  FormHelperText,
  FormLabel,
  Img,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from '@chakra-ui/react';
import React, { useRef, useState } from 'react';
import styles from './Login.module.scss';

const Login = () => {
  const [show, setShow] = useState(false);
  const accountRef = useRef();
  const passwordRef = useRef();

  const handleClick = () => [setShow(!show)];

  const handleSubmit = () => {
    const data = {
      account: (accountRef.current as any).value,
      password: (passwordRef.current as any).value,
    };
    console.log(data);
  };

  return (
    <div>
      <div className={styles.login}>
        <Card className={styles.loginCard}>
          <CardHeader className={styles.headerText}>
            <Text fontSize="4xl" as="b">
              LOGIN
            </Text>
          </CardHeader>
          <CardBody>
            <FormControl>
              <div className={styles.accountInput}>
                <FormLabel>
                  <Text as="b">Account</Text>
                </FormLabel>
                <Input
                  type="email"
                  size="lg"
                  placeholder="Enter account"
                  as="input"
                  ref={accountRef}
                />
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
                    as="input"
                    ref={passwordRef}
                  />
                  <InputRightElement
                    width="4.5rem"
                    className={styles.showPasswordBtn}
                  >
                    <Button h="1.5rem" size="sm" onClick={handleClick}>
                      {show ? 'Hide' : 'Show'}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </div>
            </FormControl>

            <CardFooter className={styles.loginBtn}>
              <Button colorScheme="teal" variant="solid" onClick={handleSubmit}>
                Login
              </Button>
            </CardFooter>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default Login;
