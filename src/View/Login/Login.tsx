// import {
//   Button,
//   Card,
//   CardBody,
//   CardFooter,
//   CardHeader,
//   FormControl,
//   FormErrorMessage,
//   FormLabel,
//   Input,
//   InputGroup,
//   InputRightElement,
//   Text,
// } from '@chakra-ui/react';
// import React, { useRef, useState } from 'react';
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

// const Login = () => {
//   const [show, setShow] = useState(false);
//   const handleClick = () => [setShow(!show)];

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm({
//     resolver: yupResolver(schema),
//   });
//   const onSubmit = (data: any) => {
//     console.log(data);
//   };

//   return (
//     <div>
//       <div className={styles.login}>
//         <Card className={styles.loginCard}>
//           <form onSubmit={handleSubmit(onSubmit)}>
//             <CardHeader className={styles.headerText}>
//               <Text fontSize="4xl" as="b">
//                 LOGIN
//               </Text>
//             </CardHeader>
//             <CardBody>
//               <div className={styles.accountInput}>
//                 <FormLabel>
//                   <Text as="b">Account</Text>
//                 </FormLabel>
//                 <Input
//                   type="text"
//                   size="lg"
//                   placeholder="Enter account"
//                   id="inputAccount"
//                   as="input"
//                   {...register('account')}
//                 />
//                 <ErrorMessage errors={errors} name="account" as="p" />
//               </div>

//               <div className={styles.inputPassword}>
//                 <FormLabel>
//                   <Text as="b">Password</Text>
//                 </FormLabel>
//                 <InputGroup size="md">
//                   <Input
//                     pr="4.5rem"
//                     type={show ? 'text' : 'password'}
//                     placeholder="Enter password"
//                     size="lg"
//                     id="inputPassword"
//                     as="input"
//                     {...register('password')}
//                   />
//                   <InputRightElement
//                     width="4.5rem"
//                     className={styles.showPasswordBtn}
//                   >
//                     <Button h="1.5rem" size="sm" colorScheme='teal' variant='outline' onClick={handleClick}>
//                       {show ? 'Hide' : 'Show'}
//                     </Button>
//                   </InputRightElement>
//                 </InputGroup>
//                 <ErrorMessage errors={errors} name="password" as="p" />
//               </div>

//               <CardFooter className={styles.loginBtn}>
//                 <Button colorScheme="teal" variant="solid" type="submit">
//                   Login
//                 </Button>
//               </CardFooter>
//             </CardBody>
//           </form>
//         </Card>
//       </div>
//     </div>
//   );
// };

// export default Login;


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
} from '@chakra-ui/react';
import { useState } from 'react';

const avatars = [
  {
    name: 'Ryan Florence',
    url: 'https://bit.ly/ryan-florence',
  },
  {
    name: 'Segun Adebayo',
    url: 'https://bit.ly/sage-adebayo',
  },
  {
    name: 'Kent Dodds',
    url: 'https://bit.ly/kent-c-dodds',
  },
  {
    name: 'Prosper Otemuyiwa',
    url: 'https://bit.ly/prosper-baba',
  },
  {
    name: 'Christian Nwamba',
    url: 'https://bit.ly/code-beast',
  },
];

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
    <Box position={'relative'}>
      <Container
        as={SimpleGrid}
        maxW={'7xl'}
        columns={{ base: 1, md: 2 }}
        spacing={{ base: 10, lg: 32 }}
        py={{ base: 10, sm: 20, lg: 32 }}>
        <Stack spacing={{ base: 10, md: 20 }}>
          <Heading
            lineHeight={1.1}
            fontSize={{ base: '3xl', sm: '4xl', md: '5xl', lg: '6xl' }}>
            Design is not just what it looks like and feels like. Design is 
            {' '} 
            <Text
              as={'span'}
              bgGradient="linear(to-r, teal.400,blue.400)"
              bgClip="text">
              how it works
            </Text>
         
          </Heading>
          <Stack direction={'row'} spacing={4} align={'center'}>
            {/* <AvatarGroup>
              {avatars.map((avatar) => (
                <Avatar
                  key={avatar.name}
                  name={avatar.name}
                  src={avatar.url}
                  size={useBreakpointValue({ base: 'md', md: 'lg' })}
                  position={'relative'}
                  zIndex={2}
                  _before={{
                    content: '""',
                    width: 'full',
                    height: 'full',
                    rounded: 'full',
                    transform: 'scale(1.125)',
                    bgGradient: 'linear(to-bl, red.400,pink.400)',
                    position: 'absolute',
                    zIndex: -1,
                    top: 0,
                    left: 0,
                  }}
                />
              ))}
            </AvatarGroup> */}
            {/* <Text fontFamily={'heading'} fontSize={{ base: '4xl', md: '6xl' }}>
              +
            </Text>
            <Flex
              align={'center'}
              justify={'center'}
              fontFamily={'heading'}
              fontSize={{ base: 'sm', md: 'lg' }}
              bg={'gray.800'}
              color={'white'}
              rounded={'full'}
              minWidth={useBreakpointValue({ base: '44px', md: '60px' })}
              minHeight={useBreakpointValue({ base: '44px', md: '60px' })}
              position={'relative'}
              _before={{
                content: '""',
                width: 'full',
                height: 'full',
                rounded: 'full',
                transform: 'scale(1.125)',
                bgGradient: 'linear(to-r, teal.400,blue.400)',
                position: 'absolute',
                zIndex: -1,
                top: 0,
                left: 0,
              }}>
              YOU
            </Flex> */}
          </Stack>
        </Stack>
        <Stack
          rounded={'xl'}
          p={{ base: 4, sm: 6, md: 8 }}
          className={styles.back}
          spacing={{ base: 8 }}
          maxW={{ lg: 'lg' }}>
          <Stack spacing={4}>
            <Heading
              color={'gray.800'}
              lineHeight={1.1}
              fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}>
              Join our website
              <Text
                as={'span'}
                bgGradient="linear(to-r, teal.400,blue.400)"
                bgClip="text">
                !
              </Text>
            </Heading>
            <Text color={'gray.500'} fontSize={{ base: 'sm', sm: 'md' }}>
              We’re looking for amazing engineers just like you! Become a part
              of our rockstar engineering team and skyrocket your career!
            </Text>
          </Stack>
          <Box as={'form'} mt={10}>
            <form>
              <Stack spacing={4}>
                <Input
                  placeholder="Account"
                  bg={'gray.50'}
                  border={0}
                  color={'gray.500'}
                  _placeholder={{
                    color: 'gray.500',
                  }}
                  {...register('account')}
                />
                <InputGroup size="md">
                    <Input
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
                      <Button h="1.5rem" size="sm" colorScheme='teal' variant='outline' onClick={handleClick}>
                        {show ? 'Hide' : 'Show'}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                  <ErrorMessage errors={errors} name="password" as="p" />
              </Stack>
              <Button
                fontFamily={'heading'}
                mt={8}
                w={'full'}
                bgGradient="linear(to-r, teal.400,blue.400)"
                color={'white'}
                _hover={{
                  boxShadow: 'xl',
                }}>
                Login
              </Button>
            </form>
          </Box>
          form
        </Stack>
      </Container>
      <Blur
        position={'absolute'}
        top={-10}
        right={10}
        style={{ filter: 'blur(70px)', zIndex: '-1' }}
      />
      {/* <Blur
        position={'absolute'}
        top={-10}
        left={20}
        style={{ filter: 'blur(90px)', zIndex: '-1' }}
      /> */}
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
      {...props}>
      <circle cx="71" cy="61" r="111" fill="#F56565" />
      <circle cx="244" cy="106" r="139" fill="#ED64A6" />
      <circle cy="291" r="139" fill="#ED64A6" />
      <circle cx="80.5" cy="189.5" r="101.5" fill="#ED8936" />
      <circle cx="196.5" cy="317.5" r="101.5" fill="#ECC94B" />
      <circle cx="70.5" cy="458.5" r="101.5" fill="#48BB78" />
      <circle cx="426.5" cy="-0.5" r="101.5" fill="#4299E1" />
    </Icon>
  );
};