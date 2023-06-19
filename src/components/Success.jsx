const Success = ({ dismiss, email }) => {
  return (
    <div className="conatiner mx-auto absolute top-[150px] md:top-[100px] md:left-[450px] bg-white w-[400px] h-[400px] rounded-2xl">
      <img src="/icon-list.svg" alt="icon" className="w-14 mt-8 ml-10" />
      <h1 className="text-darkSlateGrey text-5xl font-bold ml-8 mt-5">
        Thanks for subscribing!
      </h1>
      <p className="text-lg md:text-sm text-charcoalGrey ml-8 mt-5 w-[320px]">
        A confirmation email has been sent to
        <span className="font-bold ml-1 mr-1">{email}.</span>
        Please open it and click the button inside to confirm your subscription.
      </p>
      <button
        className="bg-darkSlateGrey text-white text-lg md:text-sm text-center font-bold w-[330px] ml-8 mt-80 md:mt-5 h-16 md:h-10 rounded-md hover:bg-tomato"
        onClick={dismiss}
      >
        Dismiss message
      </button>
    </div>
  );
};

export default Success;
