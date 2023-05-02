import './App.css';
import HeaderComponent from './components/HeaderComponent';
import CardComponent from './components/CardComponent';
import React, {useState} from 'react';
import {Iactivity} from './interfaces/activity';
import Axios from 'axios';

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
  let [objectActivity, setObjectActivity] = useState([]);
  let [date, setDate] = useState(currentDate());

  const getAllActivities = async () => {
    const response = await Axios.get('http://localhost:8080/activity');

    const data = response.data;

    setObjectActivity(data.activity);
  };

  React.useEffect(function () {
    getAllActivities();
  }, []);

  let objectSubsti = objectActivity.filter((e: Iactivity) => {
    return date === e.DATE;
  });

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
                    key={element.ID}
                    ID={element.ID}
                    TITLE={element.TITLE}
                    DATE={element.DATE}
                    DESCRIPTION={element.DESCRIPTION}
                  />
                ))
              : objectActivity.length > 0 &&
                objectActivity.map((element: Iactivity) => (
                  <CardComponent
                    key={element.ID}
                    ID={element.ID}
                    TITLE={element.TITLE}
                    DATE={element.DATE}
                    DESCRIPTION={element.DESCRIPTION}
                  />
                ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
