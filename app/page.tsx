import Link from "next/link";

export default function Home() {
    return (
      <main className="flex min-h-screen justify-center items-center text-white">
        <div className="flex flex-col gap-2 p-5 rounded-lg bg-slate-800 max-w-xs w-full">
          <div className="text-center my-4">
            <h1>Space</h1>
          </div>
          <div>
            <Link
              href="/signin"
              className="my-4 bg-slate-900 p-3 rounded-lg block"
            >
              Sign In
            </Link>
          </div>
          <div>
            <Link
              href="/signup"
              className="my-4 bg-slate-900 p-3 rounded-lg block"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </main>
    );
};

