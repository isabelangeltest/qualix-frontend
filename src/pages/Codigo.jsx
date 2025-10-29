import { useState } from "react";
import { Link } from "react-router-dom";

export default function Codigo() {
    const [open, setOpen] = useState(null);
    const toggle = (index) => setOpen(open === index ? null : index);

    return (
        <div className="p-8 bg-bg dark:bg-dark_bg min-h-screen text-text dark:text-dark_text transition-colors duration-300">
            <div className="max-w-5xl mx-auto">
                <h1 className="text-3xl font-playfair font-bold text-primary dark:text-dark_primary mb-6">
                    Estándares de Programación y Calidad del Código
                </h1>

                <p className="mb-8 text-lg text-textDim dark:text-dark_textDim">
                    Los <strong>estándares de programación</strong> definen buenas prácticas
                    para escribir código fuente limpio, mantenible y seguro. Su cumplimiento
                    mejora la colaboración, revisión y sostenibilidad del software, reflejando
                    directamente la calidad del proceso de desarrollo.
                </p>

                {/* === INFOGRAFÍA === */}
                <div className="flex justify-center mb-10">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 250" className="w-full max-w-4xl">
                        <rect x="0" y="0" width="800" height="250" rx="15" fill="#F8FAFC" className="dark:fill-[#1E293B]" />

                        <text
                            x="30"
                            y="50"
                            fontSize="22"
                            className="fill-current text-primary dark:text-dark_primary"
                            fontWeight="700"
                        >
                            Ciclo de Calidad del Código
                        </text>

                        <g fontSize="14" fill="#1E293B" className="dark:fill-gray-300">
                            <text x="60" y="100">1️⃣ Codificación según estándares</text>
                            <text x="60" y="130">2️⃣ Revisión por pares</text>
                            <text x="60" y="160">3️⃣ Análisis estático (SonarQube, Lint, etc.)</text>
                            <text x="60" y="190">4️⃣ Pruebas y refactorización</text>
                            <text x="60" y="220">5️⃣ Liberación y mantenimiento</text>
                        </g>
                    </svg>
                </div>

                {/* === SECCIONES === */}
                {[
                    {
                        id: 1,
                        title: "🧹 Principios de Código Limpio (Clean Code)",
                        content: (
                            <>
                                <p>
                                    Basados en <strong>Robert C. Martin</strong>, los principios de{" "}
                                    <em>Clean Code</em> promueven un código claro, legible y fácil
                                    de mantener.
                                </p>
                                <ul className="list-disc pl-6 space-y-1">
                                    <li>Nombres descriptivos y consistentes.</li>
                                    <li>Funciones pequeñas y específicas.</li>
                                    <li>Evitar duplicación de lógica.</li>
                                    <li>Separar responsabilidades entre módulos.</li>
                                </ul>
                                <p className="font-medium mt-3">💡 Ejemplo:</p>
                                <p>
                                    Un módulo extenso se refactoriza dividiéndolo en funciones más
                                    pequeñas y comprensibles, mejorando mantenibilidad y cobertura
                                    de pruebas.
                                </p>
                            </>
                        ),
                    },
                    {
                        id: 2,
                        title: "🏗️ Estándares en Programación Orientada a Objetos (OOP)",
                        content: (
                            <>
                                <p>
                                    La <strong>Programación Orientada a Objetos</strong> busca
                                    modularidad, reutilización y claridad mediante los principios{" "}
                                    <strong>SOLID</strong>:
                                </p>
                                <ul className="list-disc pl-6 space-y-1">
                                    <li><strong>S:</strong> Responsabilidad única.</li>
                                    <li><strong>O:</strong> Abierto/Cerrado (extensible sin modificar).</li>
                                    <li><strong>L:</strong> Sustitución de Liskov.</li>
                                    <li><strong>I:</strong> Segregación de interfaces.</li>
                                    <li><strong>D:</strong> Inversión de dependencias.</li>
                                </ul>
                                <p className="mt-2">
                                    Estos principios mejoran la escalabilidad y la mantenibilidad
                                    del software.
                                </p>
                            </>
                        ),
                    },
                    {
                        id: 3,
                        title: "🧠 Evaluación Estática del Código",
                        content: (
                            <>
                                <p>
                                    La <strong>evaluación estática</strong> analiza el código sin
                                    ejecutarlo para detectar errores, vulnerabilidades y violaciones
                                    de estilo.
                                </p>
                                <ul className="list-disc pl-6 space-y-1">
                                    <li><strong>SonarQube:</strong> detecta deuda técnica y errores.</li>
                                    <li><strong>PMD:</strong> analiza malas prácticas en Java.</li>
                                    <li><strong>ESLint:</strong> verifica estilo en JS/React.</li>
                                </ul>
                                <p className="italic text-sm text-textDim dark:text-dark_textDim">
                                    Ejemplo: en CI/CD, SonarQube reporta complejidad alta, motivando
                                    refactorización antes del despliegue.
                                </p>
                            </>
                        ),
                    },
                    {
                        id: 4,
                        title: "⚖️ Comparación: Programación Estructurada vs OOP",
                        content: (
                            <div className="overflow-x-auto">
                                <table className="w-full border-collapse text-sm text-left">
                                    <thead>
                                        <tr className="bg-primary/20 dark:bg-dark_primary/20 text-primary dark:text-dark_primary">
                                            <th className="border p-2">Aspecto</th>
                                            <th className="border p-2">Estructurada</th>
                                            <th className="border p-2">OOP</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="border p-2">Organización</td>
                                            <td className="border p-2">Funciones y bloques</td>
                                            <td className="border p-2">Clases y objetos</td>
                                        </tr>
                                        <tr className="bg-bg dark:bg-dark_bg">
                                            <td className="border p-2">Reutilización</td>
                                            <td className="border p-2">Baja</td>
                                            <td className="border p-2">Alta</td>
                                        </tr>
                                        <tr>
                                            <td className="border p-2">Escalabilidad</td>
                                            <td className="border p-2">Limitada</td>
                                            <td className="border p-2">Alta</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        ),
                    },
                ].map(({ id, title, content }) => (
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
                            </div>
                        )}
                    </div>
                ))}

                {/* === HERRAMIENTAS === */}
                <div className="mt-10 bg-bgSoft dark:bg-dark_bgSoft p-6 rounded-lg shadow-soft border border-border dark:border-dark_border">
                    <h2 className="text-2xl font-playfair font-semibold text-primary dark:text-dark_primary mb-4 text-center">
                        🧰 Herramientas para Estándares de Código
                    </h2>

                    <table className="w-full border-collapse text-sm text-left text-textDim dark:text-dark_textDim">
                        <thead>
                            <tr className="bg-primary/20 dark:bg-dark_primary/20 text-primary dark:text-dark_primary">
                                <th className="border p-2">Herramienta</th>
                                <th className="border p-2">Propósito</th>
                                <th className="border p-2">Lenguajes</th>
                                <th className="border p-2">Enlace</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                {
                                    name: "SonarQube",
                                    purpose: "Análisis estático, vulnerabilidades y deuda técnica.",
                                    langs: "Java, JS, Python, C#...",
                                    link: "https://www.sonarqube.org/",
                                },
                                {
                                    name: "ESLint",
                                    purpose: "Verificación de estilo en JavaScript/React.",
                                    langs: "JS, TS",
                                    link: "https://eslint.org/",
                                },
                                {
                                    name: "Prettier",
                                    purpose: "Formateo automático del código.",
                                    langs: "JS, HTML, CSS, JSON",
                                    link: "https://prettier.io/",
                                },
                                {
                                    name: "PMD",
                                    purpose: "Análisis de errores y malas prácticas en Java.",
                                    langs: "Java",
                                    link: "https://pmd.github.io/",
                                },
                            ].map(({ name, purpose, langs, link }) => (
                                <tr key={name} className="border-b border-border dark:border-dark_border">
                                    <td className="border p-2 font-medium text-text dark:text-dark_text">
                                        {name}
                                    </td>
                                    <td className="border p-2">{purpose}</td>
                                    <td className="border p-2">{langs}</td>
                                    <td className="border p-2">
                                        <a href={link} className="text-primary dark:text-dark_primary hover:underline" target="_blank" rel="noreferrer">
                                            {link.replace("https://", "").replace("www.", "")}
                                        </a>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* === CONCLUSIÓN === */}
                <div className="mt-10 bg-bgSoft dark:bg-dark_bgSoft p-6 rounded-lg shadow-soft border border-border dark:border-dark_border">
                    <h2 className="text-2xl font-playfair font-semibold text-primary dark:text-dark_primary mb-4 text-center">
                        🧩 Conclusión
                    </h2>
                    <p className="text-textDim dark:text-dark_textDim">
                        Los estándares de programación, el análisis estático y los principios
                        de código limpio garantizan software más confiable y mantenible. Su
                        integración en el ciclo de desarrollo impulsa la eficiencia, la calidad
                        y la colaboración técnica dentro de los equipos.
                    </p>
                </div>

                {/* === BOTÓN RETORNO === */}
                <div className="mt-8 flex justify-end">
                    <Link to="/" className="btn-ghost px-4 py-2 rounded-lg">
                        ← Volver al inicio
                    </Link>
                </div>
            </div>
        </div>
    );
}
