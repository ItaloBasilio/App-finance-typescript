const { MongoClient } = require('mongodb');

async function renameDatabase() {
    const username = 'devbills'; // Nome de usuário
    const password = 'pass123'; // Senha
    const databaseName = 'test'; // Nome do banco de dados atual
    const newDatabaseName = 'devbills'; // Novo nome do banco de dados
    const uri = `mongodb://${username}:${password}@localhost:27017/?authSource=admin`; // URI de conexão com o MongoDB

    const client = new MongoClient(uri);

    try {
        await client.connect(); // Conectar ao MongoDB

        const adminDb = client.db('admin'); // Acesso ao banco de dados 'admin'

        // Renomear o banco de dados
        await adminDb.command({ renameCollection: `${databaseName}.`, to: `${newDatabaseName}.` });

        console.log(`Banco de dados renomeado de '${databaseName}' para '${newDatabaseName}' com sucesso.`);
    } catch (error) {
        console.error('Erro ao renomear o banco de dados:', error);
    } finally {
        await client.close(); // Fechar conexão com o MongoDB
    }
}

// Chamar a função para renomear o banco de dados
renameDatabase();
