import { useState } from 'preact/hooks';
import { useSignal} from "@preact/signals";

import { invoke }  from "../runtime.ts";
import { Tasks } from "site/data/tasks.ts";

const FormExample = ({tasks}: {tasks: Tasks}) => {
    const taskList = useSignal(tasks);
    const [task, setTask] = useState('');

    const handleSubmit = async (e: Event) => {
        e.preventDefault();
        if (task.trim() !== '') {
            taskList.value = await invoke.site.actions.form.sendTask({task});
            setTask('');
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={task}
                    onChange={(e) => setTask((e.target as HTMLInputElement).value)}
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