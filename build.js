import { execSync } from "child_process";

console.log("🏗  Iniciando build manual con permisos...");

try {
    // Forzamos permisos y ejecutamos vite
    execSync("chmod +x node_modules/vite/bin/vite.js", { stdio: "inherit" });
    execSync("node node_modules/vite/bin/vite.js build", { stdio: "inherit" });
    console.log("✅ Build completado con éxito.");
} catch (error) {
    console.error("❌ Error durante el build:", error.message);
    process.exit(1);
}
