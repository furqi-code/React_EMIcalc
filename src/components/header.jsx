export function Header() {
  return (
    <div className="container p-3 d-flex">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoKDwib2DhWVLzvpNjliwwkA2FKOnKoMyUFw&s"
        alt=""
        style={{
          width: "75px",
          height: "50px",
          borderRadius: "11px",
        }}
      />
      <div className="px-3">
        <h2>EMI Calculator</h2>
      </div>
    </div>
  );
}
