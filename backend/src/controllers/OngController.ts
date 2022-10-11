import crypto from 'crypto';
const connection = require('../database/connection');

module.exports = {
    async index(request:any, response:any) {
        const ongs = await connection('ongs').select('*');

        return response.json(ongs);
    },
    async create(request:any, response:any){
        const { name, email, whatsapp, city, uf } = request.body;

        const id = crypto.randomBytes(4).toString("hex");
    
        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        });
    
        return response.json({ id });
    }
}