export default function  Greeter() {
    return <h2>Welcome to the world of React</h2>
}

/* export function Hello() {
    return <h3>Hello</h3>
} */

/* export const Hello =  function(){
    return <h3>Hello</h3>
} */

export const Hello = () => {
    const message = "Hello User"
    return (
        <>
            <h3>{message}</h3>
            <h4>Thank God...It's a friday!!!</h4>
        </>
    );
}
// MOre than 1 name export allowed
// But 1 default export from a module file
// export : Named Export
// export default : Named export
// Importing named export members with {}
// Import {Greeter from} "./G"