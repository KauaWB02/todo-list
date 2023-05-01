import * as React from 'react';
import ModalComponent from '../ModalComponent';

export default function ButtonsComponent(): React.ReactElement {
  return (
    <div className='mx-auto mt-4'>
      <ModalComponent />
      <button className='btn btn-warning'>Logout</button>
    </div>
  );
}
