import app from "./server";
import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
