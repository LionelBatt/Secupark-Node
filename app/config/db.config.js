module.exports = {
    HOST: "ec2-52-50-171-4.eu-west-1.compute.amazonaws.com",
    PORT:"5432",
    USER: "dexllelntpcczq",
    PASSWORD: "b4814b36a5daa9ca2bbda9219f6898c63dfd67fb3702e20a71fe6c7dbf212149",
    DB: "d6enaknl10bqc0",
    dialect: "postgres",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};