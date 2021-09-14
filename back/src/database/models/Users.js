module.exports = function (sequelize, DataTypes) {
    let alias = "user"
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            notNull: true
        },
        nombre: {
            type: DataTypes.STRING,
            notNull: true
        },
        email: {
            type: DataTypes.STRING,
            notNull: true
        },
        password: {
            type: DataTypes.STRING,
            notNull: true
        },


    }
    let config = {
        tableName: "usuarios",
        timestamps: false,
        underscored: false
    }
    const user = sequelize.define(alias, cols, config)
    return user
}