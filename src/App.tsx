function App() {
  return (
    <main className="p-8 md:p-0 min-h-screen bg-neutral-900 flex flex-col items-center justify-center text-neutral-300">
      <div className="flex flex-col gap-6 max-w-screen-sm">
        <div>
          <h1 className="text-3xl mb-2">Swift introduction</h1>
          <ul className="list-disc list-inside pl-4 flex flex-col gap-2">
            <li>
              👋 Hi! I'm <span className="font-bold">Bacila Dan</span>. Web
              developer based in 📍
              <span className="font-bold">Cluj-Napoca, Romania</span>
            </li>
            <li>
              👀 I'm interested in:{" "}
              <span className="font-bold">core web technologies, </span>
              <span className="font-bold">
                {" "}
                software architecture & best practices,
              </span>
              <span className="font-bold">
                {" "}
                career growth & business aspects
              </span>
            </li>
            <li>
              🌱 Current growth focus areas:{" "}
              <span className="font-bold">web solutioning & architecture,</span>
              <span className="font-bold"> Gen AI, </span>
              <span className="font-bold"> Next.js & React</span>
            </li>
            <li>
              🤝Always open to collaborating on:{" "}
              <span className="font-bold">exciting web projects!</span>
            </li>
          </ul>
        </div>

        <div>
          <h1 className="text-3xl mb-2">Experience & education</h1>
          <ul className="list-disc list-inside pl-4 flex flex-col gap-2">
            <li>
              <span className="text-neutral-300/80">Sep 2021 - Present:</span>{" "}
              Full-time JavaScript Application Developer @{" "}
              <span className="font-bold">IBM</span>
            </li>
            <li>
              <span className="text-neutral-300/80">May 2021 - Sep 2021:</span>{" "}
              Intern JavaScript Application developer @{" "}
              <span className="font-bold">IBM</span>
            </li>
            <li>
              <span className="text-neutral-300/80">Sep 2020 - Feb 2021:</span>{" "}
              Web Development @{" "}
              <span className="font-bold">Școala informală de IT</span>
            </li>
            <li>
              <span className="text-neutral-300/80">Sep 2017 - Oct 2020:</span>{" "}
              Bachelor's in Business & Computer Science @{" "}
              <span className="font-bold">Babes-Bolyai University</span> in
              <span className="font-bold"> Cluj-Napoca, Romania</span>
            </li>
          </ul>
        </div>

        <div>
          <h1 className="text-3xl mb-2">Keep in touch</h1>
          <ul className="list-disc list-inside pl-4 flex flex-col gap-2">
            <li>
              On{" "}
              <a
                className="underline text-neutral-300/80"
                href="https://github.com/baciladan"
              >
                GitHub
              </a>
            </li>
            <li>
              On{" "}
              <a
                className="underline text-neutral-300/80"
                href="https://www.linkedin.com/in/dan-bacila/"
              >
                Linkedin
              </a>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}

export default App;
