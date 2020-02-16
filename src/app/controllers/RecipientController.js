import * as Yup from "yup";
import Recipient from "../models/Recipient";

class RecipientController {
	async store(req, res) {
		const schema = Yup.object().shape({
			street: Yup.string().required(),
			number: Yup.string().required(),
			additional_information: Yup.string().required(),
			state: Yup.string().required(),
			city: Yup.string().required(),
			postal_code: Yup.string().required()
		});

		if (!(await schema.isValid(req.body))) {
			return res.status(400).json({ error: "Validation failed" });
		}

		const recipient = await Recipient.create(req.body);

		return res.json(recipient);
	}

	async update(req, res) {
		const { id } = req.params;

		const schema = Yup.object().shape({
			street: Yup.string().required(),
			number: Yup.string().required(),
			additional_information: Yup.string().required(),
			state: Yup.string().required(),
			city: Yup.string().required(),
			postal_code: Yup.string().required()
		});

		if (!(await schema.isValid(req.body))) {
			return res.status(400).json({ error: "Validation failed" });
		}

		const recipient = await Recipient.findByPk(id);

		const {
			street,
			number,
			additional_information,
			state,
			city,
			postal_code
		} = await recipient.update(req.body);

		return res.json({
			id,
			street,
			number,
			additional_information,
			state,
			city,
			postal_code
		});
	}
}

export default new RecipientController();
