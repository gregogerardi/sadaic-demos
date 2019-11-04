import React from 'react';
import YouTubeIcon from '@material-ui/icons/YouTube';
import NotInterestedIcon from '@material-ui/icons/NotInterested';
import spotify from '../spotify.svg';

import { green, red } from '@material-ui/core/colors';
import { DataTableWithLoading } from './DataTableWithLoading';
import { ListCell } from './ListCell';
import { Button } from '@material-ui/core';
import { MUIDataTableColumn, MUIDataTableOptions } from 'mui-datatables';

const columns: MUIDataTableColumn[] = [
  {
    name: 'recognicionTimestampUtc',
    label: 'Time of recognition UTC',
    options: {
      filter: true,
      sort: true,
    },
  },
  {
    name: 'channel',
    label: 'Channel',
    options: {
      filter: true,
      sort: true,
    },
  },
  {
    name: 'confidenceScore',
    label: 'Confidence Score',
    options: {
      filter: true,
      customBodyRender: (value: any) => {
        return <div style={{ color: value > 90 ? green[400] : red[400] }}>{value}</div>;
      },
    },
  },
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
      customBodyRender: (value: any) => {
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
      customBodyRender: (value: any) => {
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
      customBodyRender: value => {
        return value / 1000;
      },
    },
  },
  {
    name: 'youtubeId',
    label: 'Youtube Link',
    options: {
      sort: true,
      customBodyRender: (value: any) => {
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
      customBodyRender: (value: any) => {
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

export const Recognitions: React.FC = () => {
  const expandSongData = (data: any[]) => {
    return data.map(value => ({ ...value, ...value.songInfo }));
  };
  return (
    <div>
      <div>
        <DataTableWithLoading endpoint='recognitions' title={'Recognitions'} columns={columns} dataCb={expandSongData} />
      </div>
    </div>
  );
};
