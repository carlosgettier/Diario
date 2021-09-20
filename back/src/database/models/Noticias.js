module.exports = function (sequelize, DataTypes) {
    let alias = "noti"
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            notNull: true
        },
        titulo: {
            type: DataTypes.STRING,
            notNull: true
        },
        desarrollo: {
            type: DataTypes.STRING,
            notNull: true
        },
        bajada: {
            type: DataTypes.STRING,
            notNull: true
        },
        portada: {
            type: DataTypes.INTEGER
        },
        id_imagen_principal: {
            type: DataTypes.INTEGER,
        },
        tipo: {
            type: DataTypes.STRING,
        }




    }
    let config = {
        tableName: "noticias",
        timestamps: false,
        underscored: true
    }
    const noti = sequelize.define(alias, cols, config)
    noti.associate = function (models) {
        noti.belongsTo(models.img, {
            as: "imagenPrincipal",
            foreignKey: "id_imagen_principal"
        })
    }
    return noti
}