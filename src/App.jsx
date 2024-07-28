import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";

import exampleData from "./exampleData";

import { useState } from "react";
import CVViewer from "@components/CVViewer";

import "@styles/globals.css";

export default function App() {
    const [data, setData] = useState(exampleData);
    return (
        <>
            <CVViewer data={data} />
        </>
    );
}

library.add(fab, fas, far);
