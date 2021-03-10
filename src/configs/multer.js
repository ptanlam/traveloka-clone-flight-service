import multer from 'multer';

const excelFileFilter = (req, file, cb) => {
  if (
    // eslint-disable-next-line operator-linebreak
    file.mimetype.includes('excel') ||
    file.mimetype.includes('spreadsheetml')
  ) {
    cb(null, true);
  } else {
    cb('Please upload only excel file.', false);
  }
};

const upload = multer({
  storage: multer.memoryStorage(),
  fileFilter: excelFileFilter,
});

export default upload;
