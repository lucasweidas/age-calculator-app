import { forwardRef, useRef, useState } from 'react';
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
    if (validation.day || validation.month || validation.year) {
      setResult(initialResult);
      return;
    }
    const passedTime = getPassedTime(year, month, day);
    setResult(passedTime);
  }

  return (
    <div className="rounded-3xl rounded-br-[5.5rem] bg-white px-6 pb-11 pt-[3.25rem]">
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-3 gap-4 font-bold">
          <div className="flex flex-col gap-1">
            <Label htmlFor="day" error={error.day || error.isInvalidDate}>
              Day
            </Label>
            <Input ref={dayRef} id="day" placeholder="MM" error={error.day || error.isInvalidDate} />
            {error.day && <Error error={error.day} />}
          </div>
          <div className="flex flex-col gap-1">
            <Label htmlFor="month" error={error.month || error.isInvalidDate}>
              Month
            </Label>
            <Input ref={monthRef} id="month" placeholder="MM" error={error.month || error.isInvalidDate} />
            {error.month && <Error error={error.month} />}
          </div>
          <div className="flex flex-col gap-1">
            <Label htmlFor="year" error={error.year || error.isInvalidDate}>
              Year
            </Label>
            <Input ref={yearRef} id="year" placeholder="YYYY" error={error.year || error.isInvalidDate} />
            {error.year && <Error error={error.year} />}
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

function Label({ children, htmlFor, error }) {
  let styles = 'text-sm uppercase tracking-[0.15em]';
  if (error) {
    styles += ' text-red-450';
  } else {
    styles += ' text-neutral-550';
  }

  return (
    <label className={styles} htmlFor={htmlFor}>
      {children}
    </label>
  );
}

const Input = forwardRef(function Input({ error, id, placeholder, type }, ref) {
  let styles = 'w-full rounded-lg border-[1px] px-3.5 py-3 text-xl text-neutral-900 placeholder:text-neutral-550';
  if (error) {
    styles += ' border-red-450';
  } else {
    styles += ' border-neutral-250';
  }

  return <input ref={ref} className={styles} type={type || 'text'} id={id} placeholder={placeholder} />;
});

function Error({ error }) {
  return <p className="mt-0.5 text-xs font-normal italic text-red-450">{error}</p>;
}
