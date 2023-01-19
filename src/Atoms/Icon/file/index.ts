import attachment from './attachment';
import document from './document';
import factSheet from './factSheet';
import files from './files';
import image from './image';
import pdf from './pdf';
import print from './print';
import slideDeck from './slideDeck';
import spreadsheet from './spreadsheet';
import transcript from './transcript';

export default {
  ...attachment,
  ...document,
  ...factSheet,
  ...files,
  ...image,
  ...pdf,
  ...print,
  ...slideDeck,
  ...spreadsheet,
  ...transcript,
};
