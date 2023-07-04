import bcrypt from "bcrypt";

export const validateUser = async (
  db_user: {
    id: number;
    username: string;
    password: string;
  },
  password: string | undefined
) => {
  if (!db_user) {
    return null;
  }
  if (password) {
    const match = await bcrypt.compare(password, db_user.password);
    if (match) {
      const user = { id: String(db_user.id), name: db_user.username };
      return user;
    }
  }
  return null;
};
