import { useEffect, useState } from 'preact/hooks';
import { invoke }  from "../runtime.ts";
import { Tasks } from "site/data/tasks.ts";

const FormExample = () => {
    useEffect(() => {
        async function call() {
            setTaskList(await invoke.site.loaders.form.tasks());
        }
        call();
    }, []);

    const [taskList, setTaskList] = useState<Tasks | null>(null);
    const [task, setTask] = useState('');

    const handleSubmit = async (e: Event) => {
        e.preventDefault();
        if (task.trim() !== '') {
            setTaskList(await invoke.site.actions.form.sendTask({task}));
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
                {taskList?.map((task: string, index: number) => (
                    <li key={index}>{task}</li>
                ))}
            </ul>
        </div>
    );
};

export default FormExample;