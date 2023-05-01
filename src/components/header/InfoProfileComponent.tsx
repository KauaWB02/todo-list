import * as React from 'react';
import Iperfil from '../../interfaces/perfil';

export default function InfoProfileComponent({name, linkImg}: Iperfil): React.ReactElement {
  return (
    <>
        <div className='img float-start'>
          <img
            src={linkImg}
            alt='imagem de perfil do usuário'
          />
        </div>
        <p
          className='text-center text-light float-end fw-bold'
          style={{margin: '2rem', letterSpacing: '1.25px'}}>
          {name}
        </p>
    </>
  );
}
