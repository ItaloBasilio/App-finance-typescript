import mongoose from 'mongoose';

export async function setupMongo(): Promise<void>{
    try {
        if(mongoose.connection.readyState === 1){
            console.log('Already connected to DB');
            return;  
        }
        console.log('⏳ Connecting to DB...');
        // console.log(process.env.MONGO_URL);
        await mongoose.connect(process.env.MONGO_URL as string, {
            auth: {
                username: 'devbills',
                password: 'pass123'
            }
        });
        
        console.log('🎲 DB Connected!');
    } catch(error) {
        console.error('Error connecting to DB:', error);
        throw new Error(' ❌ DB not connected.');
    }
}
