import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MUIDataTable, { MUIDataTableColumnOptions, MUIDataTableOptions, MUIDataTableColumn, MUIDataTableMeta } from 'mui-datatables';
import { SERVER_URL } from '../properties';
import { FormControlLabel, Switch, Button, FormControl, Select, MenuItem } from '@material-ui/core';
import { green, red } from '@material-ui/core/colors';
import YouTubeIcon from '@material-ui/icons/YouTube';
import NotInterestedIcon from '@material-ui/icons/NotInterested';
import spotify from '../spotify.svg';
import { ListCell } from './ListCell';
import { DataTableWithLoading } from './DataTableWithLoading';
export const songColumns: MUIDataTableColumn[] = [
  {
    name: 'title',
    label: 'Title',
    options: {
      filter: true,
      sort: true,
    },
  },
  {
    name: 'artists',
    label: 'Artists',
    options: {
      sort: false,
      customBodyRender: (value: any, tableMeta: MUIDataTableMeta, updateValue: (s: any, c: any, p: any) => any) => {
        if (value != '') {
          return <ListCell data={value} />;
        }
        return <NotInterestedIcon color='secondary' />;
      },
    },
  },
  {
    name: 'genres',
    label: 'Genres',
    options: {
      sort: false,
      customBodyRender: (value: any, tableMeta: MUIDataTableMeta, updateValue: (s: any, c: any, p: any) => any) => {
        if (value != '') {
          return <ListCell data={value} />;
        }
        return <NotInterestedIcon color='secondary' />;
      },
    },
  },
  {
    name: 'album',
    label: 'Album',
    options: {
      filter: true,
      sort: true,
    },
  },
  {
    name: 'releaseDate',
    label: 'Release Date',
    options: {
      filter: true,
      sort: true,
    },
  },
  {
    name: 'duration',
    label: 'Duration (secs)',
    options: {
      customBodyRender: (value, tableMeta, updateValue) => {
        return value / 1000;
      },
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
    name: 'youtubeId',
    label: 'Youtube Link',
    options: {
      sort: true,
      customBodyRender: (value: any, tableMeta: MUIDataTableMeta, updateValue: (s: any, c: any, p: any) => any) => {
        if (value != '') {
          const url = `https://www.youtube.com/watch?v=${value}`;
          return (
            <Button target='_blank' href={url}>
              <YouTubeIcon htmlColor={red[600]} />
            </Button>
          );
        }
        return <NotInterestedIcon color='secondary' />;
      },
    },
  },
  {
    name: 'spotifyId',
    label: 'Spotify Link',
    options: {
      sort: true,
      customBodyRender: (value: any, tableMeta: MUIDataTableMeta, updateValue: (s: any, c: any, p: any) => any) => {
        if (value != '') {
          const url = `https://open.spotify.com/track/${value}`;
          return (
            <Button target='_blank' href={url}>
              <div>
                <img src={spotify} width='80%' height='80%' />
              </div>
            </Button>
          );
        }
        return <NotInterestedIcon color='secondary' />;
      },
    },
  },
];

export const Songs: React.FC = () => {
  return (
    <div>
      <DataTableWithLoading endpoint='songs' title={'Songs'} columns={songColumns} />
    </div>
  );
};
