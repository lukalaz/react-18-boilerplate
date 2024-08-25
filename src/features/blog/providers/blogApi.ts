import { useQuery } from "@tanstack/react-query";
import api from "../../../api/client";
import { blogQueryKeys } from "./blogQueryKeys";

type TArticle = {
  author: "Passant Rabie";
  content: "More than 50 pieces of space debris were spotted in the wake of a Chinese rocket launch, which could pose a risk to satellites in low Earth orbit.\r\nChina launched its first batch of broadband satelli… [+2608 chars]";
  description: "China's attempt to build an orbital satellite network similar to SpaceX's Starlink is off to an alarming start.";
  publishedAt: "2024-08-08T16:10:58Z";
  source: { id: null; name: "Gizmodo.com" };
  title: "Chinese Rocket Breaks Apart in Orbit, Leaves Dangerous Trail of Debris in Space";
  url: "https://gizmodo.com/chinese-rocket-breaks-apart-in-orbit-leaves-dangerous-trail-of-debris-in-space-2000484626";
  urlToImage: "https://gizmodo.com/app/uploads/2024/08/China-launches-18-satellites.jpg";
};

type TNewsApiResponse = {
  data: {
    status: string;
    totalResults: number;
    articles: TArticle[];
  };
};

export const useGetPosts = (searchParam = "launching rockets") => {
  const { isPending, error, data } = useQuery<boolean, Error, TNewsApiResponse>(
    {
      queryKey: [blogQueryKeys.blog],
      queryFn: () =>
        api.get("https://newsapi.org/v2/everything", {
          params: { q: searchParam, language: "en", pageSize: 12, page: 1 },
        }),
    }
  );

  const result = data?.data;
  //TODO: figure out how to correctly set the type for react query 5 and news api
  return { isPending, error, result };
};
