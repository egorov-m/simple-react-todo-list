import {useMutation, useQuery, useQueryClient} from "react-query";
import {localStorageTasksService} from "../../services";
import {QUERY_KEY} from "../../../constants";

export const useTasks = (filter) => {
    const {data} = useQuery({
        queryFn: () => {
            return localStorageTasksService.getValue()
        },
        queryKey: QUERY_KEY.tasks,
        ...(filter && {
                    select: (data) => data.filter(item => filter.check(item))})
    });
    return {
        tasks: data
    };
};

export const useAddTask = () => {
    const {tasks} = useTasks();
    const queryClient = useQueryClient();

    const {mutate} = useMutation({
        mutationFn: (newTask) => {
            return localStorageTasksService.setValue([...tasks, newTask]);
        },
        onSuccess: () => {
            queryClient.invalidateQueries(QUERY_KEY.tasks);
        }
    });

    const addTask = (newTask) => mutate(newTask);

    return {
        addTask
    };
};

export const useDeleteTask = () => {
    const {tasks} = useTasks();
    const queryClient = useQueryClient();

    const {mutate} = useMutation({
        mutationFn: (id) => {
            return localStorageTasksService.setValue(tasks.filter(item => item.id !== id));
        },
        onSuccess: () => {
            queryClient.invalidateQueries(QUERY_KEY.tasks);
        }
    });

    const deleteTask = (id) => mutate(id);

    return {
        deleteTask
    };
};

export const useUpdateTasks = () => {
    const {tasks} = useTasks();
    const queryClient = useQueryClient();

    const {mutate} = useMutation({
        mutationFn: ({id, updated}) => {
            return localStorageTasksService.setValue(tasks.map(item => item.id === id ? updated : item));
        },
        onSuccess: () => {
            queryClient.invalidateQueries(QUERY_KEY.tasks);
        }
    });

    const updateTask = (id, updated) => mutate({id, updated});

    return {
        updateTask
    };
};
