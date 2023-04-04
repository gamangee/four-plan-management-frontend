import React from 'react';
import { CSVLink } from 'react-csv';

export default function ExcelDownload({ data, title, handleSchedule }) {
  return (
    <CSVLink
      data={data}
      filename="schedules.csv"
      target="_blank"
      onClick={() => {
        handleSchedule();
      }}
    >
      {title}
    </CSVLink>
  );
}
