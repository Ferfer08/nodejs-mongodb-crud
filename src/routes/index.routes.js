import { Router } from "express";

import {
  renderTasks,
  createTask,
  renderTaskEdit,
  TaskEdit,
  TaskDelete,
  taskToggleDone,
} from "../controllers/tasks.controller";

const router = Router();

router.get("/", renderTasks);

router.post("/tasks/add", createTask);

router.get("/tasks/:id/toggleDone", taskToggleDone);

router.get("/tasks/:id/edit", renderTaskEdit);

router.post("/tasks/:id/edit", TaskEdit);

router.get("/tasks/:id/delete", TaskDelete);

export default router;
