import * as React from 'react';
import { Iactivity } from '../interfaces/activity';



function validationData(date: string) {
  let validation: boolean = true;
  const diaAtual = new Date();
  let arrayData: Array<string> = date.split('/');

  let diaAtividade = new Date(`${arrayData[2]}/${arrayData[1]}/${arrayData[0]}`);

  if (diaAtual > diaAtividade) {
    validation = false;
  }

  return validation;
}

export default function CardComponent({id,title, date, description}: Iactivity): React.ReactElement {
  return (
    <div key={id} className='col-4'>
      {validationData(date) ? (
        <div
          className='card text-bg-primary mb-3'
          style={{maxWidth: '18rem'}}>
          <div className='card-header'>{date}</div>
          <div className='card-body'>
            <h5 className='card-title'>{title}</h5>
            <p className='card-text'>{description}</p>
          </div>
        </div>
      ) : (
        <div
          className='card text-bg-danger mb-3'
          style={{maxWidth: '18rem'}}>
          <div className='card-header'>{date}</div>
          <div className='card-body'>
            <h5 className='card-title'>{title}</h5>
            <p className='card-text'>{description}</p>
          </div>
        </div>
      )}
    </div>
  );
}
