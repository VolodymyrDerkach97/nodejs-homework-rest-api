const { Contact } = require("../../models/contact");
const { HttpError } = require("../../helpers");

const updateStatusContact = async (req, res) => {
  const { contactId } = req.params;
  const result = await Contact.findByIdAndUpdate(contactId, req.body, {
    new: true,
  });
  if (!result) {
    throw HttpError(404, "Not Found");
  }
  res.status(200);
  res.json({
    code: 200,
    message: "Update status contact",
    data: result,
  });
};

module.exports = updateStatusContact;
