import React from "react";

const BaseTable = ({ data, column }) => {
  return (
    <div class="relative overflow-x-auto">
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text- uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            {column.map((val) => (
              <th scope="col" class="px-6 py-3">
                {val.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((val) => (
            <tr class="bg-white border-b text-gray-900">
              <th
                scope="row"
                class="px-6 py-4 font-medium  whitespace-nowrap dark:text-white"
              >
                Apple MacBook Pro 17"
              </th>
              <td class="px-6 py-4">Silver</td>
              <td class="px-6 py-4">Laptop</td>
              <td class="px-6 py-4">$2999</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BaseTable;
