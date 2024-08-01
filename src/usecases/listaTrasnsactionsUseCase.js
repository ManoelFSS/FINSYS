import { trasnsactionsRepositoryInMemory } from "../repositories/trasnsactionsRepositoryInMemory.js";

const execute = () => {
    const trasnsactionsRepository = new trasnsactionsRepositoryInMemory();

    const trasnsactions = trasnsactionsRepository.findALL();
    return trasnsactions;
}

export { execute }