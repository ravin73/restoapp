
const {DB_USERNAME,DB_PASSWORD} =process.env;

export const connectionStr="mongodb+srv://"+DB_USERNAME+":"+DB_PASSWORD+"@cluster0.rf4fz.mongodb.net/restoDB?retryWrites=true&w=majority&appName=Cluster0"