export default function Footer() {
  return (
    <footer className="mt-10 border-t border-border">
      <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-textDim flex items-center justify-between">
        <span>© {new Date().getFullYear()} QualiX</span>
        <span>Desarrollado por Isabel</span>
      </div>
    </footer>
  );
}
