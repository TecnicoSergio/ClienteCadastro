import { supabase } from './supabaseClient';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Método não permitido' });
    }

    const { nome, empresa, email, telefone, servico, mensagem } = req.body;

    try {
        const { data, error } = await supabase
            .from('clientes')
            .insert([{ nome, empresa, email, telefone, servico, mensagem }]);

        if (error) {
            console.error('Erro Supabase:', error);
            return res.status(500).json({ message: error.message }); // Mostra erro real
        }

        return res.status(200).json({ message: 'Cadastro realizado com sucesso!', data });
    } catch (err) {
        console.error('Erro interno:', err);
        return res.status(500).json({ message: 'Erro interno no servidor' });
    }
}