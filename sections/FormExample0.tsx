import FormIsland from "../islands/FormIsland.tsx";

const FormExample = () => {
    return (
        <div>
        <button onClick={() => alert("oi")}>Click me</button>
        <FormIsland />
        </div>
    )
};

export default FormExample;