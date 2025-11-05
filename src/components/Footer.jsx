export default function Footer() {
  return (
    <footer className="pt-10 border-t border-border dark:bg-dark_bg">
      <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-textDim flex items-center justify-between">
        <span>© {new Date().getFullYear()} QualiX</span>
        <span>Desarrollado por Isabel</span>
      </div>
    </footer>
  );
}
