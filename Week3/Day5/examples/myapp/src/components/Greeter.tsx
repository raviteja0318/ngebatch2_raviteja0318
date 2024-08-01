interface NewGreeterProps {}

export default function Greeter(): JSX.Element {
  return <h2>Welcome to the world of React</h2>;
}

/* export function Hello() {
    return <h3>Hello</h3>
} */

/* export const Hello =  function(){
    return <h3>Hello</h3>
} */

export const Hello = (): JSX.Element => {
  const message = "Hello User";
  const getQuote = () => "Be the Change You wish to see";
  function getGreeting(user?: string): JSX.Element {
    if (user) return <div>Hello {user}!</div>;
    return <div>Hello Stranger!</div>;
  }

  function showCart() {
    const cart = ["Book1", "Grocery1", "Grocery2"];
    return cart.length == 0 ? (
      <p>Cart is Empty, Continue Shpping</p>
    ) : (
      <table style={{ border: "1px solid" }}>
        <tr>
          <th>Item</th>
        </tr>
        <tbody>
          {cart.map((item, id) => (
            <tr key={id}>
              <td>{item}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
  const emp = { id: 1, name: "Ravi", skills: ["Java", "Spring", "React"] };
  return (
    <>
      <h3>{"Message to you: " + message}</h3>
      <p>{getQuote()}</p>
      <p>{emp.name}</p>
      <p>{emp.skills}</p>
      <ul>
        {emp.skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
      {/* <p>{emp.map(e=>e.skills)}</p> */}
      <p>{getGreeting("Ravi")}</p>
      {showCart()}
    </>
  );
};
// MOre than 1 name export allowed
// But 1 default export from a module file
// export : Named Export
// export default : Named export
// Importing named export members with {}
// Import {Greeter from} "./G"
