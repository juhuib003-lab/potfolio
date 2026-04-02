export default function Navbar() {
  return (
        <nav style={{
        position: "fixed",
        top: 0,
        width: "100%",
        display: "flex",
        justifyContent: "center",
        gap: "30px",
        padding: "15px",
        background: "rgba(255,255,255,0.8)",
        backdropFilter: "blur(10px)"
        }}>
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#skills">Skills</a>
      <a href="#projects">Projects</a>
      <a href="#contact">Contact</a>
    </nav>
  );
}