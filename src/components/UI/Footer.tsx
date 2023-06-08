const Footer = () => {
  return (
    <div className={"bg-background-header py-3 text-center"}>
      <div className={"text-text-color font-semibold text-xl"}>
        This project is based on Fernando Leano project which was published on{" "}
        <a
          className={"italic text-blue-500 hover:text-blue-400"}
          target="blank"
          href="https://reactjsexample.com/a-todo-app-built-with-typescript-and-react/"
        >
          ReactJSExample
        </a>
      </div>
    </div>
  );
};

export default Footer;
