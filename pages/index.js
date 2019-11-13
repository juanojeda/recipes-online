import React from "react";
import Link from "next/link";

export default () => (
  <ul>
    <li>
      <Link href="/RecipeEditor" as="/editor">
        <a>editor</a>
      </Link>
    </li>
  </ul>
);
