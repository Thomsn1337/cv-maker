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
