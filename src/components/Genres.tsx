import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MUIDataTable, { MUIDataTableColumnOptions, MUIDataTableOptions, MUIDataTableColumn, MUIDataTableMeta } from 'mui-datatables';
import { SERVER_URL } from '../properties';
import { FormControlLabel, Switch } from '@material-ui/core';
import { green, red } from '@material-ui/core/colors';
import { DataTableWithLoading } from './DataTableWithLoading';

const columns: MUIDataTableColumn[] = [
  {
    name: 'name',
    label: 'Genre Name',
    options: {
      filter: true,
      sort: true,
    },
  },
  {
    name: 'nrecognitions',
    label: 'amount of recognitions',
    options: {
      filter: true,
      sort: true,
    },
  },
  {
    name: 'nsongs',
    label: 'amount of songs',
    options: {
      filter: true,
      sort: true,
    },
  },
];

export const Genres: React.FC = () => {
  return (
      <div>
        <DataTableWithLoading endpoint='genres' title={'Genres'} columns={columns}  />
      </div>
  );
};
