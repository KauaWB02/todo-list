import * as React from 'react';
import {Iactivity} from '../interfaces/activity';

function validationData(date: string) {
  let validation: boolean = true;
  const diaAtual = new Date();

  let arrayData: Array<string> = date.split('/');

  let dia = Number(arrayData[0]);
  let diaAtividade = new Date(`${arrayData[2]}-${arrayData[1]}-${String(dia)}`);

  if (diaAtividade < diaAtual) {
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
          <div className='card-header row'>
            <p>{DATE}</p>

            <div className='d-flex justify-content-between'>
              <button className='btn btn-warning'>Excluir</button>
              <button className='btn btn-success'>Concluir</button>
            </div>
          </div>
          <div className='card-body'>
            <h5 className='card-title'>{TITLE}</h5>
            <p className='card-text'>{DESCRIPTION}</p>
          </div>
        </div>
      ) : (
        <div
          className='card text-bg-danger mb-3'
          style={{maxWidth: '18rem'}}>
          <div className='card-header'>
            <p>{DATE}</p>

            <div className='d-flex justify-content-between'>
              <button className='btn btn-warning'>Excluir</button>
              <button className='btn btn-success'>Concluir</button>
            </div>
          </div>
          <div className='card-body'>
            <h5 className='card-title'>{TITLE}</h5>
            <p className='card-text'>{DESCRIPTION}</p>
          </div>
        </div>
      )}
    </div>
  );
}
