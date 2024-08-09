import { useSignal } from '@preact/signals';
import { invoke }  from "../runtime.ts";
import { Tasks } from "site/data/tasks.ts";

const FormExample = ({tasks} : {tasks: Tasks}) => {
    console.log(tasks);
    const taskList = useSignal<Tasks | null>(tasks);
    const task = useSignal('');

    const handleSubmit = async (e: Event) => {
        e.preventDefault();
        if (task.value.trim() !== '') {
            taskList.value = (await invoke.site.actions.form.sendTask({task: task.value}));
            task.value = '';
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={task}
                    onChange={(e) => {task.value = ((e.target as HTMLInputElement).value)}}
                    placeholder="Enter a task"
                />
                <button type="submit">Add Task</button>
            </form>
            <ul>
                {taskList.value?.map((task: string, index: number) => (
                    <li key={index}>{task}</li>
                ))}
            </ul>
        </div>
    );
};

export default FormExample;