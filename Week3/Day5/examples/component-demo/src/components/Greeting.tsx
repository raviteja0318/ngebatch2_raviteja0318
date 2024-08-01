export interface GreetingProps {
  name: string;
  isBirthday: boolean;
}

const Greeting = (props: GreetingProps) => {
  /* let name = "dummy value" */
  const {name:username,isBirthday} = props
  return (
    <div>
      <h1>Hello {username}</h1>
      {isBirthday && <p>Happy Birthday to you!</p>}
    </div>
  );
};

export default Greeting;
