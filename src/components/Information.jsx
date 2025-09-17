import CountUp from "react-countup";

function Information() {
  return (
    <div className="flex flex-row w-[92%] sm:w-[50%] max-w[630px] m-auto justify-between shadow-xl rounded-md bg-white pt-4 pb-4 pl-4 pr-4 sm:pl-8 sm:pr-8 mt-4 sm:mt-14 text-xl sm:text-base">
      {/* user */}
      <div className="flex row items-center gap-1.5">
        <svg className="size-9 sm:size-10 p-2 bg-red-100 rounded-full">
          <use href="/sprite.svg#user_icon" />
        </svg>
        <div className="flex flex-col leading-[0.9]">
          <p className="font-bold ">
            <CountUp start={0} end={90} duration={2.5} />+
          </p>
          <p className="text-slate-300 text-xs">Users</p>
        </div>
      </div>
      <span className="bg-gray-200 w-[1px] h-8"></span>
      {/* locations */}
      <div className="flex row items-center gap-1.5">
        <svg className="size-9 sm:size-10 p-2 bg-red-100 rounded-full">
          <use href="/sprite.svg#location_icon" />
        </svg>
        <div className="flex flex-col leading-[0.9]">
          <p className="font-bold ">
            <CountUp start={0} end={30} duration={2.5} />+
          </p>
          <p className="text-slate-300  text-xs">Locations</p>
        </div>
      </div>
      <span className="bg-gray-200 w-[1px] h-8"></span>
      {/* services */}
      <div className="flex row items-center gap-1.5">
        <svg className="size-9 sm:size-10 p-2 bg-red-100 rounded-full">
          <use href="/sprite.svg#service_icon" />
        </svg>
        <div className="flex flex-col leading-[0.9]">
          <p className="font-bold">
            <CountUp start={0} end={50} duration={2.5} />+
          </p>
          <p className="text-slate-300  text-xs">Servers</p>
        </div>
      </div>
    </div>
  );
}

export default Information;
