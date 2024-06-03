
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import './styles.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [taskToEdit, setTaskToEdit] = useState(null);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (storedTasks) {
      setTasks(storedTasks);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (name, description) => {
    const newTask = { id: Date.now(), name, description, completed: false };
    setTasks([...tasks, newTask]);
  };

  const toggleComplete = (taskId) => {
    setTasks(tasks.map(task => task.id === taskId ? { ...task, completed: !task.completed } : task));
  };

  const deleteTask = (taskId) => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      setTasks(tasks.filter(task => task.id !== taskId));
    }
  };

  const startEditing = (task) => {
    setTaskToEdit(task);
  };

  const editTask = (taskId, name, description) => {
    setTasks(tasks.map(task => task.id === taskId ? { ...task, name, description } : task));
    setTaskToEdit(null);
  };

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <TaskForm addTask={addTask} editTask={editTask} taskToEdit={taskToEdit} />
      <TaskList tasks={tasks} toggleComplete={toggleComplete} deleteTask={deleteTask} startEditing={startEditing} />
    </div>
  );
}

export default App;