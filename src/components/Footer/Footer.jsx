import css from "./Footer.module.css"

export default function Footer() {
    return (
      <footer className={css.footer}>
        <div className={css.container}>
          <p className={css.footerDesc}>
            <a
              className={css.mainTitleLink}
              href="https://github.com/goitacademy/vanilla-app-template"
              target="_blank"
              rel="noopener noreferrer"
            >
              Template
            </a>
            made with ✨ by
            <a
              className={css.footerLink}
              href="https://goit.global/ua/"
              target="_blank"
              rel="noopener noreferrer"
            >
              GoIT team
            </a>
          </p>
        </div>
      </footer>
    );
}