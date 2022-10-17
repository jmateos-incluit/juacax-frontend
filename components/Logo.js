export default function Logo({ size = "50px" }) {
  return (
    <>
      <p className="logo" style={{ "--my-css-var": size }}>
        <span className="corchetes">{"{"}</span>
        <span className="juacax">juacax</span>
        <span className="Dev">Dev</span>
        <span className="corchetes">{"}"}</span>
      </p>
    </>
  );
}
