import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";
import clsx from "clsx";
import React, { useState } from "react";
import { FaBook, FaLink, FaCheck } from "react-icons/fa";

export default function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className={clsx("container", styles.container)}>
        <div>
          <h1>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </h1>
        </div>
        <div className={clsx("btncontainer", styles.btncontainer)}>
          
          <button className={clsx("doc", styles.doc)}>
            <FaBook />
            ㅤDocumentation
          </button>
          <button className={clsx("btn", styles.btn)}>
            <FaLink />
            ㅤQuick start
          </button>
        </div>
        <div className={clsx("copycontainer", styles.copycontainer)}>
<CopiarTexto/>
        </div>

      </div>
    </header>
  );
}

function CopiarTexto() {
  const [copiado, setCopiado] = useState(false);

  const copiarTexto = () => {
    const texto = "npx zumito-cli create project";
    navigator.clipboard
      .writeText(texto)
      .then(() => {
        setCopiado(true);
        setTimeout(() => {
          setCopiado(false);
        }, 2000);
      })
      .catch((error) => {
        console.error("Error al copiar el texto:", error);
      });
  };

  return (
    <button className={clsx("copy", styles.copy)} onClick={copiarTexto}>
      {copiado ? `Comando copiado en el portapapeles` : "> npx zumito-cli create project"}
    </button>
  );
};
