import { useRef, useState } from 'react';
import { validateDate } from '../util/date';
import { getPassedTime } from '../util/time';

const initialResult = {
  years: '--',
  months: '--',
  days: '--',
};

const initialError = {
  year: null,
  month: null,
  day: null,
  isInvalidDate: false,
};

export default function Card() {
  const [result, setResult] = useState(initialResult);
  const [error, setError] = useState(initialError);
  const dayRef = useRef();
  const monthRef = useRef();
  const yearRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();

    const year = yearRef.current.value;
    const month = monthRef.current.value;
    const day = dayRef.current.value;
    const validation = validateDate(year, month, day);
    setError(validation);
    console.log(validation);
    if (validation.day || validation.month || validation.year) {
      setResult(initialResult);
      return;
    }
    const birthDate = new Date(year, month - 1, day);
    // setResult({
    //   years: birthDate.getFullYear(),
    //   months: birthDate.getMonth(),
    //   days: birthDate.getDate(),
    // });
    console.log(getPassedTime(year, month, day));
    console.log(Intl.DateTimeFormat().format(birthDate));
  }

  return (
    <div className="rounded-3xl rounded-br-[5.5rem] bg-white px-6 pb-11 pt-[3.25rem]">
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-3 items-center gap-4 font-bold">
          <div className="flex flex-col gap-1">
            <label className="text-sm uppercase tracking-[0.15em] text-neutral-550" htmlFor="day">
              Day
            </label>
            <input
              ref={dayRef}
              className="w-full rounded-lg border-[1px] border-neutral-250 px-3.5 py-3 text-xl text-neutral-900 placeholder:text-neutral-550"
              type="text"
              id="day"
              placeholder="DD"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm uppercase tracking-[0.15em] text-neutral-550" htmlFor="month">
              Month
            </label>
            <input
              ref={monthRef}
              className="w-full rounded-lg border-[1px] border-neutral-250 px-3.5 py-3 text-xl text-neutral-900 placeholder:text-neutral-550"
              type="text"
              id="month"
              placeholder="MM"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm uppercase tracking-[0.15em] text-neutral-550" htmlFor="year">
              Year
            </label>
            <input
              ref={yearRef}
              className="w-full rounded-lg border-[1px] border-neutral-250 px-3.5 py-3 text-xl text-neutral-900 placeholder:text-neutral-550"
              type="text"
              id="year"
              placeholder="YYYY"
            />
          </div>
        </div>
        <div className="relative isolate my-8 flex items-center justify-center before:absolute before:-z-[1] before:h-0.5 before:w-full before:bg-neutral-150">
          <button className="flex h-16 w-16 items-center justify-center rounded-full bg-purple-450" type="submit" aria-label="submit form">
            <span className="block h-[24px] w-[26px]">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 46 44">
                <g fill="none" stroke="#FFF" strokeWidth="3">
                  <path d="M1 22.019C8.333 21.686 23 25.616 23 44M23 44V0M45 22.019C37.667 21.686 23 25.616 23 44" />
                </g>
              </svg>
            </span>
          </button>
        </div>
      </form>
      <div>
        <p className="text-[3.25rem] font-extrabold italic leading-[1.1] text-neutral-900">
          <span className="text-purple-450">{result.years}</span> years
        </p>
        <p className="text-[3.25rem] font-extrabold italic leading-[1.1] text-neutral-900">
          <span className="text-purple-450">{result.months}</span> months
        </p>
        <p className="text-[3.25rem] font-extrabold italic leading-[1.1] text-neutral-900">
          <span className="text-purple-450">{result.days}</span> days
        </p>
      </div>
    </div>
  );
}
