export const people = [
  {
    id: "0",
    name: "young jae",
    age: 18,
    gender: "male",
  },
  {
    id: "1",
    name: "junu",
    age: 18,
    gender: "male",
  },
  {
    id: "2",
    name: "Jisu",
    age: 18,
    gender: "female",
  },
  {
    id: "3",
    name: "sang hyn",
    age: 18,
    gender: "male",
  },
  {
    id: "4",
    name: "ungsub",
    age: 18,
    gender: "male",
  },
  {
    id: "5",
    name: "sujin",
    age: 18,
    gender: "male",
  },
];

export const getById = (id) => {
  const filteredPeople = people.filter((person) => id === people.id);
  return filteredPeople[0];
};
