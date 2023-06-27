import CheckListComponent from './CheckList';
import DrawerTitle from './DrawerTitle';

type ExportedType = typeof CheckListComponent & { DrawerTitle: typeof DrawerTitle };
const CheckList = CheckListComponent as ExportedType;
CheckList.DrawerTitle = DrawerTitle;

export default CheckList;
