import css from "./Header.module.css"

export default function Header() {
    return (
      <header className={css.header}>
        <div className={css.container}>
          <nav className={css.nav}>
            <a
              className={css.navLogo}
              href="./index.html"
              aria-label="Site logo"
            >
              <img
                src="./img/logo.svg"
                alt="GoIt logo"
                className={css.navLogoIcon}
                width="100"
                height="30"
              />
            </a>
            <div className={css.headerTitle}>
              <p className={css.headerTitleGradient}>Advanced JS. HW-3.</p>
              <p className={css.headerText}>
                HTTP requests. Interaction with Backend.
              </p>
            </div>
          </nav>
        </div>
      </header>
    );
}