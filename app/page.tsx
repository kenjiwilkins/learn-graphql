export default async function Home() {
  const response = await fetch("http://localhost:3000/api/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: "{ hello(name: \"Bookshelf Explorer\") }",
    }),
    cache: "no-store",
  });

  const { data } = await response.json();

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-4xl font-bold italic tracking-tight text-center sm:text-left">
          {data?.hello}
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Welcome to your new GraphQL-powered bookshelf management application.
        </p>
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="/api/graphql"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open GraphiQL Explorer
          </a>
        </div>
      </main>
    </div>
  );
}
