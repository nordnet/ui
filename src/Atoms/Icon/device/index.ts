import camera from './camera';
import cookies from './cookies';
import Delete from './delete';
import desktop from './desktop';
import forward from './forward';
import mobile from './mobile';
import modeDark from './modeDark';
import modeLight from './modeLight';
import rewind from './rewind';
import scanQR from './scanQR';
import sound from './sound';
import tabDefault from './tabDefault';
import userIdFace from './userIdFace';
import userIdTouch from './userIdTouch';

export default {
  ...camera,
  ...cookies,
  ...Delete,
  ...desktop,
  ...forward,
  ...mobile,
  ...modeDark,
  ...modeLight,
  ...rewind,
  ...scanQR,
  ...sound,
  ...tabDefault,
  ...userIdFace,
  ...userIdTouch,
};
