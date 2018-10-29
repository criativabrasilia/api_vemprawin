"use strict";

const nodemailer = use("nodemailer");

/**
 * Resourceful controller for interacting with contatoes
 */
class ContatoController {
  /**
   * Show a list of all contatoes.
   * GET contatoes
   */
  async index({ request, response, view }) {}

  /**
   * Render a form to be used for creating a new contato.
   * GET contatoes/create
   */
  async create({ request, response, view }) {}

  /**
   * Create/save a new contato.
   * POST contatoes
   */
  async store({ request, response }) {}

  /**
   * Display a single contato.
   * GET contatoes/:id
   */
  async show({ params, request, response, view }) {}

  /**
   * Render a form to update an existing contato.
   * GET contatoes/:id/edit
   */
  async edit({ params, request, response, view }) {}

  /**
   * Update contato details.
   * PUT or PATCH contatoes/:id
   */
  async update({ params, request, response }) {}

  /**
   * Delete a contato with id.
   * DELETE contatoes/:id
   */
  async destroy({ params, request, response }) {}

  // Enviar email
  async contato({ request }) {
    try {
      const dados = request.all();
      nodemailer.createTestAccount((err, account) => {
        // create reusable transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport({
          host: "smtp.umbler.com",
          port: 587,
          secure: false, // true for 465, false for other ports
          auth: {
            user: "contato@vemprawin.com.br", // generated ethereal user
            pass: "2ct@cfBRASIL" // generated ethereal password
          }
        });

        // setup email data with unicode symbols
        let mailOptions = {
          from: `${dados.nome} <contato@vemprawin.com.br>`, // sender address
          to: "contato@vemprawin.com.br", // list of receivers
          replyTo: `${dados.email}`,
          subject: "Contato do site", // Subject line
          html: `${dados.mensagem}` // html body
        };

        // send mail with defined transport object
        transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
            console.log(error);
          }
        });
      });
      return {
        msg:
          "Muito obrigado pelo seu contato, nossa equipe de encantadores entrará em contato o mais rápido possível, tudo bem? É só aguardar ;)",
        status: 1
      };
    } catch (err) {
      return {
        msgErro: err,
        msg:
          "Erro ao enviar mensagem, favor preencher todos os campos e tentar novamente!",
        status: 0
      };
    }
  }
}

module.exports = ContatoController;
