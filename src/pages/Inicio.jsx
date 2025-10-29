import { Link } from "react-router-dom";
import {
    FaBook,
    FaCogs,
    FaBalanceScale,
    FaCode,
    FaFlask,
    FaCheckCircle,
    FaStar,
} from "react-icons/fa";

export default function Inicio() {
    const modulos = [
        {
            title: "Normas",
            icon: <FaBook className="text-primary dark:text-dark_primary text-4xl" />,
            desc: "Conoce los principales estándares que garantizan la calidad del software y su cumplimiento.",
            link: "/normas",
        },
        {
            title: "Modelos",
            icon: <FaCogs className="text-primary dark:text-dark_primary text-4xl" />,
            desc: "Explora los modelos más utilizados para la gestión y mejora de la calidad en proyectos de software.",
            link: "/modelos",
        },
        {
            title: "Estándares",
            icon: <FaBalanceScale className="text-primary dark:text-dark_primary text-4xl" />,
            desc: "Aprende los criterios que aseguran el cumplimiento de normas internacionales de calidad.",
            link: "/estandares",
        },
        {
            title: "Código",
            icon: <FaCode className="text-primary dark:text-dark_primary text-4xl" />,
            desc: "Desarrolla buenas prácticas de programación aplicando principios de legibilidad y mantenibilidad.",
            link: "/codigo",
        },
        {
            title: "Pruebas",
            icon: <FaFlask className="text-primary dark:text-dark_primary text-4xl" />,
            desc: "Descubre cómo las pruebas garantizan la funcionalidad, rendimiento y confiabilidad del software.",
            link: "/pruebas",
        },
        {
            title: "Evaluación Web",
            icon: <FaCheckCircle className="text-primary dark:text-dark_primary text-4xl" />,
            desc: "Evalúa sitios web mediante métricas automáticas y análisis pedagógico visual.",
            link: "/evaluacionWeb",
        },
        {
            title: "Conclusiones",
            icon: <FaStar className="text-primary dark:text-dark_primary text-4xl" />,
            desc: "Reflexiona sobre los resultados y la importancia de aplicar calidad en el desarrollo de software.",
            link: "/conclusiones",
        },
    ];

    return (
        <main className="bg-bg dark:bg-dark_bg text-text dark:text-dark_text min-h-screen">
            {/* === HERO === */}
            <section className="relative bg-gradient-to-b from-bgSoft dark:from-dark_bgSoft to-bg dark:to-dark_bg py-24 text-center overflow-hidden transition-colors duration-300">
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

                <div className="relative z-10 max-w-3xl mx-auto px-6 animate-fadeIn">
                    <div className="flex flex-col items-center justify-center mb-6">
                        <div className="h-16 w-16 rounded-full bg-primary dark:bg-dark_primary flex items-center justify-center text-bg dark:text-dark_bg text-2xl font-bold shadow-lg">
                            Q
                        </div>
                    </div>

                    <h1 className="text-5xl md:text-6xl font-playfair font-semibold mb-4 text-primary dark:text-dark_primary">
                        QualiX
                    </h1>
                    <p className="text-textDim dark:text-dark_textDim text-lg md:text-xl mb-8 leading-relaxed">
                        Evalúa, mejora y comprende la{" "}
                        <span className="text-primary dark:text-dark_primary font-semibold">
                            calidad del software
                        </span>{" "}
                        desde la teoría hasta la práctica.
                    </p>
                    <Link
                        to="/evaluacionWeb"
                        className="btn-primary px-8 py-3 text-lg rounded-xl shadow-soft"
                    >
                        Empezar Evaluación
                    </Link>
                </div>
            </section>

            {/* === MÓDULOS === */}
            <section className="max-w-6xl mx-auto px-6 py-20">
                <h2 className="text-3xl font-playfair mb-10 text-center text-primary dark:text-dark_primary">
                    Explora los módulos de aprendizaje
                </h2>

                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {modulos.map(({ title, icon, desc, link }) => (
                        <div
                            key={title}
                            className="card p-6 flex flex-col items-center text-center hover:scale-[1.02] hover:shadow-[0_6px_16px_rgba(56,189,248,0.25)] dark:hover:shadow-[0_6px_16px_rgba(56,189,248,0.3)] transition-all duration-200"
                        >
                            {icon}
                            <h3 className="text-xl font-semibold mt-4 text-text dark:text-dark_text">
                                {title}
                            </h3>
                            <p className="text-textDim dark:text-dark_textDim text-sm mt-2 mb-4">
                                {desc}
                            </p>
                            <Link
                                to={link}
                                className="btn-primary text-sm px-6 py-2 rounded-lg"
                            >
                                Explorar
                            </Link>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}
