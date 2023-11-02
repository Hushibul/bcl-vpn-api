export const uploadFile = async (req, res, next) => {
  res.status(200).json({ success: true });
  try {
  } catch (err) {
    next(err);
  }
};

export const deleteFile = () => {};
