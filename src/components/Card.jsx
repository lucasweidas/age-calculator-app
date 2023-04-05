export default function Card() {
  return (
    <div>
      <form>
        <div>
          <div>
            <label htmlFor="day">Day</label>
            <input type="text" id="day" placeholder="DD" />
          </div>
          <div>
            <label htmlFor="month">Month</label>
            <input type="text" id="month" placeholder="MM" />
          </div>
          <div>
            <label htmlFor="year">Year</label>
            <input type="text" id="year" placeholder="YYYY" />
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
