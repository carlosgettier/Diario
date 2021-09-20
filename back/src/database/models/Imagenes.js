module.exports = function (sequelize, DataTypes) {
    let alias = "img"
    let cols = {
        idimg: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,

        },

        nombre: {
            type: DataTypes.STRING,
            notNull: true
        },
        idNoticia: {
            type: DataTypes.INTEGER,
            notNull: true
        },
        data: {
            type: DataTypes.INTEGER,
            notNull: true
        }



    }
    let config = {
        tableName: "imagenes",
        timestamps: false,
        underscored: false
    }
    const img = sequelize.define(alias, cols, config)
    img.associate = function (models) {
        img.hasOne(models.noti, {
            as: "noticia_de_esta_imagen",
            foreignKey: "id_imagen_principal"
        })
    }

    return img
}