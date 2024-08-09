import { AppContext } from "site/apps/site.ts";
import FormIslandPreact from "../islands/FormIslandPreact.tsx";
import { Tasks } from "site/data/tasks.ts";

export const loader = async (_props: unknown, _req: Request, ctx: AppContext) => {
    return {tasks: await ctx.invoke.site.loaders.form.tasks()};
}

const FormExample = ({tasks} : {tasks: Tasks}) => {
    return (
        <FormIslandPreact tasks={tasks} />
    )
};

export default FormExample;