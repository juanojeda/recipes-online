/**
 * Parameterized Routing with next-route
 *
 * Benefits: Less code, and easily handles complex url structures
 * */
const routes = (module.exports = require("next-routes")());

routes.add({ page: "/index", pattern: "/" });
routes.add({ page: "/editor", pattern: "/add-recipe" });
routes.add({ page: "/recipes", pattern: "/recipes" });
routes.add({ page: "/recipe", pattern: "/recipe" });
