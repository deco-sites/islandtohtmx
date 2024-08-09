import {addTask, getTasks, Tasks} from '../../data/tasks.ts';

export type Props = {
    task: string;
};

export default function send({task}: Props) : Tasks {
    addTask(task);
    return getTasks();
}