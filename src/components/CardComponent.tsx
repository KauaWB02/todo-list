import * as React from 'react';
import {Iactivity} from '../interfaces/activity';

function validationData(date: string) {
  let validation: boolean = true;
  const diaAtual = new Date();
  
  let arrayData: Array<string> = date.split('/');
  
  let dia = Number(arrayData[0]) - 1;
  let diaAtividade = new Date(`${arrayData[2]}-${arrayData[1]}-${String(dia)}`);

  if (diaAtual > diaAtividade) {
    console.log(diaAtual);
    console.log(diaAtividade);
    validation = false;
  }

  return validation;
}

export default function CardComponent({ID, TITLE, DATE, DESCRIPTION}: Iactivity): React.ReactElement {
  return (
    <div
      key={ID}
      className='col-4'>
      {validationData(DATE) ? (
        <div
          className='card text-bg-primary mb-3'
          style={{maxWidth: '18rem'}}>
          <div className='card-header'>{DATE}</div>
          <div className='card-body'>
            <h5 className='card-title'>{TITLE}</h5>
            <p className='card-text'>{DESCRIPTION}</p>
          </div>
        </div>
      ) : (
        <div
          className='card text-bg-danger mb-3'
          style={{maxWidth: '18rem'}}>
          <div className='card-header'>{DATE}</div>
          <div className='card-body'>
            <h5 className='card-title'>{TITLE}</h5>
            <p className='card-text'>{DESCRIPTION}</p>
          </div>
        </div>
      )}
    </div>
  );
}
