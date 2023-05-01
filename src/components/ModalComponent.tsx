import * as React from 'react';
import '../style/headerComponent.css';

function dateFormat(date: string) {}

export default function ModalComponent(): React.ReactElement {
  let [date, setDate] = React.useState('');
  let [title, setTitle] = React.useState('');
  let [description, setDescription] = React.useState('');
  let teste: string = '';

  return (
    <>
      <button
        type='button'
        className='btn btn-info me-2'
        data-bs-toggle='modal'
        data-bs-target='#modalCriateActivity'>
        Criar atividades
      </button>
      <div
        className='modal fade'
        id='modalCriateActivity'
        tabIndex={-1}
        aria-labelledby='exampleModalLabel'
        aria-hidden='true'>
        <div className='modal-dialog'>
          <div className='modal-content bg-dark'>
            <div className='modal-header'>
              <h1
                className='modal-title fs-5'
                id='exampleModalLabel'>
                Planeje atividades para ser mais produtivo e organizado.
              </h1>
            </div>
            <div className='modal-body'>
              <form>
                <div className='mb-3'>
                  <label
                    htmlFor='date'
                    className='form-label'>
                    Data da atividade
                  </label>
                  <input
                    type='date'
                    className='form-control'
                    id='date'
                    onChange={(e) => {
                      let dateArray = e.target.value.split('-');

                      let dateFormat = `${dateArray[2]}/${dateArray[1]}/${dateArray[0]}`;

                      setDate(dateFormat);
                    }}
                    required
                  />
                </div>
                <div className='mb-3'>
                  <label
                    htmlFor='title'
                    className='form-label'>
                    Titulo da atividade
                  </label>
                  <input
                    type='text'
                    className='form-control'
                    id='title'
                    placeholder='Organizar planilha'
                    onChange={(e) => {
                      setTitle(e.target.value);
                    }}
                    required
                  />
                </div>
                <div className='mb-3'>
                  <label
                    htmlFor='description'
                    className='form-label'>
                    Descrição da atividade
                  </label>
                  <textarea
                    className='form-control'
                    id='description'
                    onChange={(e) => {
                      setDescription(e.target.value);
                    }}
                    required></textarea>
                </div>
                <div className='mb-3'>
                  <button
                    type='submit'
                    className='btn btn-success'>
                    Criar
                  </button>
                </div>
              </form>
            </div>
            <div className='modal-footer'>
              <button
                type='button'
                className='btn btn-secondary'
                data-bs-dismiss='modal'>
                Fechar Menu
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
