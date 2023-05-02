const {getActivities, createActivity} = require('../models/activityModel');

async function getAll(req, res) {
  let retorno = {
    message: null,
    activity: null,
    status: 200,
  };

  try {
    let activity = await getActivities();

    retorno.message = 'Todas as atividades do usuário';
    retorno.activity = activity;
  } catch (error) {
    retorno.message = `${error.message}`;
    retorno.status = error.status;
  } finally {
    res.status(retorno.status).send(retorno);
  }
}

async function getById(req, res) {
  let retorno = {
    message: null,
    produtos: null,
    status: 200,
  };

  try {
  } catch (error) {
    if (error.sqlMessage) {
      retorno.message = `Erro critico!, caso o erro persista entre em contato com administrador!`;
      retorno.status = 500;
    } else {
      retorno.message = `${error.message}`;
      retorno.status = error.status;
    }
    console.log(error);
  } finally {
    res.status(retorno.status).send(retorno);
  }
}

async function create(req, res) {
  let retorno = {
    message: null,
    activity: null,
    status: 200,
  };

  try {
    let {title, description, date} = req.body;
    let [activity] = await createActivity(title, description, date);

    if(activity.affectedRows > 0){
      retorno.message = 'Atividade criada com sucesso!';
      retorno.activity = req.body;
    }
  } catch (error) {
    retorno.message = `${error.message}`;
    retorno.status = error.status;
  } finally {
    console.log(retorno);
    res.status(retorno.status).send(retorno);
  }
}

async function update(req, res) {
  res.status(200).send('Atualização');
}

module.exports = {
  getAll,
  getById,
  create,
  update,
};
