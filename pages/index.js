import React from "react";
import { Link } from "../routes";

export default () => (
  <ul>
    <li>
      <Link route="/recipes">
        <a>Recipes</a>
      </Link>
    </li>
    <li>
      <Link route="/add-recipe">
        <a>Add a recipe</a>
      </Link>
    </li>
  </ul>
);
