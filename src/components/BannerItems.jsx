const BannerItems = ({ title, content }) => (
  <div>
    <h3 style={{ fontFamily: "Inter-Bold" }}>{title}</h3>
    <p
      style={{
        fontFamily: "Inter-Regular",
        color: "var(--grayish-blue)",
        fontSize: "15px",
      }}
    >
      {content}
    </p>
  </div>
);

export default BannerItems;
