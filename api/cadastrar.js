import { supabase } from './supabaseClient';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { nome, empresa, email, telefone, servico, mensagem } = req.body;

        const { data, error } = await supabase
            .from('clientes')
            .insert([{ nome, empresa, email, telefone, servico, mensagem }]);

        if (error) {
            console.error(error);
            return res.status(500).json({ message: 'Erro ao cadastrar cliente.' });
        }

        return res.status(200).json({ message: 'Cadastro realizado com sucesso!' });
    } else {
        res.status(405).json({ message: 'Método não permitido' });
    }
}