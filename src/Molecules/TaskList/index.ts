import TaskListComponent from './TaskList';
import DrawerTitle from './DrawerTitle';

type ExportedType = typeof TaskListComponent & { DrawerTitle: typeof DrawerTitle };
const TaskList = TaskListComponent as ExportedType;
TaskList.DrawerTitle = DrawerTitle;

export default TaskList;
