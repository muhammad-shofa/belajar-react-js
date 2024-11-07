export default function TeknologiYangDipelajari() {
  const teknologiYangDipelajari = [
    "HTML",
    "CSS",
    "Bootstrap",
    "Javascript",
    "React JS",
    "Vite",
    "PHP",
    "MySql",
  ];
  return (
    <div>
      <h3>Teknologi Yang dipelajari</h3>
      <ul>
        {teknologiYangDipelajari.map((teknologi) => (
          <li key={teknologi}>{teknologi}</li>
        ))}
      </ul>
    </div>
  );
}
