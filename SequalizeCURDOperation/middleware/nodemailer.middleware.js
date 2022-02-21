var nodemailer = require("nodemailer");
module.exports = {
  email: (req, res) => {
    let mailTransporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      service: "gmail",
      auth: {
        user: "bhanudaschattar@gmail.com",
        pass: "dnyandeo",
      },
    });

    let mailDetails = {
      from: "bhanudaschattar@gmail.com",
      to: req.body.stud_email, //"dheerajraje122@gmail.com",
      subject: "Welcome mail",
      text: `Hi ${req.body.stud_fname}, Welcome to AFT, Your are successfully registered  `,
    };

    mailTransporter.sendMail(mailDetails, function (err, data) {
      if (err) {
        res.send({ Error: true, data: err });
      } else {
        res.send({
          Error: false,
          message: "Record Inserted and Email sent successfully",
        });
      }
    });
  },
};
