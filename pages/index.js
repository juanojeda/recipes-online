import React from "react";
import Link from "next/link";

export default () => (
  <ul>
    <li>
      <Link href="/recipes">
        <a>Recipes</a>
      </Link>
    </li>
    <li>
      <Link href="/add-recipe">
        <a>Add a recipe</a>
      </Link>
    </li>
  </ul>
);
