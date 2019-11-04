import React from 'react';
import { FormControl, Select, MenuItem } from '@material-ui/core';
type ListCellProps = {
  data: string[];
};
export const ListCell: React.FC<ListCellProps> = ({ data }: ListCellProps) => {
  const value = data.length > 0 ? data[0] : 'unknown';
  return (
    <FormControl>
      <Select value={value} style={{ fontSize: 'inherit' }}>
        {data.map((item, index) => (
          <MenuItem key={index} value={item}>
            {item}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
