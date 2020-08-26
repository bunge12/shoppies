import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Search from "../components/Search";
import Results from "../components/Results";

storiesOf("App", module)
  .add("SearchBar", () => <Search callback={action("ch")} />)
  .add("Results", () => <Results></Results>)
  .add("Results with search", () => <Results></Results>);
