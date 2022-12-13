import { forwardRef } from 'react';
import { Button } from '@chakra-ui/react';

const Buttons = forwardRef<any, any>((props, ref) => {
  return (
    <Button colorScheme="teal" variant="outline" ref={ref}>
      {props.children}
    </Button>
  );
});

export default Buttons;
