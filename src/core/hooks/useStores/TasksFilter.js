import {useMutation, useQuery, useQueryClient} from "react-query";
import {localStorageTasksFilterService} from "../../services";
import {QUERY_KEY} from "../../../constants";

export const useTasksFilter = () => {
    const queryClient = useQueryClient();

    const {data} = useQuery({
        queryFn: () => {
            return localStorageTasksFilterService.getValue()
        },
        queryKey: QUERY_KEY.tasksFilter,
    });

    const {mutate} = useMutation({
        mutationFn: (newFilter) => {
            return localStorageTasksFilterService.setValue(newFilter);
        },
        onSuccess: () => {
            queryClient.invalidateQueries(QUERY_KEY.tasksFilter);
        }
    });

    const updateTasksFilter = (newFilter) => mutate(newFilter);

    return {
        tasksFilter: data,
        updateTasksFilter
    };
};
