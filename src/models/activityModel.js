const connection = require('../connections/mysqlConnections');

async function getActivities() {
  try {
    const query = 'SELECT ID,TITLE,DESCRIPTION,DATE_FORMAT(DATE,"%d/%m/%Y") AS DATE FROM activity WHERE isDONE <> ?';
    let [activity] = await connection.execute(query, [true]);

    return activity;
  } catch (error) {
    console.log(error);
    throw {
      message: 'Erro critico!, caso o erro persista entre em contato com administrador!',
      status: 500,
    };
  }
}

async function getActivitiesById(id) {
  try {
    const query = 'SELECT ID,TITLE,DESCRIPTION,DATE_FORMAT(DATE,"%d/%m/%Y") AS DATE,ISDONE FROM activity WHERE id = ?';
    let [activity] = await connection.execute(query, [id]);

    return activity;
  } catch (error) {
    console.log(error);
    throw {
      message: 'Erro critico!, caso o erro persista entre em contato com administrador!',
      status: 500,
    };
  }
}

async function createActivity(title, description, date) {
  try {
    const query = 'INSERT activity (TITLE,DESCRIPTION,DATE) VALUES(?,?,?)';
    let [activity] = await connection.execute(query, [title, description, date]);

    return activity;
  } catch (error) {
    console.log(error);
    throw {
      message: 'Erro critico!, caso o erro persista entre em contato com administrador!',
      status: 500,
    };
  }
}

async function deleteActivity(id) {
  try {
    const query = 'DELETE FROM activity WHERE ID = ?';
    let [activity] = await connection.execute(query, [id]);

    return activity;
  } catch (error) {
    console.log(error);
    throw {
      message: 'Erro critico!, caso o erro persista entre em contato com administrador!',
      status: 500,
    };
  }
}

async function updateActivity(id, title, description, date, isDone) {
  try {
    const query = 'UPDATE activity SET TITLE = ?, DESCRIPTION = ?,DATE = ?, isDONE = ? WHERE ID = ? ';
    let activity = await connection.execute(query, [title, description, date, isDone, id]);

    return activity;
  } catch (error) {
    console.log(error);
    throw {
      message: 'Erro critico!, caso o erro persista entre em contato com administrador!',
      status: 500,
    };
  }
}

module.exports = {
  getActivities,
  createActivity,
  deleteActivity,
  getActivitiesById,
  updateActivity,
};
