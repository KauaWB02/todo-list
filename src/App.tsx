import './App.css';
import HeaderComponent from './components/HeaderComponent';
import CardComponent from './components/CardComponent';
import React, {useState} from 'react';
import {Iactivity} from './interfaces/activity';

function currentDate() {
  let newDate = new Date();

  let day = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();
  let dateActivities = '';

  if (day < 10) {
    if (month < 10) {
      dateActivities = `0${day}/0${month}/${year}`;
    } else {
      dateActivities = `0${day}/${month}/${year}`;
    }
  } else {
    if (month < 10) {
      dateActivities = `${day}/0${month}/${year}`;
    } else {
      dateActivities = `${day}/${month}/${year}`;
    }
  }

  return dateActivities;
}

function App(): React.ReactElement {
  const styleContainer: object = {
    height: '100vh',
    display: 'flex',
  };

  let [date, setDate] = useState(currentDate());
  let objectSubsti: any[] = [];
  let objectActivity: Array<Iactivity> = [
    {
      id: 0,
      title: 'Teste00',
      date: '01/05/2023',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod excepturi, eveniet fuga soluta nam ipsum molestias perferendis voluptas vero iste alias debitis quis adipisci facere nobis, doloribus dolorem incidunt consequatur.',
    },
    {
      id: 1,
      title: 'Teste01',
      date: '02/05/2023',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod excepturi, eveniet fuga soluta nam ipsum molestias perferendis voluptas vero iste alias debitis quis adipisci facere nobis, doloribus dolorem incidunt consequatur.',
    },
    {
      id: 2,
      title: 'Teste02',
      date: '02/05/2023',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod excepturi, eveniet fuga soluta nam ipsum molestias perferendis voluptas vero iste alias debitis quis adipisci facere nobis, doloribus dolorem incidunt consequatur.',
    },
    {
      id: 3,
      title: 'Teste03',
      date: '02/05/2023',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod excepturi, eveniet fuga soluta nam ipsum molestias perferendis voluptas vero iste alias debitis quis adipisci facere nobis, doloribus dolorem incidunt consequatur.',
    },
    {
      id: 4,
      title: 'Teste04',
      date: '02/05/2023',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod excepturi, eveniet fuga soluta nam ipsum molestias perferendis voluptas vero iste alias debitis quis adipisci facere nobis, doloribus dolorem incidunt consequatur.',
    },
    {
      id: 5,
      title: 'Teste05',
      date: '02/05/2023',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod excepturi, eveniet fuga soluta nam ipsum molestias perferendis voluptas vero iste alias debitis quis adipisci facere nobis, doloribus dolorem incidunt consequatur.',
    },
    {
      id: 6,
      title: 'Teste06',
      date: '02/05/2023',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod excepturi, eveniet fuga soluta nam ipsum molestias perferendis voluptas vero iste alias debitis quis adipisci facere nobis, doloribus dolorem incidunt consequatur.',
    },
    {
      id: 7,
      title: 'Teste07',
      date: '20/04/2023',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod excepturi, eveniet fuga soluta nam ipsum molestias perferendis voluptas vero iste alias debitis quis adipisci facere nobis, doloribus dolorem incidunt consequatur.',
    },
    {
      id: 8,
      title: 'Teste08',
      date: '30/04/2023',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod excepturi, eveniet fuga soluta nam ipsum molestias perferendis voluptas vero iste alias debitis quis adipisci facere nobis, doloribus dolorem incidunt consequatur.',
    },
  ];

  if (date) {
    objectSubsti = objectActivity.filter((e: Iactivity) => {
      return date === e.date;
    });
  }

  console.log(date);

  return (
    <>
      <div
        className='container-fluid'
        style={styleContainer}>
        <div className='m-auto w-75 text-light bg-secondary rounded-2 p-3'>
          <HeaderComponent
            name='Kauã Wadson'
            linkImg='https://images4.alphacoders.com/936/936378.jpg'
            setDate={setDate}
          />
          <div className='row mt-5'>
            {objectSubsti
              ? objectSubsti.map((element: Iactivity) => (
                  <CardComponent
                    key={element.id}
                    id={element.id}
                    title={element.title}
                    date={element.date}
                    description={element.description}
                  />
                ))
              : objectActivity.length > 0 &&
                objectActivity.map((element: Iactivity) => (
                  <CardComponent
                    key={element.id}
                    id={element.id}
                    title={element.title}
                    date={element.date}
                    description={element.description}
                  />
                ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
