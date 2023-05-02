const connection = require('../connections/mysqlConnections');

async function getActivities() {
  try {
    const query = 'SELECT ID,TITLE,DESCRIPTION,DATE_FORMAT(DATE,"%d/%m/%Y") AS DATE FROM activity';
    let [activity] = await connection.execute(query);

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
    let activity = await connection.execute(query, [title, description, date]);

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
};
