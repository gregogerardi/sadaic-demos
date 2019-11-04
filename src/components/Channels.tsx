import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MUIDataTable, { MUIDataTableColumnOptions, MUIDataTableOptions, MUIDataTableColumn, MUIDataTableMeta } from 'mui-datatables';
import { SERVER_URL } from '../properties';
import { FormControlLabel, Switch } from '@material-ui/core';
import { green, red } from '@material-ui/core/colors';
import { DataTableWithLoading } from './DataTableWithLoading';

const columns: MUIDataTableColumn[] = [
  {
    name: 'channelName',
    label: 'Name',
    options: {
      filter: true,
      sort: true,
    },
  },
  {
    name: 'streamCountry',
    label: 'Country',
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
    name: 'overallConfidenceScore',
    label: 'Overall Confidence Score',
    options: {
      filter: true,
      customBodyRender: (value: any, tableMeta: MUIDataTableMeta, updateValue: (s: any, c: any, p: any) => any) => {
        return <div style={{ color: value > 90 ? green[400] : red[400] }}>{value}</div>;
      },
    },
  },
  {
    name: 'status',
    label: 'Active',

    options: {
      filter: true,
      customBodyRender: (value: any, tableMeta: MUIDataTableMeta, updateValue: (s: any, c: any, p: any) => any) => {
        return (
          <FormControlLabel
            label={value == 1 ? 'Yes' : 'No'}
            value={value == 1 ? 'Yes' : 'No'}
            control={<Switch color='primary' checked={value == 1} value={value == 1 ? 'Yes' : 'No'} />}
          />
        );
      },
    },
  },
];

export const Channels: React.FC = () => {
  return (
    <div>
      <div>
        <DataTableWithLoading endpoint='channels' title={'Channels'} columns={columns} />
      </div>
    </div>
  );
};
