import { execute } from "../usecases/listaTrasnsactionsUseCase.js";

const listarTrasnsactions = (req, res) => {
    const trasnsactions = execute()
    return res.status(200).json( trasnsactions );
}

export { listarTrasnsactions };
