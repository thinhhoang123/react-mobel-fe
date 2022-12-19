import { useForm } from 'react-hook-form';
import styles from './Login.module.scss';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { ErrorMessage } from '@hookform/error-message';
import {
  Box,
  Flex,
  Stack,
  Heading,
  Text,
  Container,
  Input,
  Button,
  SimpleGrid,
  Avatar,
  AvatarGroup,
  useBreakpointValue,
  IconProps,
  Icon,
  InputGroup,
  InputRightElement,
  FormControl,
  Checkbox,
  Link,
} from '@chakra-ui/react';
import { useState } from 'react';

const schema = yup
  .object({
    account: yup.string().required(),
    password: yup.string().required(),
  })
  .required();

export default function Login() {
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

  const [show, setShow] = useState(false);
  const handleClick = () => [setShow(!show)];

  return (
    <Box position={'relative'} className={styles.login}>
      <FormControl onSubmit={handleSubmit(onSubmit)}>
        <Container
          as={SimpleGrid}
          maxW={'7xl'}
          columns={{ base: 1, md: 2 }}
          spacing={{ base: 10, lg: 32 }}
          py={{ base: 10, sm: 20, lg: 32 }}
        >
          <Stack spacing={{ base: 10, md: 20 }}>
            <Heading
              lineHeight={1.1}
              fontSize={{ base: '3xl', sm: '4xl', md: '5xl', lg: '6xl' }}
            >
              Design is not just what it looks like and feels like. Design is{' '}
              <Text
                as={'span'}
                bgGradient="linear(to-r, teal.400,blue.400)"
                bgClip="text"
              >
                how it works
              </Text>
            </Heading>
          </Stack>
          <Stack
            rounded={'xl'}
            p={{ base: 4, sm: 6, md: 8 }}
            className={styles.loginForm}
            spacing={{ base: 8 }}
            maxW={{ lg: 'lg' }}
          >
            <Stack spacing={4}>
              <Heading
                color={'gray.800'}
                lineHeight={1.1}
                fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}
              >
                Join our website
                <Text
                  as={'span'}
                  bgGradient="linear(to-r, teal.400,blue.400)"
                  bgClip="text"
                >
                  !
                </Text>
              </Heading>
              <Text color={'gray.500'} fontSize={{ base: 'sm', sm: 'md' }}>
                To enjoy all of our cool features ✌️
              </Text>
            </Stack>
            <Box as={'form'} mt={10}>
              <Stack spacing={4}>
                <Input
                  id="accountInput"
                  placeholder="Account"
                  bg={'gray.50'}
                  border={0}
                  color={'gray.500'}
                  _placeholder={{
                    color: 'gray.500',
                  }}
                  {...register('account')}
                />
                <ErrorMessage
                  errors={errors}
                  name="account"
                  as="span"
                  className={styles.errorMessage}
                />
                <InputGroup size="md">
                  <Input
                    id="passwordInput"
                    placeholder="Password"
                    bg={'gray.50'}
                    border={0}
                    color={'gray.500'}
                    _placeholder={{
                      color: 'gray.500',
                    }}
                    type={show ? 'text' : 'password'}
                    {...register('password')}
                  />
                  <InputRightElement
                    width="4.5rem"
                    className={styles.showPasswordBtn}
                  >
                    <Button
                      h="1.5rem"
                      size="sm"
                      colorScheme="teal"
                      variant="outline"
                      onClick={handleClick}
                    >
                      {show ? 'Hide' : 'Show'}
                    </Button>
                  </InputRightElement>
                </InputGroup>
                <ErrorMessage
                  errors={errors}
                  name="password"
                  as="span"
                  className={styles.errorMessage}
                />
              </Stack>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}
                mt={10}
              >
                <Checkbox colorScheme="teal">Remember me</Checkbox>
                <Link color={'blue.400'}>Forgot password?</Link>
              </Stack>
              <Button
                fontFamily={'heading'}
                mt={8}
                w={'full'}
                bgGradient="linear(to-r, teal.400,blue.400)"
                color={'white'}
                _hover={{
                  boxShadow: 'xl',
                }}
                type="submit"
              >
                Login
              </Button>
            </Box>
          </Stack>
        </Container>
      </FormControl>
      <Blur
        position={'absolute'}
        top={-10}
        right={10}
        style={{ filter: 'blur(70px)', zIndex: '-1', width: '50%' }}
      />
    </Box>
  );
}

export const Blur = (props: IconProps) => {
  return (
    <Icon
      width={useBreakpointValue({ base: '100%', md: '40vw', lg: '30vw' })}
      zIndex={useBreakpointValue({ base: -1, md: -1, lg: 0 })}
      height="560px"
      viewBox="0 0 528 560"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="71" cy="61" r="111" fill="#F56565" />
      <circle cx="244" cy="106" r="139" fill="#ED64A6" />
      <circle cy="291" r="139" fill="#ED64A6" />
      <circle cx="80.5" cy="189.5" r="101.5" fill="#ED8936" />
      <circle cx="196.5" cy="317.5" r="101.5" fill="#ECC94B" />
      <circle cx="600" cy="417.5" r="101.5" fill="#ECC94B" />
      <circle cx="70.5" cy="458.5" r="101.5" fill="#48BB78" />
      <circle cx="426.5" cy="-0.5" r="101.5" fill="#4299E1" />
      <circle cx="500" cy="200" r="101.5" fill="#F56565" />
    </Icon>
  );
};
