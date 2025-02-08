function App() {
  return (
    <div className="h-screen w-screen bg-neutral-900 flex items-center justify-center text-2xl text-neutral-200">
      <p>
        Keep in touch on
        <a
          className="text-orange-600"
          href="https://github.com/baciladan"
          target="_blank"
        >
          {" "}
          Github{" "}
        </a>
        and
        <a
          className="text-orange-600"
          href="https://linkedin.com/in/dan-bacila"
          target="_blank"
        >
          {" "}
          LinkedIn{" "}
        </a>
        !
      </p>
    </div>
  );
}

export default App;
