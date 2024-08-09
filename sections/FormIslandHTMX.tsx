import { Tasks } from "site/data/tasks.ts";
import { AppContext } from "../apps/site.ts";
import { useSection } from "deco/hooks/useSection.ts";

export const loader = async (_props: unknown, _req: Request, ctx: AppContext) => {
    return {tasks: await ctx.invoke.site.loaders.form.tasks()};
}

export const action = async (_: unknown, req: Request, ctx: AppContext) => {
    const data = (await req.formData()).get('task') as string;
    if (data) {
        const result = await ctx.invoke.site.actions.form.sendTask({ task: data });
        return {tasks: result};
    }
    return {};
}

const FormExample = ({ tasks }: {tasks: Tasks}) => {
    return (
        <div>
            <form hx-post={useSection<typeof loader>()}
                hx-trigger="submit"
                hx-target="closest section"
                hx-swap="outerHTML"
                hx-indicator="#reminderSubmit"
                >
                <input
                    type="text"
                    name="task"
                    placeholder="Enter a task"
                />
                <button type="submit">Add Task</button>
            </form>
            <ul>
                {tasks?.map((task: string, index: number) => (
                    <li key={index}>{task}</li>
                ))}
            </ul>
        </div>
    );
};

export default FormExample;