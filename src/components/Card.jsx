export default function Card() {
  return (
    <div className="rounded-3xl rounded-br-[5.5rem] bg-white px-6 pb-11 pt-[3.25rem]">
      <form>
        <div className="flex items-center gap-4">
          <div className="flex flex-col gap-1">
            <label className="text-sm font-normal uppercase text-neutral-550" htmlFor="day">
              Day
            </label>
            <input
              className="w-full rounded-lg border-[1px] border-neutral-250 p-3.5 text-neutral-900 placeholder:text-neutral-550"
              type="text"
              id="day"
              placeholder="DD"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm font-normal uppercase text-neutral-550" htmlFor="month">
              Month
            </label>
            <input
              className="w-full rounded-lg border-[1px] border-neutral-250 p-3.5 text-neutral-900 placeholder:text-neutral-550"
              type="text"
              id="month"
              placeholder="MM"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm font-normal uppercase text-neutral-550" htmlFor="year">
              Year
            </label>
            <input
              className="w-full rounded-lg border-[1px] border-neutral-250 p-3.5 text-neutral-900 placeholder:text-neutral-550"
              type="text"
              id="year"
              placeholder="YYYY"
            />
          </div>
        </div>
        <div>
          <button type="submit" aria-label="submit form">
            <svg xmlns="http://www.w3.org/2000/svg" width="46" height="44" viewBox="0 0 46 44">
              <g fill="none" stroke="#FFF" strokeWidth="2">
                <path d="M1 22.019C8.333 21.686 23 25.616 23 44M23 44V0M45 22.019C37.667 21.686 23 25.616 23 44" />
              </g>
            </svg>
          </button>
        </div>
      </form>
      <div>
        <p>
          <span>--</span>years
        </p>
        <p>
          <span>--</span>months
        </p>
        <p>
          <span>--</span>days
        </p>
      </div>
    </div>
  );
}
