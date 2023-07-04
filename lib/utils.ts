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

export const passwordHashGenerator = async () => {
  const saltRounds = 10;
  const password: string | undefined = process.env.TEST_USER_PASSWORD;
  if (password) {
    return bcrypt
      .genSalt(saltRounds)
      .then((salt) => {
        return bcrypt.hash(password, salt);
      })
      .then((hash) => hash);
  } else {
    return false;
  }
};

export const prettyDate = (date: Date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${day}/${month}/${year}`;
};
