//npm install sequelize
//npm install pg-hstore pg
const Sequelize = require('sequelize')
const driver = new Sequelize(
    'heroes',
    'luan',
    'luan',
    {
        host: '192.168.100.19',
        dialect: 'postgres',
        quoteIdentifiers: false,
        operatorsAliases: false
    }
)

async function main()
{
    const Herois = driver.define('heroes',{
        id:{
            type:Sequelize.INTEGER,
            required: true,
            primaryKey: true,
            autoIncrement: true
        },
        nome:{
            type:Sequelize.STRING,
            required: true
        },
        poder:{
            type:Sequelize.STRING,
            require: true
        }
    },{
        tableName: 'TB_HEROIS',
        freezeTableName: false,
        timestamps: false
    })

    await Herois.sync()
    //await Herois.create({
    //    nome: 'Lanterna Verde',
    //    poder: 'Anel'
    //})
    const result = await Herois.findAll({ 
        raw: true, 
        attributes: ['nome'] 
    })
    console.log('Result:', result)
}

main()
