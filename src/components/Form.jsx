const Newsletter = ({ email, setEmail, error, handleSubmit }) => {
  return (
    <div className="container mx-auto bg-white rounded-lg flex flex-col md:flex-row-reverse md:justify-between">
      <img
        src="/illustration-sign-up-desktop.svg"
        alt="signup"
        className="hidden h-full p-3 md:block"
      />
      <img
        src="/illustration-sign-up-mobile.svg"
        alt="signup"
        className="md:hidden w-[500px]"
      />
      <div className="mt-10 md:mt-20">
        <h1 className="text-5xl text-darkSlateGrey font-bold ml-10 ">
          Stay updated!
        </h1>
        <p className="text-lg md:text-sm text-charcoalGrey ml-10 mt-5 md:w-[320px]">
          Join 60,000+ product managers receiving monthly updates on:
        </p>
        <div className="flex space-x-3 items-center">
          <img src="/icon-list.svg" alt="icon" className="ml-8 md:mt-5" />
          <p className="text-lg md:text-sm text-charcoalGrey mt-5">
            Product discovery and building what matters
          </p>
        </div>
        <div className="flex space-x-3 items-center">
          <img src="/icon-list.svg" alt="icon" className="ml-8 -mt-2 md:mt-3" />
          <p className="text-lg md:text-sm text-charcoalGrey mt-3 w-[280px]">
            Measuring to ensure updates are a success
          </p>
        </div>
        <div className="flex space-x-3 items-center">
          <img src="/icon-list.svg" alt="icon" className="ml-8 mt-3" />
          <p className="text-lg md:text-sm text-charcoalGrey mt-3">
            And much more!
          </p>
        </div>
        <div className="flex flex-col">
          <div className="flex justify-between items-center">
            <label htmlFor="email" className="ml-8 mt-10 md:mt-5 font-bold">
              Email address
            </label>
            <div className="text-tomato mt-10 md:mt-5 mr-10 md:mr-0 text-sm font-bold">
              {error}
            </div>
          </div>
          <input
            type="email"
            placeholder="email@company.com"
            value={email}
            autoComplete="email"
            onChange={(e) => setEmail(e.target.value)}
            className={`border-grey-100 border-solid rounded-md border-2 p-3 mt-1 h-16 md:h-10 ml-8 w-[340px] cursor-pointer text-darkSlateGrey outline-darkSlateGrey ${error && "border-tomato border-solid bg-error text-tomato outline-tomato"}`}
          />
          <button
            type="submit"
            onClick={handleSubmit}
            className="bg-darkSlateGrey text-white text-lg md:text-sm text-center h-16 w-[340px] ml-8 mt-5 md:h-10 font-bold rounded-lg md:rounded-md hover:bg-gradient-to-r hover:from-pink-500 hover:to-tomato"
          >
            Subscribe to monthly newsletter
          </button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
