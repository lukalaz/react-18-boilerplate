import { useQuery } from "@tanstack/react-query";
import api from "../../../api/client";
import { blogQueryKeys } from "./blogQueryKeys";

export const useGetPosts = (searchParam = "launching rockets") => {
  const { isPending, error, data } = useQuery({
    queryKey: [blogQueryKeys.blog],
    queryFn: () =>
      api.get("https://newsapi.org/v2/everything", {
        params: { q: searchParam, language: "en", pageSize: 12, page: 1 },
      }),
  });

  const result = data?.data;

  return { isPending, error, result };
};
