import { Link } from "react-router-dom";
import { FaCheckCircle, FaLightbulb, FaStar } from "react-icons/fa";

export default function Conclusiones() {
  return (
    <div className="p-8 bg-bg dark:bg-dark_bg text-text dark:text-dark_text min-h-screen transition-colors duration-300 fade-in">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* === Título principal === */}
        <h1 className="text-3xl font-playfair font-bold text-primary dark:text-dark_primary mb-6 text-center">
          Conclusiones y Recomendaciones
        </h1>

        {/* === Conclusiones === */}
        <section className="bg-bgSoft dark:bg-dark_bgSoft p-6 rounded-xl shadow-soft border border-border dark:border-dark_border">
          <div className="flex items-center gap-2 mb-4">
            <FaCheckCircle className="text-primary dark:text-dark_primary text-2xl" />
            <h2 className="text-2xl font-semibold text-primary dark:text-dark_primary">
              Conclusiones
            </h2>
          </div>

          <div className="space-y-4 text-textDim dark:text-dark_textDim leading-relaxed">
            <p>
              La calidad del software no depende únicamente del cumplimiento de
              requisitos funcionales, sino también de la correcta aplicación de
              normas, modelos, estándares y buenas prácticas que garanticen su
              fiabilidad, mantenibilidad y seguridad.
            </p>
            <p>
              A lo largo de este proyecto, se evidenció la importancia de aplicar
              los marcos internacionales como{" "}
              <strong>ISO/IEC 25010</strong>, <strong>CMMI</strong>,{" "}
              <strong>IEEE 829</strong> y <strong>ISO/IEC 29119</strong>, los cuales
              proporcionan lineamientos claros para la gestión de procesos, el
              aseguramiento de la calidad y la documentación técnica.
            </p>
            <p>
              El modelo de evaluación cuantitativo desarrollado permitió analizar
              objetivamente las características clave del software, evidenciando
              cómo las métricas pueden traducir la calidad en resultados medibles
              y comparables.
            </p>
            <p>
              En conclusión, implementar la gestión de la calidad desde las etapas
              tempranas del desarrollo reduce errores, mejora la satisfacción del
              usuario y contribuye a la sostenibilidad de los proyectos tecnológicos.
            </p>
          </div>
        </section>

        {/* === Recomendaciones === */}
        <section className="bg-bgSoft dark:bg-dark_bgSoft p-6 rounded-xl shadow-soft border border-border dark:border-dark_border">
          <div className="flex items-center gap-2 mb-4">
            <FaLightbulb className="text-primary dark:text-dark_primary text-2xl" />
            <h2 className="text-2xl font-semibold text-primary dark:text-dark_primary">
              Recomendaciones
            </h2>
          </div>

          <ul className="list-disc ml-6 space-y-3 text-textDim dark:text-dark_textDim leading-relaxed">
            <li>
              Implementar un <strong>sistema de gestión de calidad del software</strong>{" "}
              basado en normas internacionales.
            </li>
            <li>
              Fomentar la <strong>capacitación continua</strong> del equipo de desarrollo y QA
              en estándares como ISO/IEC 29119, CMMI y IEEE.
            </li>
            <li>
              Utilizar métricas cuantitativas para{" "}
              <strong>evaluar objetivamente</strong> los resultados de cada fase del ciclo
              de vida.
            </li>
            <li>
              Adoptar herramientas automatizadas para la{" "}
              <strong>gestión de pruebas y documentación</strong>.
            </li>
            <li>
              Integrar la calidad como un valor cultural dentro de la organización y no
              solo como una etapa técnica.
            </li>
            <li>
              Realizar auditorías periódicas que aseguren la mejora continua y el
              cumplimiento de las políticas de calidad.
            </li>
          </ul>
        </section>

        {/* === Mensaje final === */}
        <section className="bg-primary/10 dark:bg-dark_primary/10 border border-primary/30 dark:border-dark_primary/30 p-6 rounded-xl text-center shadow-soft">
          <div className="flex justify-center mb-3">
            <FaStar className="text-primary dark:text-dark_primary text-3xl" />
          </div>
          <h3 className="text-2xl font-playfair font-semibold text-primary dark:text-dark_primary mb-3">
            “La calidad del software no se prueba al final, se construye desde el principio.”
          </h3>
          <p className="text-textDim dark:text-dark_textDim max-w-3xl mx-auto leading-relaxed">
            Este aplicativo demuestra que los principios de calidad pueden aplicarse de
            manera estructurada y medible, fortaleciendo tanto la formación académica
            como el desempeño profesional en entornos educativos y empresariales.
          </p>
        </section>

        {/* === Botón de retorno === */}
        <div className="flex justify-end">
          <Link to="/" className="btn-neutral">
            ← Volver al inicio
          </Link>
        </div>
      </div>
    </div>
  );
}
