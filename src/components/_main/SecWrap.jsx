export default function SecWrap({ title, children }) {
  return (
    <section className="secWrap">
      <h2 className="secTitle">
        {title}
      </h2>
      {children}
    </section>
  );
}
