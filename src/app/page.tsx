import TableDesktop from "./components/TableDesktop";
import TableMobile from "./components/TableMobile";

export default function Home() {
  const desktopQuantity = [1, 2, 3, 4, 5, 6]
  const mobileQuantity = [1, 2, 3]
  return (
    <main>
      <TableDesktop quantity={desktopQuantity}/>
      <TableMobile quantity={mobileQuantity}/>
    </main>
  );
}
