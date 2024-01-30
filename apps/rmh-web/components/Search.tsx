import React from "react";

export const Search = () => {
  return (
    <div className="w-2/2 flex justify-end items-center relative m-2">
      {/* <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.5 11H11.71L11.43 10.73C12.0549 10.004 12.5117 9.14878 12.7675 8.22562C13.0234 7.30246 13.072 6.33416 12.91 5.39001C12.44 2.61001 10.12 0.390005 7.31997 0.0500053C6.33559 -0.0745289 5.33576 0.027777 4.397 0.349094C3.45824 0.670412 2.60542 1.20222 1.90381 1.90384C1.20219 2.60545 0.670381 3.45827 0.349064 4.39703C0.0277464 5.33579 -0.0745594 6.33562 0.0499748 7.32C0.389975 10.12 2.60998 12.44 5.38998 12.91C6.33413 13.0721 7.30243 13.0234 8.22559 12.7676C9.14875 12.5117 10.0039 12.055 10.73 11.43L11 11.71V12.5L15.25 16.75C15.66 17.16 16.33 17.16 16.74 16.75C17.15 16.34 17.15 15.67 16.74 15.26L12.5 11ZM6.49997 11C4.00997 11 1.99997 8.99001 1.99997 6.50001C1.99997 4.01 4.00997 2.00001 6.49997 2.00001C8.98997 2.00001 11 4.01 11 6.50001C11 8.99001 8.98997 11 6.49997 11Z"
          fill="#343741"
        />
      </svg> */}

      <input
        placeholder="Search"
        className="border border-gray-400 rounded-lg p-4 w-full h-3"
      />
    </div>
  );
};