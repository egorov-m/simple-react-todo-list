import {useMutation, useQuery, useQueryClient} from "react-query";
import {QUERY_KEY} from "../../../constants";
import {localStorageThemeService} from "../../services/localStorageService";

export const useTheme = () => {
    const queryClient = useQueryClient();

    const {data} = useQuery({
        queryFn: () => {
            return localStorageThemeService.getValue()
        },
        queryKey: QUERY_KEY.theme
    });

    const {mutate} = useMutation({
        mutationFn: () => {
            const newTheme = data === "light" ? "dark" : "light";
            return localStorageThemeService.setValue(newTheme);
        },
        onSuccess: () => queryClient.invalidateQueries(QUERY_KEY.theme)
    });

    return {
        theme: data,
        toggleTheme: mutate
    };
};
