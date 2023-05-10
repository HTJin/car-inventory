import React, { useState, useEffect } from "react";

interface DisplayDataProps {
  fetchData: () => Promise<any>;
  dataName: string;
}

export const DisplayData: React.FC<DisplayDataProps> = ({
  fetchData,
  dataName,
}) => {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    const getData = async () => {
      const result = await fetchData();
      setData(result.data);
    };

    getData();
  }, [fetchData]);

  return (
    <div>
      <h2>{dataName}:</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};
