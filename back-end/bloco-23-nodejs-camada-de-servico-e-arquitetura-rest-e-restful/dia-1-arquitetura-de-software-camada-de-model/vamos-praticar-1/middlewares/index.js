function Message(bol, message) {
  this.error = bol
  this.message = message;
}

const formValidation = (req, res , next) => {
  const {firstName , lastName, email, password } = req.body;
  if (!firstName || !lastName || !email || !password) return res.status(400).json(new Message('Preencha todos os campos'));
  next()
}

const passwordValidation = (req, res , next) => {
  const { password } = req.body;
  if (password.length < 6) return res.status(200).json(new Message(true,"O campo 'password' deve ter pelo menos 6 caracteres"))
  next();
}
module.exports = {
  formValidation,
  passwordValidation
};