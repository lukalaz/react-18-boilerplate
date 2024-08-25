import { BlogCard } from "./BlogCard";
import { useGetPosts } from "./providers/blogApi";
import { formatTime } from "./utils/blogHelpers";

const Blog = () => {
  const { result, isPending, error } = useGetPosts();

  if (isPending) return <>Loading...</>;

  if (error) return <>Error...</>;

  return (
    <>
      <section className="bg-white pb-10 pt-20 dark:bg-dark lg:pb-20 lg:pt-[120px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto mb-[60px] max-w-[510px] text-center lg:mb-20">
                <span className="mb-2 block text-lg font-semibold text-primary">
                  Our Blog
                </span>
                <h2 className="mb-4 text-3xl font-bold text-dark dark:text-white sm:text-4xl md:text-[40px]">
                  Our Recent News
                </h2>
                <p className="text-base text-body-color dark:text-dark-6">
                  The blog posts here are all pulled from{" "}
                  <a
                    href="https://newsapi.org/"
                    target="_blank"
                    className="text-primary hover:underline"
                  >
                    newsapi.org
                  </a>
                  .<br />
                  This page is mostly used to demonstrate react-query usage.
                </p>
              </div>
            </div>
          </div>

          <div className="-mx-4 flex flex-wrap">
            {result.articles.map((article) => (
              <BlogCard
                date={formatTime(article.publishedAt)}
                title={article.title}
                description={article.description}
                image={article.urlToImage}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
