import githubkit from '../githubkit.svg'

function Footer() {
  return (
    <footer className=" bg-slate-400 flex flex-row content-center w-full mt-auto bg-secondary p-4">
      <div className="flex flex-col justify-center place-items-center my-5 w-full">
        <h4>
          Made with{' '}
          <span
            className="emoji"
            role="img"
            aria-label="heart"
            aria-hidden="false"
          >
            🧠
          </span>{' '}
          by Hazel.
        </h4>
        <a href="https://github.com/RosalvaMartinez"><img src={githubkit} alt="github kitty" className="text-center my-1" /></a>
      </div>
    </footer>
  );
}

export default Footer;
