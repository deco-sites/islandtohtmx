export type Tasks = string[];

const tasks: Tasks = [] as string[];

export function addTask(task: string) {
    tasks.push(task);
}

export function getTasks() {
    return tasks;
}