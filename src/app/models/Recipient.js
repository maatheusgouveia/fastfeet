import Sequelize, { Model } from "sequelize";
import bcrypt from "bcryptjs";

class Recipient extends Model {
	static init(sequelize) {
		super.init(
			{
				name: Sequelize.STRING,
				rua: Sequelize.STRING,
				número: Sequelize.STRING,
				complemento: Sequelize.STRING,
				estado: Sequelize.STRING,
				cidade: Sequelize.STRING,
				CEP: Sequelize.STRING
			},
			{
				sequelize
			}
		);

		return this;
	}

	checkPassword(password) {
		return bcrypt.compare(password, this.password_hash);
	}
}

export default Recipient;
