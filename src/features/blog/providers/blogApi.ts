import { useQuery } from "@tanstack/react-query";
import api from "../../../api/client";
import { blogQueryKeys } from "./blogQueryKeys";

export const useGetPosts = (searchParam = "Microsoft Azure DevOps") => {
  const { isPending, error, data } = useQuery({
    queryKey: [blogQueryKeys.blog],
    queryFn: () =>
      api.get("https://newsapi.org/v2/everything", {
        params: { q: searchParam },
      }),
  });

  const result = data?.data;

  return { isPending, error, result };
};
