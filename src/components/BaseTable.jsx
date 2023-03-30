import React from "react";

const BaseTable = ({ data, column, loading }) => {
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
          {loading ? (
            <tr className="">
              <td
                colSpan={column.length}
                className="  text-center py-4 space-y-2"
              >
                <div className="h-10 w-10 col-start-2  rounded-full border-emerald-600 border-2 border-b-white animate-spin"></div>
              </td>
            </tr>
          ) : data?.length == 0 ? (
            <tr className="">
              <td
                colSpan={column.length}
                className="  text-center py-4 space-y-2"
              >
                <img
                  src="https://img.freepik.com/free-icon/error_318-674423.jpg?size=626&ext=jpg&uid=R89794167&ga=GA1.2.1056913818.1672935173&semt=ais"
                  className="h-20 w-20 mx-auto mb-3"
                  alt=""
                  srcset=""
                />
                <span className="">Tidak ada data..</span>
              </td>
            </tr>
          ) : (
            data &&
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
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default BaseTable;
