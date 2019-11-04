import React, { useState, useEffect } from 'react';
import { SERVER_URL } from '../properties';
import MUIDataTable, { MUIDataTableColumn, MUIDataTableOptions } from 'mui-datatables';
import axios from 'axios';
import { Loading } from './Loading';

type DataTableWithLoadingProps = {
  title: string;
  columns: MUIDataTableColumn[];
  endpoint: string;
  dataCb?: (data: any) => any;
};

const options: MUIDataTableOptions = {
  selectableRows: 'none',
  filterType: 'dropdown',
  responsive: 'scrollMaxHeight',
};

export const DataTableWithLoading: React.FC<DataTableWithLoadingProps> = ({ title, columns, endpoint, dataCb }: DataTableWithLoadingProps) => {
  const [localData, setLocalData] = useState();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    let didCancel = false;
    (async () => {
      const data = await axios.get(`${SERVER_URL || ''}/${endpoint}`);
      if (!didCancel) {
        dataCb ? setLocalData(dataCb(data.data)) : setLocalData(data.data);
        setLoading(false);
      }
    })();
    return () => {
      didCancel = true;
    };
  }, []);
  return (
    <div>
      {!loading && <MUIDataTable title={title} data={localData} columns={columns} options={options} />}
      {loading && <Loading />}
    </div>
  );
};
