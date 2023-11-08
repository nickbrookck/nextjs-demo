import Link from 'next/link';
import {Button} from 'primereact/button';
import "primereact/resources/themes/lara-light-indigo/theme.css";

export default function Dashboard() {
  return (
    <div>
      <h2>This is the next page</h2>

      <Link href=".." data-testid="back-button">
        <Button label="Go back">

        </Button>
      </Link>
    </div>
  )
}
