import Link from 'next/link';
import {Button} from 'primereact/button';
import "primereact/resources/themes/lara-light-indigo/theme.css";
import { InputText } from 'primereact/inputtext';
import { Panel } from 'primereact/panel';


export default function Dashboard() {
  return (
    <div>
      <h2>This is the next page</h2>

      <Panel header="Stuff" className="m-1">

        <InputText placeholder="Search" data-testid="search-box"/>

        <Link href=".." data-testid="back-button">
          <Button label="Go back">

          </Button>
        </Link>
      </Panel>

    </div>
  )
}
