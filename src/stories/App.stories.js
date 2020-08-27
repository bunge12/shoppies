import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Search from "../components/Search";
import Results from "../components/Results";
import Nominations from "../components/Nominations";

const data = {
  Search: [
    {
      Title: "Hey Ram",
      Year: "2000",
      imdbID: "tt0222012",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BY2U3ZWVmODEtZDRiNy00YmFiLTg5ZjEtNzU2ZmJhYzQzZGQ0XkEyXkFqcGdeQXVyODEzOTQwNTY@._V1_SX300.jpg",
    },
    {
      Title: "Ram Jaane",
      Year: "1995",
      imdbID: "tt0114231",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTc1MDkzODk2Nl5BMl5BanBnXkFtZTcwNjA2ODgzMQ@@._V1_SX300.jpg",
    },
    {
      Title: "Ram Lakhan",
      Year: "1989",
      imdbID: "tt0098168",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMjI1MjQ4MzIxNl5BMl5BanBnXkFtZTgwMTEzNzg3NjE@._V1_SX300.jpg",
    },
    {
      Title: "Ram Teri Ganga Maili",
      Year: "1985",
      imdbID: "tt0152139",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMjAwNDE4Nzk4NF5BMl5BanBnXkFtZTYwMTUzMjQ5._V1_SX300.jpg",
    },
    {
      Title: "Ram Aur Shyam",
      Year: "1967",
      imdbID: "tt0062177",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMjE0OTY1MjI5NV5BMl5BanBnXkFtZTcwMjAyOTQyMQ@@._V1_SX300.jpg",
    },
    {
      Title: "Ram Dass, Going Home",
      Year: "2017",
      imdbID: "tt6089564",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMjZiNGIzMTMtNTRkMS00YzQxLWJiMjYtNjhhMmFiYmEwYTdkXkEyXkFqcGdeQXVyNjg4MzQ2OTg@._V1_SX300.jpg",
    },
    {
      Title: "Ram Balram",
      Year: "1980",
      imdbID: "tt0081401",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTY0MTk0MTM3MV5BMl5BanBnXkFtZTcwOTIyNDE0MQ@@._V1_SX300.jpg",
    },
    {
      Title: "Dying to Know: Ram Dass & Timothy Leary",
      Year: "2014",
      imdbID: "tt2516424",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTVlMDZiZTItMDRjZC00MGViLTljNWYtODg2YTNkYjUyMTcxXkEyXkFqcGdeQXVyNTM3MDMyMDQ@._V1_SX300.jpg",
    },
    {
      Title: "Ram Dass, Fierce Grace",
      Year: "2001",
      imdbID: "tt0310951",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTY4MTg5MzI2Nl5BMl5BanBnXkFtZTcwMTU5NDkxMQ@@._V1_SX300.jpg",
    },
    {
      Title: "The Sign of the Ram",
      Year: "1948",
      imdbID: "tt0040785",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMGM1MjIyZjktYTFjZi00MGU1LWFlZGYtN2JlYjk0Yzc2ZTAwXkEyXkFqcGdeQXVyNDY3MzU2MDM@._V1_SX300.jpg",
    },
  ],
  totalResults: "129",
  Response: "True",
};
const nomin = [
  {
    Title: "Ram Jaane",
    Year: "1995",
    imdbID: "tt0114231",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTc1MDkzODk2Nl5BMl5BanBnXkFtZTcwNjA2ODgzMQ@@._V1_SX300.jpg",
  },
  {
    Title: "Ram Lakhan",
    Year: "1989",
    imdbID: "tt0098168",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjI1MjQ4MzIxNl5BMl5BanBnXkFtZTgwMTEzNzg3NjE@._V1_SX300.jpg",
  },
  {
    Title: "Ram Teri Ganga Maili",
    Year: "1985",
    imdbID: "tt0152139",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjAwNDE4Nzk4NF5BMl5BanBnXkFtZTYwMTUzMjQ5._V1_SX300.jpg",
  },
  {
    Title: "Ram Aur Shyam",
    Year: "1967",
    imdbID: "tt0062177",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjE0OTY1MjI5NV5BMl5BanBnXkFtZTcwMjAyOTQyMQ@@._V1_SX300.jpg",
  },
];
const nomin5 = [
  {
    Title: "Hey Ram",
    Year: "2000",
    imdbID: "tt0222012",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BY2U3ZWVmODEtZDRiNy00YmFiLTg5ZjEtNzU2ZmJhYzQzZGQ0XkEyXkFqcGdeQXVyODEzOTQwNTY@._V1_SX300.jpg",
  },
  {
    Title: "Ram Jaane",
    Year: "1995",
    imdbID: "tt0114231",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTc1MDkzODk2Nl5BMl5BanBnXkFtZTcwNjA2ODgzMQ@@._V1_SX300.jpg",
  },
  {
    Title: "Ram Lakhan",
    Year: "1989",
    imdbID: "tt0098168",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjI1MjQ4MzIxNl5BMl5BanBnXkFtZTgwMTEzNzg3NjE@._V1_SX300.jpg",
  },
  {
    Title: "Ram Teri Ganga Maili",
    Year: "1985",
    imdbID: "tt0152139",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjAwNDE4Nzk4NF5BMl5BanBnXkFtZTYwMTUzMjQ5._V1_SX300.jpg",
  },
  {
    Title: "Ram Aur Shyam",
    Year: "1967",
    imdbID: "tt0062177",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjE0OTY1MjI5NV5BMl5BanBnXkFtZTcwMjAyOTQyMQ@@._V1_SX300.jpg",
  },
];
storiesOf("App", module)
  .add("SearchBar", () => <Search callback={action("ch")} />)
  .add("Results", () => <Results></Results>)
  .add("Results with search", () => <Results data={data["Search"]}></Results>)
  .add("Nominations Empty", () => <Nominations data={[]}></Nominations>)
  .add("Nominations with under 5 results", () => (
    <Nominations data={nomin}></Nominations>
  ))
  .add("Nominations five results", () => (
    <Nominations data={nomin5}></Nominations>
  ));
