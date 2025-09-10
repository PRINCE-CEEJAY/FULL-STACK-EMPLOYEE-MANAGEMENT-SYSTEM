export const createAdmin = (req, res) => {};
export const createUser = (req, res) => {
  const data = req.body;
  res.json({ success: true, message: "user created successfully", data: data });
};
export const readUser = (req, res) => {};
export const updateUser = (req, res) => {};
export const removeUser = (req, res) => {};
