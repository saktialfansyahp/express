import express, { Router } from "express";
import testRoutes from "./routes/TesRoute.js";
import db from "./config/Database.js";
import SequelizeStore from "connect-session-sequelize";
import session from "express-session";
import UserRoute from "./routes/UserRoute.js";
import RoleRoute from "./routes/RoleRoute.js";
import AuthRoute from "./routes/AuthRoute.js";
import CategoryRoute from "./routes/CategoryRoute.js";
import ColorRoute from "./routes/ColorRoute.js";
import subCategoryRoute from "./routes/SubCategoryRoute.js";
import ProductRoute from "./routes/ProductRoute.js";
import { adminOnly } from "./middleware/AuthUser.js";
import cors from "cors";

const app = express();
const PORT = 3000;

const sessionStore = SequelizeStore(session.Store);

const store = new sessionStore({
  db: db,
});

(async () => {
  await db.sync();
})();

app.use(
  session({
    secret: "qdqwdhwefcw9812ydugoqdhqwpd91edp",
    resave: false,
    saveUninitialized: true,
    store: store,
    cookie: {
      secure: "auto",
    },
  })
);

const corsConfig = {
  origin: true,
  credentials: true,
};

app.use(cors(corsConfig));
app.options("*", cors(corsConfig));

app.use(express.json());
app.use("/", AuthRoute);
app.use("/api", UserRoute);
app.use("/api/admin", adminOnly, RoleRoute);
app.use("/api/admin", adminOnly, CategoryRoute);
app.use("/api/admin", adminOnly, ColorRoute);
app.use("/api/admin", adminOnly, subCategoryRoute);
app.use("/api", adminOnly, ProductRoute);
app.use("/api", testRoutes);

app.listen(PORT, () => console.log(`Server running on Port ${PORT}`));
