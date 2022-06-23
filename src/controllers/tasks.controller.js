import Task from "../models/Task";

export const renderTasks = async (req, res) => {
  const tasks = await Task.find().lean();

  res.render("index", { tasks: tasks });
};

// Añadir una tarea
export const createTask = async (req, res) => {
  try {
    const task = Task(req.body);

    await task.save();

    res.redirect("/");
  } catch (error) {
    console.log(error);
  }
};

// Capturar tarea y mondar a inicio despues de actualizar
export const renderTaskEdit = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id).lean();
    res.render("edit", { task: task });
  } catch (error) {
    console.log(error.message);
  }
};

//editar una tarea
export const TaskEdit = async (req, res) => {
  const { id } = req.params;

  await Task.findByIdAndUpdate(id, req.body);

  res.redirect("/");
};

//Eliminar Tarea
export const TaskDelete = async (req, res) => {
  const { id } = req.params;

  await Task.findByIdAndDelete(id);

  res.redirect("/");
};

// habilitar o desabilitar tarea
export const taskToggleDone = async (req, res) => {
  const { id } = req.params;
  const task = await Task.findById(id);
  task.done = !task.done;
  await task.save();

  res.redirect("/");
};