import Head from "next/head";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import styles from "../styles/Home.module.css";

export default function EditTask() {
  const [task, setTask] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const router = useRouter();
  const { taskId } = router.query;
  const APIBaseUrl = "http://localhost:3000/api/v1/tasks";

  useEffect(() => {
    if (taskId) {
      getTask();
    }
  }, [taskId]);

  const getTask = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${APIBaseUrl}/${taskId}`, {
        method: "GET",
      });
      const data = await response.json();
      setTask(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const editTask = async (event) => {
    try {
      event.preventDefault();
      const updatedTaskName = event.target.taskNameInput.value;
      const updatedCompletedStatus = event.target.taskStatusInput.checked;
      await fetch(`${APIBaseUrl}/${taskId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        redirect: "follow",
        referrerPolicy: "no-referrer",
        body: JSON.stringify({
          name: updatedTaskName,
          completed: updatedCompletedStatus,
        }),
      });
      alert("Task has been updated!");
      router.push("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Edit | Task Manager</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={`${styles.main} max-w-3xl mx-auto`}>
        <div className="task-action-wrapper mb-8 w-full">
          <div className="p-6 bg-white rounded-lg border border-gray-200 shadow-md">
            <h4 className="text-3xl font-bold tracking-wide text-gray-900 text-center mb-4">
              Edit Task
            </h4>

            <form className="w-full" onSubmit={editTask}>
              <div className="mb-6">
                <label
                  htmlFor="taskNameInput"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Task Name
                </label>
                <input
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                  defaultValue={task?.name}
                  aria-label="Task name"
                  required
                  name="taskNameInput"
                  id="taskNameInput"
                />
              </div>

              <div className="flex items-center mb-4">
                <input
                  name="taskStatusInput"
                  id="taskStatusInput"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  defaultChecked={task?.completed}
                />
                <label
                  htmlFor="taskStatusInput"
                  className="ml-2 text-base font-medium text-gray-900"
                >
                  Completed
                </label>
              </div>

              <div className="w-full text-center">
                <button
                  className="bg-blue-600 hover:bg-blue-900 text-sm text-white py-2 px-3 rounded"
                  type="submit"
                >
                  Update Task
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
