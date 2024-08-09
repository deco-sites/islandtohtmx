import { useScript } from "deco/hooks/useScript.ts";
import FormIsland from "../islands/FormIsland.tsx";

const FormExample = () => {
    return (
        <div>
            <script
                type="module"
                dangerouslySetInnerHTML={{
                __html: useScript(() => alert("oi")),
                }}
            />
        <FormIsland />
        </div>
    )
};

export default FormExample;