import attachment from './attachment';
import document from './document';
import factSheet from './factSheet';
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
  ...image,
  ...pdf,
  ...print,
  ...slideDeck,
  ...spreadsheet,
  ...transcript,
};
