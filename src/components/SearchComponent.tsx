import * as React from 'react';

export default function SearchComponent(props: any): React.ReactElement {
  let {setDate} = props;
  return (
    <>
      <input
        type='date'
        className='form-control mt-4'
        id='date'
        onChange={(e) => {
          let arrayDate = e.target.value.split('-');

          let dateFormat = `${arrayDate[2]}/${arrayDate[1]}/${arrayDate[0]}`;

          setDate(dateFormat);
        }}
        required
      />
    </>
  );
}
