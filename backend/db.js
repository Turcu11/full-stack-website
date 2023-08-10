import { Sequelize, DataTypes } from "sequelize";

const db = {
  NAME: "instalatii",
  USERNAME: "root",
  PASSWORD: "",

  options: {
    dialect: "mysql",
    timezone: "+03:00",
    host: "127.0.0.1",
    port: 3306,
    logging: function (sql) {
      console.log(sql);
    },
  },
};

export const sequelize = new Sequelize(
  db.NAME,
  db.USERNAME,
  db.PASSWORD,
  db.options
);

export const Instalator = sequelize.define(
  "Instalatori",
  {
    nume: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    prenume: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    paranoid: true,
  }
);

export const Departament = sequelize.define(
  "Departament",
  {
    nume: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    descriere: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    paranoid: true,
  }
);

export const Contact = sequelize.define(
  "Contact",
  {
    nume: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    prenume: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    compania: {
      type: DataTypes.STRING,
      allowNull: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    mesaj: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
  },
  {
    sequelize,
    freezeTableName: true,
    paranoid: true,
  }
);


Departament.hasMany(Instalator);
Instalator.belongsTo(Departament);
