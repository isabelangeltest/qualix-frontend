import { useState } from "react";
import { Link } from "react-router-dom";

export default function Estandares() {
    const [open, setOpen] = useState(null);
    const toggle = (index) => setOpen(open === index ? null : index);

    return (
        <div className="p-8 bg-bg dark:bg-dark_bg min-h-screen text-text dark:text-dark_text transition-colors duration-300">
            <div className="max-w-5xl mx-auto">
                <h1 className="text-3xl font-playfair font-bold text-primary dark:text-dark_primary mb-6">
                    Estándares de Calidad del Software
                </h1>

                <p className="mb-8 text-lg text-textDim dark:text-dark_textDim">
                    Los <strong>estándares de calidad del software</strong> establecen
                    directrices técnicas y metodológicas que orientan el desarrollo,
                    documentación, validación y mantenimiento del software. Su objetivo es
                    garantizar que los productos y procesos cumplan niveles aceptables de
                    eficiencia, fiabilidad y usabilidad, promoviendo la uniformidad en la
                    industria del software.
                </p>

                {/* === LISTADO DE ESTÁNDARES === */}
                {[
                    {
                        id: 1,
                        title: "🧾 IEEE 829 — Documentación de Pruebas de Software",
                        link: "https://standards.ieee.org/standard/829-2008.html",
                        content: (
                            <>
                                <p>
                                    El estándar <strong>IEEE 829</strong> define los documentos
                                    necesarios durante el proceso de pruebas, asegurando
                                    trazabilidad, control y repetibilidad en la ejecución de casos
                                    de prueba.
                                </p>
                                <p className="font-medium mt-3">🔹 Documentos clave:</p>
                                <ul className="list-disc pl-6 space-y-1">
                                    <li>Plan de pruebas</li>
                                    <li>Diseño de casos de prueba</li>
                                    <li>Registro de resultados</li>
                                    <li>Informe de incidencias</li>
                                </ul>
                                <p className="font-medium mt-3">💡 Ejemplo:</p>
                                <p>
                                    En un proyecto QA, el equipo sigue IEEE 829 para documentar
                                    criterios de aceptación, pasos de prueba y resultados
                                    obtenidos.
                                </p>
                                <p className="font-medium mt-3">✅ Ventajas:</p>
                                <ul className="list-disc pl-6">
                                    <li>Mejora la trazabilidad y la comunicación del equipo QA.</li>
                                    <li>Facilita auditorías y revisiones técnicas.</li>
                                </ul>
                            </>
                        ),
                    },
                    {
                        id: 2,
                        title: "📜 IEEE 830 — Especificación de Requisitos de Software",
                        link: "https://standards.ieee.org/standard/830-1998.html",
                        content: (
                            <>
                                <p>
                                    El estándar <strong>IEEE 830</strong> establece una guía para
                                    elaborar el <strong>documento de requisitos (SRS)</strong>,
                                    describiendo funciones, restricciones y objetivos del sistema.
                                </p>
                                <p className="font-medium mt-3">🔹 Componentes del SRS:</p>
                                <ul className="list-disc pl-6">
                                    <li>Propósito y alcance.</li>
                                    <li>Requisitos funcionales y no funcionales.</li>
                                    <li>Interfaces, restricciones y validaciones.</li>
                                </ul>
                                <p className="font-medium mt-3">💡 Ejemplo:</p>
                                <p>
                                    En un sistema bancario, se documentan los requisitos de login
                                    seguro y gestión de transacciones con IEEE 830.
                                </p>
                                <p className="font-medium mt-3">✅ Ventajas:</p>
                                <ul className="list-disc pl-6">
                                    <li>Favorece la comunicación cliente-equipo técnico.</li>
                                    <li>Reduce ambigüedades en la planificación.</li>
                                </ul>
                            </>
                        ),
                    },
                    {
                        id: 3,
                        title: "⚙️ ISO/IEC 9126 — Calidad del Producto de Software",
                        link: "https://www.iso.org/standard/22749.html",
                        content: (
                            <>
                                <p>
                                    Introduce un modelo de calidad basado en seis características:
                                    funcionalidad, fiabilidad, usabilidad, eficiencia,
                                    mantenibilidad y portabilidad.
                                </p>
                                <p className="font-medium mt-3">💡 Ejemplo:</p>
                                <p>
                                    Evaluar una app educativa según su facilidad de uso y
                                    estabilidad entre plataformas.
                                </p>
                                <p className="font-medium mt-3">✅ Ventajas:</p>
                                <ul className="list-disc pl-6">
                                    <li>Base para el modelo ISO/IEC 25010.</li>
                                    <li>Facilita evaluaciones técnicas comparativas.</li>
                                </ul>
                            </>
                        ),
                    },
                    {
                        id: 4,
                        title: "📊 ISO/IEC 25010 — Modelo de Calidad Actualizado",
                        link: "https://iso25000.com/index.php/en/iso-25000-standards/iso-25010",
                        content: (
                            <>
                                <p>
                                    Actualiza ISO/IEC 9126 e introduce ocho características de
                                    calidad, considerando calidad interna, externa y en uso.
                                </p>
                                <ul className="list-disc pl-6 space-y-1">
                                    <li>Funcionalidad</li>
                                    <li>Fiabilidad</li>
                                    <li>Usabilidad</li>
                                    <li>Eficiencia</li>
                                    <li>Mantenibilidad</li>
                                    <li>Portabilidad</li>
                                    <li>Compatibilidad</li>
                                    <li>Seguridad</li>
                                </ul>
                            </>
                        ),
                    },
                    {
                        id: 5,
                        title: "🧩 IEEE 1012 — Verificación y Validación del Software",
                        link: "https://standards.ieee.org/standard/1012-2016.html",
                        content: (
                            <>
                                <p>
                                    Define un marco formal para garantizar que el software sea
                                    verificado y validado conforme a los requisitos y su uso
                                    previsto.
                                </p>
                                <p className="font-medium mt-3">💡 Ejemplo:</p>
                                <p>
                                    En el desarrollo de un sistema médico, se aplican prácticas de
                                    V&V del IEEE 1012 para cumplir con regulaciones.
                                </p>
                                <p className="font-medium mt-3">✅ Ventajas:</p>
                                <ul className="list-disc pl-6">
                                    <li>Asegura conformidad técnica y funcional.</li>
                                    <li>Ideal para software crítico o regulado.</li>
                                </ul>
                            </>
                        ),
                    },
                ].map(({ id, title, link, content }) => (
                    <div key={id} className="card mb-4 overflow-hidden">
                        <button
                            onClick={() => toggle(id)}
                            className="w-full text-left bg-primary/10 dark:bg-dark_primary/10 hover:bg-primary/20 dark:hover:bg-dark_primary/20 text-primary dark:text-dark_primary font-semibold px-4 py-3 flex justify-between items-center transition"
                        >
                            <span>{title}</span>
                            <span>{open === id ? "▲" : "▼"}</span>
                        </button>

                        {open === id && (
                            <div className="p-5 bg-bgSoft dark:bg-dark_bgSoft text-textDim dark:text-dark_textDim space-y-3 animate-fadeIn">
                                {content}
                                <a
                                    href={link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-primary dark:text-dark_primary hover:underline"
                                >
                                    🌐 Ver más información
                                </a>
                            </div>
                        )}
                    </div>
                ))}

                {/* === TABLA COMPARATIVA === */}
                <div className="mt-10 bg-bgSoft dark:bg-dark_bgSoft p-6 rounded-lg shadow-soft border border-border dark:border-dark_border">
                    <h2 className="text-2xl font-playfair font-semibold text-primary dark:text-dark_primary mb-4 text-center">
                        📊 Comparativa de Estándares de Calidad
                    </h2>

                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse text-sm text-left text-textDim dark:text-dark_textDim">
                            <thead>
                                <tr className="bg-primary/20 dark:bg-dark_primary/20 text-primary dark:text-dark_primary">
                                    <th className="border p-2">Estándar</th>
                                    <th className="border p-2">Propósito</th>
                                    <th className="border p-2">Tipo</th>
                                    <th className="border p-2">Aplicación</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="border p-2 font-medium text-text dark:text-dark_text">
                                        IEEE 829
                                    </td>
                                    <td className="border p-2">
                                        Estructurar la documentación de pruebas.
                                    </td>
                                    <td className="border p-2">Pruebas</td>
                                    <td className="border p-2">QA y validación</td>
                                </tr>
                                <tr className="bg-bg dark:bg-dark_bg">
                                    <td className="border p-2 font-medium text-text dark:text-dark_text">
                                        IEEE 830
                                    </td>
                                    <td className="border p-2">
                                        Definir requisitos funcionales del software.
                                    </td>
                                    <td className="border p-2">Análisis</td>
                                    <td className="border p-2">Diseño y planificación</td>
                                </tr>
                                <tr>
                                    <td className="border p-2 font-medium text-text dark:text-dark_text">
                                        ISO/IEC 9126
                                    </td>
                                    <td className="border p-2">
                                        Evaluar la calidad del producto software.
                                    </td>
                                    <td className="border p-2">Producto</td>
                                    <td className="border p-2">Evaluación técnica</td>
                                </tr>
                                <tr className="bg-bg dark:bg-dark_bg">
                                    <td className="border p-2 font-medium text-text dark:text-dark_text">
                                        ISO/IEC 25010
                                    </td>
                                    <td className="border p-2">
                                        Actualizar el modelo de calidad del software.
                                    </td>
                                    <td className="border p-2">Producto</td>
                                    <td className="border p-2">Evaluación integral</td>
                                </tr>
                                <tr>
                                    <td className="border p-2 font-medium text-text dark:text-dark_text">
                                        IEEE 1012
                                    </td>
                                    <td className="border p-2">
                                        Verificar y validar el cumplimiento del software.
                                    </td>
                                    <td className="border p-2">Proceso</td>
                                    <td className="border p-2">Proyectos críticos</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* === BOTÓN DE RETORNO === */}
                <div className="mt-8 flex justify-end">
                    <Link to="/" className="btn-ghost px-4 py-2 rounded-lg">
                        ← Volver al inicio
                    </Link>
                </div>
            </div>
        </div>
    );
}
