import { validationResult, body } from "express-validator";

export const validateSchema = [
  //   body("name").isLength({ min: 6 }).withMessage("Name is required."),
  body("username")
    .isLength({ min: 6 })
    .withMessage("Username must contain at least 6 chars."),
  body("email")
    .isLength({ min: 1 })
    .withMessage("Email is required.")
    .isEmail()
    .withMessage("Please provide a valid email address"),
  body("password")
    .isLength({ min: 6, max: 25 })
    .withMessage("Password must be between 8-25 characters long.")
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.* )(?=.*[^a-zA-Z0-9]).{8,}$/,
      "i"
    )
    .withMessage(
      "Password must include one lowercase character, one uppercase character, a number, and a special character."
    ),
  body("confirm")
    .isLength({ min: 1 })
    .withMessage("Confirm password is required.")
    .custom((value, { req, loc, path }) => {
      if (value !== req.body.password) {
        throw new Error("Passwords don't match");
      } else {
        return value;
      }
    })
    .withMessage("Passwords must match."),
];

export const validateRequest = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json(errors);
  }

  next();
};
