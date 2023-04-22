import User from "../models/user";

class Users {
   static async signUp(req, res) {
      const { name, username, email, password } = req.body;

      if (!email || !password) {
         return res
            .status(400)
            .send({ message: "Incorrect email or password " });
      }
      const isuserExist = await User.findOne({ where: { email } });

      if (isuserExist) {
         isuserExist.email == email &&
            res.status(409).send({
               message: "User already exists",
            });
      }

      if (email && !isuserExist) {
         return User.create({
            name,
            username,
            email,
            password,
         })
            .then((userData) => {
               return res.status(201).send({
                  success: true,
                  message: "User successfully created",
                  userData,
               });
            })
            .catch((error) => console.error("error", error));
      }
   }
}

module.exports = Users;
