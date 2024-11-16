import { html } from 'hono/html';

// Fichier employé dans l'intégralité des vues de l'application en tant que structure HTML de base. 

type Props = {
  children: any;
  pageTitle: string;
  pageHeading: string;
};

export const Layout = ({ children, pageTitle, pageHeading }: Props) => html`
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>${pageTitle}</title>
    </head>
    <body>
      <h1>${pageHeading}</h1>
      ${children}
    </body>
  </html>
`;
