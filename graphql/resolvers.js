const people = {
    name: "young jae",
    age: 18,
    gender: "male"
}

const resolvers = {
    Query:{
        person:() => people
    }
}

export default resolvers;