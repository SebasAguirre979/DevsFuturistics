module.exports = (sequelize, DataTypes) => {
    const Usuarios = sequelize.define("usuarios", {

      nombre: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      cedula: DataTypes.STRING,
      
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      pass: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      rol: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      
    },
    {timestamps: false,}
    
    );
      
      
     Usuarios.associate = (models) => {
       Usuarios.hasMany(models.Ventas, {
         onDelete: "cascade",
       });
     };
    return Usuarios;
  };