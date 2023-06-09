const { DataTypes } = require("sequelize");
const sequelize = require("../../db");
import Book from "./book";

const User = sequelize.define("User", {
   name: {
      type: DataTypes.STRING,
      allowNull: {
         args: false,
         msg: "Please enter your name",
      },
   },
   username: {
      type: DataTypes.STRING,
      allowNull: {
         args: false,
         msg: "Please enter your username",
      },
   },
   email: {
      type: DataTypes.STRING,
      allowNull: {
         args: false,
         msg: "Please enter your email address",
      },
      unique: {
         args: true,
         msg: "Email already exists",
      },
      validate: {
         isEmail: {
            args: true,
            msg: "Please enter a valid email address",
         },
      },
   },
   password: {
      type: DataTypes.STRING,
      allowNull: {
         args: false,
         msg: "Please enter a password",
      },
      validate: {
         isNotShort: (value) => {
            if (value.length < 8) {
               throw new Error("Password should be at least 8 characters");
            }
         },
      },
   },
});
User.hasMany(Book, { foreignKey: "userId" });
Book.belongsTo(User, { foreignKey: "userId" });

module.exports = User;
