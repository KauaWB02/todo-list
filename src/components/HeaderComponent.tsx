import * as React from 'react';
import '../style/headerComponent.css';
import SearchComponent from './SearchComponent';
import InfoProfileComponent from './header/InfoProfileComponent';
import ButtonsComponent from './header/ButtonsComponent';

export default function HeaderComponent(props: any): React.ReactElement {
  return (
    <div className='row'>
      <div className='col-4'>
        <div className='d-flex flex-row justify-content-between mb-2 float-start'>
          <InfoProfileComponent
            name={props.name}
            linkImg={props.linkImg}
          />
        </div>
      </div>
      <div className='col-4'>
        <SearchComponent setDate={props.setDate}/>
      </div>
      <div className='col-4 d-flex'>
        <ButtonsComponent />
      </div>
    </div>
  );
}
