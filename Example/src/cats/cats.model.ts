export type CatType = {
    id: string;
    name: string;
    age: number;
    species: string;
    isCute: boolean;
    friends: string[];
};

export const Cat: CatType[] = [
    {
        id: "a",
        name: "blue",
        age: 8,
        species: "Russian Blue",
        isCute: true,
        friends: ["b"],
    },
    {
        id: "b",
        name: "som",
        age: 4,
        species: "Sphynx",
        isCute: true,
        friends: ["a", "c"],
    },
    {
        id: "c",
        name: "nero",
        age: 2,
        species: "cheeze",
        isCute: true,
        friends: ["a"],
    },
];
