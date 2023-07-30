import { animated, useSpring } from '@react-spring/web';

import Message from './Message';

function AnimatedMessage({ message, type }) {
  const [props] = useSpring(
    () => ({
      from: { opacity: 0 },
      to: { opacity: 1 },
    }),
    []
  );

  return (
    <animated.div style={props}>
      <Message message={message} type={type} />
    </animated.div>
  );
}
export default AnimatedMessage;
