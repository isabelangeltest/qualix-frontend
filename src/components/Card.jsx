function Card({ title, children, footer }) {
  return (
    <section className="card p-5">
      {title && (
        <h3 className="text-lg font-semibold text-text mb-2 font-playfair">
          {title}
        </h3>
      )}
      <div className="text-textDim">{children}</div>
      {footer && <div className="mt-3 pt-3 divider">{footer}</div>}
    </section>
  );
}

export default Card;
