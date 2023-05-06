const {getActivities, createActivity, deleteActivity, getActivitiesById, updateActivity, updateActivityCompleted} = require('../models/activityModel');

async function getAll(req, res) {
  let retorno = {
    message: null,
    activity: null,
    status: 200,
  };

  try {
    let activity = await getActivities();

    if (activity.length <= 0) throw {message: 'Não existe atividades para esse usuário, Crie uma atividade', status: 500};

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
    status: 200,
  };

  try {
    const id = req.params.idActivity;
    let activity = await getActivitiesById(id);

    if (activity.length <= 0) throw {message: 'Atividade não encontrada, Favor verificar informações!', status: 500};

    retorno.message = 'Atividade encontrada.';
    retorno.activity = activity[0];
  } catch (error) {
    retorno.message = `${error.message}`;
    retorno.status = error.status;
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
    let activity = await createActivity(title, description, date);

    if (activity.affectedRows > 0) {
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

async function deleteAc(req, res) {
  let retorno = {
    message: null,
    status: 200,
  };

  try {
    let id = req.params.idActivity;
    let activity = await deleteActivity(id);

    if (activity.affectedRows <= 0) {
      throw {
        message: 'Atividade não encontrada, favor verificar dados informados!',
        status: 500,
      };
    }
    retorno.message = 'Atividade excluida com sucesso!';
  } catch (error) {
    retorno.message = `${error.message}`;
    retorno.status = error.status;
  } finally {
    res.status(retorno.status).send(retorno);
  }
}

async function update(req, res) {
  let retorno = {
    message: null,
    status: 200,
  };

  try {
    const id = req.params.idActivity;
    const {TITLE, DESCRIPTION, DATE} = req.body;
    let activity = await getActivitiesById(id);

    if (activity.length <= 0) throw {message: 'Atividade não encontrada, Favor verificar informações!', status: 500};

    let activityObject = activity[0];
    activityObject.TITLE = TITLE || activityObject.TITLE;
    activityObject.DESCRIPTION = DESCRIPTION || activityObject.DESCRIPTION;
    activityObject.DATE = DATE || activityObject.DATE;

    let updatedActivity = await updateActivity(id, activityObject.TITLE, activityObject.DESCRIPTION, activityObject.DATE);

    if (updatedActivity.affectedRows === 1) {
      retorno.message = 'Atividade atualizada com sucesso!';
      retorno.activity = activityObject;
    }
  } catch (error) {
    retorno.message = `${error.message}`;
    retorno.status = error.status;
  } finally {
    res.status(retorno.status).send(retorno);
  }
}

async function activityCompleted(req, res) {
  let retorno = {
    message: null,
    status: 200,
  };

  try {
    const id = req.params.idActivity;
    const isComplete = req.query.isComplete;

    let activityComplete = await updateActivityCompleted(isComplete, id);

    if (activityComplete.affectedRows <= 0) {
      throw {
        message: 'Atividade não encontrada, favor verificar dados informados!',
        status: 500,
      };
    }
    retorno.message = 'Atividade completa!';
  } catch (error) {
    console.log(error);
    retorno.message = `${error.message}`;
    retorno.status = error.status;
  } finally {
    res.status(retorno.status).send(retorno);
  }
}

module.exports = {
  getAll,
  getById,
  create,
  update,
  deleteAc,
  activityCompleted,
};
