import React from "react";

const BaseTable = ({ data, column }) => {
  return (
    <div class="relative overflow-x-auto">
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-center uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            {column.map((val) => (
              <th scope="col" className={`px-6 py-3 ${val.className}`}>
                {val.name}
              </th>
            ))}
          </tr>
        </thead>
        <></>
        <tbody>
          {data &&
            data.map((val) => (
              <tr class="bg-white border-b text-gray-900 text-center">
                {column.map((item) =>
                  item.render ? (
                    <td class="px-6 py-4">
                      {item.render(val, val[item?.index])}
                    </td>
                  ) : (
                    <td class="px-6 py-4">{val[item?.index] || "-"}</td>
                  )
                )}
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default BaseTable;
