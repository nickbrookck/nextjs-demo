import Link from 'next/link';
import { Button } from 'primereact/button';
import "primereact/resources/themes/lara-light-indigo/theme.css";

export default function Home() {
  return (
    <main>


      <Link href="dashboard" data-testid="next-page-button">
        <Button label="Next page"/>
      </Link>

    </main>
  )
}
